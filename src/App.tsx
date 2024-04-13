import { Route, Routes } from "react-router-dom";
import { routeConfig } from "./routes/routeConfig.ts";
import { MantineProvider } from "@mantine/core";

const App = () => {
  return (
    <MantineProvider>
      <Routes>
        {routeConfig.map((el) => (
          <Route key={el.path} path={el.path} element={<el.element />} />
        ))}
      </Routes>
    </MantineProvider>
  );
};

export default App;
