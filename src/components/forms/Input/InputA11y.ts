export const getInputA11yProps = (error?: string, required?: boolean) => ({
  'aria-invalid': !!error,
  'aria-required': required,
  'aria-describedby': error ? 'input-error' : undefined,
});
