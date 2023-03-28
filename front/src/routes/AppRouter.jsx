import { Routes, Route } from "react-router-dom";

import { Main, Community, Music, Signin, Signup, Profile, Welcome } from "../pages";
import { BoardRouter } from "./BoardRouter";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/welcome" element={<Welcome/>}/>
        <Route path="/board/*" element={<BoardRouter />}></Route>
      </Routes>

    </>
  );
};
