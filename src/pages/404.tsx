import React from 'react';

const NotFound: React.FC = () => {
  return (
    <>
      <h1>
        Sorry, this path does not exist{' '}
        <span role="img" aria-label="emoji">
          😞
        </span>
      </h1>
    </>
  );
};

export default NotFound;
