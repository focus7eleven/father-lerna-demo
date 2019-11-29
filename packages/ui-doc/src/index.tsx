import React from 'react';

interface Doc {
  name: string;
}

const Doc: React.FC<Doc> = () => {
  return <div>doc</div>;
};

export default Doc;
