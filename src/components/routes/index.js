import { Routes, Route } from 'react-router-dom';

// paginas
import Home from '../../views/Home/Home';
import Login from '../../views/Home/login/Login';
import Registrarse from '../../views/Home/Registrarse';

export const Rutas = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="login" element={<Login />} />
				<Route path="registrase" element={<Registrarse />} />
			</Routes>
		</>
	);
};
