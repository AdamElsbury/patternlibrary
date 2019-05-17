no oneINSERT IMAGE OF INDEX PAGE here

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

Additional functionality include a search function and visible version of the design library. Again, the search function is only necessary for a large library and will likely not be necessary for this project unless the user research shows otherwise. One interesting functionality Carbon displays is a "Next section" link which takes you to the next heirarchical component or guideline within a related category. This could allow users to travel through the user journey easier than having to click on individual links to move between pages.

#### Google material design

Google takes an identical approach to navigation as Carbon. The documentation site has a left sided navigation bar with segmented categories to allow users to expand to locate specific areas of interest. Material has a main content body on the right of the navigation. The difference between Carbon and Material is that Material places a higher emphasis on external links to articles and uses far more image diagrams containing instructions on how to implement components and design guidelines. This could be beneficial to newer users but probably will not provide as much benefit to experienced developers who will want to plug components in quickly. This will be interesting to explore during user research.

Material goes into more detail on fundamental principles for design than Carbon does and provides more evidence at an intended direction to appeal to beginners in the industry.

IMAGE OF MATERIAL DIAGRAM HERE

Both documentation websites display in-page sub links for the user to jump to the relevent section of the page. Both websites display these links first in the content column before the content. This is a good way to instruct beginners what to expect on the webpage and also allow experienced users to navigate to a specific section and not waste time browsing.

#### Summary

Navigation plays a big part in the scructure of the documentation page for a pattern library down to the sheer number of different pages. Allowing users the option to both browse and navigate to specific elements is imperative within the user journey. Main categories of content such as components, usage or guidelines should be immediately visible within the navigation and expand to show their child contents such as individual components.

Content needs to be structured in a linear fashion with things like installation at the top and customisation at the bottom of the content heirarchy. In page links are important to jump to specific sections on pages with lots of content. Image diagrams of abstract design decisions could be beneficial to newer users to help them understand in a less technical format.

Both frameworks displayed an easy to understand installation page for downloading the frameworks and seperated the individual component installations on different pages. Code snippets were used throughout for easy copy and pasting for the user.

### Pattern library creation frameworks

[Fractal](https://fractal.build/guide/#requirements "Fractal") is a pattern library creation framework. It contains boilerplates of navigation schemes, content sections and how to lay out documentation. Whilst using a framework could be beneficial in terms of development speed, it is slightly hypocritical to be promoting a component library which was built with another framework.

With every other pattern library their documentation page and components were built with their own vanilla code. Building the documentation page with the pattern library provides first hand evidence of its efficacy and a live website including its design and code.

Additionally Fractal appears to be time consuming to learn, it is unlike any other framework on the market. It runs similarly to popular SPA frameworks like Vue or React in that components are created with Javascript and data is pulled in through databases. This allows for easy manipulation of content further down the line where there may be in excess of 100 pages but for the purpose of a single assessment submission with only 10 or so components this was unnecessary and would increase the development time substantially.

This project will create its framework from scratch.

## Design process methodology

The "Design thinking" methodology was first introduced to myself during an internship at IBM. The process is heavily focused on empathizing with end users first before any designs are sketched or ideated upon. Once the goals and pain points of the end user are understood the project will progress to ideation of solutions. Once the solutions have been solidified a prototype is created and tested and the process is completed until the project is at a satisfactory quality.

IMAGE OF THE PROCESS HERE

## Test plan

### Technical

A mandatory section of software development is technical testing. Technical testing for the web is important to establish if industry standard benchmarks are met. Not reaching these benchmarks will ensure user attrition and dissatisfaction. This stage in a project cannot be overlooked.

A pattern library must be fully functional when a user downloads the framework and must improve their workflow. Users having to debug code after inserting it into their own websites is a complete disaster. This is averted through functional technical testing.

The testing specification for this project can be found below;

1. Cross browser testing
2. Internal page links and external page link href testing
3. HTML & CSS validation compliance with web standards
4. Accessibility testing for screen readers
5. Accessibility testing for colour blind users
6. Page load speed and performance testing
7. Component testing to ensure downloadable components work for users

### User testing

User testing is important in software design to ensure the user flow is easy for the user to navigate through and find content they require with minimal pain points. In order to do this a user test specification needs to be implemented to ensure the design is functional and has no dead ends. The user testing specification is below;

In addition to making sure everything works from a technical standpoint it is important to observe users using the prototype or finished product in a live environment to ensure they can navigate the documentation to access the pieces of content they desire. Having a fantastic technical framework is useless if the user cannot install it correctly or find components.

1. Existing library (Carbon and Material) user testing to establish benchmarks, pros and cons
2. Quantitative user research with open ended tasks (prototype)
3. Observation of tasks (prototype)
4. Qualitative user research on efficacy of website and personal opinions (prototype)
5. Live product user feedback (Live website)

## Specification

Building from what was found in the research stage of this project in both Carbon and Material frameworks a specification list was created. The specification list encompasses all the required components to be designed and developed and what features the documentation site needs.

The aim of this project is to create a dynamic framework to allow both experienced and new web designers and developers to improve their worklow. In order to achieve this abstract components need to be completed to allow users to layout web pages and smaller components that can be grouped together to create larger functional elements in accordance with Brad Frost's [Atomic Design](http://atomicdesign.bradfrost.com/chapter-2/ "Atomic design") methodology.

The specification list can be found below:

### Components

1. Grid layout
2. Responsive text
3. Buttons (6 variations)
4. Navigation bar
5. Hero section
6. Jumbotron
7. Footer
8. Modal
9. Search bar

This specification list will allow users to create web pages that allow user functionality such as submitting forms, searching the website, navigating the website and having a framework to lay out the pages.

Additionally a specification list needs to be created for the documentation website to adequately allow users to understand how the components work, how to install and customise them and how to install the Element design system.

### Documentation website

1. Instructions what Element is and why the user would benefit from using it
2. Developer specific page for installation
3. Designer specific page for installation
4. Usage policy for attribution
5. Link to UI style guide
6. Link to GitHub repository
7. Link to creator's portfolio
8. List of components, how to install them and how to customise them
9. Working examples in the web page of every component
10. Code snippets for every component to allow users to copy and paste

## Design, Planning, Experimentation & Implementation

### Carbon & Material user testing

To establish benchmarks against industry standard pattern libraries 3 participants were given a link to Carbon and Material design systems and asked to complete the following tasks.

1. Locate the installation literature and read it until you have a good understanding of what is required
2. Navigate to the typography section and note the font face
3. Navigate to the button component and read the literature until you have a good understanding of how to use them
4. Navigate to the design kit and download it

None of the users were observed but were contacted throughout the test via text messenger. The test was to be stopped and noted if anyone got lost in the navigation. All three participants completed the tasks and were openly questioned about their subjective opinions afterwards to gain some external insight into the pros and cons of each documentation design. Here was the most important feedback

..* All three users preferred the Carbon design layout because of the way they lay out the component examples. The users felt material components were confusing to read due to the exessive usage of large image elements.
..* Two users liked the material layout better aesthetically but provided no tangible benefit for why they preferred the design
..* All three users preferred the way Carbon laid out its documentation
..* One user found the material side navigation confusing and took over a minute to locate the button component
..* All three users liked the way Carbon laid out the example first on component pages followed by a code snippet
..* Two users found the design guideline emphasis of Material too imposing and would feel restricted using the components in their own designs
..* All three users found the design emphasis of Material unnecessary

#### Summary

The three participants overwhelmingly agreed that Carbon was easier to read and implement from a Development standpoint and liked the way they laid out components followed by code snippets for easy access. The consensus was Material was too focused on how users should use their components instead of showing them how to use it. Carbon was the more preferred choice of layout.

### Low fidelity design

With the user feedback and a heavy influence from the Carbon design system a low fidelity wireframe was produced for the component pages. The page was shown to the same three users and was asked it it reflected what they expected from the task test. All 3 users agreed that the design met what they wanted and they liked the simplicity of the design.

LOW FIDELITY WIREFRAME HERE

### High fidelity design & prototype

Once the low fidelity layout was approved by the users it was important to create a workable prototype to conduct live usability testing to ensure all the needs of the users were met.

As outlined in the research a heavy emphasis on navigation is present within all pattern libraries researched and is a key user requirement. As such the navigation will take up important real estate on the left side of the screen high on the content hierarchy. Navigation links will be segmented with dropdowns to allow users to select specific sections for quick access. Primary content will be displayed in the right hand section with visible working examples high in the content heirarchy with clear code snippets on how to use the components.

The low fidelity prototype was expanded upon and the high fidelity prototype was created. The wireframes can be found below. Components are included in the related page:

Index page:
![Index page](https://github.com/AdamElsbury/patternlibrary/blob/master/assets/images/abouteds.png "Index wireframe")

Developers page:
![Developers page](https://github.com/AdamElsbury/patternlibrary/blob/master/assets/images/developers.png "Developers wireframe")

Designers page:
![Designers page](https://github.com/AdamElsbury/patternlibrary/blob/master/assets/images/designers.png "Designers wireframe")

Usage policy page:
![Usage policy page](https://github.com/AdamElsbury/patternlibrary/blob/master/assets/images/usagepolicy.png "Usage policy wireframe")

Flex grid page:
![Flex grid page](https://github.com/AdamElsbury/patternlibrary/blob/master/assets/images/flexgrid.png "Flex grid wireframe")

Responsive text page:
![Responsive text page](https://github.com/AdamElsbury/patternlibrary/blob/master/assets/images/responsivetext.png "Responsive text wireframe")

Buttons page:
![Buttons page](https://github.com/AdamElsbury/patternlibrary/blob/master/assets/images/buttons.png "Buttons wireframe")

Navigation bar page:
![Navigation bar page](https://github.com/AdamElsbury/patternlibrary/blob/master/assets/images/navigationbar.png "Navigation bar wireframe")

Hero page:
![Hero page](https://github.com/AdamElsbury/patternlibrary/blob/master/assets/images/hero.png "Hero wireframe")

Jumbotron page:
![Jumbotron page](https://github.com/AdamElsbury/patternlibrary/blob/master/assets/images/jumbotron.png "Jumbotron wireframe")

Footer page:
![Footer page](https://github.com/AdamElsbury/patternlibrary/blob/master/assets/images/footer.png "Footer wireframe")

Modal page:
![Modal page](https://github.com/AdamElsbury/patternlibrary/blob/master/assets/images/modal.png "Modal wireframe")

Search bar page:
![Search bar page](https://github.com/AdamElsbury/patternlibrary/blob/master/assets/images/searchbar.png "Designers wireframe")

### Experimentation

#### Responsive grids

**Float layout**

Due to previous experience with a freelance commission, there are some issues with float based layouts. The layouts require many media queries to make the layout work as the float rules break when the browser is resized. This makes grid > column layouts requiring much more code than other options in addition to the numerous media queries. Keeping libraries small is very important to users as no one will use a bloated library as it will affect load speed times. Additionally you have to create long winded workarounds for things like vertical and horizontal centring of column content by using float:none; rules, which affects the layout.

Float layout issue from commission website:
![Float issue page](https://github.com/AdamElsbury/patternlibrary/blob/master/assets/images/floatissue1.png "Float issue screenshot")

Due to the media query, code size, content centring and responsive issues experienced with float layouts they will not be used.

**Flexbox layouts**

Flexbox has recently gained much momentum in the development sphere with much better browser support. Historically it was an option but caused headaches specifically in Firefox and Safari. With recent advancements of support it is a viable alternative to float layouts. Flexbox grid layouts can be created with very few lines of code, as low as 30 lines to create a fully function, responsive layout.

Flexbox also solves the issue of positioning content within columns and vertical centring as they are either included as default or easily attainable with a few lines of code. Also as a user it is much easier to use flexbox as you do not have to calculate % based columns as the auto columns flexbox offers simply take up the remaining space in a row.

Due to its ease of use, ability to position column content and low amount of code flexbox will be used in this project.

**Flexbox experimentation & implementation**

In order to test the viability of the flexbox layout a codepen was created to establish how easy it was to create.

Codepen for flexbox grid experimentation:
![Codepen for flexbox grid](https://github.com/AdamElsbury/patternlibrary/blob/master/assets/images/flexboxcp.png "Flexbox grid")

The flexbox layout was incredibly easy to achieve with less that 45 lines of code needed. The above was achieved on the first try following a flexbox guide from CSS Tricks website. The only addition to enter the final code is to include a single media query for viewports of less than ```500px``` to stack the column content vertically instead of horizontally.

The grid works by having a container element spanning 100%, a single row set to ```display:flex``` to display its child elements as flex items and then however many columns you require. Each column is set to flex:1 to ensure they are displayed in sequence that they are coded. This is easily manipulated by changing the integer.

Applying margins is also simple by applying negative margin to the row and positive margins to the columns to offset and provide a gutter between the columns (as seen in the codepen above). This is a far easier option that applying empty gutter columns in a float based layout.

For user specified columns the flex display is removed and a % width is applied. These fixed columns can be placed alongside auto columns or other fixed columns and the layout will adapt automatically to take up remaining space.

### Implementation

#### Responsive text

Element contains a responsive text calculation in the CSS. This was discovered in a previous project. Instead of setting up lots of media queries for text using ```px``` and ```em``` units, a responsive value can be applied using the ```calc``` function.

```p {
font-size: calc(14px + (18 - 14) * ((100vw - 300px) / (1600 - 300)));
}
```

The calculation works by taking an initial value (```14px```) and then giving a range, with the first value being the maximum value and the second value being the minimum. 300px subtracted from 100vw is the range of viewport size movement. Without these ranges limiting the difference the values become comical with the text becoming the equivalent size of 1px on small viewports and up to 150px on larger viewports.

### Buttons

Element contains 6 variations of button as specified by the assignment brief. Primary for primary calls to action, secondary for secondary calls to action and full width buttons to take up the entire space of its parent element. All default buttons come with a hover effect to provide user feedback. This hover effect can be turned off with the ```.no-hover``` class attribute.

These buttons give the user plenty of options to designate lots of different functions.

### Navigation bar

The navigation bar is simply implemented. A custom container was created to span 100% screen width. 3 main columns within the container are advised to the user and can be changed order using the ```.item-1``` to ```.item-3``` flex item classes. This allows the user the manipulate the order of the elements by changing the flex order. Placing navigation links was simple, creating a link container unordered list and then nesting list items within with ```<a>``` tags for the actual links.

The hover effect was achieved using ```.a:hover``` class for the anchor tags.

### Hero section

The hero section was an extension of the navigation bar which uses a hero container, with a header, description and call to action nested within and centrally aligned using ```text-align:center;```.

### Jumbotron

The jumbotron is contained by a special ```.jumbotron``` class which limits the width of the element to 70% of its parent element. The child elements are standard columns and content structure. The button is floated to the right to stick to the right side of the container.

### Footer

The footer is essentially a copy of the navigation bar but with specific classes ```.footer``` for the background colour and ```.footer-favicon``` for the section to hold the social media favicons and limit the size.

### Modal

The modal is one of the more complicated elements. The call button is a standard ```.btn-primary``` but the actual modal element is created and placed on the page but is set to ```display:none;``` by default. The call button is then given an id to be called by a jQuery script to change the display type of the modal to ```display: block;```.

```
window.onload = function(){

$("#modalclose").click(function(){
  $(".modal-container").hide();
});

$("#modalshow").click(function(){
  $(".modal-container").show();
});
}
```

The modal has a 100% height and width container which has a reduced opacity to overlay the background content to take away the focus. The modal is then a standard set of rows and columns from the code contained with standard HTML5 elements. Hitting the close button hides the modal again.

### Search bar

The search bar is comprised of 
