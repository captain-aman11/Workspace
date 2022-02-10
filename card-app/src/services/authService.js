export async function login(email, password) {
  localStorage.setItem(email, password);
}

export function logout() {
  localStorage.removeItem(localStorage.getItem(email));
}

export function getCurrentUser() {
  try {
    return localStorage.getItem(email);
  } catch (ex) {
    return null;
  }
}

export default {
  login,
  logout,
  getCurrentUser,
};
