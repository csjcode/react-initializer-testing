import { renderComponent , expect } from '../test_helper'; // import test helper functions (needed for testing)
import CommentBox from '../../src/components/comment_box'; // import component being tested

// selectors: https://github.com/chaijs/chai-jquery

describe('CommentBox',() => {

   it('has the class comment-box',() => {
      const component = renderComponent(CommentBox);
      expect(component).to.have.class('comment-box');
   });

   it('has a text area',() => {
      const component = renderComponent(CommentBox);
      expect(component.find('textarea')).to.exist;
   });

   it('has a button',() => {
      const component = renderComponent(CommentBox);
      expect(component.find('button')).to.exist;
   });

});
