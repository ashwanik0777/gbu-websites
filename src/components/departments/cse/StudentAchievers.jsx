import React from "react";
import {
  Medal,
  Target,
} from "lucide-react";
import StatsCard from "../../StatsCard";

// ✅ Reusable Card
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-lg border ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`p-6 border-b ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-xl font-bold text-foreground ${className}`}>{children}</h3>
);

const CardDescription = ({ children, className = "" }) => (
  <p className={`text-muted-foreground text-sm ${className}`}>{children}</p>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const StudentAchievers = ({
  topAchievers = [],
  achievements = [],
  achieversHeading = "Student Achievers",
  achieversSubheading = "Celebrating our outstanding students who excel in academics, research, and innovation.",
  achievementsHeading = "Our Achievements",
  achievementsSubheading = "Recognition and excellence in education",
}) => {
  return (
    <>
      {/* Top Achievers */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                {achieversHeading}
              </h2>
              <p className="text-xl text-muted-foreground">
                {achieversSubheading}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {topAchievers.map((student, index) => (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg"
                >
                  <CardHeader className="text-center pb-2">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-lg">
                      <img
                        src={student.image}
                        alt={student.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle>{student.name}</CardTitle>
                    <CardDescription className="text-blue-600 font-semibold">
                      {student.year}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="flex items-start space-x-2 mb-2">
                        <Medal className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-foreground leading-relaxed">
                          {student.achievement}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center">
                        <Target className="h-4 w-4 mr-2" />
                        Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {student.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
       <div className="text-center mt-8">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                {achievementsHeading}
              </h2>
              <p className="text-xl text-muted-foreground text-blue-600">
                {achievementsSubheading}
              </p>
            </div>

      <StatsCard
        stats={achievements.map((achievement) => ({
          icon: achievement.icon,
          number: achievement.number,
          numberText: achievement.numberText,
          title: achievement.title,
          subtitle: achievement.description,
          
        }))}
      />
    </>
  );
};

export default StudentAchievers;
