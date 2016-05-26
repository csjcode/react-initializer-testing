import { expect } from '../test_helper'; // import test helper functions (needed for testing)
import commentReducer from '../../src/reducers/comments';
import {SAVE_COMMENT} from '../../src/actions/types';

describe('Comments Reducer', () => {
   it('Handles action with unknown type', () => {
      // expect(commentReducer()).to.be.instanceof(Array);
      expect(commentReducer()).to.eql([]);
   });

   it('Handles action of type SAVE_COMMENT', () => {

   });
});
