const Tram = require('tram-one')
const html = Tram.html()

module.exports = (attrs, children) => {
  const clickAction = (event) => {
    if (document.body.scrollIntoView === undefined) {
      return
    }
    event.preventDefault()
    const target = document.querySelector(attrs.href)
    target.scrollIntoView({behavior: 'smooth',  block: "start"})
    window.history.pushState({}, '', attrs.href)
    setTimeout(() => target.focus(), 500)
  }
  return html`
    <a id=${attrs.id} class=${attrs.className} onclick=${clickAction} style=${attrs.style} href=${attrs.href}>
      ${children}
    </a>
  `
}
