const fs = require('fs')
const path = require('path')
const paths = require('../paths')
const showdown = require('showdown')
const cheerio = require('cheerio')
const fm = require('front-matter')
const converter = new showdown.Converter()

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
        const {body} = fm(fileData)
        const $ = cheerio.load(converter.makeHtml(body))
        const titleEl = $($('h1,h2,h3')[0])
        const title = titleEl.text()
        titleEl.remove()
        const content = $('html').text()
        return {
            id: filename.slice(0, -3),
            title,
            url: path.resolve(paths.servedPath, 'blogs', filename),
            preview: content.slice(0, 300)
        }
    })
    return blogs
}