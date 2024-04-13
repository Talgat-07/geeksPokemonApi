import HomePage from "../pages/HomePage/HomePage.tsx";
import DetailsPage from "../pages/DetailsPage/DetailsPage.tsx";

export const routeConfig = [
  {
    path: "/",
    element: HomePage,
  },
  {
    path: "details/:name",
    element: DetailsPage,
  },
];
