const footer = (state, action) => {
  if (state) {
    switch (action.type) {
      case 'GET_FOOTER_CONTENT':
        return {
          title: action.title
        };
      default:
        return state;
    }
  } else {
    return {
      title: 'Initial Footer Title'
    };
  }
};

export default footer;
