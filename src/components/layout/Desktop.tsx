import React, { Children } from 'react';

export interface DesktopLayoutProps {}

const DesktopLayout: React.FC<DesktopLayoutProps> = ({ children }) => {
  return <main>{Children}</main>;
};

export default DesktopLayout;
