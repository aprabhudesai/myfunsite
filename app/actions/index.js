let counter = 0;
export const getHeaderContent = () => {
  return {
    type: 'GET_HEADER_CONTENT',
    header: {
      title: 'title ' + counter++
    }
  };
};

export const getFooterContent = () => {
  const year = new Date().getFullYear();
  const footerText = `\u00A9 ${year} All Rights Reserved`;
  return {
    type: 'GET_FOOTER_CONTENT',
    footer: {
      title: footerText
    }
  };
};
