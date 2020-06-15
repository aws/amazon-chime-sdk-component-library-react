export type SelectOptionsType = {
  value: string | number;
  label: string;
};

export default function getFormattedOptionsForSelect(
  jsonObject: any
): SelectOptionsType[] {
  const formattedJSONObject = Object.entries(jsonObject).map(entry => ({
    value: entry[0],
    label: entry[1] as string,
  }));
  return formattedJSONObject;
}
