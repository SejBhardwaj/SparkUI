export const serializeForm = (data: Record<string, any>): string => {
  return JSON.stringify(data);
};

export const deserializeForm = (json: string): Record<string, any> => {
  try {
    return JSON.parse(json);
  } catch {
    return {};
  }
};

export const toFormData = (data: Record<string, any>): FormData => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, String(value));
  });
  return formData;
};
