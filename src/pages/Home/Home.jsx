import React from 'react';
import Tab from 'components/Tab';
import Routes from './Routes';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import githubIcon from 'icons/github.svg'

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
                <div className="uk-margin-small-bottom uk-flex uk-flex-between">
                    <Link to="/" className="uk-text-large uk-link-muted">
                        Yuxi Dong
                    </Link>
                    <a href="https://www.github.com/MichaelDuo" target="_blank" rel="noopener noreferrer" className="uk-link-muted">
                        <img uk-svg="" alt="github" src={githubIcon} />
                    </a>
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