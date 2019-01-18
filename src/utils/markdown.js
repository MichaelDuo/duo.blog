const fm = require('front-matter')
const marked = require('marked')

var renderer = new marked.Renderer();

renderer.image = function(href, title, text){
  return `
    <span>
      <div uk-lightbox>
        <a href=${href}><img src=${href}></img></a>
      </div>
    </span>
  `
}

exports.convert = (markdown) => {
  const {attributes, body} = fm(markdown)
  let tokens = marked.lexer(body)
  if(tokens.length===0) return { title: '', html: '', attributes}
  let title = ''
  if(tokens[0].type==='heading'){
    title = tokens.shift().text
  }
  const html = marked.parser(tokens, {renderer})
  return {
    title,
    html,
    attributes
  }
}