const headerReducer = (state, action) => {
  console.log(action.type);
  return {
    ...state,
    title: 'Header Text'
  };
}

export default headerReducer;
