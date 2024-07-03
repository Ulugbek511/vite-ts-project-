import React from 'react';

interface ChildProps {
  text: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
}

const ChildComponent: React.FC<ChildProps> = ({ text, count, isActive, onClick }) => {
  return (
    <div>
      <p>{text}</p>
      <p>{count}</p>
      <p>{isActive ? 'Active' : 'Inactive'}</p>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export default ChildComponent;
