import { DUMMY_FACULTY_TAB_DATA } from '../../../Data/facultyDummyData';

export const OtherTab = ({ profile }) => {
  const message =
    profile?.tabData?.other?.message ||
    DUMMY_FACULTY_TAB_DATA.other?.message ||
    'No Information Available';

  return (
    <div className="space-y-6  p-6 min-h-[200px] flex items-center justify-center">
      <h1 className="text-gray-600 text-lg font-medium">{message}</h1>
    </div>
  );
};

export default OtherTab;
