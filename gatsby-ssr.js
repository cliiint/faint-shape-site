import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="robotomono"
      rel="preload"
      href="/fonts/RobotoMono-Regular.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
    />
  ]);
};