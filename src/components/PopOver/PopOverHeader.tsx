import React, { FC } from 'react';
import { StyledPopOverHeader } from './Styled';

export interface PopOverHeaderProps {
  title?: string;
  subtitle?: string;
  imgSrc?: string;
}

const PopOverHeader: FC<PopOverHeaderProps> = ({ title, subtitle, imgSrc }) =>  {
  return (
    <StyledPopOverHeader>
      {imgSrc && <img src={imgSrc} alt={title} />}
      {title && <p className="title">{title}</p>}
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </StyledPopOverHeader>
  );
}

export default PopOverHeader;
