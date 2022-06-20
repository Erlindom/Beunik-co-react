import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";


class App extends Component {
    render() {
        return (
          <div className="App">
            <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
          </div>
        )
    }
}

export default App;
