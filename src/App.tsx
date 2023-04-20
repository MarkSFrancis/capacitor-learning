import { setupIonicReact } from "@ionic/react";
import { IndexPage } from "./pages";
import "./styles";

setupIonicReact();

export const App = () => {
  return <IndexPage />;
};
