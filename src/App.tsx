import React from 'react';

import './style.css';

type Props = {
  title: string;
};

const App: React.FC<Props> = ({ title }) => (
  <div className="app">{title}</div>
);
export default App;
