export const set = (resource, payload) => ({
    type: resource.SET,
    payload
})

export const clear = (resource) => ({
    type: resource.CLEAR,
    payload: null
})

export const startLoading = (resource) => ({
    type: resource.LOADING,
    payload: null
})

export const stopLoading = (resource) => ({
    type: resource.LOADING_DONE,
    payload: null
})