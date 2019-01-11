import React from 'react';
import Tab from 'components/Tab';
import Routes from './Routes';
import {Link} from 'react-router-dom'

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
                <Link to="/" className="uk-text-large uk-margin-bottom uk-link-muted">
                    MichaelDuo
                </Link>
                <Tab tabs={tabs}/>
                <div className="uk-margin-top">
                    <Routes/>
                </div>
            </div>
        </div>
    )
}