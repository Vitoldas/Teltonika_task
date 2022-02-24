import React from 'react';
import { useNavigate } from 'react-router-dom';
import './errorPage.scss';

function ErrorPage() {
  let navigate = useNavigate();
  return (
    <div>
      <div className="error--wrapper">
        <div className="error--card">
          <h1>Oops!</h1>
          <h2>Page Not Found</h2>
          <p>
            The page you are looking for might have been removed, had its name
            changed or is temporarily unavailable.
          </p>
          <button
            type="submit"
            className="btn--error"
            onClick={() => {
              navigate('../');
            }}
          >
            Go to homepage
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
