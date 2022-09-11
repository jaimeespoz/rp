import { Fragment } from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './style.css';

export const BotonGenerico = ({ text, onClickHandler }) => {
	return (
		<Fragment>
			<Button
				fluid
				primary
				basic
				className="boton-generico"
				onClick={onClickHandler}
			>
				{text}
			</Button>
			{/* <div className="boton-generico">
				<div className="borde">
					<h2>Hola</h2>
				</div>
			</div> */}
		</Fragment>
	);
};

BotonGenerico.propTypes = {
	text: PropTypes.string.isRequired,
	onClickHandler: PropTypes.func.isRequired,
};

export default BotonGenerico;
