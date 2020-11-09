import { registerHtml } from 'tram-one'
import './scroll-anchor.css'

const html = registerHtml()

module.exports = (attrs, children) => {
  const clickAction = (event) => {
    if (document.body.scrollIntoView === undefined) {
      return
    }
    event.preventDefault()
    const target = document.querySelector(attrs.href)
    target.scrollIntoView({behavior: 'smooth', block: 'start'})
    window.history.pushState({}, '', attrs.href)
    setTimeout(() => {
      target.scrollIntoView({block: 'start'})
      target.focus()
    }, 600)
  }
  return html`
    <a id=${attrs.id} class="scroll-anchor ${attrs.className}" onclick=${clickAction} href=${attrs.href}>
      ${children}
    </a>
  `
}
