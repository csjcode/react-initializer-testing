import { expect } from '../test_helper'; // import test helper functions (needed for testing)
import { SAVE_COMMENT } from '../../src/actions/types';
import { save_comment } from '../../src/actions';

describe('actions', () => {
   describe('saveComment', () => {
      it('it has the correct type',() => {
         const action = saveComment();
         expect(action.type).to.equal(SAVE_COMMENT);
      });

      it('it has the correct payload',() => {
         const action = saveComment('new comment');
         expect(action.payload).to.equal('new comment');

      });

   });

});
