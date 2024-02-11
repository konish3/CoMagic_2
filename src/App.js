import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AUTH_ROUTES, MAIN_ROUTES } from "./helpers/constants/constants";
import { Landing } from "./pages/AuthPages/LandingPage/Landing";
import { Registration } from "./pages/AuthPages/RegistrationPage/Registration";
import { Login } from "./pages/AuthPages/AuthorizationPage/Login";
import { HotelFeed } from "./pages/MainPages/HotelFeedPage/HotelFeed";
import { AboutHotel } from "./pages/MainPages/AboutHotelPage/AboutHotel";
import { Profile } from "./pages/MainPages/ProfilePage/Profile";

function App() {
  return (
    <div className="main">
      <Routes>
        <Route element={<Landing />} path={AUTH_ROUTES.LANDING} />
        <Route element={<Registration />} path={AUTH_ROUTES.REGISTRATION} />
        <Route element={<Login />} path={AUTH_ROUTES.LOGIN} />
        <Route element={<HotelFeed />} path={MAIN_ROUTES.HOTEL_FEED} />
        <Route
          element={<AboutHotel />}
          path={`${MAIN_ROUTES.ABOUT_HOTEL}/:id`}
        />
        <Route element={<Profile />} path={MAIN_ROUTES.USER_PROFILE} />
      </Routes>
    </div>
  );
}

export default App;
