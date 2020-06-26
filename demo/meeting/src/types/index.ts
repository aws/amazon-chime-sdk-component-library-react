export type RosterAttendeeType = {
  id: string;
  name: string;
};

export type RosterType = {
  [attendeeId: string]: RosterAttendeeType;
};

export type FormattedDeviceType = {
  deviceId: string;
  label: string;
};

export type DeviceType = MediaDeviceInfo | FormattedDeviceType;

export type SelectedDeviceType = string | null;

export type DeviceTypeContext = {
  devices: DeviceType[];
  selectedDevice: SelectedDeviceType;
};

export type LocalVideoToggleContextType = {
  isVideoEnabled: boolean;
  toggleVideo: () => Promise<void>;
};

export type DeviceConfig = {
  additionalDevices?: boolean;
};
