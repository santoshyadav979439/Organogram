import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
import { store } from './store'
import { Provider } from 'react-redux'
root.render(
  <StrictMode>
    <Provider store={store}>
    <App />
  </Provider>
  </StrictMode>
);
