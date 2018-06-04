# Prototype for a static site builder

## Installation 
Follow the yarn installation instruction for your OS 
<a href="https://yarnpkg.com/lang/en/docs/install/#debian-stable" target="_blank">here</a>. Take note of the current stable version.  

Once you have yarn working at the stable version, clone the repo and __move into it__.  

### Install your dependencies
    yarn    
 
### to run the static build 
    yarn run gulp

# Usage

Simply add your pages in the `docs/` folder in any structure you want. For now I have not worked out the layout feature from jekyll's liquid but the include should work. Just use this following notation:

```
{% include "_includes/yourHtmlSnippet.html" %}
```


To add to either the component or documentation pages, add what you want at the `index.html` in either directories.
```
docs/component/index.html
docs/documentation/index.html
```
