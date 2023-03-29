import { Routes, Route } from "react-router-dom";
import { View, Write } from "../pages/board";

export const BoardRouter = () => {
  return (
    <>
        <Routes>
            <Route path="view" element={<View />}></Route>
            <Route path ="write" element={<Write />}></Route>
        </Routes>
    </>
  );
};
