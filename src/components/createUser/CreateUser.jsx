import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../button/SubmitButton';
import './createUser.scss';

function CreateUser() {
  const initialValues = {
    firstName: '',
    lastName: '',
    password: '',
    repeatPassword: '',
    email: '',
    age: '',
    category: ''
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  });

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    // firstname
    if (!values.firstName) {
      errors.firstName = '* Username is required';
    }
    // Lastname
    if (!values.lastName) {
      errors.lastName = '* Last Name is required';
    }

    // Password
    if (!values.password) {
      errors.password = '* Password is required';
    } else if (values.password.length < 6) {
      errors.password = '* Must be atleast 6 Characters';
    } else if (values.password.length > 20) {
      errors.password = '* Password too long';
    }

    // Repeat Password must match password.
    if (!values.repeatPassword) {
      errors.repeatPassword = '* You must repeat password';
    }
    // Email
    if (!values.email) {
      errors.email = '* Email is required';
    } else if (!regex.test(values.email)) {
      errors.email =
        '* This is not a valid email format example: iAmGoogle@gmail.com';
    }

    if (!values.age) {
      errors.age = '* You must select age';
    } else if (values.age < 18) {
      errors.age = '* You must be more 18 or older';
    } else if (values.age > 120) {
      errors.age = '* Your age is not possible';
    }
    return errors;
  };
  return (
    <div className="card--container">
      <div className="card">
        <div className="card--header">
          <h2>Registration</h2>
          <p>Let's get you on board!</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="card--main">
            <div className="input--wrapper input-media-620">
              <label>Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                className="card--input input--styles"
                value={formValues.firstName}
                onChange={handleChange}
              />
              <p className="error-msg">{formErrors.firstName}</p>
            </div>
            <div className="input--wrapper input-media-620">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="card--input input--styles"
                value={formValues.lastName}
                onChange={handleChange}
              />
              <p className="error-msg">{formErrors.lastName}</p>
            </div>
            <div className="input--wrapper input-media-620">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="card--input input--styles"
                value={formValues.password}
                onChange={handleChange}
              />
              <p className="error-msg">{formErrors.password}</p>
            </div>
            <div className="input--wrapper input-media-620">
              <label>Repeat Password</label>
              <input
                type="text"
                name="repeatPassword"
                placeholder="Repeat password"
                className="card--input input--styles"
                value={formValues.repeatPassword}
                onChange={handleChange}
              />
              <p className="error-msg">{formErrors.repeatPassword}</p>
            </div>
            <div className="input--wrapper mg-top input-media-620">
              <label>Age</label>
              <input
                type="number"
                name="age"
                placeholder="Write your age"
                className="card--input input--styles rm-arrows"
                value={formValues.age}
                onChange={handleChange}
              />
              <p className="error-msg">{formErrors.age}</p>
            </div>
            <div className="input--wrapper input-media-620 ">
              <label>Gender</label>
              <select
                required
                className="input--styles select-options"
                onChange={handleChange}
                select
              >
                <option value="prefer not to say" className="reg-option">
                  Prefer not to say
                </option>
                <option value="male" className="reg-option">
                  Male
                </option>
                <option value="female" className="reg-option">
                  Female
                </option>
                <option value="other" className="reg-option">
                  Other
                </option>
              </select>
            </div>
          </div>
          <div className="input--wrapper  input-media-620">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="card--input  width"
              value={formValues.email}
              onChange={handleChange}
            />
            <p className="error-msg">{formErrors.email}</p>
          </div>
          <div className="input--wrapper about-us--form input-media-620">
            <label>Where did you hear about us?</label>
            <select
              type="text"
              name="category"
              placeholder="Choose your Category"
              className="input--styles select-options"
              required
              value={formValues.category}
              onChange={handleChange}
            >
              <option value="Choose" className="reg-option">
                Choose
              </option>
              <option
                value="LinkedIn"
                className="reg-option"
                aria-label="LinkedIn"
              >
                LinkedIn
              </option>
              <option value="CVBank" className="reg-option" aria-label="CVBank">
                CVBank
              </option>
              <option
                value="Twitter"
                className="reg-option"
                aria-label="Twitter"
              >
                Twitter
              </option>
              <option
                value="Facebook"
                className="reg-option"
                aria-label="Facebook"
              >
                Facebook
              </option>
              <option value="Reddit" className="reg-option" aria-label="Reddit">
                Reddit
              </option>
            </select>
          </div>
          <div className="btn-wrapper  input-media-620">
            <SubmitButton className="register-btn" />
            <button
              type="submit"
              className="register-btn"
              onClick={() => {
                navigate('../Create-category');
              }}
            >
              Next page
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;