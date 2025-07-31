import { motion } from "framer-motion";
import StatsCard from "../../StatsCard";

const AboutDepartment = ({
  heading = "About the Department",
  subheading = "Established in 1995, our department has been at the forefront of computer science education and research for over two decades.",
  stats = [],
  highlights = [],
  vision = "",
  missionPoints = [],
}) => {
  return (
    <section
      id="about"
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#111827] mb-4">
            {heading}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#6366f1] via-[#3b82f6] to-[#06b6d4] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-center text-[#475569] mb-16 max-w-3xl mx-auto">
            {subheading}
          </p>

          {/* Stats */}
           <StatsCard stats={stats}/>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              {highlights.map((item, idx) => (
                <div key={idx}>
                  <h3 className="text-2xl font-bold text-[#111827] mb-3 flex items-center gap-2">
                    <span
                      className={`inline-block w-2 h-2 rounded-full`}
                      style={{ backgroundColor: item.dotColor }}
                    ></span>
                    {item.title}
                  </h3>
                  <p className="text-[#475569] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="bg-white/60 backdrop-blur-lg p-10 rounded-3xl shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-[#111827] mb-6">
                Vision & Mission
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-[#111827] mb-2">Vision</h4>
                  <p className="text-[#475569] text-sm leading-relaxed">{vision}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#111827] mb-2">Mission</h4>
                  <ul className="text-[#475569] text-sm space-y-2 leading-relaxed list-disc pl-5">
                    {missionPoints.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutDepartment;
