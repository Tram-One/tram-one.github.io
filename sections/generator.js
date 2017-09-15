const Tram = require('tram-one')

const twoColRow = require('../elements/twoColRow')
const stylizedCode = require('../elements/stylizedCode')

const html = Tram.html({
  tcr: twoColRow,
  'style-code': stylizedCode
})

const summaryStyle = `
  padding: 1em;
  padding-left: 2em;
  font-size: 1.25em;
`

const npmInstall = html`
<pre style='font-size: 1.2em;'>
$ npm install -g tram-one-express
$ tram-one-express my-tram-app
</pre>
`

module.exports = (attrs, children) => {
  return html`
    <tcr title="Tram-One Express" color=${attrs.color} bg=${attrs.bg}>
      <div style=${summaryStyle}>
        <a href="https://youtu.be/VhOYgQONUGY">
          <img src="/express-video-thumbnail.png" width="100%">
        </a>
      </div>
      <div style=${summaryStyle}>
        If you want a quick and fast way to start using Tram-One, you can use Tram-One Express,
        a generator for building Tram-One apps!
        <br><br>
        You can watch a short description of what the project does here:
        <a href="https://youtu.be/mgHJbqls-wk">https://youtu.be/mgHJbqls-wk</a>

        ${npmInstall}
      </div>
    </tcr>
  `
}
