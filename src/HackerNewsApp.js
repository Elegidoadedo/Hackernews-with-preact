import { html, useEffect, useState } from './preact+htm.js'
import Article from './Article.js'

export default function HackerNewsApp () {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(function () {
    setLoading(true)
    fetch("https://api.hnpwa.com/v0/news/1.json")
      .then(res => res.json())
      .then(response => {
        setLoading(false)
        setData(response)
      })
  }, [])
  return html`
  <main>
    ${loading && html`<i>🤯</i>`}
   ${loading === false && data.map(article => {
     return html`
      <${Article} ...${article} />
     `
   })}
  </main>
  `
}
