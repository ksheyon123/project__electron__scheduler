import { Routes, Route, RouteProps } from "react-router-dom";
import { Layout } from "./components";
import { LoginPage } from "./pages";
import { PATH } from "src/constants/index";

interface PrivateRouteIProps {
  isLoggedIn: boolean;
}

const PrivateRoute = ({
  isLoggedIn,
  ...rest
}: RouteProps & PrivateRouteIProps): React.ReactElement => {
  return (
    <Route
      {...rest}
    />
  )
}

const Routers = () => {

  const isLoggedIn = true;
  return (
    <Routes>
      <PrivateRoute
        isLoggedIn={isLoggedIn}
        path={PATH.LOGIN}
        element={
          <Layout>
            <LoginPage />
          </Layout>
        }
      />
    </Routes>
  );
}

export default Routers;
