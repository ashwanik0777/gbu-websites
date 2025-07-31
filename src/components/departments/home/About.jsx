// Simple Card and CardContent components with modern UI and effects

const Card = ({ children, className = '', ...props }) => (
  <div
    className={
      `rounded-2xl shadow-lg bg-white/80 backdrop-blur-md border border-gray-200 hover:shadow-2xl transition-all duration-300 ${className}`
    }
    {...props}
  >
    {children}
  </div>
);

const CardContent = ({ children, className = '', ...props }) => (
  <div className={`flex flex-col items-center justify-center ${className}`} {...props}>
    {children}
  </div>
);

const AboutSection = () => {
  const stats = [
    { number: '3', label: 'Departments' },
    { number: '15+', label: 'Courses' },
    { number: '2000+', label: 'Students' },
    { number: '150+', label: 'Faculty' },
    { number: '95%', label: 'Placement Rate' },
    { number: '50+', label: 'Research Publications' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-college-navy mb-6 bg-gradient-to-r from-college-navy to-college-blue bg-clip-text text-transparent">
            About Our Institute
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Established with a vision to provide world-class engineering education,
            Stellar Institute of Technology has been at the forefront of innovation and excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="group">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
              alt="Campus"
              className="rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-college-navy mb-6 bg-gradient-to-r from-college-navy to-college-blue bg-clip-text text-transparent">
              Our Mission
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To nurture innovative minds and develop competent engineers who can contribute
              meaningfully to society through cutting-edge research, quality education, and
              industry collaboration.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We are committed to fostering an environment that encourages creativity,
              critical thinking, and ethical leadership among our students.
            </p>
            <div className="pt-4">
              <div className="w-20 h-1 bg-gradient-to-r from-college-blue to-college-gold rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:scale-105">
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-college-blue to-college-navy bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
