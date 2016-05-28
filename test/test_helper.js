
import jsdom from 'jsdom'; // needed for browser-like  testing without browser
import _$ from 'jquery'; // _$ needed to prevent jquery from alwys applying to browser

// Setup testing environment to run like a browser in the command line.


global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = _$(window); // assign $ to only work with this browser test configuration

// Build, 'renderComponent' helper that should render a given
// Build helper for simulating events.
// set up Chai jQuery
