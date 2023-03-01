import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PhaseScreen } from "../screens/PhaseScreen";
import RandomFactScreen from "../screens/RandomFactScreen";

export function MainRouter() {
  const router = createBrowserRouter([
    { path: "/", element: <PhaseScreen /> },
    { path: "random-fact", element: <RandomFactScreen /> },
  ]);
  return <RouterProvider router={router} />;
}
