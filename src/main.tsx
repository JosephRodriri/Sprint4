import { render } from "preact";
import { App } from "./app.tsx";
import "./normalize.css";
import { Provider } from "react-redux";
import { store } from "./redux/store/store.js";


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")!
);
