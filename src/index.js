// modulos
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'semantic-ui-css/semantic.min.css';

// paginas
import { Rutas } from './components/routes';

// css
import '../src/components/styles/Styles.css';
import Registrarse from './views/Home/Registrarse';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			{/* <Rutas /> */}
			<Registrarse />
		</BrowserRouter>
	</React.StrictMode>
);
