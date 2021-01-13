import React from 'react';

import styles from './app.module.scss';

import Header from './header/header';
import Intro from './intro/intro';

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Intro />
    </div>
  );
}

export default App;
