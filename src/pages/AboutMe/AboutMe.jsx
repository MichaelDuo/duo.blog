import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Spinner from 'components/Spinner'

export default class AboutMe extends PureComponent {
    static propTypes = {
        resume: PropTypes.object,
        loading: PropTypes.bool,
        loadResume: PropTypes.func.isRequired,
    }

    static defaultProps = {
        resume: { },
        loading: true
    }
    
    componentDidMount(){
        this.props.loadResume()
    }
    render(){
        const {resume, loading} = this.props
        if(loading){
            return <Spinner/>
        }
        return (
            <div className="uk-animation-slide-top-small">
                <div dangerouslySetInnerHTML={{__html: resume.html}} />
            </div>
        )
    }
}