import { FormattedDeviceType } from "../types";
import { Device, DefaultDeviceController } from "amazon-chime-sdk-js";

export const getFormattedDropdownDeviceOptions = (jsonObject: any): FormattedDeviceType[] => {
  const formattedJSONObject = Object.entries(jsonObject).map(entry => ({
    deviceId: entry[0].toLowerCase(),
    label: entry[1] as string,
  }));
  return formattedJSONObject;
};

export const videoInputSelectionToDevice = (deviceId: string): Device => {
  if (deviceId === 'blue') {
    return DefaultDeviceController.synthesizeVideoDevice('blue');
  }
  if (deviceId === 'smpte') {
    return DefaultDeviceController.synthesizeVideoDevice('smpte');
  }
  if (deviceId === 'none') {
    return null;
  }
  return deviceId;
};

export const audioInputSelectionToDevice = (deviceId: string): Device => {
  if (deviceId === '440') {
    return DefaultDeviceController.synthesizeAudioDevice(440);
  }
  if (deviceId === 'none') {
    return null;
  }
  return deviceId;
};
