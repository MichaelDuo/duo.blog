import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Spinner from 'components/Spinner'

export default class AboutMe extends PureComponent {
    static propTypes = {
        resume: PropTypes.object,
        loadResume: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired,
    }

    static defaultProps = {
        resume: { }
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
            <div dangerouslySetInnerHTML={{__html: resume.html}} />
        )
    }
}