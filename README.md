# bootstrap-testing
Testing Bootstrap and other dev modules (gulp, browser-sync, gulp-sass)

This repositery holds the squeleton of a design system. We will be using bootstrap as a base for our CSS and hosting the site on github pages with jekyll.

## Installation 
Follow the yarn installation instruction for your OS 
<a href="https://yarnpkg.com/lang/en/docs/install/#debian-stable" target="_blank">here</a>. Take note of the current stable version.  

Once you have yarn working at the stable version, clone the repo and __move into it__.  

If you intend on running the documentation, you will need to <a href="https://www.ruby-lang.org/en/documentation/installation/" target="_blank">install Ruby</a> and then Bundler with `gem install bundler` in your directory.

### Install your dependencies
    yarn    
    bundle install --path vendor/bundle
 

### To compile your SASS and run a local instance with BrowserSync
    yarn run gulp

### To run the documentation with Jekyll
    yarn run docs-serve

Change the `./src/test.html` file with any <a href="https://getbootstrap.com/docs/4.1/components/alerts/" target="_blank">bootstrap component</a>.
 
Override themes from `./src/_scss/styles.scss` with <a href="https://getbootstrap.com/docs/4.1/getting-started/theming/#theme-colors" target="_blank">any SASS variables</a>.

To add to either the component or documentation pages, add what you want at the `index.html` in either directories.
```
src/component/index.html
src/documentation/index.html
```
