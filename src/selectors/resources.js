export const getResource = (state, resource) => {
    return state.resources[resource.RESOURCE].data
}

export const isResourceLoading = (state, resource) => {
    return state.resources[resource.RESOURCE].loading
}