import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Setting} from "./components/Setting/Setting";
import {Music} from "./components/Music/Music";
import {Best} from "./components/bestFriends/Best";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import {addPost, RootStateType} from "./redux/state";
import {NewsList} from "./components/News/newsList/NewsList";
import {NewsItem} from "./components/News/newsList/newsItem/NewsItem";

type AppPropsType = {
    state: RootStateType
}

const APP_ROUTES = {
    PROFILE: 'profile'
}

function App(props: AppPropsType) {
    let messages = props.state.dialogs.messages
    let dialogs = props.state.dialogs.dialog
    let posts = props.state.profile.posts
    let news = props.state.news

        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <Header/>
                    <NavBar />
                    <div className='app-wrapper-content'>
                       <Routes>
                            <Route path="profile" element={<Profile posts={posts} addPost={addPost}/>}/>
                            <Route path="dialogs/*" element={<Dialogs messages={messages} dialogs={dialogs}/>}/>
                            <Route path="news/*" element={<News newsList={news}/>}/>
                            <Route path="/newsItem/:id" element={<NewsItem />}/>
                            <Route path="setting" element={<Setting/>}/>
                            <Route path="music" element={<Music/>}/>
                            <Route path="best" element={<Best/>}/>
                       </Routes>
                    </div>
                </div>
            </BrowserRouter>
        );
}

export default App;
