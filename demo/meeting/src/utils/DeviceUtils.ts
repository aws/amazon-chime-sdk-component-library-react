export const populateDeviceList = (
  elementId: string,
  genericName: string,
  devices: MediaDeviceInfo[],
  additionalOptions: string[]
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
    }
  }
  if (!list.firstElementChild) {
    const option = document.createElement('option');
    option.text = 'Device selection unavailable';
    list.appendChild(option);
  }
}
