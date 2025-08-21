import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useToast } from '../../hooks/use-toast';
import SearchableWrapper from '../../components/Searchbar/SearchableWrapper';

// === Minimal UI elements ===
const Button = ({ children, className = '', ...props }) => (
  <button className={`px-4 py-2 rounded-md font-medium ${className}`} {...props}>
    {children}
  </button>
);

const Input = ({ className = '', ...props }) => (
  <input className={`w-full p-2 border rounded-md ${className}`} {...props} />
);

const Textarea = ({ className = '', ...props }) => (
  <textarea className={`w-full p-2 border rounded-md ${className}`} {...props} />
);

const Label = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="block mb-1 text-sm font-medium text-gray-700">
    {children}
  </label>
);

const Card = ({ children, className = '', ...props }) => (
  <div className={`rounded-lg border-gray-300 bg-white shadow-sm ${className}`} {...props}>
    {children}
  </div>
);

const CardContent = ({ children, className = '', ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

// === Custom Dialog ===
const Dialog = ({ open, onOpenChange, children }) => {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={() => onOpenChange(false)}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

const DialogContent = ({ className = '', children }) => (
  <div className={`bg-white rounded-lg shadow-xl p-6 ${className}`}>{children}</div>
);

const DialogHeader = ({ children }) => <div className="mb-4">{children}</div>;
const DialogTitle = ({ children, className = '' }) => (
  <h2 className={`text-lg font-bold ${className}`}>{children}</h2>
);

// === Booking Modal ===
const HostelBookingModal = ({ isOpen, onClose, hostel, onSubmit }) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="max-w-md bg-white">
      <DialogHeader>
        <DialogTitle>Book Room - {hostel?.name}</DialogTitle>
      </DialogHeader>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <Label htmlFor="studentName">Full Name *</Label>
          <Input id="studentName" name="studentName" required placeholder="Enter your full name" />
        </div>
        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input id="email" name="email" type="email" required placeholder="your.email@example.com" />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input id="phone" name="phone" required placeholder="+91 XXXXX XXXXX" />
        </div>
        <div>
          <Label htmlFor="roomType">Room Type *</Label>
          <select id="roomType" name="roomType" required className="w-full p-2 border rounded-md">
            <option value="">Select room type</option>
            <option value="single">Single Room</option>
            <option value="double">Double Sharing</option>
            <option value="triple">Triple Sharing</option>
          </select>
        </div>
        <div>
          <Label htmlFor="duration">Duration *</Label>
          <select id="duration" name="duration" required className="w-full p-2 border rounded-md">
            <option value="">Select duration</option>
            <option value="semester">One Semester</option>
            <option value="year">One Academic Year</option>
            <option value="custom">Custom Duration</option>
          </select>
        </div>
        <div>
          <Label htmlFor="specialRequests">Special Requests</Label>
          <Textarea id="specialRequests" name="specialRequests" placeholder="Any special requirements or preferences..." />
        </div>
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
          Submit Booking Request
        </Button>
      </form>
    </DialogContent>
  </Dialog>
);

// === Hostel Cards ===
const HostelCarousel = ({ hostels, currentHostel, onHostelClick }) => (
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
      {hostels.map((hostel, index) => (
        <Card
          key={index}
          className={`cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
            currentHostel === index ? 'ring-4 ring-blue-500 ring-opacity-50' : ''
          }`}
          onClick={() => onHostelClick(index)}
        >
          <CardContent className="p-0">
            <div className="relative overflow-hidden">
              <img
                src={hostel.image}
                alt={hostel.name}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-bold">{hostel.name}</h3>
                <p className="text-sm opacity-90">{hostel.capacity}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

// === Hostel Details Card ===
const HostelDetails = ({ hostel, onViewDetails, onBookRoom }) => (
  <div className="mt-12">
    <Card className="overflow-hidden shadow-2xl">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative">
            <img
              src={hostel.image}
              alt={hostel.name}
              className="w-full h-64 lg:h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent" />
          </div>
          <div className="p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{hostel.name}</h3>
            <p className="text-gray-600 mb-6 text-lg">{hostel.description}</p>
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Amenities</h4>
              <div className="grid grid-cols-2 gap-2">
                {hostel.amenities.map((a, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-gray-700">{a}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex space-x-4">
              <Button
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => onViewDetails(hostel)}
              >
                View Details
              </Button>
              <Button
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={() => onBookRoom(hostel)}
              >
                Book Room
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

// === Main Component ===
const HostelLife = () => {
  const [hostels, setHostels] = useState([]);
  const [currentHostel, setCurrentHostel] = useState(0);
  const [selectedHostelDetails, setSelectedHostelDetails] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { toast } = useToast();

  const BASE = import.meta.env.VITE_HOST?.replace(/\/$/, '');

  useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get(`${BASE}/campuslife/data`);
      const raw = res.data[0]?.hostels || [];
      const cleaned = raw.map(h => ({
        id: h.id,
        name: h.name,
        image: h.image,
        capacity: h.capacity || "N/A",
        description: h.description,
        fullDescription: h.fullDescription || h.description,
        amenities: h.amenities || [],
        rules: h.rules || [],
        images: h.images || [h.image],
      }));
      setHostels(cleaned);
    } catch (err) {
      console.error(err);
    }
  };
  fetchData();
}, [BASE]);


  const handleViewDetails = (hostel) => setSelectedHostelDetails(hostel);
  const handleBookRoom = (hostel) => {
    setCurrentHostel(hostels.findIndex((h) => h.id === hostel.id));
    setIsBookingOpen(true);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    toast({
      title: 'Booking Submitted',
      description: `Your booking for ${hostels[currentHostel].name} has been submitted.`,
    });
    setIsBookingOpen(false);
    e.target.reset();
  };

  if (hostels.length === 0) return <div className="text-center py-20">Loading...</div>;

  return (
    <SearchableWrapper>
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Hostel Life</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our hostels with modern amenities and comfortable living.
          </p>
        </div>

        <HostelCarousel hostels={hostels} currentHostel={currentHostel} onHostelClick={setCurrentHostel} />
        <HostelDetails hostel={hostels[currentHostel]} onViewDetails={handleViewDetails} onBookRoom={handleBookRoom} />

        {selectedHostelDetails && (
          <Dialog open onOpenChange={() => setSelectedHostelDetails(null)}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedHostelDetails.name}</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedHostelDetails.images.map((img, i) => (
                    <img key={i} src={img} alt="" className="w-full h-48 object-cover rounded-lg" />
                  ))}
                </div>
                <p className="text-gray-600">{selectedHostelDetails.fullDescription}</p>
                {selectedHostelDetails.facilities && (
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Facilities</h3>
                    <ul className="space-y-2">
                      {Object.entries(selectedHostelDetails.facilities).map(([key, val]) => (
                        <li key={key}>
                          <span className="font-medium">{key.replace(/_/g, ' ')}:</span> {val}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Rules</h3>
                  <ul className="space-y-2">
                    {selectedHostelDetails.rules.map((rule, i) => (
                      <li key={i}>{rule}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}

        <HostelBookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          hostel={hostels[currentHostel]}
          onSubmit={handleBookingSubmit}
        />
      </div>
    </section>
    </SearchableWrapper>
  );
};

export default HostelLife;
