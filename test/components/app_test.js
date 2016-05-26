import { renderComponent , expect } from '../test_helper'; // import test helper functions (needed for testing)
import App from '../../src/components/app'; // import component being tested

// to run this: npm run test:watch
// watch will automatically update the test results when the file changes

// 3 important keywords needed for the testing in this file - describe, it, expect

/* Describe: groups together similar tests
- the string is nothing special, can be 'Test App Component' etc.
- may be easier to keep track of by using the same component being tested*/
describe('App',() => {

   let component;

   beforeEach(() => {

      component = renderComponent(App);

   })

   it ('shows a comment box',() => {
      expect(component.find('.comment-box')).to.exist;
   });

   it ('shows a comment list',() => {
      expect(component.find('.comment-list')).to.exist;
   });

});
