Tesselate Tile Engine
=====================

Tesselate is a 2D tilemap engine and editor written in Javascript. It is comprised of several modules:

+ `tesselate-world` - stores world data in layers and provides an interface to accessing and manipulating the world data
+ `tesselate-layer` - provides methods to add and remove tiles from a layer
+ `tesselate-scene` - abstracts the rendering code
+ `tesselate-canvas2d` - renders the tilemap to an HTML5 canvas
+ `tesselate-webgl` - renders the tilemap to a WebGL context
+ `tesselate-util` - contains several common methods used in tesselate

Please note: tesselate is in active and volatile development; it is not intended to be used in any production environments for now.

Building
--------

This project uses [Browserify](http://browserify.org/) to compile all source scripts into a single browser-ready bundle.

To build tesselate for development, I use [beefy](http://didact.us/beefy/). To test in a browser, simply run the following command in a terminal where [npm](https://www.npmjs.com/) is available and then navigate to [127.0.0.1:9966](http://127.0.0.1:9966).

```
npm run serve
```

To build tesselate for production, use `npm run build`.

To-do
-----

+ Use chunked map loading
+ Implement sparse array storage
+ Implement continuous (infinite) worlds
+ Write WebGL renderer
+ Implement level saving/export/import
+ Rebuild local edge/corner cache on world edit
+ Documentation
+ Load tileset tiles from arbitrary places (define template?)
+ Optimizations
+ Merge layers (save topmost) for Tilemap.finalize() ?? -- what about transparent blocks/layers?

Thanks
------

+ [David Michael](http://www.gamedev.net/page/resources/_/technical/game-programming/tilemap-based-game-techniques-handling-terrai-r934)

Helpful Links
-------------

+ http://www.metanetsoftware.com/technique/tutorialA.html#section1
+ http://higherorderfun.com/blog/2012/05/20/the-guide-to-implementing-2d-platformers/
+ https://www.youtube.com/playlist?list=PL006xsVEsbKjSKBmLu1clo85yLrwjY67X

Resources
---------

+ https://github.com/mikolalysenko/ndarray
+ https://github.com/hughsk/ndarray-continuous
+ https://github.com/hughsk/continuous-observer
+ https://github.com/hughsk/game-modules/wiki/Modules
+ https://github.com/andrewrk/chem
+ https://github.com/maxogden/level.js
+ https://github.com/chrisdickinson/collide-2d-tilemap
+ https://github.com/andrewrk/node-tmx-parser/blob/master/index.js

+ http://www-cs-students.stanford.edu/~amitp/gameprog.html
+ http://crtrdg.com/
+ https://gist.github.com/maxogden/9557700#file-index-js
+ https://www.npmjs.org/package/cave-automata-2d
