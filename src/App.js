import { ThemeProvider } from 'styled-components';
import { useContext} from 'react';

//@componentes
import Loading from './components/Loading/';
import Hero from './components/Hero';
import Tarefas from './components/Tarefas/';

//@context
import GlobalContext from './Context/GlobalContext';

//@Estilos
import GlobalStyles from './components/Estilos/EstilosGlobais/GlobalStyles';

//@Toastify Notification
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//@ App Component
function App() {

  const {dispatch, state} = useContext(GlobalContext);

  if(state.loading){
    return(
      <Loading/>
    )
  }
  return (
    <ThemeProvider theme={ state.theme }>
        <GlobalStyles/>
        <Hero/>
        <Tarefas/>
        <ToastContainer/>
    </ThemeProvider>
  );
}

export default App;
