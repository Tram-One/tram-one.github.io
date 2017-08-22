const Tram = require('tram-one')

const twoColRow = require('../elements/twoColRow')

const html = Tram.html({
  tcr: twoColRow
})

const summaryStyle = `
  padding: 1em;
  padding-left: 2em;
  font-size: 1.25em;
`

module.exports = (attrs, children) => {
  return html`
    <tcr title="Video Tutorial" color=${attrs.color} bg=${attrs.bg}>
      <div style=${summaryStyle}>
        <a href="https://youtu.be/mgHJbqls-wk">
          <img src="/youtube-video-thumbnail.png" width="100%">
        </a>
      </div>
      <div style=${summaryStyle}>
        You can now watch a video tutorial that goes though the process
        of building a Tram-One app, from start to finish.
        <br><br>
        You can watch it on youtube here:
        <a href="https://youtu.be/mgHJbqls-wk">https://youtu.be/mgHJbqls-wk</a>
      </div>
    </tcr>
  `
}
