---
mode: agent
---
Implement project details page. The project should be loaded by nuxt content from the markdown file in `content/project` folder. 
The project details page should include everything available in the markdown files.
The whole experience should be smooth and similar the https://linear.app design.
It should work nicely for both desktop and mobile, light and dark modes.
Implement components wherever you think it may be reused in other pages.
Use nuxt content queryCollectionNavigation, queryCollectionItemSurroundings, queryCollectionSearchSections, queryCollection, etc. to fetch the projects. Do not implement any server side API. Use #Context7 to gather docs on nuxt content.
For writing any piece of code, first use #context7 to fetch relevant documentations and then write the code.
Note that in the project md files, there are headers, images, links, and other markdown elements. Also, there are some custom components that uses ":::" syntax. For example, `tip`, `youtube` etc. They should be rendered properly with alert, video etc. components.
Now implement the project details page.