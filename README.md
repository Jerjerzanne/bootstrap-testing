# bootstrap-testing
Testing Bootstrap and other dev modules (gulp, browser-sync, gulp-sass)


While working with npm, I have found that the `npm install` was also running the `audit` command which identifies vulnerabilities in all of your packages. 


It took me a while to figure out how to reach deep into the modules' dependencies, but I found that changing the version number in the `package-lock.json` and running the `npm ci` command would reinstall all packages from a clean state.


This method fixes most vulnerabilities, but they seem to be overridden whenever the `npm install` command is used and the effect it can have on the parent packages is uncertain.


The nature of these issues are, for the most part, security related, which mean you should have no issues running it, but this is definitely something I will need to look into if we want to use npm(apparently this is not an issue in Yarn).


 
## Installation 
if you do not have node.js/npm - https://nodejs.org/en/  
if you want to control your versions of node, try nvm - https://github.com/creationix/nvm  
once you npm working, clone the repo and move into it.  
## From the repos directory
    npm install
    npm run gulp


Change the ./src/index.html file with any <a href="https://getbootstrap.com/docs/4.1/components/alerts/" target="_blank">bootstrap component</a>.
 
Override themes from ./src/scss/styles.scss with <a href="https://getbootstrap.com/docs/4.1/getting-started/theming/#theme-colors" target="_blank">this</a>.


    
