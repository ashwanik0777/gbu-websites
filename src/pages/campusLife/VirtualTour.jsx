import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Play, Calendar } from 'lucide-react';
import SearchableWrapper from '../../components/Searchbar/SearchableWrapper';

// === Dialog Components ===
const DialogContext = React.createContext();

const Dialog = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  );
};

const DialogTrigger = ({ asChild, children }) => {
  const { setOpen } = React.useContext(DialogContext);
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: (e) => {
        if (children.props.onClick) children.props.onClick(e);
        setOpen(true);
      },
    });
  }
  return (
    <button onClick={() => setOpen(true)}>
      {children}
    </button>
  );
};

const DialogContent = ({ children, className = '' }) => {
  const { open, setOpen } = React.useContext(DialogContext);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className={`relative bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg animate-fadeIn ${className}`}>
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl font-bold focus:outline-none"
          onClick={() => setOpen(false)}
          aria-label="Close"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

const DialogHeader = ({ children }) => (
  <div className="mb-6">{children}</div>
);

const DialogTitle = ({ children }) => (
  <h2 className="text-2xl font-bold text-gray-900">{children}</h2>
);

const Input = React.forwardRef(({ className = '', ...props }, ref) => (
  <input
    ref={ref}
    className={`w-full px-4 py-2 border border-gray-300 border-solid rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200${className}`}
    {...props}
  />
));
Input.displayName = 'Input';

const Label = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="block mb-1 font-medium text-gray-700">
    {children}
  </label>
);

const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(40px);}
  to { opacity: 1; transform: translateY(0);}
}
.animate-fadeIn {
  animation: fadeIn 0.3s cubic-bezier(.4,0,.2,1);
}
`;
if (typeof document !== 'undefined' && !document.getElementById('dialog-fadein-style')) {
  style.id = 'dialog-fadein-style';
  document.head.appendChild(style);
}

const Button = ({ children, className = '', variant = 'default', ...props }) => {
  const baseStyle =
    'px-4 py-2 rounded-lg font-semibold transition-all duration-300 focus:outline-none';
  const variants = {
    default: 'bg-red-600 text-white hover:bg-red-700',
    outline: 'border border-red-600 text-red-600 hover:bg-red-600 hover:text-white',
  };
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const VirtualTour = () => {
  const [tour, setTour] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const fetchVirtualTour = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_HOST}/campuslife/virtual-tours/`);
        if (res.data && res.data.length > 0) {
          setTour(res.data[0]);
        }
      } catch (error) {
        console.error("Error fetching virtual tour data:", error);
      }
    };

    fetchVirtualTour();
  }, []);

  if (!tour) {
    return (
      <section id="campus-tour" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl text-gray-600">Loading virtual tour...</p>
        </div>
      </section>
    );
  }

  const tourHighlights = [
    { title: 'Academic Excellence', description: 'State-of-the-art classrooms and laboratories' },
    { title: 'Modern Infrastructure', description: 'Contemporary buildings with cutting-edge facilities' },
    { title: 'Green Campus', description: 'Eco-friendly environment with beautiful landscapes' },
    { title: 'Student Life', description: 'Vibrant hostel life and recreational facilities' }
  ];

  return (
    <SearchableWrapper>
    <section id="campus-tour" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {tour.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {tour.description}
          </p>
        </div>

        {/* Virtual Tour Video Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="overflow-hidden shadow-2xl rounded-xl bg-white">
            <div className="p-0">
              <div className="relative bg-gradient-to-br from-blue-100 to-indigo-100 h-96 lg:h-[500px]">
                {!isVideoPlaying ? (
                  <>
                    {/* Video Thumbnail */}
                    <img
                      src={tour.thumbnail}
                      alt={tour.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Button
                        onClick={() => setIsVideoPlaying(true)}
                        size="lg"
                        className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-white/50 border-[1px] border-solid px-8 py-6 rounded-full text-xl font-semibold transition-all duration-300 hover:scale-105"
                      >
                        <Play className="mr-3" size={24} />
                        Start Virtual Tour
                      </Button>
                    </div>
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
                      🎥 360° Virtual Experience
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-900">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`${tour.video_link}?autoplay=1`}
                      title={tour.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0"
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tour Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tourHighlights.map((highlight, index) => (
            <div key={index} className="text-center rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✨</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{highlight.title}</h3>
              <p className="text-gray-600 text-sm">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            onClick={() => setIsVideoPlaying(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Play className="mr-2" size={20} />
            Watch Full Tour
          </Button>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Calendar className="mr-2" size={20} />
                Schedule Physical Visit
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md bg-white">
              <DialogHeader>
                <DialogTitle>Schedule Campus Visit</DialogTitle>
              </DialogHeader>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>
                <div>
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input id="date" type="date" />
                </div>
                <div>
                  <Label htmlFor="visitors">Number of Visitors</Label>
                  <Input id="visitors" type="number" min="1" max="10" defaultValue="1" />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Book Campus Tour
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
    </SearchableWrapper>
  );
};

export default VirtualTour;
