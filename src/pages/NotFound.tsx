import React from 'react';

export interface NotFoundProps {

}

const NotFound: React.FC<NotFoundProps> = () => {
    return (
      <div>
<h1>404</h1>
        <p>Page Not Found</p>
      </div>
    );
}

export default NotFound;