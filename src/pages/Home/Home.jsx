import React from 'react';
import Tabs from 'components/Tabs';
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
                <Tabs tabs={tabs} onSelect={(index)=>console.log(index)}/>
                <Routes/>
            </div>
        </div>
    )
}