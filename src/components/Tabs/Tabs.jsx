import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router'

function Tabs({tabs, onSelect, history} ){

    const onTabClick = (index) => {
        history.push(tabs[index].url)
        onSelect(index)
    }

    const getTab = (tab, index) => {
        return (
            <li key={`${index}-${tab.id}`}>
                <a href="" onClick={() => onTabClick(index)}>{tab.name}</a>
            </li>
        )
    }
    
    return (
        <div uk-tab="" className="uk-flex-right">
            {tabs.map((tab, index)=>getTab(tab, index))}
        </div>
    )
}

Tabs.propTypes = {
    tabs: PropTypes.array,
    onSelect: PropTypes.func,
    history: PropTypes.object.isRequired,
}

Tabs.defaultProps = {
    tabs: [],
    onSelect: function(){}
}

export default withRouter(Tabs)