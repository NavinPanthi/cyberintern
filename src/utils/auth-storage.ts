const USER_DATA_KEY = "user";
const SIGNUP_DATA_KEY = "signup";

export function getUserData() {
  const localStorageData = localStorage.getItem(USER_DATA_KEY);
  const sessionStorageData = sessionStorage.getItem(USER_DATA_KEY);

  try {
    if (localStorageData) return JSON.parse(localStorageData);
    if (sessionStorageData) return JSON.parse(sessionStorageData);
  } catch {
    return null;
  }
}

export function isUserLogin() {
  const localStorageToken = localStorage.getItem(USER_DATA_KEY);
  const sessionStorageToken = sessionStorage.getItem(USER_DATA_KEY);
  const userData = getUserData();

  if (localStorageToken || sessionStorageToken || userData) return true;
  return false;
}

export function resetLoginData() {
  localStorage.clear();
  sessionStorage.clear();
}

export function setUserData(userData: object) {
  if (!userData) return;

  localStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));

  sessionStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));
}

//sign up data functions

export function getSignUpData() {
  const data = localStorage.getItem(SIGNUP_DATA_KEY);
  try {
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

export function setSignUpData(userData: object) {
  if (!userData) return;
  localStorage.setItem(SIGNUP_DATA_KEY, JSON.stringify(userData));
}

export function clearSignUpData() {
  localStorage.removeItem(SIGNUP_DATA_KEY);
}
