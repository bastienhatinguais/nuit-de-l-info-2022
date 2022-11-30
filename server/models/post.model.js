import bookshelf from '../config/bookshelf';

const Post = bookshelf.model('Post', {
  tableName: 'posts',
});

export default Post;
