const header = (state, action) => {
  if (state) {
    switch (action.type) {
      case 'GET_HEADER_CONTENT':
        return {
          title: action.title
        };
      default:
        return state;
    }
  } else {
    return {
      title: 'Initial Header Title'
    };
  }
};

export default header;
