// Documentation:
// Preact: https://preactjs.com/
// htm: https://github.com/developit/htm
// standardjs: https://standardjs.com/
// servor: https://github.com/lukejacksonn/servor

//Para renderizar JSX se puede user html de htm
// import { html, render } from 'https://unpkg.com/htm/preact/standalone.module.js'
// render(html`<h1>hola</h1>`, document.body)

import { render, html } from './preact+htm.js'
import HackerNewsApp from './HackerNewsApp.js'

render(html`<${HackerNewsApp} />`, document.body)
