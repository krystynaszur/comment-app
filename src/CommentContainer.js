import { connect } from 'react-redux';
import Comment from './Comment';
import { thumbUpComment } from './actions';
import { thumbDownComment } from './actions';
import { removeComment } from './actions';
import { editComment } from './actions';

const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id)),
  thumbDownComment: (id) => dispatch(thumbDownComment(id)),
  removeComment: (id) => dispatch(removeComment(id)),
  editComment: (text, id) => dispatch(editComment(text, id))
});

export default connect(null, mapDispatchToProps)(Comment);