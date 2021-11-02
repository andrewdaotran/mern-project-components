const Form = () => {
  return (
    <>
      <button>Logout</button>
      <div className="form-container">
        <h3>Creating a Post</h3>
        <form className="form">
          <input type="text" placeholder="title" name="title" />
          <textarea rows="8" type="text" placeholder="body" name="body" />
          <input type="text" placeholder="tags" name="tags" />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Form;
