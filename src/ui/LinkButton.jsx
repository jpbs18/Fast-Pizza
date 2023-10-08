import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className = "text-sm text-blue-400 hover:text-blue-600";

  if (to === "-1") {
    return (
      <button className={className} onClick={() => navigate(-1)}>
        &larr; {children}
      </button>
    );
  }

  return (
    <Link to={to} className={className}>
      &larr; {children}
    </Link>
  );
}

export default LinkButton;

LinkButton.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
};
