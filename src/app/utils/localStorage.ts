import "client-only";

const SIXMONTHSINMILLISECONDS = 6 * 30 * 24 * 60 * 60 * 1000;

export function getLocalStorage(key: string) {
  const itemStr = localStorage.getItem(key);

  if (itemStr !== null && itemStr !== "undefined") {
    const now = new Date();
    const item = JSON.parse(itemStr);
    // if the item is expired, delete the item from localStorage
    if (now.getTime() > item?.expiry) {
      localStorage.removeItem(key);
      return null;
    }
    return item.value;
  }
  return null;
}

export function setLocalStorage(key: string, value: boolean | null) {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + SIXMONTHSINMILLISECONDS,
  };
  localStorage.setItem(key, JSON.stringify(item));
}
