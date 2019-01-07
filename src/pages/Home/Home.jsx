import React from 'react';

export default function Home(){
    return (
        <div>
            <div className="uk-container uk-margin-top uk-margin-bottom">
                <h1>MichaelDuo</h1>
                <ul uk-tab="swiping: true;" className="uk-flex-right">
                    <li>
                        <a href="">Blogs</a>
                    </li>
                    <li className="uk-active">
                        <a href="">Archives</a>
                    </li>
                    <li>
                        <a href="/c">About me</a>
                    </li>
                </ul>
                <ul className="uk-switcher">
                    <li>Blogs</li>
                    <li>Archives</li>
                    <li>About Me</li>
                </ul>
            </div>
        </div>
    )
}