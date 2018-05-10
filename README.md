# bootstrap-testing
Testing Bootstrap and other dev modules (gulp, browser-sync, gulp-sass)

While working with npm, I have found that the "npm install" was also running the "audit" command which identifies vulnerabilities in all of your packages. 


It took me a while to figure out how to reach deep into the modules' dependencies, but I found that changing the version number in the package-lock.json and running the "npm ci" command would reinstall all packages from a clean state.


This allows fairly easy fixes to the vulnerabilities, but if I find a module that can resolve these issues automatically I will add it to the project's devDependencies.

The nature of these issues are, for the most part, security related, which is something I need to look into if we are gonna be using npm.