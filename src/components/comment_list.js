import React from 'react';
import { connect } from 'react-redux';

const CommentList = (props) => {
   return (
      <ul className="comment-list">
         <li>None</li>
      </ul>
   );
};

export default connect()(CommentList);
