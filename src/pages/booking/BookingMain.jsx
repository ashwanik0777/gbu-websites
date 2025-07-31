import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import HeroBanner from '../../components/booking/HeroBanner';
import FacilityCard from '../../components/booking/FacilityCard';
import FacilityFilters from '../../components/booking/FacilityFilters';
import UserRoleSelector from '../../components/booking/UserRoleSelector';
import { facilities } from '../../components/bookingData/facilities';
import { useToast } from '../../hooks/use-toast';

const BookingMain = () => {
  const [filteredFacilities, setFilteredFacilities] = useState(facilities);
  const [userRole, setUserRole] = useState('outsider');
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleFilterChange = (filters) => {
    let filtered = [...facilities];

    if (filters.type && filters.type !== 'all') {
      filtered = filtered.filter(facility => facility.type === filters.type);
    }

    if (filters.capacity && filters.capacity !== 'all') {
      const minCapacity = parseInt(filters.capacity);
      filtered = filtered.filter(facility => facility.capacity >= minCapacity);
    }

    if (filters.priceRange && filters.priceRange !== 'all') {
      const [min, maxRaw] = filters.priceRange.split('-');
      const max = maxRaw.includes('+') ? Infinity : parseInt(maxRaw);
      const minPrice = parseInt(min);
      filtered = filtered.filter(facility => {
        const price = filters.season === 'peak' ? facility.rentRate.peak : facility.rentRate.offPeak;
        return price >= minPrice && (max === Infinity ? true : price <= max);
      });
    }

    setFilteredFacilities(filtered);
  };

  const handleBookFacility = (facilityId) => {
    navigate(`/booking/${facilityId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroBanner />

      <main className="container mx-auto px-4 py-12">
        <UserRoleSelector
          selectedRole={userRole}
          onRoleChange={setUserRole}
        />

        <section className="mb-12 mx-15 sm:mx-5 mt-6">
          <h2 className="text-3xl font-bold text-gbu-blue mb-8 text-center">
            Available Facilities
          </h2>

          <FacilityFilters onFilterChange={handleFilterChange} />

          {/* Auditoriums */}
          {(() => {
            const auditoriums = filteredFacilities.filter(f => f.type === 'auditorium');
            if (auditoriums.length === 0) return null;

            return (
              <div className="mb-12 mx-10">
                <h3 className="text-2xl font-semibold text-gbu-blue mb-6">
                  Auditorium Facilities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {auditoriums.map(facility => (
                    <FacilityCard
                      key={facility.id}
                      facility={facility}
                      onBook={handleBookFacility}
                      userRole={userRole}
                    />
                  ))}
                </div>
              </div>
            );
          })()}

          {/* Conference Rooms */}
          {(() => {
            const conferenceRooms = filteredFacilities.filter(f => f.type === 'conference');
            if (conferenceRooms.length === 0) return null;

            return (
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-gbu-blue mb-6">
                  Conference Facilities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {conferenceRooms.map(facility => (
                    <FacilityCard
                      key={facility.id}
                      facility={facility}
                      onBook={handleBookFacility}
                      userRole={userRole}
                    />
                  ))}
                </div>
              </div>
            );
          })()}

          {/* Accommodation */}
          {(() => {
            const accommodation = filteredFacilities.filter(f => f.type === 'accommodation');
            if (accommodation.length === 0) return null;

            return (
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-gbu-blue mb-6">
                  Accommodation Facilities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {accommodation.map(facility => (
                    <FacilityCard
                      key={facility.id}
                      facility={facility}
                      onBook={handleBookFacility}
                      userRole={userRole}
                    />
                  ))}
                </div>
              </div>
            );
          })()}

          {/* Sports Facilities */}
          {(() => {
            const sports = filteredFacilities.filter(f => f.type === 'sports');
            if (sports.length === 0) return null;

            return (
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-gbu-blue mb-6">
                  Sports Facilities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {sports.map(facility => (
                    <FacilityCard
                      key={facility.id}
                      facility={facility}
                      onBook={handleBookFacility}
                      userRole={userRole}
                    />
                  ))}
                </div>
              </div>
            );
          })()}

          {/* Dining Facilities */}
          {(() => {
            const dining = filteredFacilities.filter(f => f.type === 'dining');
            if (dining.length === 0) return null;

            return (
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-gbu-blue mb-6">
                  Kitchen & Dining Facilities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {dining.map(facility => (
                    <FacilityCard
                      key={facility.id}
                      facility={facility}
                      onBook={handleBookFacility}
                      userRole={userRole}
                    />
                  ))}
                </div>
              </div>
            );
          })()}
        </section>
      </main>
    </div>
  );
};

export default BookingMain;
