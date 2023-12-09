export const upToLocalStorage = (key, data) => {
    return window.localStorage.setItem(key, JSON.stringify(data));
};

export const getFromLocalStorage = (key) => {
    let dataJson = localStorage.getItem(key);
    let data = [];
    if (dataJson !== null) {
        data = JSON.parse(dataJson);
    }
    return data;
};

export const removeItemFromLocalStorate = (key) => {
    return window.localStorage.removeItem(key);
};
