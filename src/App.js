import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/login';
import ProtectedPage from './components/ProtectedPage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<ProtectedPage><Home /></ProtectedPage>} />
       <Route path='/login' element={<Login/>}/>
       <Route path='/register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    


    </div>
  );
}

export default App;
