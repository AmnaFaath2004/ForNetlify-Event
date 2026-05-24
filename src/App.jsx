import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Naavs from './components/Navvs';
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Naavs/>
      <Routes>
        <Route path=''/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
