

import React, { useEffect, useState } from 'react';
import axios from 'axios';


// Badge component
const Badge = ({ children, className = '', variant = '', ...props }) => {
  const base =
    'inline-block px-2 py-1 rounded-full text-xs font-semibold';
  const variants = {
    outline: 'border border-orange-600 text-orange-600 bg-white',
    secondary: 'bg-gray-200 text-gray-800',
    default: 'bg-orange-600 text-white',
  };
  return (
    <span
      className={`${base} ${variants[variant] || variants.default} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

// Dialog components (basic modal)
const DialogContext = React.createContext();

const Dialog = ({ open, onOpenChange, children }) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = typeof open === 'boolean';
  const actualOpen = isControlled ? open : internalOpen;
  const setOpen = isControlled ? onOpenChange : setInternalOpen;

  return (
    <DialogContext.Provider value={{ open: actualOpen, setOpen }}>
      {children}
      {actualOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={() => setOpen && setOpen(false)}
        />
      )}
    </DialogContext.Provider>
  );
};

const DialogTrigger = ({ asChild, children }) => {
  const { setOpen } = React.useContext(DialogContext);
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: (e) => {
        if (children.props.onClick) children.props.onClick(e);
        setOpen && setOpen(true);
      },
    });
  }
  return (
    <button onClick={() => setOpen && setOpen(true)}>
      {children}
    </button>
  );
};

const DialogContent = ({ children, className = '' }) => {
  const { open, setOpen } = React.useContext(DialogContext);
  if (!open) return null;
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center`}
      style={{ pointerEvents: 'none' }}
    >
      <div
        className={`relative z-50 ${className}`}
        style={{ pointerEvents: 'auto' }}
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
          onClick={() => setOpen && setOpen(false)}
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
  <div className="mb-4">{children}</div>
);

const DialogTitle = ({ children }) => (
  <h3 className="text-lg font-bold mb-2">{children}</h3>
);

// Input component
const Input = React.forwardRef(({ className = '', ...props }, ref) => (
  <input
    ref={ref}
    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${className}`}
    {...props}
  />
));

// Label component
const Label = ({ htmlFor, children, className = '' }) => (
  <label
    htmlFor={htmlFor}
    className={`block text-sm font-medium text-gray-700 mb-1 ${className}`}
  >
    {children}
  </label>
);

// Textarea component
const Textarea = React.forwardRef(({ className = '', ...props }, ref) => (
  <textarea
    ref={ref}
    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${className}`}
    {...props}
  />
));

// Carousel components (basic horizontal scroll)
const Carousel = ({ children, className = '' }) => (
  <div className={`relative ${className}`}>{children}</div>
);

const CarouselContent = ({ children }) => (
  <div className="flex   gap-4 pb-2">{children}</div>
);

const CarouselItem = ({ children, className = '' }) => (
  <div className={`flex-shrink-0 ${className}`}>{children}</div>
);

const CarouselPrevious = () => null;
const CarouselNext = () => null;

import { Coffee } from 'lucide-react';

import { useToast } from '../../hooks/use-toast';
import SearchableWrapper from '../../components/Searchbar/SearchableWrapper';

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

const CafesFood = () => {
  const [categories, setCategories] = useState([]);
  const [outlets, setOutlets] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('All Cafes');
  const [selectedCafe, setSelectedCafe] = useState(null);

  const { toast } = useToast();

  const VITE_HOST = import.meta.env.VITE_HOST;

  // ✅ Fetch all data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesRes, outletsRes, tagsRes] = await Promise.all([
          axios.get(`${VITE_HOST}/campuslife/food-court-categories/`),
          axios.get(`${VITE_HOST}/campuslife/food-outlets/`),
          axios.get(`${VITE_HOST}/campuslife/tags/`),
        ]);

        setCategories(categoriesRes.data);
        setOutlets(outletsRes.data);
        setTags(tagsRes.data);

      } catch (error) {
        console.error('Error fetching cafes data:', error);
      }
    };

    fetchData();
  }, [VITE_HOST]);

  const filteredOutlets =
    selectedFilter === 'All Cafes'
      ? outlets
      : outlets.filter(outlet =>
          tags.find(
            tag => tag.outlet === outlet.id && tag.name.includes(selectedFilter)
          )
        );

  const handleViewMenu = (cafe) => {
    setSelectedCafe(cafe);
  };

  const handleWriteReview = (cafe) => {
    toast({
      title: 'Review Form',
      description: `Opening review form for ${cafe.name}. Share your dining experience!`,
    });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const reviewData = {
      cafe: selectedCafe?.name,
      reviewerName: formData.get('reviewerName'),
      email: formData.get('email'),
      rating: formData.get('rating'),
      review: formData.get('review'),
    };

    console.log('Review submitted:', reviewData);

    toast({
      title: 'Review Submitted Successfully',
      description: 'Thank you for your feedback! Your review will be published after moderation.',
    });

    e.target.reset();
  };

  return (
    <SearchableWrapper>
    <section id="cafes-food" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Cafes & <span className="text-orange-600">Food Courts</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover delicious dining options across campus, from quick snacks to full meals.
          </p>
        </div>

        {/* === Filters Carousel === */}
        <div className="max-w-4xl mx-auto mb-12">
          <Carousel className="w-full">
            <CarouselContent>
              {categories.map((filter, index) => (
                <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Card
                    className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                      selectedFilter === filter.title ? 'ring-4 ring-orange-500 ring-opacity-50' : ''
                    }`}
                    onClick={() => setSelectedFilter(filter.title)}
                  >
                    <CardContent className="p-4">
                      <div className={`bg-orange-600 text-white rounded-2xl p-6 text-center shadow-lg`}>
                        <div className="text-3xl mb-2">{filter.description}</div>
                        <h3 className="font-bold text-sm">{filter.title}</h3>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* === Food Outlets === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOutlets.map((cafe, index) => (
            <Card
              key={index}
              className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-2xl"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={cafe.image || 'https://via.placeholder.com/400x300?text=Cafe'}
                    alt={cafe.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 flex flex-col space-y-2">
                    <Badge className="bg-orange-600">⭐ {cafe.rating}</Badge>
                    {cafe.is_open ? (
                      <Badge className="bg-green-600">Open Now</Badge>
                    ) : (
                      <Badge className="bg-red-600">Closed</Badge>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{cafe.name}</h3>
                  <p className="text-gray-600 mb-3">{cafe.description}</p>
                  <div className="space-y-1 text-sm text-gray-500 mb-4">
                    <div>{cafe.location}</div>
                    <div>💰 {cafe.price_range}</div>
                    <div>⭐ {cafe.rating}/5.0 ({cafe.review_count} reviews)</div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleViewMenu(cafe)}
                      className="flex-1 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg shadow-md"
                    >
                      {cafe.button1_text || 'View Menu'}
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="border-orange-600 border-solid border text-orange-600 hover:bg-orange-50 px-4 py-2 rounded-lg shadow-md"
                        >
                          {cafe.button2_text || 'Write Review'}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md bg-white">
                        <DialogHeader>
                          <DialogTitle>Write a Review for {cafe.name}</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleReviewSubmit} className="space-y-4">
                          <div>
                            <Label htmlFor="reviewerName">Your Name</Label>
                            <Input id="reviewerName" name="reviewerName" placeholder="Enter your name" required />
                          </div>
                          <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                          </div>
                          <div>
                            <Label htmlFor="rating">Rating</Label>
                            <select id="rating" name="rating" className="w-full p-2 border rounded-md" required>
                              <option value="">Select rating</option>
                              <option value="5">⭐⭐⭐⭐⭐ (5 stars)</option>
                              <option value="4">⭐⭐⭐⭐ (4 stars)</option>
                              <option value="3">⭐⭐⭐ (3 stars)</option>
                              <option value="2">⭐⭐ (2 stars)</option>
                              <option value="1">⭐ (1 star)</option>
                            </select>
                          </div>
                          <div>
                            <Label htmlFor="review">Your Review</Label>
                            <Textarea id="review" name="review" placeholder="Share your dining experience..." required />
                          </div>
                          <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                            Submit Review
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* === Cafe Details Modal === */}
        {selectedCafe && (
          <Dialog open={!!selectedCafe} onOpenChange={() => setSelectedCafe(null)}>
            <DialogContent className="max-w-2xl bg-white">
              <DialogHeader>
                <DialogTitle>{selectedCafe.name} - Details</DialogTitle>
              </DialogHeader>
              <img
                src={selectedCafe.image || 'https://via.placeholder.com/400x300?text=Cafe'}
                alt={selectedCafe.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p>{selectedCafe.description}</p>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
    </SearchableWrapper>
  );
};

export default CafesFood;
