
import './App.css';
import {ListBook} from "./conponent/listBook";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CreateBook} from "./conponent/createBook";

function App() {
  return(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListBook/>}/>
            <Route path='/create' element={<CreateBook/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
