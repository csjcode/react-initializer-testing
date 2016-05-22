import { renderComponent , expect } from '../test_helper'; // import test helper functions (needed for testing)
import App from '../../src/components/app'; // import component being tested

// to run this: npm run test:watch
// watch will automatically update the test results when the file changes

// 3 important keywords needed for the testing in this file - describe, it, expect

/* Describe: groups together similar tests
- the string is nothing special, can be 'Test App Component' etc.
- may be easier to keep track of by using the same component being tested*/
describe('App',() => {

   // It: Group one single test of target
   // in this case we just want to test if the string "React simple starter" is rendered

   it('shows the correct text',() => {

      // create an instance of App - renderComponent is one of the helpers already set up in test_helper
      const component = renderComponent(App);

      // expect: make an 'assertion' (reasonable belief that belief about target is true) about the target
      // .to.contain is a matcher
      expect(component).to.contain('React simple starter')

   });

});
