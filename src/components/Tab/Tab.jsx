import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class Tab extends PureComponent {
    render(){
        const {tabs, onSelect, selected} = this.props

        const getTab = (tab, index) => {
            return (
                <li 
                    className={selected===index ? 'uk-active' : ''}
                    onClick={e => {
                        e.stopPropagation();
                        onSelect(index)
                    }} 
                    key={`${index}-${tab.id}`}
                >
                    <a onClick={e=>e.preventDefault()}>{tab.name}</a>
                </li>
            )
        }
    
        return (
            <div className="uk-tab uk-flex-right">
                {tabs.map((tab, index)=>getTab(tab, index))}
            </div>
        )
    }
}

Tab.propTypes = {
    tabs: PropTypes.array,
    onSelect: PropTypes.func,
    selected: PropTypes.number,
}

Tab.defaultProps = {
    tabs: [],
    onSelect: function(){},
    selected: 0
}

export default Tab