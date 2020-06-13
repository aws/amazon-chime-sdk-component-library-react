import { OptionItem } from '../components/Dropdown';

export const populateDeviceList = (
  elementId: string,
  genericName: string,
  devices: MediaDeviceInfo[],
  additionalOptions: string[],
  callback?: (name: string) => void
): void => {
  const list = document.getElementById(elementId) as HTMLSelectElement;
  while (list.firstElementChild) {
    list.removeChild(list.firstElementChild);
  }
  for (let i = 0; i < devices.length; i++) {
    const option = document.createElement('option');
    list.appendChild(option);
    option.text = devices[i].label || `${genericName} ${i + 1}`;
    option.value = devices[i].deviceId;
    callback && callback(devices[i].deviceId);
  }
  if (additionalOptions.length > 0) {
    const separator = document.createElement('option');
    separator.disabled = true;
    separator.text = '──────────';
    list.appendChild(separator);
    for (const additionalOption of additionalOptions) {
      const option = document.createElement('option');
      list.appendChild(option);
      option.text = additionalOption;
      option.value = additionalOption;
      callback && callback(additionalOption);
    }
  }
  if (!list.firstElementChild) {
    const option = document.createElement('option');
    option.text = 'Device selection unavailable';
    list.appendChild(option);
  }
}

export const createOptions = (
  genericName: string,
  devices: MediaDeviceInfo[] | null,
  additionalOptions: string[]
): OptionItem[] => {
  let options: OptionItem[] = [];
  if (!devices || !devices.length || !additionalOptions.length) {
    options.push({ name: "noChoice", label: 'Device selection unavailable' });
    return options;
  }
  for (let i = 0; i < devices.length; i++) {
    const label = devices[i].label || `${genericName} ${i + 1}`;
    const option = {
      name: label,
      label: label,
      // onClick: () => callback(devices[i].deviceId)
    }
    options.push(option);
  }
  if (additionalOptions.length > 0) {
    const divid = { name: "divid", label: '──────────' };
    options.push(divid);
    for (const additionalOption of additionalOptions) {
      const opt = {
        name: additionalOption,
        label: additionalOption,
        // onClick: () => callback(additionalOption)
      }
      options.push(opt);
    }
  }
  return options;
}
