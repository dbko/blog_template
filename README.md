# Gatsby blog template based Lumen starter

  This blog template developed based gatsby starter [Lumen](https://github.com/alxshelepenok/gatsby-starter-lumen) and tested by Windows, Linux(Ubuntu 20.04) and MacOS. You can see how this template work in [here](https://dbko.github.io). Since I'm not a web developer, I have tried to adhere to the structure and conventions of the existing template, but there may be some unnecessary code and structure. 




## Table of contents

For more information, see  [this](https://github.com/alxshelepenok/gatsby-starter-lumen).

+ [Added features](https://github.com/dbko/blog_template#Added features) 
+ [Quick Start](http://github.com/dbko/blog_template#quick-start)
+ [Folder Structure](http://github.com/dbko/blog_template#folder-structure)
+ [Contributors](http://github.com/dbko/blog_template#contributors)
+ [License](http://github.com/dbko/blog_template#license)



## Added features

#### More post menu

  I've added 2 menus to further manage my posts (Research, Study). To customize, you need to edit the menu section of  ` ./config.js ` and  `./gatsby/pagination/create-posts-pages.js`. 

#### Next & previous link

  Added the next & previous link at the bottom of posts. To display the link image, you need to have a socialImage entry in the header of your markdown file.

  This prioritizes posts on the same topic, not chronologically. To do this, create and manage folders with date and keyword names in the post path. Check the structure of  `./content/posts/`. If you want to change the priority of links, edit the graphql sort section of  `./gatsby/create-pages.js`.

#### Search menu

List of tags and categories that can be viewed by accessing `/tags` and `/categories` path has been combined into one page.

#### Table of contents

  Added highlighted toc by referring [here](https://blueshw.github.io/2020/05/30/table-of-contents/). For this to work, you should always have a trailing slash at the end of your blog address. In lumen template, it seems to be deliberately clearing the trailing slash. I can't find a way to save the trailing slash, so you need to specify slash at the end of the slug entry in the markdown file header :(

## Quick Start

#### Clone and install packages

Use the Gatsby CLI to create a new site, specifying the Lumen starter.

```sh
# Download template and install node pakages
git clone https://github.com/dbko/blog_template.git
cd blog_template
npm install
```

#### Start Developing

Navigate into your new site’s directory and start it up.

```sh
cd blog
gatsby develop
```

#### Open the source code and start editing!

Your site is now running at `http://localhost:8000`!

Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).

Open the `blog` directory in your code editor of choice and edit `src/templates/index-template.js`. Save your changes and the browser will update in real time!



## Deploy to Github Pages

To deploy to github pages, simply do the following:

- Ensure that your `package.json` file correctly reflects where this repo lives
- Change the `pathPrefix` in your `config.js`
- Run the standard deploy command

```sh
npm run deploy
```


#### Access Locally

```
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ yarn
$ npm run develop
```

To test the CMS locally, you'll need run a production build of the site:

```
$ npm run build
$ gatsby serve
```

## Folder Structure

```
└── content
    ├── pages
    └── posts
└── static
    ├── admin
    └── media
└── src
    ├── assets
    │   └── scss
    │       ├── base
    │       └── mixins
    ├── cms
    │   └── preview-templates
    ├── components
    │   ├── Feed
    │   ├── Icon
    │   ├── Layout
    │   ├── Page
    │   ├── Pagination
    │   ├── Post
    │   │   ├── Author
    │   │   ├── Comments
    │   │   ├── Content
    │   │   ├── Meta
    │   │   ├── NaviLink
    │   │   ├── TableOfContents
    │   │   └── Tags
    │   └── Sidebar
    │       ├── Author
    │       ├── Contacts
    │       ├── Copyright
    │       └── Menu
    ├── constants
    ├── templates
    └── utils

```

## License

The MIT License (MIT)

Copyright (c) 2016-2020 Alexander Shelepenok

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
