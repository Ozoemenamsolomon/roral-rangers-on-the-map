import React from 'react';
import { Link } from 'react-router-dom';

export interface AccountProps {}

const Account: React.FC<AccountProps> = () => {
  return (
    <div>
      <h1>Account</h1>
      <p>You need to be logged-in to add a locaion</p>
      <p>
        request an Account <Link to="/request-an-account">here</Link>
      </p>
    </div>
  );
};

export default Account;
