import React, { Component } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemPage from './pages/Item';
import CustomerPage from './pages/Customer';

class App extends Component{
  render(){
    return (
        <BrowserRouter>
          <div>
            <NavBar />
          </div>
          <Routes>
            <Route path="/" >
              <Route index element={<ItemPage />} />
              <Route path="customer" element={<CustomerPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
    )
  }
}

export default App;
