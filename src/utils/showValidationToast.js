// utils/showValidationToast.js
export const showValidationToast = (condition, message) => {
  if (!condition) {
    toast.error(message);
    return false;
  }
  return true;
};
