"use client"

import Link from 'next/link';
import styles from './TagsMenu.module.css';
import { useState } from 'react';


const tagsList = ['Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];

const TagsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.overlay}>
      <div className={styles.menuContainer}>
        <button className={styles.menuButton} onClick={() => setIsOpen(true)}>
          Notes ▾
        </button>
        {isOpen && (
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link
                href={'/notes/filter/all'}
                className={styles.menuLink}
                onClick={() => setIsOpen(false)}>
                All notes
              </Link>
            </li>
            {tagsList.map(item => (
              <li key={`tagsList-${item}`} className={styles.menuItem}>
                <Link
                  href={`/notes/filter/${item}`}
                  className={styles.menuLink}
                  onClick={() => setIsOpen(false)}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TagsMenu;
