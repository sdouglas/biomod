BIOMOD.net
==========

The Biomod Jekyll site.

License
=======

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">biomod.net</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/sdouglas/" property="cc:attributionName" rel="cc:attributionURL">Shawn Douglas</a>, <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/stgabriel" property="cc:attributionName" rel="cc:attributionURL">Kris St.Gabriel</a>, and <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/bhinebaugh" property="cc:attributionName" rel="cc:attributionURL">Byron Hinebaugh</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>. Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/sdouglas/biomod" rel="dct:source">https://github.com/sdouglas/biomod</a>.

Getting Started
===============

`git clone git@github.com:sdouglas/biomod.git`

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

### Dates and
### The Countdown timer

Dates of events are defined by `registration_date` in _config.yml so they can be changed site-wide from a single location (although currently date is only used in countdown panel and js timer itself).

The date format in _config.yml is `YYYY-MM-DD HH:MM:SS +/-TTTT` although the UTC offset is optional.
In the templates however, it is possible to change the date format with liquid tags (as described [by shopify](http://docs.shopify.com/themes/liquid-basics/output#date) ). For example:

	{{ site.registration_date | date_to_long_string }}
	{{ site.registration_date | date: "%B %-d %R" }}

Countdown is set up in main.js but draws the registration date from _config and converts it to a javascript Date object for calculating time remaining.

### Technologies used

[Bourbon](http://bourbon.io/), a set of sass classes is installed and we're using its companion set, 'Neat' for its grid. To update these libraries, go into the /assets/scss directory and type `update neat` and `update bourbon`.


### The blog
  
By adding this line to _config.yml
excerpt_separator: <!--more-->
We can add <!--more--> to a blog, so it cuts off the excerpt display at its location. This is important as a LONG blog post will display in its entirety on the front page. You don't want that. 


### Noteworthy links

[Mr. Poole, an tool for using jekyll](https://github.com/mmcclimon/mr_poole)

[Using Jekyll Plugins on Github Pages](http://blog.nitrous.io/2013/08/30/using-jekyll-plugins-on-github-pages.html) blog entry from blog.nitrous.io

[tapir](http://tapirgo.com/) offers search based on an RSS feed, useful for static sites.
