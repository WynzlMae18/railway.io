import React, { useState } from 'react';

const TrainList = () => (
  <div>
    <h2>Train List</h2>
    {/* Your train list content goes here */}
  </div>
);

const TrainStatus = () => (
  <div>
    <h2>Train Status</h2>
    {/* Your train status content goes here */}
  </div>
);

const BookingAudit = () => (
  <div>
    <h2>Booking Audit</h2>
    {/* Your booking audit content goes here */}
  </div>
);

const Passenger = () => (
  <div>
    <h2>Passenger</h2>
    {/* Your passenger content goes here */}
  </div>
);

const AdminDashboard = () => {
  const [selectedSection, setSelectedSection] = useState('trainList');

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  const renderSection = () => {
    switch (selectedSection) {
      case 'trainList':
        return <TrainList />;
      case 'trainStatus':
        return <TrainStatus />;
      case 'bookingAudit':
        return <BookingAudit />;
      case 'passenger':
        return <Passenger />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <div className="sidebar">
        <ul>
          <li
            className={selectedSection === 'trainList' ? 'active' : ''}
            onClick={() => handleSectionChange('trainList')}
          >
            Train List
          </li>
          <li
            className={selectedSection === 'trainStatus' ? 'active' : ''}
            onClick={() => handleSectionChange('trainStatus')}
          >
            Train Status
          </li>
          <li
            className={selectedSection === 'bookingAudit' ? 'active' : ''}
            onClick={() => handleSectionChange('bookingAudit')}
          >
            Booking Audit
          </li>
          <li
            className={selectedSection === 'passenger' ? 'active' : ''}
            onClick={() => handleSectionChange('passenger')}
          >
            Passenger
          </li>
          <li onClick={() => handleSectionChange('logout')}>Logout</li>
        </ul>
      </div>

      <div className="content">{renderSection()}</div>
    </div>
  );
};

export default AdminDashboard;
