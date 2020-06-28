import React from 'react';
import styles from './PageWrapper.module.css';

interface PageWrapperProps {
  title?: string;
  children: React.ReactNode;
}

const PageWrapper = ({ title, children }: PageWrapperProps): JSX.Element => {
  return (
    <div className={styles.container}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
};

export default PageWrapper;
