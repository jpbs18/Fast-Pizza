import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "text-sm bg-yellow-500 font-semibold text-stone-800 rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: `${base} px-4 py-3 md:px-6 md:py-4`,
    small: `${base} px-3 py-1.5 md:px-4 md:py-2.5 text-xs`,
    secondary:
      "text-sm border-2 border-stone-300 px-4 py-2.5 sm:px-6 sm:py-2.5 font-semibold text-stone-400 rounded-full hover:bg-stone-300 hover:text-stone-600 transition-colors duration-300 focus:outline-none focus:ring  focus:text-stone-600 focus:ring-offset-2 disabled:cursor-not-allowed",
    round: `${base} px-2.5 py-1 md:px-3.5 md:py-2 text-sm`,
  };

  if (to) {
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
