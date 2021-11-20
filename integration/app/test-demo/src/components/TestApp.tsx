import React from 'react';
import { Link } from 'react-router-dom';

const TestApp: React.FC<{ name: string, route: string, components: string[], hooks: string[] }> = ({ name, route, components, hooks }) => {
  const componentList = components.map(component => <li key={component}>{component}</li>);
  const hookList = hooks.map(hook => <li key={hook}>{hook}</li>);
  return (
    <li>
      <Link to={route}>{name}</Link>
      <header>Component Coverage</header>
      <ul>
        {componentList}
      </ul>
      <header>Hook Coverage</header>
      <ul>
        {hookList}
      </ul>
    </li>
  );
};

export default TestApp;
