import { Routes, Route, RouteProps } from "react-router-dom";
import { PATH } from "src/constants/index";

interface PrivateRouteIProps {
  isLoggedIn: boolean;
}

const PrivateRoute = ({
  isLoggedIn,
  ...rest
}: RouteProps & PrivateRouteIProps) => {
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
        element={<></>}
      />
    </Routes>
  );
}

export default Routers;
