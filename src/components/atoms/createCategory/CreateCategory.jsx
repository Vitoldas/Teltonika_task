import { useState, useEffect } from 'react';
import data from '../../mock-data.json';
import { nanoid } from 'nanoid';
import './createCategory.scss';

const CreateCategory = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    yourCountry: ' ',
    desiredPosition: '',
    seniority: ''
  });
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      yourCountry: addFormData.yourCountry,
      desiredPosition: addFormData.desiredPosition,
      seniority: addFormData.seniority
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };
  useEffect(() => {
    const data = localStorage.getItem('saved-positions');
    if (data) {
      setContacts(JSON.parse(data));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('saved-positions', JSON.stringify(contacts));
  });
  const [searchItem, setSearchItem] = useState('');
  return (
    <div>
      <div className="category--container">
        <div className="category--header">
          <h2>Welcome</h2>
          <h3>You can create categories here</h3>
        </div>
        <form className="category-form" onSubmit={handleAddFormSubmit}>
          <div className="position-wrapper">
            <div className="position-card">
              <label>
                <h3 className="category-h3">Select your country</h3>
              </label>
              <select
                name="yourCountry"
                onClick={handleAddFormChange}
                className="select-styling"
              >
                <option value="Choose value" disabled selected>
                  Countries
                </option>
                <option value="Lithuania">Lithuania</option>
                <option value="Chile">Chile</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Brazil">Brazil</option>
                <option value="Peru">Peru</option>
              </select>
            </div>
            <div className="position-card">
              <label>
                <h3 className="category-h3">Select desired position</h3>
              </label>
              <select
                name="desiredPosition"
                onClick={handleAddFormChange}
                className="select-styling"
              >
                <option value="Choose value" disabled selected>
                  Positions
                </option>
                <option value="UI/UX designer">UI/UX designer</option>
                <option value="Front-End Developer">Front-End Developer</option>
                <option value="Human Resources manager">
                  Human Resources manager
                </option>
                <option value="Copywritter">Copywritter</option>
                <option value="Sales Team Lead">Sales Team Lead</option>
              </select>
            </div>
            <div className="position-card">
              <label>
                <h3 className="category-h3">Select seniority</h3>
              </label>
              <select
                name="seniority"
                onClick={handleAddFormChange}
                className="select-styling"
              >
                <option value="Choose value" disabled selected>
                  Seniority
                </option>
                <option value="Junior">Junior</option>
                <option value="Mid Level">Mid level</option>
                <option value="Senior">Senior</option>
              </select>
            </div>
          </div>
          <button type="submit" className="category-btn">
            Add
          </button>
          <div className="searchbar-wrapper"></div>
        </form>
        <div className="filter-list">
          <div className="filter-list__item">
            <label>
              <h3 className="category-h3">Filter Categories</h3>
            </label>
          </div>
          <div className="filter-list__item">
            <input
              className="category--input"
              type="text"
              placeholder="Search..."
              onChange={(e) => {
                setSearchItem(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <table>
        <thead className="datas">
          <tr>
            <th>Country</th>
            <th>Desired Position</th>
            <th>Seniority</th>
          </tr>
        </thead>
        <tbody>
          {contacts
            .filter((val) => {
              if (searchItem === '') {
                return val;
              } else if (
                val.yourCountry
                  .toLowerCase()
                  .includes(searchItem.toLowerCase()) ||
                val.desiredPosition
                  .toLowerCase()
                  .includes(searchItem.toLowerCase()) ||
                val.seniority.toLowerCase().includes(searchItem.toLowerCase())
              ) {
                return val;
              }
            })
            .map((contact) => (
              <tr>
                <td>{contact.yourCountry}</td>
                <td>{contact.desiredPosition}</td>
                <td>{contact.seniority}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreateCategory;
