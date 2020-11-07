import React from "react";
import { Provider } from "react-redux";

import { store } from "store/__mock__";

const reduxDecorator = (Str: any) => {
  return (
    <Provider store={store}>
      <Str />
    </Provider>
  );
};

export { reduxDecorator };
