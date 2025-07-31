import BannerSection from "../../components/HeroBanner";
import HodMessage from "../../components/departments/cse/Hod";
import AboutDepartment from "../../components/departments/cse/AboutDepartment";
import Programs from "../../components/departments/cse/Program";
import FacultyCarousel from "../../components/departments/faculty_rotating";
import StatsCard from "../../components/StatsCard";
import StudentAchievers from "../../components/departments/cse/StudentAchievers";

const DepartmentLayout = ({
  heroProps,
  hodProps,
  aboutProps,
  programsData,
  facultyMembers,
  facultyStats,
  researchStats,
  topAchievers,
  achievements,
}) => {
  return (
    <div className="min-h-screen bg-background">
      <BannerSection {...heroProps} />
      <HodMessage {...hodProps} />
      <AboutDepartment {...aboutProps} />
      <Programs
        heading="Academic Programs"
        subheading="Choose from our diverse range of programs designed to meet your academic and career goals."
        programs={programsData}
      />
      <FacultyCarousel
        facultyList={facultyMembers}
        title="Meet Our Faculty"
        subTitle="Experienced educators and researchers dedicated to student success"
        navigateTo="/faculty"
        autoSlideInterval={5000}
        visibleCards={3}
        bottomStats={facultyStats}
      />

      <div className="mt-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Research Areas
        </h2>
        <p className="text-xl text-blue-600 text-center  max-w-3xl mx-auto">
          Explore our diverse research areas that push the boundaries of technology and innovation.
        </p>
      </div>

      <StatsCard
        stats={researchStats.map((stat) => ({
          numberText: stat.numberText,
          title: stat.subtitle,
          subtitle: stat.subtitle,
        }))}
      />

      <StudentAchievers
        topAchievers={topAchievers}
        achievements={achievements}
        achieversHeading="Top Student Achievers"
        achieversSubheading="Students making us proud globally"
        achievementsHeading="Key Achievements"
        achievementsSubheading="Excellence and recognition"
      />
    </div>
  );
};

export default DepartmentLayout;
