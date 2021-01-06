import React, { useMemo } from 'react';
import s from './TableOfContents.module.scss';
import cn from 'classnames';

export default function TableOfContents({ items, currentHeaderUrl }) {
  const replaceItems = useMemo(() => {
    if (currentHeaderUrl) {
      return items.replace(
        `"${currentHeaderUrl}"`,
        `"${currentHeaderUrl}" class="${s.isCurrent}"`
      );
    } else {
      return items;
    }
  }, [currentHeaderUrl]);
  return items ? (
    <nav className={cn('table-of-contents', s.container)}>
      <h4 className={s.title}>TABLE OF CONTENTS</h4>
      <div
        className={s.contents}
        dangerouslySetInnerHTML={{ __html: replaceItems }}
      />
    </nav>
  ) : null;
}