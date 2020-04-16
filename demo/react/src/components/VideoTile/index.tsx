import React, { useEffect, useRef } from 'react';
import { StyledVideoTile } from './Styled';

export interface VideoTileProps extends React.HTMLAttributes<HTMLDivElement>{
  nameplate: string;
  bindVideoTile: (arg0: any) => void;
}

//  Temporarily copied this from the component library due to issues importing items from our component library
//  TODO: Replace with the component Library and delete this file
export const VideoTile: React.SFC<VideoTileProps> = props => {
  const videoEl = useRef(null);
  const { bindVideoTile } = props;

  useEffect(() => {
    !!videoEl && bindVideoTile(videoEl.current);
  }, [bindVideoTile, videoEl]);

  return (
    <StyledVideoTile {...props}>
      <video ref={videoEl} className="video" />
      <header className="nameplate">
        <div>
          <p className="text">{props.nameplate}</p>
        </div>
      </header>
    </StyledVideoTile>
  );
};

export default VideoTile;
