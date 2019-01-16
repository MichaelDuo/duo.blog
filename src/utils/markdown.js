import showdown from 'showdown'
import fm from 'front-matter'
const converter = new showdown.Converter()

export const convert = (markdown) => {
  const {attributes, body} = fm(markdown)
  return {
    html: converter.makeHtml(body),
    markdown,
    attributes
  }
}