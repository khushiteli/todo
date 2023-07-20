const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry); //measures visual stability during the loading phase so that we get which can be a frustrating experience for users
      getFID(onPerfEntry); //how much time it takes to respont on first user intraction
      getFCP(onPerfEntry); //how much time it takes to paint first component
      getLCP(onPerfEntry); //how much time took be largest component to paint
      getTTFB(onPerfEntry); //how much time it takes for the first byte of data to be received from the server , low value means fast responce
    });
  }
};

export default reportWebVitals;