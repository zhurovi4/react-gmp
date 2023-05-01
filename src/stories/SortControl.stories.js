import React from 'react';
import SortControl from '../components/SortControl';

export default {
  title: 'SortControl',
  component: SortControl,
  parameters: {
    backgrounds: {
      default: "custom",
      values: [
        {
          name: "custom",
          value: "#232323",
        },
      ],
    },
  },
};

export const Default = () => (
    <SortControl defaultSelection="release-date" />
);

export const TitleSelected = () => (
    <SortControl defaultSelection="title" />
);
