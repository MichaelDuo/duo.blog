const fm = require('front-matter')
const marked = require('marked')

exports.convert = (markdown) => {
  const {attributes, body} = fm(markdown)
  let tokens = marked.lexer(body)
  if(tokens.length===0) return { title: '', html: '', attributes}
  let title = ''
  if(tokens[0].type==='heading'){
    title = tokens.shift().text
  }
  const html = marked.parser(tokens)
  return {
    title,
    html,
    attributes
  }
}