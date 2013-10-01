biomod
======

The Biomod Jekyll site.

Getting Started
===============

`git clone git@github.com:stgabriel/biomod.git`

To start the server:

`jekyll server -w`

Now open a browser to localhost:4000

### Now, SASS


gem install sass
AND it might need a dependency
gem install rb-inotify

Once installed

`sass --watch assets/scss:assets/css --style compressed`

What is this? It watches the assets/scss directory for changes and compiles the scss files into compressed css files on the fly.

Now, the site only loads the .css files, it doesn't know about the the .scss files; we're working with .scss and compiling them into something the browser can use.

Never change a .css file, only change a .scss file, or the SASS compiler will overwrite those changes.

### Important issue with CSS
  
CSS files aren't being tracked until we're ready for production: this is because every commit creates stupid conflicts needing merges. SO in production, the line in .gitignore must be removed so git just tracks css files again.

### technologies used

Bourbon, a set of sass classes is installed and we're using its companion set, 'Neat' for its grid.

To update these libraries, go into the /assets/scss directory and type `update neat` and `update bourbon`.

### technologies I'll investigate

This site offers search based on an RSS feed, useful for static sites. I'll investigate.

http://tapirgo.com/

### Before going to prod

* Add analytics code to default.html template (in the footer there)
* Remove the line in /.gitignore pertaining to the assets/css/* directory. 

### Noteworthy links

http://blog.nitrous.io/2013/08/30/using-jekyll-plugins-on-github-pages.html


[Mr. Poole, an tool for using jekyll](https://github.com/mmcclimon/mr_poole)

