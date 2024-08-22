/* global window */
import registerComponents from 'boot/registerComponents';

window.document.addEventListener('DOMContentLoaded', () => {
  console.log('registering components');
  registerComponents();
});
