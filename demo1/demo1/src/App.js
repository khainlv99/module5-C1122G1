import './App.css';
import {ListProduct} from "./conponent/ListProduct";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {EditProduct} from "./conponent/EditProduct";
import {CreateProduct} from "./conponent/CreateProduct";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ListProduct/>}/>
                <Route path='/edit/:id' element={<EditProduct/>}/>
                <Route path='/create' element={<CreateProduct/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
