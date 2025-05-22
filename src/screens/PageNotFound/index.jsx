import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { BiError } from 'react-icons/bi'; 

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center bg-light">
      <BiError size={100} color="#0d6efd" className="mb-3" />
      <h1 className="display-4 fw-bold">404</h1>
      <h2 className="mb-3">Page Not Found</h2>
      <p className="text-muted mb-4">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Button variant="primary" onClick={() => navigate('/')}>
        ⬅ Go to Home
      </Button>
    </div>
  );
};

export default PageNotFound;
