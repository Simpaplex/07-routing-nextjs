import Link from 'next/link';
import styles from './page.module.css';

const NotFound = () => {
  return (
    <>
      <h1 className={styles.title}>404 - Page not found</h1>
      <p className={styles.description}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href={'/'}>Back to home</Link>
    </>
  );
};

export default NotFound;
