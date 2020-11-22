import { registerHtml } from 'tram-one'
import './scroll-anchor.css'

const html = registerHtml()

module.exports = ({id="", href, className = ""}, children) => {

  // force a smooth scroll to the content
  const clickAction = (event) => {
    if (document.body.scrollIntoView === undefined) {
      return
    }
    event.preventDefault()
    const target = document.querySelector(href)
    target.scrollIntoView({behavior: 'smooth', block: 'start'})
    window.history.pushState({}, '', href)
    setTimeout(() => {
      target.scrollIntoView({block: 'start'})
      target.focus()
    }, 600)
  }

  return html`
    <a id=${id} class="scroll-anchor ${className}" onclick=${clickAction} href=${href}>
      ${children}
    </a>
  `
}
