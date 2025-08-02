---
mode: agent
---
Implement project filters in the home page. It should be filtered by tags included in the project md file in `content/project` folder. There should a filter "All" toggling on which should show all projects.
The filtering should animated.
The whole experience should be smooth and similar the https://linear.app design.
It should work nicely for both desktop and mobile, light and dark modes.
Implement components wherever you think it may be reused in other pages.
Use nuxt content queryCollectionNavigation, queryCollectionItemSurroundings, queryCollectionSearchSections, queryCollection, etc. to fetch the projects. Do not implement any server side API. Use #Context7 to gather docs on nuxt content.
List of tags should be dynamically generated from the project md files.
For writing any piece of code, first use #context7 to fetch relevant documentations and then write the code.
Now implement the project filtering.