export const successResponse = (data, message = "OK") => ({
  success: true,
  message,
  data,
});

export const errorResponse = (errors, message = "ERROR") => ({
  success: false,
  message,
  errors,
});
