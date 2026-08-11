import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Profile from "./pages/Profile";


function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Register />} />

        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/movie" element={<MovieDetails />} />

        <Route path="/profile" element={<Profile />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;