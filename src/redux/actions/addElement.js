export const setAdd = (path, value) => ({
  type: 'ADD',
  payload: [path, value],
});
