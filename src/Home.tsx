import React from 'react';

const Home: React.FC<{ name: string; age: number }> = ({ name, age }) => {
  return (
    <div>
      <h1>Welcome, {name}!</h1>
      <p>Your age is {age}.</p>
    </div>
  );
};

export default Home;
