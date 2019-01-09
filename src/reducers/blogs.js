const blogs = process.env.BLOGS
const defaultState = []
export default function blogsReducer(state=defaultState, action) {
    switch (action.type){
        default:
            return blogs
    }
}