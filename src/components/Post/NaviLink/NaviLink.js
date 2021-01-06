// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import styles from './NaviLink.module.scss';


const NaviLink = ({ next, prev }) => (
	<div className={styles['navilink']}>
		{prev && (
			<div className={styles['navilink__box']}>
				<div className ={styles['navilink__box__img']}>
					{prev.frontmatter.socialImage && (
					<img src = {prev.frontmatter.socialImage.publicURL}/>
					)}
		        </div>
				<div className = {styles['navilink__box__content']} >
					<p4>PREV</p4><br/>
					<Link to = {prev.fields.slug}>
					  {prev.frontmatter.title}
					</Link>
				</div>
		    </div>
	    )}

	    {next && (
		    <div className={styles['navilink__box']}>
		    	<div className ={styles['navilink__box__img']}>
		          {next.frontmatter.socialImage && (
		            <img src = {next.frontmatter.socialImage.publicURL} />
		            )}
	          	</div>
	          	<div className = {styles['navilink__box__content']}>
	          		<p4>NEXT</p4><br/> 
		            <Link to = {next.fields.slug}>
		              {next.frontmatter.title}
		            </Link>
	          	</div>
		    </div>
	    )}
    </div>
);

export default NaviLink;
