import "./App.css";
import Connect from "./components/connect";
import Connect2 from "./components/connect2";
import Connect3 from "./components/connect3";
import Connect4 from "./components/connect4";
import Connect5 from "./components/connect5";
import Connect6 from "./components/connect6";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootlayouts from "./layouts/rootlayouts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayouts />}>
      <Route path="connect" element={<Connect />} />
      <Route path="connect2" element={<Connect2 />} />
      <Route path="connect3" element={<Connect3 />} />
      <Route path="connect4" element={<Connect4 />} />
      <Route path="connect5" element={<Connect5 />} />
      <Route path="connect6" element={<Connect6 />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
