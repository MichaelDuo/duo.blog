import React from 'react';
import Tab from 'components/Tab';
import Routes from './Routes';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

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

export default function Home({history}){
    const {pathname} = history.location
    let selected = tabs.findIndex(tab => tab.url === pathname)
    selected = selected < 0 ? 0 : selected
    return (
        <div>
            <div className="uk-container uk-margin-top uk-margin-bottom">
                <div className="uk-margin-small-bottom">
                    <Link to="/" className="uk-text-large uk-link-muted">
                        MichaelDuo
                    </Link>
                </div>
                <Tab tabs={tabs} selected={selected} onSelect={(index)=>{history.push(tabs[index].url)}}/>
                <div className="uk-margin-top">
                    <Routes/>
                </div>
            </div>
        </div>
    )
}

Home.propTypes = {
    history: PropTypes.object.isRequired
}