let counter = 0;
export const getHeaderContent = () => {
  return {
    type: 'GET_HEADER_CONTENT',
    title: 'title ' + counter++
  };
};
