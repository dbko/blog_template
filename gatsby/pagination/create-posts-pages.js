'use strict';

const path = require('path');
const siteConfig = require('../../config.js');

module.exports = async (graphql, actions) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
      ) { totalCount }
    }
  `);

  const r_result = await graphql(`
    {
      allMarkdownRemark(
        filter: { 
          frontmatter: { template: { eq: "post" }, draft: { ne: true } }, 
          fields: { slug: { glob: "/posts/research/**"} }
        }
      ) { totalCount }
    }
  `);

   const s_result = await graphql(`
    {
      allMarkdownRemark(
        filter: { 
          frontmatter: { template: { eq: "post" }, draft: { ne: true } }, 
          fields: {slug: {glob: "/posts/study/**"} }
        } 
      ) { totalCount }
    }
  `);

  const { postsPerPage } = siteConfig;

  //Making index
  const numPages = Math.ceil(result.data.allMarkdownRemark.totalCount / postsPerPage);

  for (let i = 0; i < numPages; i += 1) {
    createPage({
      path: i === 0 ? '/' : `/page/${i}`,
      component: path.resolve('./src/templates/index-template.js'),
      context: {
        currentPage: i,
        postsLimit: postsPerPage,
        postsOffset: i * postsPerPage,
        prevPagePath: i <= 1 ? '/' : `/page/${i - 1}`,
        nextPagePath: `/page/${i + 1}`,
        hasPrevPage: i !== 0,
        hasNextPage: i !== numPages - 1
      }
    });
  }

  // Making research-index
  const r_numPages = Math.ceil(r_result.data.allMarkdownRemark.totalCount / postsPerPage);

  for (let i = 0; i < r_numPages; i += 1) {
    createPage({
      path: i === 0 ? '/research' : `/page/${i}`,
      component: path.resolve('./src/templates/research-index-template.js'),
      context: {
        currentPage: i,
        postsLimit: postsPerPage,
        postsOffset: i * postsPerPage,
        prevPagePath: i <= 1 ? '/research' : `/page/${i - 1}`,
        nextPagePath: `/page/${i + 1}`,
        hasPrevPage: i !== 0,
        hasNextPage: i !== r_numPages - 1
      }
    });
  }

  // Making study-index
  const s_numPages = Math.ceil(s_result.data.allMarkdownRemark.totalCount / postsPerPage);

  for (let i = 0; i < s_numPages; i += 1) {
    createPage({
      path: i === 0 ? '/study' : `/page/${i}`,
      component: path.resolve('./src/templates/study-index-template.js'),
      context: {
        currentPage: i,
        postsLimit: postsPerPage,
        postsOffset: i * postsPerPage,
        prevPagePath: i <= 1 ? '/study' : `/page/${i - 1}`,
        nextPagePath: `/page/${i + 1}`,
        hasPrevPage: i !== 0,
        hasNextPage: i !== s_numPages - 1
      }
    });
  }

};
