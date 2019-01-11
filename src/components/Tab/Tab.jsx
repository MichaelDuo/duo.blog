import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router'

class Tab extends PureComponent {
    render(){
        const {tabs, onSelect, history} = this.props
        const path = history.location.pathname
        const activeTabIndex = tabs.findIndex(tab=>path === tab.url)
        const onTabClick = (index) => {
            history.push(tabs[index].url)
            onSelect(index)
        }

        const getTab = (tab, index) => {
            return (
                <li onClick={() => onTabClick(index)} key={`${index}-${tab.id}`}>
                    <a href="">{tab.name}</a>
                </li>
            )
        }
    
        return (
            <div uk-tab={`active: ${activeTabIndex}`} className="uk-flex-right">
                {tabs.map((tab, index)=>getTab(tab, index))}
            </div>
        )
    }
}

Tab.propTypes = {
    tabs: PropTypes.array,
    onSelect: PropTypes.func,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
}

Tab.defaultProps = {
    tabs: [],
    onSelect: function(){}
}

export default withRouter(Tab)