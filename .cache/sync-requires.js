const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/sylvialiu/Desktop/projects/gatsby-sylvieon/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/sylvialiu/Desktop/projects/gatsby-sylvieon/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/sylvialiu/Desktop/projects/gatsby-sylvieon/src/pages/contact.js"))),
  "component---src-pages-design-js": hot(preferDefault(require("/Users/sylvialiu/Desktop/projects/gatsby-sylvieon/src/pages/design.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/sylvialiu/Desktop/projects/gatsby-sylvieon/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/sylvialiu/Desktop/projects/gatsby-sylvieon/src/pages/projects.js")))
}

