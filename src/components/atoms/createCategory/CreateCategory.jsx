import { useState, useEffect } from 'react';
import data from '../../mock-data.json';
import { nanoid } from 'nanoid';
import './createCategory.scss';

const CreateCategory = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    yourCountry: ' ',
    desiredPosition: '',
    seniority: '',
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
      seniority: addFormData.seniority,
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

  // Labels
  const labels = [
    'Welcome',
    'You can create categories here',
    'Select your country',
    'Select desired position',
    'Select Seniority',
    'Filter Categories',
    'add',
    'Country',
    'Desired Position',
    'Seniority',
  ];
  const countries = [
    'Countries',
    'Lithuania',
    'Chile',
    'Vietnam',
    'Brazil',
    'Peru',
  ];
  const positions = [
    'Positions',
    'UI/UX designer',
    'Front-End Developer',
    'Human Resources manager',
    'Copywritter',
    'Sales Team Lead',
  ];

  const seniority = ['Seniority', 'Junior', 'Mid level', 'Senior'];

  return (
    <div>
      <div className="category--container">
        <div className="category--header">
          <h2>{labels[0]}</h2>
          <h3>{labels[1]}</h3>
        </div>
        <form className="category-form" onSubmit={handleAddFormSubmit}>
          <div className="position-wrapper">
            <div className="position-card">
              <label>
                <h3 className="category-h3">{labels[2]}</h3>
              </label>
              <select
                name="yourCountry"
                onClick={handleAddFormChange}
                className="select-styling"
              >
                <option value="Choose value" disabled>
                  {countries[0]}
                </option>
                <option value="Lithuania">{countries[1]}</option>
                <option value="Chile">{countries[2]}</option>
                <option value="Vietnam">{countries[3]}</option>
                <option value="Brazil">{countries[4]}</option>
                <option value="Peru">{countries[5]}</option>
              </select>
            </div>
            <div className="position-card">
              <label>
                <h3 className="category-h3">{labels[3]}</h3>
              </label>
              <select
                name="desiredPosition"
                onClick={handleAddFormChange}
                className="select-styling"
              >
                <option value="Choose value" disabled>
                  {positions[0]}
                </option>
                <option value="UI/UX designer">{positions[1]}</option>
                <option value="Front-End Developer">{positions[2]}</option>
                <option value="Human Resources manager">{positions[3]}</option>
                <option value="Copywritter">{positions[4]}</option>
                <option value="Sales Team Lead">{positions[5]}</option>
              </select>
            </div>
            <div className="position-card">
              <label>
                <h3 className="category-h3">{labels[4]}</h3>
              </label>
              <select
                name="seniority"
                onClick={handleAddFormChange}
                className="select-styling"
              >
                <option value="Choose value" disabled>
                  {seniority[0]}
                </option>
                <option value="Junior">{seniority[1]}</option>
                <option value="Mid Level">{seniority[2]}</option>
                <option value="Senior">{seniority[3]}</option>
              </select>
            </div>
          </div>
          <button type="submit" className="category-btn">
            {labels[5]}
          </button>
          <div className="searchbar-wrapper"></div>
        </form>
        <div className="filter-list">
          <div className="filter-list__item">
            <label>
              <h3 className="category-h3">{labels[6]}</h3>
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
            <th>{labels[7]}</th>
            <th>{labels[8]}</th>
            <th>{labels[9]}</th>
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
