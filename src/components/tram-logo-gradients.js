import { registerSvg } from 'tram-one'

const svg = registerSvg()

module.exports = () => svg`
  <svg class="tram-logo-gradients" version="1.1" x="0px" y="0px" width="0" height="0" viewBox="0 0 864 864" enable-background="new 0 0 864 864">

    <!-- Gradient Definitions -->
    <linearGradient id="tram_body_gradient">
      <stop  offset="0" style="stop-color:#ED1C24"/>
      <stop  offset="1" style="stop-color:#F6646A"/>
    </linearGradient>

    <linearGradient id="front_window_gloss_gradient">
      <stop  offset="0" style="stop-color:#E9F2F5"/>
      <stop  offset="1" style="stop-color:#E5EFF4"/>
    </linearGradient>

    <linearGradient id="roof_gradient">
      <stop  offset="0" style="stop-color:#C0D8DF"/>
      <stop  offset="1" style="stop-color:#DCECF0"/>
    </linearGradient>

    <linearGradient id="bottom_back_rail_gradient">
      <stop  offset="0" style="stop-color:#90BCC6"/>
      <stop  offset="1" style="stop-color:#ECF5F8"/>
    </linearGradient>

    <linearGradient id="side_window_gloss_gradient">
      <stop  offset="0" style="stop-color:#E3EDF2"/>
      <stop  offset="1" style="stop-color:#EDF8FC"/>
    </linearGradient>

    <linearGradient id="front_roof_gradient">
      <stop  offset="0" style="stop-color:#90BCC6"/>
      <stop  offset="1" style="stop-color:#CCE0E5"/>
    </linearGradient>

  </svg>
`
