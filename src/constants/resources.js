const makeResource = resource => ({
    RESOURCE: resource,
    SET: `${resource}_SET`,
    CLEAR: `${resource}_CLEAR`,
    LOADING: `${resource}_LOADING`,
    LOADING_DONE: `${resource}_LOADING_DONE`,
    UPDATING: `${resource}_UPDATING`,
    UPDATING_DONE: `${resource}_UPDATING_DONE`,
})

export const BLOGS = makeResource('BLOGS');
export const BLOG = makeResource('BLOG');
export const RESUME = makeResource('RESUME');