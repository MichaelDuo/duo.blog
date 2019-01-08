const fs = require('fs')
const path = require('path')
const paths = require('../paths')

const blogsPath = path.resolve(paths.appPublic, 'blogs')

module.exports = function getBlogs(){
    let blogFiles = []
    if(fs.existsSync(blogsPath)){
        blogFiles = fs.readdirSync(path.resolve(paths.appPublic, 'blogs'))
    } else {
        console.warn('Blogs directory is not found.')
    }
    const blogs = blogFiles.map(filename => {
        return {
            title: filename,
            url: path.resolve(paths.servedPath, 'blogs', filename)
        }
    })
    return blogs
}