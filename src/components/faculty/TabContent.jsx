import  OverviewTab  from './tabs/OverviewTab';
import { QualificationsTab } from './tabs/QualificationsTab';
import { TeachingTab } from './tabs/TeachingTab';
import { AdministrationTab } from './tabs/AdministrationTab';
import ResearchProjectsAndGroup  from './tabs/ResearchProjectsAndGroup';
import { ResearchGroupTab } from './tabs/ResearchGroupTab';
 import PublicationsTab from "./tabs/PublicationsTab"
import { PatentsTab } from './tabs/PatentsTab';
import { CertificationsTab } from './tabs/CertificationsTab';
import { TalksTab } from './tabs/TalksTab';
import AwardsAndSocialImpactPage  from './tabs/AwardsAndSocialImpactPage';
import { SocialImpactTab } from './tabs/SocialImpactTab';
import { OtherTab } from './tabs/OtherTab';


const TabContent = ({ activeTab , profile}) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab profile={profile}/>;
      case 'qualifications':
        return <QualificationsTab profile={profile} />;
      case 'teaching':
        return <TeachingTab profile={profile} />;
      case 'administration':
        return <AdministrationTab profile={profile} />;
      case 'research-projects':
        return <ResearchProjectsAndGroup profile={profile} />;
      case 'research-group':
        return <ResearchGroupTab profile={profile} />;
      case 'publications':
        return <PublicationsTab profile={profile} />;
      case 'patents':
        return <PatentsTab profile={profile} />;
      case 'certifications':
        return <CertificationsTab profile={profile} />;
      case 'talks':
        return <TalksTab profile={profile} />;
      case 'awards':
        return <AwardsAndSocialImpactPage profile={profile} />;
      case 'social-impact':
        return <SocialImpactTab profile={profile} />;
      case 'other':
        return <OtherTab profile={profile} />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <div className="animate-fade-in w-5/6 mx-auto">
      {renderContent()}
    </div>
  );
};

export default TabContent;
