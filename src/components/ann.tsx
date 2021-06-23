import React from 'react';

export interface AnnProps {
  word: string;
}

const Ann: React.FC<AnnProps> = ({ word }) => {
  return <main>Hello from ann</main>;
};

export default Ann;
