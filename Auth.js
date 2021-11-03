const Auth = () => {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <>
          <input type="text" placeholder="email address" name="email" />
          <input type="password" name="password" placeholder="password" />
        </>
        <>
          <input
            type="text"
            placeholder="first name"
            name="firstName"
            className="form-input-half-1"
          />
          <input
            type="text"
            className="form-input-half-2"
            name="lastName"
            placeholder="last name"
          />
          <input type="text" name="email" placeholder="email address" />
          <input type="password" name="password" placeholder="password" />
          <input
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
          />
        </>
        <button>Sign In</button>

        <button className="toggle-sign-in-button">
          "Don't have a login? Sign up."
        </button>
      </form>
    </div>
  );
};

export default Auth;
