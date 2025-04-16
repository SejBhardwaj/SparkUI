export interface FormSubmitOptions {
  validate?: boolean;
  resetOnSuccess?: boolean;
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}

export const handleFormSubmit = async (
  data: any,
  submitFn: (data: any) => Promise<any>,
  options: FormSubmitOptions = {}
) => {
  try {
    const result = await submitFn(data);
    options.onSuccess?.(result);
    return { success: true, data: result };
  } catch (error) {
    options.onError?.(error);
    return { success: false, error };
  }
};
