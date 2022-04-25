/* Methods for saving the state to localstorage */

export const saveToLocalStorage = (state) => {
  try {
    const stringState = JSON.stringify(state);
    window.localStorage.setItem('state', stringState);
  }
  catch(err) {
    console.error('error: ', err);
  }
}

export const loadFromLocalStoraage = () => {
  try {
    const state = window.localStorage.getItem('state');
    if (!state) {
      return undefined;
    }
    return JSON.parse(state);
  }
  catch(err) {
    console.error('error: ', err);
  }
}