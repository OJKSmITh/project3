import { AppRouter } from "./routes/AppRouter";
import { Header } from './common';
import { useLocation } from 'react-router-dom';

const Navigation = () =>{
  const location = useLocation()
  const headercolor = location.pathname === "/" ? "yellow" : "black";

  return (
    <Header color={headercolor}/>
  )
}


const App = ()=> {
  return (<>
    <Navigation />
    <AppRouter />
  </>
    
  );
}

export default App;
