import { useState } from 'react';

const DropdownJobCategory = ({ selectedJob, setSelectedJob }) => {
  const [isActive, setIsActive] = useState(false);
  const position = [
    'UI/UX designer',
    'Front-End Developer',
    'Human Resources manager',
    'Copywritter',
    'Sales Team Lead'
  ];
  return (
    <div>
      <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
          {selectedJob}
        </div>
        {isActive && (
          <div className="dropdown-content">
            {position.map((location) => (
              <div
                className="dropdown-item"
                onClick={(e) => {
                  setSelectedJob(location);
                  setIsActive(false);
                }}
              >
                {location}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownJobCategory;
