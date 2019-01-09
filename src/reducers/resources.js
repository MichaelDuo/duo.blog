import * as resources from 'constants/resources'
import {combineReducers} from 'redux'

function resourceReducers(resources){
    return Object.keys(resources).reduce((acc, cur) => {
        const resource = resources[cur]
        const resourceReducer = makeResourceReducer(resource)
        acc[resource.RESOURCE] = resourceReducer
        return acc
    }, {})
}

const defaultResourceState = {
    loading: false,
    updating: [],
    data: null
}

function makeResourceReducer(resource){
    return (state=defaultResourceState, action) => {
        const { SET, LOADING, UPDATING, CLEAR, LOADING_DONE, UPDATING_DONE } = resource
        switch (action.type) {
            case SET:
                return {...state, ...{data: action.payload}}
            case LOADING:
                return {...state, ...{loading: true}}
            case LOADING_DONE:
                return {...state, ...{loading: false}}
            case UPDATING:
                return {...state, ...{updating: action.payload.keys}}
            case UPDATING_DONE:
                return {...state, ...{updating: []}}
            case CLEAR:
                return {...defaultResourceState}
            default:
                return {...defaultResourceState}
        }
    }
}

export default combineReducers(resourceReducers(resources))
