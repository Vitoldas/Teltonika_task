import React from 'react';
import { useNavigate } from 'react-router-dom';
import './errorPage.scss';

const errors = [
  'Oops!',
  'Page Not Found',
  'The page you are looking for might have been removed, had its name changed or is temporarily unavailable.',
  'Go to homepage',
];

function ErrorPage() {
  let navigate = useNavigate();
  return (
    <div>
      <div className="error--wrapper">
        <div className="error--card">
          <h1>{errors[0]}</h1>
          <h2>{errors[1]}</h2>
          <p>{errors[2]}</p>
          <button
            type="submit"
            className="btn--error"
            onClick={() => {
              navigate('../');
            }}
          >
            {errors[3]}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
