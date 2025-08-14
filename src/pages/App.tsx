import "../assets/index.css";
import store from "../lib/store.ts";

import { Provider } from "react-redux";
import InboxScreen from "../components/InboxScreen.tsx";

function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}

export default App;
