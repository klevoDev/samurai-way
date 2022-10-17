import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet} from "react-router-dom";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route >
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/dialogs" element={<Dialogs/>}/>
            <Route path="/news" element={<News/>}/>
        </Route>
    )
);

function App() {
    return (
            <div className="app-wrapper">
                <Header/>
                <NavBar />
                <div className='app-wrapper-content'>
                    <RouterProvider router={router} />
                    <Outlet />
                </div>
            </div>
    );
}

export default App;
