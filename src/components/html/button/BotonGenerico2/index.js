import { Fragment } from "react";
import { Button } from "semantic-ui-react";
import PropTypes from "prop-types";
import "./style.scss";

export const BotonGenerico2 = ({ text, onClickHandler }) => {
  return (
    <Fragment>
      <Button
        fluid
        primary
        basic
        className="boton-generico2"
        onClick={onClickHandler}
      >
        {text}
      </Button>
    </Fragment>
  );
};

BotonGenerico2.propTypes = {
  text: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default BotonGenerico2;
