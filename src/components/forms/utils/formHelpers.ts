export const getFormValues = (form: HTMLFormElement): Record<string, any> => {
  const formData = new FormData(form);
  return Object.fromEntries(formData.entries());
};

export const setFormValues = (form: HTMLFormElement, values: Record<string, any>) => {
  Object.entries(values).forEach(([name, value]) => {
    const element = form.elements.namedItem(name) as HTMLInputElement;
    if (element) element.value = String(value);
  });
};

export const resetForm = (form: HTMLFormElement) => {
  form.reset();
};

export const isFormValid = (form: HTMLFormElement): boolean => {
  return form.checkValidity();
};
