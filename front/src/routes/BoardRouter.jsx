import { Routes, Route } from "react-router-dom";
import { List, Modify, View, Write  } from '../pages/board';


export const BoardRouter = () => {
  return (
    <>
        <Routes>
            <Route path="view" element={<View />}></Route>
            <Route path="list" element={<List/>}></Route>
            <Route path="view/:boardIdx/modify" element={<Modify/>}></Route>
            <Route path ="write" element={<Write />}></Route>

        </Routes>
    </>
  );
};
