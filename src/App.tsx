import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img
                    src="https://avatars.mds.yandex.net/i?id=fbf7a4862c0f16a6a692d97f6647a536-5750239-images-thumbs&n=13"
                    alt="Logo company."/>
            </header>
            <nav className="nav">
                <div>
                    <a href="">Profile</a>
                </div>
                <div>
                    <a href="">Messages</a>
                </div>
                <div>
                    <a href="">News</a>
                </div>
                <div>
                    <a href="">Music</a>
                </div>
                <div>
                    <a href="">Setting</a>
                </div>
            </nav>
            <div className="content">
                <div>
                    <img src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg" alt="Beach."/>
                </div>
                <div>
                    ava + description
                    <img src="https://avatars.mds.yandex.net/i?id=2a0000017a11da9cb45d4eb598fc5967415f-4576345-images-thumbs&n=13" alt="Fermer."/>
                </div>
                <div>
                    my post
                    <div>
                        new post
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
