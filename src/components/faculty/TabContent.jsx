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
        return <QualificationsTab />;
      case 'teaching':
        return <TeachingTab />;
      case 'administration':
        return <AdministrationTab />;
      case 'research-projects':
        return <ResearchProjectsAndGroup />;
      case 'research-group':
        return <ResearchGroupTab />;
      case 'publications':
        return <PublicationsTab />;
      case 'patents':
        return <PatentsTab />;
      case 'certifications':
        return <CertificationsTab />;
      case 'talks':
        return <TalksTab />;
      case 'awards':
        return <AwardsAndSocialImpactPage/>;
      case 'social-impact':
        return <SocialImpactTab />;
      case 'other':
        return <OtherTab />;
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
