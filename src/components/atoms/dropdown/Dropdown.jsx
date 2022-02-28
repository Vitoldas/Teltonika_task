import { useState } from 'react';

const Dropdown = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const location = ['Lithuania', 'Chile', 'Vietnam', 'Brazil', 'Peru'];
  return (
    <div>
      <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
          {selected}
        </div>
        {isActive && (
          <div className="dropdown-content">
            {location.map((location) => (
              <div
                className="dropdown-item"
                onClick={(e) => {
                  setSelected(location);
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

export default Dropdown;
