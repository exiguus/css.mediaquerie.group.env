Setup Frontend Dev Env with inline Media Queries
=======================================================
SASS and Grunt post processing for Media Query grouping

# group-css-media-queries
CSS post processing: group media queries. Useful for post processing preprocessed CSS files.

https://www.npmjs.com/package/group-css-media-queries

# grunt-contrib-concat
Post processing: concat files. Useful for post processing preprocessed files.

https://www.npmjs.com/package/grunt-contrib-concat

# Media Queries order (group-css-media-queries)
Output CSS is ordered by these rules:
* non-media-query code goes first unmodified,
* then all only min-width rules, sorted ascending by px
* then all only max-width rules, sorted descending by px
* then all interval rules, without reordering
* then all other rules

# Setup
## Structure
* ```base/``` (libs, globals etc.)
* ```style/``` (project styles)
* ```base.scss``` (includes from ```base/```)
* ```style.scss``` (includes from ```style/```)

## Build (grunt)
* combile sass ```base.scss``` and ```style.scss``` to ```base.css``` and ```style.css```  (normally with grunt watch or compass on the fly)
* group media queries in ```style.css```
* concat ```base.css``` and ```style.css``` to ```screen.css```

## Test
* ```build.html``` includes ```base.css``` and ```style.css```
* ```dist.html``` includes ```screen.css```

# Resources
* https://benfrain.com/inline-or-combined-media-queries-in-sass-fight/
* https://gist.github.com/benfrain/2510308
* https://github.com/sass-mq/sass-mq
* https://github.com/Se7enSky/group-css-media-queries
