const header = (state, action) => {
  console.log('Header',state);
  if (state) {
    switch (action.type) {
      case 'GET_FOOTER_CONTENT':
        return {
          ...state,
          header: {
            title: action.title
          }
        };
        break;
      default:
        return state;
    }
  } else {
    return {
      header: {
        title: 'Initial Title'
      }
    }
  }
}

export default header;
