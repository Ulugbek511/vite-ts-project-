import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <ChildComponent
      text="Hello, World!"
      count={42}
      isActive={true}
      onClick={handleClick}
    />
  );
};

export default ParentComponent;
