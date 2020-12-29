import { registerHtml, useGlobalObservable } from 'tram-one'

const html = registerHtml({
  'section-container': require('../../components/section-container'),
  'api-header': require('../../components/api-header'),
  'section-text': require('../../components/section-text'),
  'code-block': require('../../components/code-block'),
})

const globalObservable = `
import { registerHtml, useGlobalObservable } from 'tram-one'
const html = registerHtml()

const page = () => {
  const [votes, setVotes] = useGlobalObservable('VOTES', 0)
  const incrementVotes = () => setVotes(votes + 1)
  return html\`
    <section>
      <button onclick=\${incrementVotes}>upvote</button>
    </section>
  \`
}
`

module.exports = (attrs) => {
  return html`
    <section>
      <api-header level="3" anchor="use-global-observable" header="useGlobalObservable">
        <code-block>
          useGlobalObservable(key: string, value?: any): [value: any, setter: Function]
        </code-block>
      </api-header>
      <section-container>
        <section-text>
          Hook that stores global state and makes it accessible in the component and across the app.
          <br/><br/>
          This in part fills the role of React's Context API, but acts just like the useObservable hook.
          <br/><br/>
          useGlobalObservable takes in a key and an optional default value.
          The key can be any string, and is used to access the value anywhere else in the app.
        </section-text>
        <code-block>
          ${globalObservable}
        </code-block>
      </section-container>
    </section>
  `
}
