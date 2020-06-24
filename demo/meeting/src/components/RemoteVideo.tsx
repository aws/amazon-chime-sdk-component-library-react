import React from 'react';

type Props = {
  enabled: boolean
  attendeeName?: string;
  videoEleRef: ((instance: HTMLVideoElement | null) => void);
}

const RemoteVideo: React.FC<Props> = ({ videoEleRef, attendeeName, enabled }) => {

  return (
    <div style={enabled? {display: "block"} : {display: "none"}}>
      <video ref={videoEleRef} />
      {attendeeName && <span>{attendeeName}</span>}
    </div>
  );
}

export default RemoteVideo;
