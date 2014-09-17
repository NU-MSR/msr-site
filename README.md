# Master of Science in Robotics Site

## Jekyll Overview

### Built with Jekyll
Jekyll is a simple, blog-aware, static site generator. It takes a template directory containing raw text files in various formats, runs it through Markdown and Liquid converters, and spits out a complete, ready-to-publish static website suitable for serving with your favorite web server. Jekyll also happens to be the engine behind GitHub Pages, which means you can use Jekyll to host your project's page, blog, or website from GitHub's servers for free (taken from Jekyll's website: http://jekyllrb.com/docs/home/).

### Get your workstation set up
* Install <a href="https://www.ruby-lang.org/en/downloads/>Ruby</a>
* Install <a href="rubygems.org/pages/download">RubyGems</a>
* Install <a href="nodejs.org">NodeJS</a>
* Install <a href="jekyllrb.com/docs/installation">Jekyll</a>

### Basic Usage (recommended)
In one terminal, build the jekyll site, watching for any changes (run in site root directory)
```
$  jekyll build --watch
```
In another terminal, serve the built site (run in site root directory)
```
$  jekyll serve
```
View the site in your browser at
```
localhost:4000/msr-site/
```

## File structure (as of 9/17/14)
```
|-- README.md (this)
|-- _config.yml (overall configuration file for the site)
|-- _includes (contains all the markup partials)
|   |-- footer.html
|   |-- head.html
|   |-- header.html
|-- _layouts (contains page markup templates)
|   |-- default.html
|   |-- post.html
|   |-- project.html
|-- _projects (contains markdown files that make up the "projects" jekyll collection)
|   |-- baxter-in-gazebo.md
|   |-- pick-and-place-demo.md
|   |-- robot-web-tools-with-baxter.md
|-- _resources (contains markdown files that make up the "resources" jekyll collection)
|   |-- baxter.md
|   |-- rtt.md
|-- _site (contains the entire site after it is processed by Jekyll)
|   |-- README.md
|   |-- index.html
|   |-- projects
|   |-- public
|   |-- resources
|   |-- students
|-- _students (contains markdown files, organized by class year, that makes up the "students" jekyll collection)
|   |-- 2011
|   |   |-- todd.md
|   |-- 2012
|   |   |-- jarvis.md
|   |-- 2013
|   |   |-- jon.md
|   |-- 2014
|   |   |-- kevin.md
|-- index.html (home page of the site)
|-- projects.html (projects landing page of the site)
|-- public (contains static content including fonts, images, js, and css files)
|   |-- fonts
|   |-- images
|   |-- javascripts
|   |-- stylesheets
|-- resources.html (resources landing page of the site)
|-- students.html (students landing page of the site)
```

## More on how Jekyll works

### The Jekyll Engine
First, if you look inside the \_site directory, you'll see that no directories or files there begin with an underscore (\_). These files are the end result of Jekyll's processing engine. All of the files and directories in the root directory of the repository that do begin with an underscore are "raw". They either include markup that will be included within pages of the final site or they contain markdown and "Front Matter" (which I'll explain later) that will be converted into markup by Jekyll's engine. One of the two commands that you need to run in order to host the site on a local server, "jekyll build --watch", runs that engine, processing and reprocessing the "raw" files every time you make an edit to a file. The files and directories in the root directory of the repository that _don't_ begin with an underscore are ignored by Jekyll and will remain the exact same in the _site directory.

### Front Matter
Any file that contains a YAML front matter block will be processed by Jekyll as a special file. The front matter must be the first thing in the file and must take the form of valid YAML set between triple-dashed lines (taken from Jekyll's documentation). Here's a basic example that you'll find in the index.html file:
```
---
layout: default
title: Home
---
```
This first item, "layout: default", tells Jekyll to take all of the markup in index.html and plug it into the _layouts/default.html template to take the place of the {{ content }} variable.
The second item, "title: Home", tells Jekyll to create a variable, page.title, that you can use in the markup of the template. For example, in _layouts/default.html, you could write:
```
<head>
	<title>{{ page.title }}</title>
</head>
```
and that would render as:
```
<head>
	<title>Students</title>
</head>
```





