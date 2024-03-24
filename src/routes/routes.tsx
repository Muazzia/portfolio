import App from "@/App";
import MainPage from "@/routes/MainPage";
import WorkPage from "@/components/WorkPage";
import { createBrowserRouter } from "react-router-dom";
import Resume from "./Resume";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/work", element: <WorkPage /> },
      { path: "/resume", element: <Resume /> },
    ],
  },
]);

export default router;
