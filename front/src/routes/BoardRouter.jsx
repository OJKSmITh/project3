import { Routes, Route } from "react-router-dom";
import { View } from "../pages/board/view";
import { List, Modify  } from '../pages/board';



export const BoardRouter = () => {
  return (
    <>
        <Routes>
            <Route path="view" element={<View />}></Route>
            <Route path="list" element={<List/>}></Route>
            <Route path="view/:boardIdx/modify" element={<Modify/>}></Route>
        </Routes>
    </>
  );
};
