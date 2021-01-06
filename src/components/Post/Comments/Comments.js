import {useRef, useEffect} from 'react'
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'

// Ref. by https://divyanshu013.dev/blog/gatsby-comments-utterances/

const Comments = () => {
  // this query is for retrieving the repo name from gatsby-config

  const commentNodeId = 'comments';
  useEffect(() => {
    // docs - https://utteranc.es/
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.async = true;
    script.setAttribute('repo', 'dbko/blog-comments');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('label', 'comment :speech_balloon:');
    script.setAttribute('theme', 'github-light');
    script.setAttribute('crossorigin', 'anonymous');

    const scriptParentNode = document.getElementById(commentNodeId);
    scriptParentNode.appendChild(script);

    return () => {
      // cleanup - remove the older script with previous theme
      scriptParentNode.removeChild(scriptParentNode.firstChild);
    };
  }, []);

  return <div id={commentNodeId} />;
};

export default Comments;