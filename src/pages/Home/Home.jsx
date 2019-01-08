import React from 'react';
import Tab from 'components/Tab';
import Routes from './Routes';

const tabs = [
    {
        id: 'blogs',
        name: 'Blogs',
        url: '/blogs'
    },
    {
        id: 'archives',
        name: 'Archives',
        url: '/archives'
    },
    {
        id: 'aboutme',
        name: 'About me',
        url: '/aboutme'
    }
]

export default function Home(){
    return (
        <div>
            <div className="uk-container uk-margin-top uk-margin-bottom">
                <h1>MichaelDuo</h1>
                <Tab tabs={tabs}/>
                <Routes/>
            </div>
        </div>
    )
}