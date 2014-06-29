sepharad
========

Visualize the JS module dependencies from your Source Code in Github.


###### Sepharad is an extension to dependo (https://github.com/auchenberg/dependo#introduction).

Sepharad extends dependo by enabling visualization of JS dependencies from a source 
located in remote Github. The limitation with dependo is that the source must be in the local file system.

Usage 
-----
```powershell
  $ npm install dependo
```

```javascript
var sepharad = require("sepharad");

// the below code generates a visualization report file 
// called report.html of kraken-js project's Javascript  
// files' dependencies present in the "lib/" folder 
// directly from github.

sepharad({
  url : "https://github.com/krakenjs/kraken-js",
  path: "lib/",
  format: "cjs",
  exclude: "^node_modules",
  output: "report.html"
});

```

ToDo 
----
* write tests - mocha
* make sephard independent of dependo
* add a CLI feature for sepharad
* grunt task for sephard