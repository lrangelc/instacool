import React from 'react';

import './header.module.scss';

import { ReactComponent as Logo } from '../../logo.svg';

/* eslint-disable-next-line */
export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  return (
    <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to instacool-front!</h1>
      </header>
  );
}

export default Header;
