import * as React from "react";
import { X, User, Calendar, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ImageCarousel from "./ImageCarousel";
import FacilityAccordion from "./FacilityAccordion";
import PricingTable from "./PricingTable";
import DownloadablePdfs from "./DownloadablePdfs";

function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

// --- ✅ Dialog with framer-motion ---
const DialogContext = React.createContext();

const Dialog = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  );
};

const DialogTrigger = ({ children }) => {
  const { setOpen } = React.useContext(DialogContext);
  return React.cloneElement(children, {
    onClick: () => setOpen(true),
  });
};

const DialogPortal = ({ children }) => children;

const DialogOverlay = ({ className, ...props }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className={cn("fixed inset-0 z-50 bg-black/70 backdrop-blur-sm", className)}
    {...props}
  />
);

const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => {
  const { open, setOpen } = React.useContext(DialogContext);
  return (
    <AnimatePresence>
      {open && (
        <DialogPortal>
          <DialogOverlay />
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className={cn(
              "fixed left-1/2 top-1/2 z-[999] w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-white p-8 shadow-2xl rounded-2xl overflow-y-auto max-h-[90vh]",
              className
            )}
            {...props}
          >
            {children}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 rounded-full p-1.5 text-gray-600 hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        </DialogPortal>
      )}
    </AnimatePresence>
  );
});
DialogContent.displayName = "DialogContent";

const DialogHeader = ({ className, ...props }) => (
  <div className={cn("flex flex-col gap-2", className)} {...props} />
);

const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("text-2xl font-bold text-blue-700", className)}
    {...props}
  />
));
DialogTitle.displayName = "DialogTitle";

// --- ✅ Card ---
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <motion.div
    ref={ref}
    whileHover={{ y: -2, boxShadow: "0 12px 30px rgba(0,0,0,0.1)" }}
    className={cn(
      "flex flex-col justify-between rounded-2xl bg-white text-black transition overflow-hidden shadow-md",
      className
    )}
    {...props}
  />
));

const CardHeader = ({ className, ...props }) => (
  <div className={cn("relative w-full aspect-video overflow-hidden", className)} {...props} />
);

const CardTitle = ({ className, ...props }) => (
  <h3 className={cn("text-xl mb-2 font-semibold text-blue-800", className)} {...props} />
);

const CardContent = ({ className, ...props }) => (
  <div className={cn("flex-1 p-6 pt-4", className)} {...props} />
);

const CardFooter = ({ className, ...props }) => (
  <div className={cn("flex flex-col gap-3 p-6 pt-0", className)} {...props} />
);

// --- ✅ Badge ---
const badgeVariants = {
  default:
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-blue-600 text-white shadow",
  secondary:
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-gray-200 text-gray-800",
  outline:
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border border-blue-600 text-blue-600",
};

const Badge = ({ variant = "default", className, ...props }) => (
  <div className={cn(badgeVariants[variant], "transition hover:shadow-sm", className)} {...props} />
);

// --- ✅ FacilityCard ---
const FacilityCard = ({ facility, onBook, userRole = "outsider" }) => {
  const [isZoomOpen, setZoomOpen] = React.useState(false);

  const getCapacityLabel = () =>
    facility.type === "guesthouse" || facility.type === "accommodation"
      ? "guests"
      : "seats";

  const getFacilityTypeLabel = () => {
    switch (facility.type) {
      case "guesthouse":
      case "accommodation":
        return "Guest House";
      case "dining":
        return "Dining";
      case "sports":
        return "Sports";
      case "auditorium":
        return "Auditorium";
      case "conference":
        return "Conference";
      default:
        return facility.type.charAt(0).toUpperCase() + facility.type.slice(1);
    }
  };

  return (
    <Card>
      <CardHeader>
        <ImageCarousel
          images={facility.images}
          facilityName={facility.name}
          autoPlay
          showDots
        />

        <Badge className="absolute top-4 right-4 shadow-lg">
          {getFacilityTypeLabel()}
        </Badge>

        {facility.roomCount && (
          <Badge className="absolute top-4 left-4 bg-green-600 text-white shadow-md">
            {facility.roomCount} rooms
          </Badge>
        )}

        <AnimatePresence>
          {isZoomOpen && (
            <DialogPortal>
              <DialogOverlay onClick={() => setZoomOpen(false)} />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="fixed left-1/2 top-1/2 z-[999] w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl overflow-hidden shadow-2xl"
              >
                <ImageCarousel
                  images={facility.images}
                  facilityName={facility.name}
                  autoPlay={false}
                  showDots
                />
                <button
                  onClick={() => setZoomOpen(false)}
                  className="absolute right-5 top-5 rounded-full p-1.5 text-gray-700 bg-white shadow hover:bg-gray-100"
                >
                  <X className="h-5 w-5" />
                </button>
              </motion.div>
            </DialogPortal>
          )}
        </AnimatePresence>
      </CardHeader>

      <CardContent>
        <CardTitle>{facility.name}</CardTitle>

        <div className="flex items-center gap-4 mb-4 text-gray-600">
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span className="text-sm">
              {facility.capacity} {getCapacityLabel()}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">Available</span>
          </div>
        </div>

        <p className="text-gray-700 mb-4 text-sm leading-relaxed">
          {facility.description}
        </p>

        {facility.inCharge && (
          <div className="mb-4 p-4 bg-gray-50 rounded-xl shadow-inner">
            <h4 className="font-medium text-blue-700 mb-2">In-Charge Contact</h4>
            <div className="space-y-1 text-sm">
              <div className="font-medium">{facility.inCharge.name}</div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{facility.inCharge.contact}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{facility.inCharge.email}</span>
              </div>
            </div>
          </div>
        )}

        <PricingTable {...facility} userRole={userRole} />

        {facility.downloadablePdfs && (
          <DownloadablePdfs pdfs={facility.downloadablePdfs} />
        )}

        <FacilityAccordion {...facility} />
      </CardContent>

      <CardFooter>
        <button
          onClick={() => onBook(facility.id)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-4 py-3 shadow transition"
        >
          Book Now
        </button>

        <Dialog>
          <DialogTrigger>
            <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg px-4 py-3 transition">
              View More Info
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{facility.name} - Detailed Info</DialogTitle>
            </DialogHeader>

            <div className="space-y-6">
              <ImageCarousel
                images={facility.images}
                facilityName={facility.name}
                autoPlay={false}
                showDots
              />

              <PricingTable {...facility} userRole={userRole} />

              {facility.downloadablePdfs && (
                <DownloadablePdfs pdfs={facility.downloadablePdfs} />
              )}

              <FacilityAccordion {...facility} />
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default FacilityCard;
