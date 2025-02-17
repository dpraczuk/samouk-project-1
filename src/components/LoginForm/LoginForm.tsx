import { Link } from '@tanstack/react-router';

export const LoginForm = () => {
  return (
    <div className="login__form">
      <h1>Login</h1>
      <p>Enter your email below to login to your account</p>
      <form>
        <div className="login__form__input-wrapper">
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </div>
        <div className="login__form__input-wrapper">
          <label>Password</label>
          <Link
            className="login__form__forgot-password"
            to="/auth/forgot-password"
          >
            Forgot password?
          </Link>
          <input type="password" placeholder="Password" />
        </div>
        <button>Login</button>
      </form>
      <p className="login__register">
        Don't have an account? <Link to="/auth/register">Sign up</Link>
      </p>
    </div>
  );
};
