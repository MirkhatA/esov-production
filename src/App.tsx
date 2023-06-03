import {Link, Route, Routes} from "react-router-dom";
import "./styles/index.scss";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {Suspense, useContext, useState} from "react";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";


const App = () => {
    const {theme, toggleTheme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>click</button>

            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/"} element={<MainPageAsync/>}/>
                    <Route path={"/about"} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
