const header = (state, action) => {
  return {
    ...state,
    title: action.title
  };
}

export default header;
