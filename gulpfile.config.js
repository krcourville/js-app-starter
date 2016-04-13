var cfg = {
     // the output folder
     dist: 'app/dist',
     
     distfiles: [
         'app/index.html',
         'app/dist/*.js',
         'app/dist/*.css'
     ],
     
     // input js
     vendorfiles : [
         'app/src/vendor/jquery/dist/jquery.js',
         'app/src/vendor/angular/angular.js'
     ],
     appfiles : [
         'app/src/app/**/*.js'
     ],
     templates: [
         'app/src/app/**/*.html'
     ],
     lessfiles : [
         'app/src/app/**/*.less',
         '!app/src/vendor'
     ],
     copyfiles: {
         'app/src/index.html' : 'app/dist',
         'app/src/vendor/bootstrap/fonts/*' : 'app/dist/fonts'
     }
 };
 
 module.exports = cfg;