import { Provider } from "react-redux";
import Body from "./Components/Body";
import AppStore from "./Utils/appStore";

function App() {
  return (
    <Provider store={AppStore}>
      <Body />
    </Provider>
  );
}

export default App;
