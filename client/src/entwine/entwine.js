import Injector, { loadComponent } from 'lib/Injector';
import jQuery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import UnlayerField from '../components/UnlayerField/UnlayerField';

window.document.addEventListener('DOMContentLoaded', () => {
  jQuery.entwine('ss', ($) => {
    $('.unlayer').entwine({
      onmatch() {
        const Component = loadComponent('UnlayerField');
        const schemaState = this.data('state');

        // This is our "polyfill" for `onAutoFill`
        const setValue = (fieldName, value) => {
          // We'll find the input by name, we shouldn't ever have the same input
          // with the same name or form state will be messed up
          const input = document.querySelector(`input[name="${fieldName}"]`);

          // If there's no input field then we'll return early
          if (!input) {
            return;
          }

          // Now we can set the field value
          input.value = value;
        }

        ReactDOM.render(<UnlayerField {...schemaState} onAutofill={setValue}/>, this[0]);
      },
      onunmatch() {
        ReactDOM.unmountComponentAtNode(this[0]);
      },
    });
  });
});
