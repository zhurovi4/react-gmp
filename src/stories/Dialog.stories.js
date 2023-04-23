import React from 'react';
import Dialog from '../components/Dialog';

export default {
  title: 'Dialog',
  component: Dialog,
};

export const Default = () => (
  <Dialog isOpen onClose={() => console.log('closed')}>
    <p>This is the default dialog content.</p>
  </Dialog>
);

export const WithTitle = () => (
  <Dialog isOpen onClose={() => console.log('closed')}>
    <h2>Dialog Title</h2>
    <p>This dialog has a title.</p>
  </Dialog>
);

export const WithButtons = () => (
  <Dialog isOpen onClose={() => console.log('closed')}>
    <h2>Dialog with Buttons</h2>
    <p>Do you want to continue?</p>
    <button>Yes</button>
    <button>No</button>
  </Dialog>
);

