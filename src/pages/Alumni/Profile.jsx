
import { useAuth } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import Navbar from '../../components/home/Navbar';
import ProfileEditor from '@/components/ProfileEditor';

const Profile = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="py-8">
        <ProfileEditor />
      </div>
    </div>
  );
};

export default Profile;
