const footer = (state, action) => {
  console.log('Footer', state);
  if (state) {
    switch (action.type) {
      case 'GET_FOOTER_CONTENT':
        return {
          ...state,
          footer: {
            title: action.title
          }
        };
        break;
      default:
        return state;
    }
  } else {
    return {
      footer: {
        title: 'Initial Title'
      }
    }
  }
};

export default footer;
