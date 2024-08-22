import Injector, { loadComponent } from 'lib/Injector';
import jQuery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import UnlayerField from '../components/UnlayerField/UnlayerField';

window.document.addEventListener('DOMContentLoaded', () => {
  console.log('registering components');
  jQuery.entwine('ss', ($) => {
    $('.unlayer').entwine({
      onmatch() {
        const Component = loadComponent('UnlayerField');
        const schemaState = this.data('state');
        ReactDOM.render(<UnlayerField {...schemaState}/>, this[0]);
      },
      onunmatch() {
        ReactDOM.unmountComponentAtNode(this[0]);
      },
    });
  });
});
