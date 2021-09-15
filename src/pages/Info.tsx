import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

export interface InfoProps {}

const Info = () => {
  return (
    <Container width={70}>
      <h1>Info Page</h1>
      <p>
        The major goal of this project is to create a common source of
        information for the Royal Rangers of Nigeria.
      </p>
      <h2>Add a location</h2>
      <p>
        To add a location youl´d need to{' '}
        <Link to="/account/request">request an account.</Link> This is the
        measure to attain accountability and avoid just anybody from adding
        incorrect information to our database
      </p>
      <h2>Contribute in any capacity too!</h2>
      <p>
        To contribute you can find the{' '}
        <a href="https://github.com/Ozoemenamsolomon/royal-rangers-on-the-map/blob/main/README.md">
          Readme file
        </a>{' '}
        on github on how to get started with contributing. You can also
        contribute in any other capacity, just reach out using this mail,
        telling how you can contribute to the project.
      </p>
      <h2>Contributors</h2>
    </Container>
  );
};

export default Info;
