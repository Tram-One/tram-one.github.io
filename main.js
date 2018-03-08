const Tram = require('tram-one')

const app = new Tram({defaultRoute: '/'})
app.addRoute('/', require('./pages/app'))
app.start('.main')
