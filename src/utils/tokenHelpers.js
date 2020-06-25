const tokenName = "someRandomTokenName";
export const get = () => {
  return localStorage.getItem(tokenName);
};
export const set = (token) => {
  localStorage.setItem(tokenName, token);
};
export const clear = () => {
  localStorage.removeItem(tokenName);
};
