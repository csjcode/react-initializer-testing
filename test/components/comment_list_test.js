import { renderComponent , expect } from '../test_helper'; // import test helper functions (needed for testing)
import CommentBox from '../../src/components/comment_list'; // import component being tested


describe('CommentList', () => {

   let component;

   beforeEach(() => {
      const props =  {comments:['Thailand','Malaysia']};
      component = renderComponent(CommentList, null, props); // 3rd argument can pass props down to component
   });

   it('shows an li for each comment', () => {
      expect(component.find('li').length).to.equal(2);
   });

   it('shows each comment that is provided', () => {
      expect(component).to.contain("Thailand");
      expect(component).to.contain("Malaysia");
   });


});
