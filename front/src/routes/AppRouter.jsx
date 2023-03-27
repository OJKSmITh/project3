import { Routes, Route } from "react-router-dom";
import { Main, Community, Music, Signin, Signup, Welcome} from '../pages'

export const AppRouter = () => {
    
    return <>
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/community" element={<Community/>}/>
            <Route path="/music" element={<Music/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/welcome" element={<Welcome/>}/>
        </Routes>
    </>
}