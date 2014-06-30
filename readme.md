sepharad
========

##### Visualize the JS module (AMD or CommonJS) dependencies from your Source Code in Github.

Sepharad is built on top of dependo (https://github.com/auchenberg/dependo#introduction). The 
reason Sepharad was built was to overcome the limitation of dependo, which is that; the source code 
must be in the local file system to generate dependencies. Sepharad overcomes that limitation by 
enabling visualization of JS dependencies from source code located in remote Github.

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

API 
---
```javascript

    sepharad({
    	 "url"     : <github url for the source>, (required)
    	 "branch"  : <branch>, (optional and defaults to master)
    	 "path"    : <file/dir in the source code from where dependencies need to be visualized>, (required)
    	 "format"  : <format to parse (amd or cjs)>, (required)
    	 "exclude" : <a regular expression for excluding files>, (optional and default is none)
    	 "output"  : <file to save the generated dependency output html> (required)
    });

```

ToDo 
----
* write tests - mocha
* make sephard independent of dependo
* add a CLI feature for sepharad
* grunt task for sephard