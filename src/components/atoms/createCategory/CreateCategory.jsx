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

  const welcome = 'Welcome';
  const createCategories = 'You can create categories here';
  const selectCountry = 'Select your country';
  const selectPosition = 'Select desired position';
  const selectSeniority = 'Select Seniority';
  const filterCategories = 'Filter Categories';
  const countries = 'Countries';
  const lithuania = 'Lithuania';
  const chile = 'Chile';
  const vietnam = 'Vietnam';
  const brazil = 'Brazil';
  const peru = 'Peru';
  const positions = 'Positions';
  const designer = 'UI/UX designer';
  const developerFront = 'Front-End Developer';
  const hr = 'Human Resources manager';
  const copywritter = 'Copywritter';
  const salesTl = 'Sales Team Lead';
  const seniority = 'Seniority';
  const junior = 'Junior';
  const mid = 'Mid level';
  const senior = 'Senior';
  const add = 'add';
  const country = 'Country';
  const desiredPosition = 'Desired Position';

  return (
    <div>
      <div className="category--container">
        <div className="category--header">
          <h2>{welcome}</h2>
          <h3>{createCategories}</h3>
        </div>
        <form className="category-form" onSubmit={handleAddFormSubmit}>
          <div className="position-wrapper">
            <div className="position-card">
              <label>
                <h3 className="category-h3">{selectCountry}</h3>
              </label>
              <select
                name="yourCountry"
                onClick={handleAddFormChange}
                className="select-styling"
              >
                <option value="Choose value" disabled>
                  {countries}
                </option>
                <option value="Lithuania">{lithuania}</option>
                <option value="Chile">{chile}</option>
                <option value="Vietnam">{vietnam}</option>
                <option value="Brazil">{brazil}</option>
                <option value="Peru">{peru}</option>
              </select>
            </div>
            <div className="position-card">
              <label>
                <h3 className="category-h3">{selectPosition}</h3>
              </label>
              <select
                name="desiredPosition"
                onClick={handleAddFormChange}
                className="select-styling"
              >
                <option value="Choose value" disabled>
                  {positions}
                </option>
                <option value="UI/UX designer">{designer}</option>
                <option value="Front-End Developer">{developerFront}</option>
                <option value="Human Resources manager">{hr}</option>
                <option value="Copywritter">{copywritter}</option>
                <option value="Sales Team Lead">{salesTl}</option>
              </select>
            </div>
            <div className="position-card">
              <label>
                <h3 className="category-h3">{selectSeniority}</h3>
              </label>
              <select
                name="seniority"
                onClick={handleAddFormChange}
                className="select-styling"
              >
                <option value="Choose value" disabled>
                  {seniority}
                </option>
                <option value="Junior">{junior}</option>
                <option value="Mid Level">{mid}</option>
                <option value="Senior">{senior}</option>
              </select>
            </div>
          </div>
          <button type="submit" className="category-btn">
            {add}
          </button>
          <div className="searchbar-wrapper"></div>
        </form>
        <div className="filter-list">
          <div className="filter-list__item">
            <label>
              <h3 className="category-h3">{filterCategories}</h3>
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
            <th>{country}</th>
            <th>{desiredPosition}</th>
            <th>{seniority}</th>
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
