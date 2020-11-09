import { registerHtml } from 'tram-one'
import './section-spacer.css'

const html = registerHtml()

module.exports = () => {
  return html`
    <div class="section-spacer" />
  `
}
