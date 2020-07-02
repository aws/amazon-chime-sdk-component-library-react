import React, { useState } from 'react';
import {
  faEye,
  faEyeSlash,
  faPause,
  faPlay
} from '@fortawesome/free-solid-svg-icons';
import { useMeetingManager } from '../../../../src';

import { useContentShareContext } from '../providers/ContentShareProvider';
import IconButton from '../components/IconButton';
import ButtonGroup from '../components/ButtonGroup';

const ContentShareControl: React.FC = () => {
  const meetingManager = useMeetingManager();
  const [isScreenSharePaused, setIsScreenSharePaused] = useState(false);
  const { isLocalUserSharing } = useContentShareContext();

  const toggleScreenShare = async (): Promise<void> => {
    if (isLocalUserSharing) {
      meetingManager?.stopContentShare();
    } else {
      await meetingManager?.startContentShare();
    }
  };

  const togglePauseScreenShare = (): void => {
    if (!isLocalUserSharing) {
      return;
    }
    setIsScreenSharePaused(!isScreenSharePaused);
    if (isScreenSharePaused) {
      meetingManager?.audioVideo?.unpauseContentShare();
    } else {
      meetingManager?.audioVideo?.pauseContentShare();
    }
  };

  return (
    <>
      <ButtonGroup>
        <IconButton
          icon={isLocalUserSharing ? faEye : faEyeSlash}
          onClick={toggleScreenShare}
        />
        <IconButton
          disabled={!isLocalUserSharing}
          icon={isScreenSharePaused ? faPlay : faPause}
          onClick={togglePauseScreenShare}
        />
      </ButtonGroup>
    </>
  );
};

export default ContentShareControl;
