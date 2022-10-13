import PropTypes from "prop-types";
import "./style.scss";

export const BotonRRSS = ({ url, className, text, onClickHandler }) => {
  return (
    <article className="social-media-icon">
      <a href={url} className={className} aria-label="Close">
        <span className="spany">{text}</span>
      </a>
    </article>
  );
};

BotonRRSS.propTypes = {
  text: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default BotonRRSS;
