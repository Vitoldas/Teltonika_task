import { useState } from 'react';

const DropdownExperience = ({ selectedExperience, setSelectedExperience }) => {
  const [isActive, setIsActive] = useState(false);
  const location = ['Junior', 'Mid level', 'Senior'];
  return (
    <div>
      <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
          {selectedExperience}
        </div>
        {isActive && (
          <div className="dropdown-content">
            {location.map((location) => (
              <div
                className="dropdown-item"
                onClick={(e) => {
                  setSelectedExperience(location);
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

export default DropdownExperience;
