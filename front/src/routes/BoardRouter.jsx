import { Routes, Route } from "react-router-dom";
import { View } from "../pages/board/view";

export const BoardRouter = () => {
  return (
    <>
        <Routes>
            <Route path="view" element={<View />}></Route>
        </Routes>
    </>
  );
};
