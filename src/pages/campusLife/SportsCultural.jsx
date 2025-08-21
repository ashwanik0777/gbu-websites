import React, { useState, useEffect } from "react";
import axios from "axios";
import HeroBanner from "../../components/HeroBanner";
import SearchableWrapper from "../../components/Searchbar/SearchableWrapper";
// Carousel Components
const Carousel = ({ className = "", children }) => (
  <div className={`relative ${className}`}>{children}</div>
);

const CarouselContent = ({ className = "", children }) => (
  <div className={`flex overflow-x-auto scrollbar-hide ${className}`}>
    {children}
  </div>
);

const CarouselItem = ({ className = "", children }) => (
  <div className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-2 ${className}`}>
    {children}
  </div>
);

const CarouselPrevious = ({ onClick }) => (
  <button
    type="button"
    aria-label="Previous"
    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-green-600 hover:text-white text-green-600 rounded-full shadow p-2 transition-all"
    onClick={() => {
      const container = document.querySelector(".overflow-x-auto");
      if (container)
        container.scrollBy({
          left: -container.offsetWidth,
          behavior: "smooth",
        });
      if (onClick) onClick();
    }}
  >
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  </button>
);

const CarouselNext = ({ onClick }) => (
  <button
    type="button"
    aria-label="Next"
    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-green-600 hover:text-white text-green-600 rounded-full shadow p-2 transition-all"
    onClick={() => {
      const container = document.querySelector(".overflow-x-auto");
      if (container)
        container.scrollBy({ left: container.offsetWidth, behavior: "smooth" });
      if (onClick) onClick();
    }}
  >
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  </button>
);

// Dialog Components
const Dialog = ({ open, onOpenChange, children }) => {
  React.useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onOpenChange}
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

const DialogContent = ({ className = "", children }) => (
  <div className={`bg-white rounded-lg shadow-xl p-6 ${className}`}>
    {children}
  </div>
);

const DialogHeader = ({ children }) => <div className="mb-4">{children}</div>;

const DialogTitle = ({ className = "", children }) => (
  <h2 className={`font-bold text-xl ${className}`}>{children}</h2>
);

const Card = ({ className = "", children, ...props }) => (
  <div
    className={`rounded-lg border-gray-300 bg-white text-black shadow-sm ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardContent = ({ className = "", children, ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

const SportsWellness = () => {
  const [sportsFacilities, setSportsFacilities] = useState([]);
  const [selectedFacility, setSelectedFacility] = useState(null);

  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        const res = await axios.get(
          "https://meow.tilchattaas.com/campuslife/sport-facilities/"
        );
        const transformed = res.data.map((item) => ({
          id: item.id,
          icon: item.name.split(" ")[0],
          title: item.name.slice(2).trim(),
          image: item.image,
          type: item.facility_type,
          location: item.location,
          capacity: item.capacity,
          access: item.access,
          timings: item.timings,
          contact: item.contact,
          bookingInfo: item.booking,
          description: item.description,
        }));
        setSportsFacilities(transformed);
      } catch (error) {
        console.error("Error fetching sports facilities:", error);
      }
    };

    fetchFacilities();
  }, []);

  const handleFacilityClick = (facility) => {
    setSelectedFacility(facility);
  };

  return (
    <SearchableWrapper>
    <section id="sports-wellness" className=" bg-white">
        <HeroBanner
          title="Sports and Wellness Facilities"
          subtitle="Discover our world-class sports facilities designed for excellence in athletics and wellness."
          bgTheme={10}
        />
      <div className="container mx-auto px-4">
      
        <div className="max-w-7xl mx-auto  m-10">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {sportsFacilities.map((facility) => (
                <CarouselItem
                  key={facility.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card
                    className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden h-full"
                    onClick={() => handleFacilityClick(facility)}
                  >
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={facility.image}
                          alt={facility.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute top-4 left-4 text-4xl">
                          {facility.icon}
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="text-lg font-bold mb-1">
                            {facility.title}
                          </h3>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="font-medium text-gray-600">
                              Location:
                            </span>
                            <span className="text-gray-800">
                              {facility.location}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium text-gray-600">
                              Capacity:
                            </span>
                            <span className="text-gray-800">
                              {facility.capacity}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium text-gray-600">
                              Timings:
                            </span>
                            <span className="text-gray-800">
                              {facility.timings}
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 text-center">
                          <span className="text-green-600 text-sm font-medium hover:text-green-700">
                            Click for more details →
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {selectedFacility && (
          <Dialog
            open={!!selectedFacility}
            onOpenChange={() => setSelectedFacility(null)}
          >
            <DialogContent className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                  <span className="text-3xl">{selectedFacility.icon}</span>
                  {selectedFacility.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <img
                  src={selectedFacility.image}
                  alt={selectedFacility.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Facility Details
                    </h3>
                    <div className="space-y-2">
                      <div>
                        <span className="font-medium">Type:</span>{" "}
                        {selectedFacility.type}
                      </div>
                      <div>
                        <span className="font-medium">Location:</span>{" "}
                        {selectedFacility.location}
                      </div>
                      <div>
                        <span className="font-medium">Capacity:</span>{" "}
                        {selectedFacility.capacity}
                      </div>
                      <div>
                        <span className="font-medium">Access:</span>{" "}
                        {selectedFacility.access}
                      </div>
                      <div>
                        <span className="font-medium">Timings:</span>{" "}
                        {selectedFacility.timings}
                      </div>
                      <div>
                        <span className="font-medium">Contact:</span>{" "}
                        {selectedFacility.contact}
                      </div>
                      <div>
                        <span className="font-medium">Booking:</span>{" "}
                        {selectedFacility.bookingInfo}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Description
                    </h3>
                    <p className="text-gray-600">
                      {selectedFacility.description}
                    </p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
    </SearchableWrapper>
  );
};

export default SportsWellness;
