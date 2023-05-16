import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom"
import Product from './components/Product';
import ProductCreate from './components/ProductCreate';
import { ToastContainer } from "react-toastify"
import ProductEdit from "./components/ProductEdit"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Product />}></Route>
        <Route path='/create' element={<ProductCreate />}></Route>
        <Route path='/edit/:id' element={<ProductEdit />}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
