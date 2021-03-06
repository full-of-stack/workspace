import React from 'react';
import { text } from '@storybook/addon-knobs';
import Logo from '../src/commons/components/atoms/Logo';

export default {
  title: 'Components|Pages',
};

export const LoginPage: React.FC = () => (
  <Logo content={text('logoText', 'Bookus')} />
);
