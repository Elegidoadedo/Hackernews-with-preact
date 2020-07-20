import { html } from './preact+htm.js'

export default function Article ({
  title,
  time_ago: timeAgo,
  url
}) {
  return html`
    <article>
      <a alt="${title}" href='${url}'>
        <h3>${title}</h3>
        <span>⌚️ ${timeAgo}</span>
      </a>
    </article>
  `
}
