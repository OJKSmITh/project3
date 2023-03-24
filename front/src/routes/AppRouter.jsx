import { Routes, Route } from "react-router-dom";
import { Main, Community, Music, Signin, Signup} from '../pages'

export const AppRouter = () => {
    
    return <>
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/Community" element={<Community/>}/>
            <Route path="/Music" element={<Music/>}/>
            <Route path="/signin" element={<Signin/>}/>
        </Routes>
    </>
}