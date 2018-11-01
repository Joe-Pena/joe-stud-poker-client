export const takeAuthToken = () => {
  return localStorage.getItem('authToken');
};

export const insertAuthToken = authToken => {
  try {
      localStorage.setItem('authToken', authToken);
  } catch (e) {}
};

export const eraseAuthToken = () => {
  try {
      localStorage.removeItem('authToken');
  } catch (e) {}
};
