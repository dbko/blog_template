// @flow strict
import React, {useEffect, useState} from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Post from '../components/Post';
import { useSiteMetadata } from '../hooks';
import type { MarkdownRemark } from '../types';

type Props = {
  data: {
    markdownRemark: MarkdownRemark,
    next: props.pageContext
  }
};

const PostTemplate = ({ data, pageContext }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { frontmatter } = data.markdownRemark;
  const { title: postTitle, description: postDescription = '', socialImage } = frontmatter;
  const metaDescription = postDescription || siteSubtitle;
  const socialImageUrl = socialImage?.publicURL;
  const {next, prev} = pageContext;


  // adding toc
  const tocItems = data.markdownRemark.tableOfContents
  const [currentHeaderUrl, setCurrentHeaderUrl] = useState(undefined);
  const isTOCVisible = tocItems?.length > 0;
  const HEADER_OFFSET_Y = 300

  useEffect(() => {
    const handleScroll = () => {
      let aboveHeaderUrl;
      const currentOffsetY = window.pageYOffset;
      const headerElements = document.querySelectorAll('.anchor-header');
      for (const elem of headerElements) {
        const { top } = elem.getBoundingClientRect();
        const elemTop = top + currentOffsetY;
        const isLast = elem === headerElements[headerElements.length - 1];
        if (currentOffsetY < elemTop - HEADER_OFFSET_Y) {
          aboveHeaderUrl &&
            setCurrentHeaderUrl(aboveHeaderUrl.split(location.origin)[1]);
          !aboveHeaderUrl && setCurrentHeaderUrl(undefined);
          break;
        } else {
          isLast && setCurrentHeaderUrl(elem.href.split(location.origin)[1]);
          !isLast && (aboveHeaderUrl = elem.href);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  //

  return (
    <Layout title={`${postTitle} - ${siteTitle}`} description={metaDescription} socialImage={socialImageUrl} >
      <Post 
      post={data.markdownRemark}
      isTOCVisible = {isTOCVisible}
      tocItems = {tocItems}
      currentHeaderUrl={currentHeaderUrl}
      next = {next}
      prev = {prev} 
      />
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      tableOfContents
      frontmatter {
        date
        description
        tags
        title
        socialImage {
          publicURL
        }
      }
    }
  }
`;

export default PostTemplate;
