import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Setting} from "./components/Setting/Setting";
import {Music} from "./components/Music/Music";
import {Route, BrowserRouter, Routes} from "react-router-dom";



function App() {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar />
                <div className='app-wrapper-content'>
                   <Routes>
                        <Route path="profile" element={<Profile/>}/>
                        <Route path="dialogs" element={<Dialogs/>}/>
                        <Route path="news" element={<News/>}/>
                        <Route path="setting" element={<Setting/>}/>
                        <Route path="music" element={<Music/>}/>
                   </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
