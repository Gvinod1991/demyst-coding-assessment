//Here we can extend the error handling by checking the response status
export const handleError = (error: unknown) => {
  if (error instanceof Error) {
    throw new Error(`${error.message}`);
    return;
  }
  throw new Error("Failed to get data");
};