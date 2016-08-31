import { getHeaderData }       from '../middleware/api';
let counter = 0;

export const getHeaderContent = () => {
  getHeaderData()
  .then((data) => {
    console.log(data);
  });
  return {
    type: 'GET_HEADER_CONTENT',
    title: data.header.title
  };
};

export const getFooterContent = () => {
  const year = new Date().getFullYear();
  const footerText = `\u00A9 ${year} All Rights Reserved`;
  return {
    type: 'GET_FOOTER_CONTENT',
    title: footerText
  };
};
