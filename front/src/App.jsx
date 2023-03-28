import { AppRouter } from "./routes/AppRouter";
import { Header } from './common';

const App = ()=> {
  return (<>
    <Header/>
    <AppRouter />
  </>
    
  );
}

export default App;
