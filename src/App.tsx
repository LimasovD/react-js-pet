import React from 'react';
import {Route, Routes} from "react-router-dom";
import {ProductPage} from "./pages/ProductPage";
import {AboutPage} from "./pages/AboutPage";
import {Navigation} from "./compnents/Navigation";

function App() {
    return (
        <>
            <Navigation></Navigation>
            <Routes>
                <Route
                    path="/"
                    element={<ProductPage></ProductPage>}>
                </Route>
                <Route
                    path="/about"
                    element={<AboutPage></AboutPage>}>
                </Route>
            </Routes>
        </>
    )
}

export default App;
