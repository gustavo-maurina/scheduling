export function getRequestError(err: any) {
  console.log(err);

  const formattedError = JSON.parse(err?.request?.response) || undefined;

  return formattedError;
}
