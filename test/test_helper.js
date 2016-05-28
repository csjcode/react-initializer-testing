
import jsdom from 'jsdom'; // needed for browser-like  testing without browser
import _$ from 'jquery'; // _$ needed to prevent jquery from alwys applying to browser
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils'; // React testing module
import chai, { expect } from 'chai';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';


// Setup testing environment to run like a browser in the command line.

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = _$(window); // assign $ to only work with this browser test configuration

// Build, 'renderComponent' helper that should render a given

function renderComponent(ComponentClass, props = {}, state = {}) { // spin off a copy of the component class name (ie CommentBox)
  const componentInstance =  TestUtils.renderIntoDocument( // handler from TestUtils library of React
    <Provider store={createStore(reducers, state)}> // for Redux middleware
      <ComponentClass {...props} />
    </Provider>
  );



// Build helper for simulating events.

// set up Chai jQuery

export { renderComponent, expect};
