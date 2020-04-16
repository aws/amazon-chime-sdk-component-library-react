import React, { FC } from 'react';

export interface CallListProps {
  title: string;
  defaultMessage?: string | boolean;
  children?: React.ReactElement<any>[] | false;
}

const CallList: FC<CallListProps> = ({ title, defaultMessage, children }) => {
  return (
    <div className="CallList">
      <h2>{title}</h2>
      {defaultMessage && <div>{defaultMessage}</div>}
      {children}
    </div>
  );
};

export default CallList;
