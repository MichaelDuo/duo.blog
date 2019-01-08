const fs = require('fs')
const path = require('path')
const paths = require('../paths')

const blogsPath = path.resolve(paths.appPublic, 'blogs')

const MARK_DOWN = /(.*)\.md$/

module.exports = function getBlogs(){
    let blogFiles = []
    if(fs.existsSync(blogsPath)){
        blogFiles = fs.readdirSync(path.resolve(paths.appPublic, 'blogs')).filter(filename=>{
            return MARK_DOWN.test(filename)
        })
    } else {
        console.warn('Blogs directory is not found.')
    }
    const blogs = blogFiles.map(filename => {
        return {
            id: filename.slice(0, -3),
            title: filename,
            url: path.resolve(paths.servedPath, 'blogs', filename)
        }
    })
    return blogs
}