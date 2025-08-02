---
mode: agent
---
This is a portfolio website styled same as linear.app design. 
Implement the home page according the following specifications. Use #Context7 to gather docs on nuxt 3, nuxt content, nuxt ui, etc. on how to implement it.
Implement components wherever you think it may be reused in other pages.
The home page of the website should contain the following sections:

# Sections
## Heading
- An avatar of the user
- A title saying: Hi! I'm Raquib Ul Alam
- A description: Professionally, I work as a Senior Android Engineer with a specialization in on-device deployment of machine learning and signal processing models. My Android experiences span over ten years. Academically, my research focusses on medical image and signal processing towards the development of machine learning and statistical models.

## Contact buttons
- GitHub: https://github.com/alamkanak
- Stack Overflow: https://stackoverflow.com/users/1113765/raquib-ul-alam
- Email: alam.kanak@gmail.com
- LinkedIn: https://www.linkedin.com/in/alamkanak/
- Dribbble: https://dribbble.com/kanak

## Skills
Machine Learning
4 years experience

### Agentic LLM, RAG
Have worked with various agentic LLMs and RAG systems in multiple projects

### Classical machine learning
Accustomed to using various classical machine learning algorithms in different projects

### Computer vision
In several of my projects, I employed OpenCV and traditional computer vision techniques in medical images

### Tensorflow
Have used tensorflow extensively in several research projects

### Data processing
Have numerous publications in the field of medical signal and image processing

### Data visualization
Strive to produce meaningful and digestable visualization of big data

## Projects
Projects section should contain a list of projects dynamically generated from nuxt content folder in the repository.
Only show thumbnail, title, description, and tags provided in the project markdown files.
Clicking on a project should navigate to the project page. Use nuxt content queryCollectionNavigation, queryCollectionItemSurroundings, queryCollectionSearchSections, queryCollection, etc. to fetch the projects. Do not implement any server side API. Use #Context7 to gather docs on nuxt content.