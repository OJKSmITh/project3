import { AppRouter } from "./routes/AppRouter";
import { Header } from './common';
import { useLocation } from 'react-router-dom';



const App = ()=> {
  return (<>
    <Header/>
    <AppRouter />
  </>
    
  );
}

export default App;
