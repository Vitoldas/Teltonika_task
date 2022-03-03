import React from 'react';
import { useNavigate } from 'react-router-dom';
import './errorPage.scss';

const headingError = 'Oops!';
const headingErrorTwo = 'Page Not Found';
const paragraphError =
  'The page you are looking for might have been removed, had its name changed or is temporarily unavailable.';
const buttonError = 'Go to homepage';

function ErrorPage() {
  let navigate = useNavigate();
  return (
    <div>
      <div className="error--wrapper">
        <div className="error--card">
          <h1>{headingError}</h1>
          <h2>{headingErrorTwo}</h2>
          <p>{paragraphError}</p>
          <button
            type="submit"
            className="btn--error"
            onClick={() => {
              navigate('../');
            }}
          >
            {buttonError}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
