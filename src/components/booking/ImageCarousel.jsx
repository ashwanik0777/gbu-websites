import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ZoomIn, X } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

// Utility
const cn = (...classes) => classes.filter(Boolean).join(" ");

// ✅ Basic UI
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
    {...props}
  />
));
Card.displayName = "Card";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-0 relative", className)} {...props} />
));
CardContent.displayName = "CardContent";

const Button = React.forwardRef(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
      "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50",
      className
    )}
    {...props}
  />
));
Button.displayName = "Button";

// ✅ Dialog
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;

const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-1/2 top-1/2 z-50 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-background p-6 shadow-lg sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4">
        <X className="h-4 w-4" />
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

// ✅ Carousel context
const CarouselContext = React.createContext(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) throw new Error("useCarousel must be used within <Carousel />");
  return context;
}

// ✅ Carousel
const Carousel = React.forwardRef(({ opts, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(opts, plugins);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onSelect = React.useCallback((api) => {
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => api.off("select", onSelect);
  }, [api, onSelect]);

  const scrollPrev = () => api && api.scrollPrev();
  const scrollNext = () => api && api.scrollNext();
  const scrollTo = (index) => api && api.scrollTo(index);

  return (
    <CarouselContext.Provider
      value={{ carouselRef, api, scrollPrev, scrollNext, canScrollPrev, canScrollNext, scrollTo, selectedIndex }}
    >
      <div ref={ref} className={cn("relative", className)} {...props}>
        {children}
      </div>
    </CarouselContext.Provider>
  );
});
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef } = useCarousel();
  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div ref={ref} className={cn("flex -ml-4", className)} {...props} />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="group"
    aria-roledescription="slide"
    className={cn("min-w-0 shrink-0 grow-0 basis-full pl-4", className)}
    {...props}
  />
));
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef(({ className, ...props }, ref) => {
  const { scrollPrev, canScrollPrev } = useCarousel();
  return (
    <Button
      ref={ref}
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      className={cn(
        "absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white",
        className
      )}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
    </Button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef(({ className, ...props }, ref) => {
  const { scrollNext, canScrollNext } = useCarousel();
  return (
    <Button
      ref={ref}
      onClick={scrollNext}
      disabled={!canScrollNext}
      className={cn(
        "absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white",
        className
      )}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
    </Button>
  );
});
CarouselNext.displayName = "CarouselNext";

// ✅ Dots inside Carousel provider
const CarouselDots = ({ count }) => {
  const { scrollTo, selectedIndex } = useCarousel();
  return (
    <div className="flex justify-center mt-2 space-x-2">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          onClick={() => scrollTo(index)}
          className={cn(
            "w-2 h-2 rounded-full",
            index === selectedIndex ? "bg-blue-600" : "bg-gray-300"
          )}
        />
      ))}
    </div>
  );
};

// ✅ ImageCarousel with proper dots
function ImageCarousel({ images, facilityName }) {
  if (!images || images.length === 0) {
    return (
      <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
        <span className="text-gray-500">No images available</span>
      </div>
    );
  }

  return (
    <div className="relative">
      <Carousel>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card className="w-full">
                <CardContent>
                  <div className="relative w-full h-48 overflow-hidden rounded-lg">
                    <img
                      src={image}
                      alt={`${facilityName} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="absolute z-10 bottom-2 right-2 bg-black hover:bg-black/70 text-white">
                          <ZoomIn className="h-6 w-6" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <img
                          src={image}
                          alt={`${facilityName} - Image ${index + 1}`}
                          className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {images.length > 1 && (
          <>
            <CarouselPrevious />
            <CarouselNext />
            <CarouselDots count={images.length} />
          </>
        )}
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
