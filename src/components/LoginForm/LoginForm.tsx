import { Link } from '@tanstack/react-router';
import Label from '../Label/Label';

export const LoginForm = () => {
  return (
    <section className="login-form">
      <h1 className="login-form__title">Login</h1>
      <p className="login-form__description">
        Enter your email below to login to your account
      </p>
      <form className="login-form__form">
        <div className="input-wrapper">
          <Label className="login-form__label">Email</Label>
          <input
            className="login-form__input"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="input-wrapper">
          <Label className="login-form__label">Password</Label>
          <Link
            className="login-form__forgot-password"
            to="/auth/forgot-password"
          >
            Forgot password?
          </Link>
          <input
            className="login-form__input"
            type="password"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="login-form__submit">
          Login
        </button>
        <p className="login-form__register">
          Don't have an account? <Link to="/auth/register">Sign up</Link>
        </p>
      </form>
    </section>
  );
};
