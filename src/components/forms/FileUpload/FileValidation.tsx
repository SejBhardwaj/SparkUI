// File Validation Utilities
export const FileValidation = {
  maxSize: 10 * 1024 * 1024, // 10MB
  allowedTypes: ['image/*', 'application/pdf'],
  validateFile: (file: File) => {
    return file.size <= 10 * 1024 * 1024;
  }
};
