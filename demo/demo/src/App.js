import logo from './logo.svg';
import './App.css';
import {ListBook} from "./conponent/listBook";
import {CreateBook} from "./conponent/createBook";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return(
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ListBook/>}/>
            <Route path='/create' element={<CreateBook/>}/>
          </Routes>
        </BrowserRouter>
      </>
  )
}

export default App;
