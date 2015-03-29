## Website Performance Optimization portfolio project

Achieved PageSpeed score of 97 on Desktop, 95 for mobile.

On pizza page, achieved following times:

* Time to generate pizzas on load: 30.490999983157963ms
* Average time to generate last 10 frames: 0.9403000061865896ms
* Average time to generate last 10 frames: 0.4499999980907887ms
* Time to resize pizzas: 1.0460000485181808ms



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