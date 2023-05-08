import logo from './logo.svg';
import './App.css';
import {BookList} from "./components/BookList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {BookCreate} from "./components/BookCreate";

function App() {
  return(
          <>
            <BrowserRouter>
              <Routes>
                <Route path='' element={<BookList/>}/>
                <Route path='/create' element={<BookCreate/>}/>
              </Routes>
            </BrowserRouter>
          </>
      )
}

export default App;
