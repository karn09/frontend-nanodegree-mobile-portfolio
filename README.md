## Website Performance Optimization portfolio project

Achieved PageSpeed score of 97 on Desktop, 95 for mobile.

On pizza page, achieved following times:

* Time to generate pizzas on load: 18.79699999699369ms
* Average time to generate last 10 frames: 0.6218999973498285ms
* Average time to generate last 10 frames: 0.5201999796554446ms
* Average time to generate last 10 frames: 0.31919999164529145ms



## Optimizations made to /view/js/pizza.js
* Moved variables outside of loops in instances where definition stays constant on page load. 

* Cached lengths of arrays outside of loops.

* Changed all instances of **elem.className** to  **elem.classList.add** as per 
[Paul Irish's](https://plus.google.com/+PaulIrish/posts/APArpwWqew3) suggestions.

* changed instances of **querySelector** to either **getElementById** or **getElementsByClassName** - much faster as per [jsPerf](http://jsperf.com/queryselectorall-vs-getelementsbytagname/20). 

* removed requestScroll on DOMContentLoaded, no need to initiate updatePositions on load, as scroll event will handle.

* moved static height/width styles out of loop, and into relevant class within style.css

* moved variables that search DOM for elements outside of loops

* Create fragments to append modified elements to document, [Speed up JavaScript](http://www.nczonline.net/blog/2009/02/03/speed-up-your-javascript-part-4/)

* used on scroll, call requestScroll, which calls updatePositions via requestAnimationFrame. 

* use **transform3d** on line 514 and **backface-visibility: hidden;** in style.css to force GPU painting of pizzas. as per [translate3d](http://davidwalsh.name/translate3d)

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