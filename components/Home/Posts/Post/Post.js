const Post = ({ title, body, likeCount, _id, name, creator, createdAt }) => {
  return (
    <div className="posts-container">
      <div className="single-post">
        <h2 className="post-title">title</h2>
        <p className="post-body">body</p>
        <p>creator</p>
        <p>name</p>
        <p>created at</p>
        <div className="likes-container">
          <p className="post-likes">how many likes</p>
          <button className="like-button">like</button>
        </div>
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>
  );
};

export default Post;
