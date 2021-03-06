import React from 'react';

import styles from './app.module.scss';

import Header from './components/header/header';
import Intro from './components/Intro';
import Intro2 from './components/Intro2';
// import Intro from './components/intro/intro';

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Intro dato={25} />
      <Intro text="Texto para Intro 2" />
      <Intro2 />
    </div>
  );
}

export default App;
