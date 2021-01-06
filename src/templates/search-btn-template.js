// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata, useCategoriesList, useTagsList } from '../hooks';
import styles from '../components/Post/Tags/Tags.module.scss'

const SearchBtnTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const categories = useCategoriesList();
  const tags = useTagsList();

  return (
    <Layout title={`Categories & Tags - ${title}`} description={subtitle}>
      <Sidebar />
      <Page className={styles['tags']} title="Categories & Tags">
        <h3>Categories</h3>
        <ul className={styles['tags__list']}>
          {categories.map((category) => (
            <li className={styles['tags__list-item']} key={category.fieldValue}>
              <Link to={`/category/${kebabCase(category.fieldValue)}/`} className={styles['tags__list-item-link']}>
                {category.fieldValue} ({category.totalCount})
              </Link>
            </li>
          ))}
        </ul>
        <h3>Tags</h3>
        <ul className={styles['tags__list']}>
          {tags.map((tag) => (
            <li className={styles['tags__list-item']} key={tag.fieldValue}>
              <Link to={`/tag/${kebabCase(tag.fieldValue)}/`} className={styles['tags__list-item-link']}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  );
};

export default SearchBtnTemplate;
