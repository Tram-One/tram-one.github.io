const Tram = require('tram-one')
const app = new Tram()

const contact = require('./sections/contact')
const custom = require('./sections/custom')
const example = require('./sections/example')
const header = require('./sections/header')
const install = require('./sections/install')
const reducers = require('./sections/reducers')
const routing = require('./sections/routing')
const thanks = require('./sections/thanks')

const html = Tram.html({
  contact, custom, example,
  header, install, reducers,
  routing, thanks,
})

const home = (state) => {
  return html`
    <div>
      <header></header>
      <install></install>
      <example></example>
      <routing></routing>
      <custom></custom>
      <reducers></reducers>
      <thanks></thanks>
      <contact></contact>
    </div>
  `
}

const nopath = () => {
  return html`
    <div>
      404!
    </div>
  `
}

app.addRoute('/', home)
app.addRoute('/404', nopath)

app.start('.main')
