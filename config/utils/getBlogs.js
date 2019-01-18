const fs = require('fs')
const path = require('path')
const paths = require('../paths')
const cheerio = require('cheerio')
const convert = require('../../src/utils/markdown').convert

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
    const blogs = blogFiles.map((filename, index) => {
        const filePath = path.resolve(paths.appPublic, 'blogs', filename)
        const fileData = fs.readFileSync(filePath, 'utf-8')
        const {title, html, attributes} = convert(fileData)
        const $ = cheerio.load(html)
        const content = $('html').text()
        return {
            id: filename.slice(0, -3),
            attributes,
            title,
            url: path.resolve(paths.servedPath, 'blogs', filename),
            preview: content.slice(0, 300)
        }
    })
    return blogs
}