function createKey(name) {
  return `applover:${name}`;
}

function getLocalStorage() {
  return localStorage;
}

function getSessionStorage() {
  return sessionStorage;
}

export function setLocalItem(name, value) {
  getLocalStorage().setItem(createKey(name), JSON.stringify(value));
}

export function getLocalItem(name, defaultValue) {
  const value = getLocalStorage().getItem(createKey(name));

  if (!value) return defaultValue;
  try {
    return JSON.parse(value);
  } catch (err) {
    return value;
  }
}

export function removeLocalItem(name) {
  getLocalStorage().removeItem(createKey(name));
}

export function setSessionItem(name, value) {
  getSessionStorage().setItem(createKey(name), JSON.stringify(value));
}

export function getSessionItem(name, defaultValue) {
  const value = getSessionStorage().getItem(createKey(name));
  if (!value) return defaultValue;
  try {
    return JSON.parse(value);
  } catch (err) {
    return value;
  }
}

export function removeSessionItem(name) {
  getSessionStorage().removeItem(createKey(name));
}
