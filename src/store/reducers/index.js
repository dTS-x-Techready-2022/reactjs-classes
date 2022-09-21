export const initialState = true;

export const showArticleReducer = (state, action) => {
  switch (action.type) {
    case 'false':
      return true;
    case 'true':
      return false;
    default:
      return null;
  }
};