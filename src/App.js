import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import Catalog from "./components/Catalog"

const App = () => {
  return (
    <Provider store={store}>
      <Catalog />
    </Provider>
  );
};

export default App;
