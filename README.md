## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,


## Optimizations made to /view/js/main.js
* Moved variables outside of loops in instances where definition stays constant on page load. 

* Cached lengths of arrays outside of loops.

* Changed all instances of **elem.className** to  **elem.classList.add** as per 
[Paul Irish's](https://plus.google.com/+PaulIrish/posts/APArpwWqew3) suggestions.

* changed instances of **querySelector** to either **getElementById** or **getElementsByClassName** - much faster as per [jsPerf](http://jsperf.com/queryselectorall-vs-getelementsbytagname/20). 

* removed requestScroll on DOMContentLoaded, no need to initiate updatePositions on load, as scroll event will handle.

* moved static height/width styles out of loop, and into relevant class within style.css

* moved variables that search DOM for elements outside of loops


## Using Grunt to automate build 
#### Following Grunt modules used:
* imagemin
* cssmin
* uglify
* htmlmin
* jshint
* csslint

####
Grunt Overview:

When running grunt taskrunner for first time, a build directory is created with minified files. 

If I'm running subsequent times, build directory needs to be deleted- can probably overcome this by using 'copy' module.

Plenty of linting errors on css files. 