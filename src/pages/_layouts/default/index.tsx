import React from 'react';

import { Wrapper } from './styles';

import Menu from '../../../components/Menu';
import Footer from '../../../components/Footer';

export default function DefaultLayout({ children }: any) {
  return (
    <Wrapper>
      <Menu />

      {children}

      <Footer />
    </Wrapper>
  );
}
