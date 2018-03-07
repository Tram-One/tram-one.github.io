const Tram = require('tram-one')
const route = Tram.route()

const app = new Tram({defaultRoute: '/'})
app.addRoute('/', require('./pages/app'))
app.start('.main')
