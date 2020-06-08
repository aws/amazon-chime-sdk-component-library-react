import { useEffect, useState, useContext } from 'react';

import { MeetingManager, MeetingContext } from '../providers/MeetingProvider';
import { DevicePermissionStatus } from '../enums';

export default function useDevicePermissionStatus() {
  const [permission, setPermission] = useState<string>(
    DevicePermissionStatus.UNSET
  );
  const meetingManager: MeetingManager | null = useContext(MeetingContext);
  useEffect(() => {
    const callback = (updatedPermission: string): void => {
      setPermission(updatedPermission);
    };
    meetingManager?.subscribeToDevicePermissionUpdate(callback);
    return () => {
      meetingManager?.unSubscribeFromDevicePermissionUpdate(callback);
    };
  }, []);

  return permission;
}
