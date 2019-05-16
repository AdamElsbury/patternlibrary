INSERT IMAGE OF INDEX PAGE here

# Element pattern library

## Introduction

### Background - What is a pattern library?

A pattern library is a documented collection of user interface (UI) design elements. Pattern libraries are usually hosted in a web page with working examples of each design component, usually things like buttons, grids, modals and more but primarily components that are frequently reused. The component's code is shown within a "code snippet" for easy access to the user to use in their own web pages. Often these pattern libraries contain design assets for designers, in addition to the code for the developers. This is for designers to use the pre built assets in their own prototypes to speed up the design process.

Pattern libraries are not only a place to copy and paste components but provide literature on things like design guidelines, design identity and industry best practice. Pattern libraries are more commonly created by large corporations like IBM with [Carbon design suite](https://www.carbondesignsystem.com/ "Carbon design system"), [Google's Material design](https://material.io/design/ "Google's material design") and [Apple's Design suite](https://developer.apple.com/design/ "Apple's design system"). These pattern libraries are necessary within large corporations due to the sheer number of designers and developers working on the same projects. If there were no guidelines or frameworks present, the larger projects would have inconsistencies.

Whilst these libraries have been primarily pushed by bigger tech companies, many smaller studios and solo designers/developers have followed suit. It is becoming more commonly used as a marketing tool for freelancers to find projects or get hired by a studio. A pattern library is a great way for a candidate to show their working process, organisational skills, design continuity and ability to comminicate those design and development practices to a potential employer or candidate.

### Project aims

This project aims to research existing pattern libraries, front end design frameworks and industry best practice for creating a custom pattern library from scratch. In order to provide initial context user testing will be conducted on these existing frameworks to establish good UX and UI design practices in the documentation websites and where the current pain points lie in the design in order to include solutions in this project.

Once the research and user testing has established a good base of knowledge this project will create its own design for the documentation website and components and create the coding framework. Additionally an Adobe XD design sheet will be created to allow designers to use the design assets in their own projects.

Once the documentation website is live another round of user testing will aim to provide objective and subjective conclusive evidence of the efficacy of both the documentation, framework and individual components.

## Research

### Benefits of using a pattern library

> Recurring solutions that solve common design problems.

[Paul Boag](https://boagworld.com/design/pattern-library/ "Paul Boag - How to create a pattern library and why you should bother") states that the main benefit for using a pattern library as a developer or designer is quick access to recurring solutions that solve common design problems. A main consideration within the web design industry is not to reinvent the wheel. Crucial project time can be wasted trying to solve problems that already have solutions. A good example of this would be the navigation scheme for a website.

The navigation design is an incredibly important factor in the success of a website. Poor navigation is one of the biggest reasons for frustration in users and can lead to users leaving the site entirely. [Forbes](https://www.forbes.com/sites/dangingiss/2018/09/27/new-research-shows-website-navigation-may-be-losing-you-customers/#659cbe4936cd "Forbes - New Research Shows Website Navigation May Be Losing You Customers") have released an article covering why there is a typical design pattern for navigation in websites. The reason is simple - it works. Users are used to navigation being at the top or left of the page and are more successful using these schemes. 

Websites which choose to have (albeit aesthetically pleasing) non traditional navigation schemes suffer with UX performance in its user base. With there being objective proof of what the best way to design a navigation scheme is, there is no point wasting project time on designing and testing a non traditional approach.

The navigation example can be extrapolated to lots of other common website components. With so many libraries and UI style guides available for free there is no reason to design everything from scratch anymore.

To summarise, the main benefits for using a pattern library include:

1. Pattern libraries allow developers and designers to reuse components built by someone else, speeding up development or design time.
2. They provide a developer or designer to consolodate their assets for use in future projects.
3. They allow a developer or designer to evidence their work, working process and documentation to coincide with their portfolio.
4. They provide guidelines on usage which is extremely beneficial to newer members of the industry.
5. They allow for design continuity on larger projects.

### Existing pattern libraries

#### IBM - Carbon design system

Carbon is an incredibly detailed framework and pattern library covering everything from typography, components, grids, colours, guidelines, accessibility and more. Having such a large amount of content to display in a documentation website, Carbon does a very good job of segmenting its content with the use of a left sided navigation bar with clearly defined categories and dropdown menus. 

It places its main content body in the remaining screen space to the right of the navigation and segmenting the content even further into usage, code and style. It achieves this through a top positioned internal navigation bar which switches the entire main content body. This is entirely necessary within a pattern library as extensive as Carbon but could cause UX issues in a smaller library where users will have to conduct multiple clicks to return to content after navigating to a new section. This content navigation scheme is great for a large library but unnecessary for a smaller one.
