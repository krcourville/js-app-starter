# Angular 1 App Starter

A starter Angular1 HTML5 client app

## Features

 - Ng Annotate
 - Dev workflow: live reload, watch, serve
 - Copy resources (fonts/images)
 - Less
 - Ng Template Cache
 
## Usage
 
  - clone or copy locally
  - `npm install gulp-cli -g`
  - `npm install bower -g`
  - `npm install`
  - `bower install`
  - `gulp help`
    : show task outline and general help
  - `gulp serve`
    : start development workflow
    
## Angular Conventions

   - Templates are rooted to `/src/app` folder. As a result, specifying templateUrl for `app/src/app/dash/dash.html` is shortened to `dash/dash.html`
   - Styles can be specified in global app less or individual component less files.
   - Third party files should be included via bower or other method and added to gulpfile.config.js vendor files.
   - Third party syles should be included via @import statements in app.less
   - Add copy source/destinations to gulpfile.config.js for any images or other binaries.