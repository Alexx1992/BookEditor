export const loadState = () => {
  try {
    const state = localStorage.getItem('state');
    return state === null ? undefined : JSON.parse(state);

  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);

  } catch(err) {}
};