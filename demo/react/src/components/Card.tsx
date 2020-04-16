import React from 'react';

interface CardProps {
  title: string;
  time: string;
}

const Card: React.FC<CardProps> = ({ title, time }) => {
  let res = (
    <div>
      <span style={{ marginRight: "2rem" }}>{title}</span>
      <span>{time}</span>
    </div>
  );
  return res;
}

export default Card;
