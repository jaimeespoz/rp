// modulos
import { useState } from 'react';
import { Link } from 'react-router-dom';

import BanderaEscudo from '../../components/assets/images/banderaescudo.jpg';
import IsladePascua from '../../components/assets/images/IsladePascua.jpg';
import BotonAceptar from '../../components/html/button/BotonAceptar.js/index.js';

import './style.css';

const initialForm = {
	usuario: 'aa@aa.cl',
	terminos: true,
	existe: false,
	registrado: false,
};

const validationsForm = (form) => {
	let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
	//	let regexComments = /^.{1,255}$/;
	let errors = {};
	// let api = helpHttp();

	if (!form.usuario) {
		errors.usuario = 'Ingrese su Correo Electronico';
	} else if (!regexEmail.test(form.usuario)) {
		errors.usuario = 'Ingrese un Correo Electronico valido';
	}

	if (!form.terminos) {
		errors.terminos = 'Debe aceptar Terminos de este Sitio';
	}
	return errors;
};

function Registrarse() {
	const [form, setForm] = useState(initialForm);
	const [errors, setErrors] = useState({ usuario: '', clave: '', valido: '' });

	const handleChange = (e) => {
		const { name, value } = e.target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleChecked = (e) => {
		const { name, value } = e.target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleLogin = () => {
		//		navigate('/login');
	};

	return (
		<main>
			<div className="container">
				<div className="d-flex flex-row justify-content-center">
					<div className="col-10 col-sm-10 col-md-8 col-lg-8 col-xl-8">
						<div className="d-flex flex-row">
							<div className="col-10 text-center">
								<Link to="/">
									<img src={BanderaEscudo} alt="" className="logo" />
								</Link>
							</div>
						</div>
						<div className="d-flex flex-row justify-content-center">
							<div className="col-12">
								<div className="d-flex flex-row flex-wrap justify-content-center">
									<div className="col-9 col-sm-9 col-md-6 col-lg-6 col-xl-6">
										<div className="d-flex flex-column justify-content-center">
											<div className="col-12">
												<span className="texto-lg fw-semi-bold">
													Registrese en nuestro Portal Patriota
												</span>
											</div>
											<div className="col-10">
												<img src={IsladePascua} alt="" className="logo2" />
											</div>
											<div className="col-12 mt-2 px-">
												<span className="texto-sm text-muted">
													Ante cualquier duda, visite nuestras condiciones de
													Uso de este Portal
												</span>
											</div>
										</div>
									</div>

									<div className="col-9 col-sm-9 col-md-4 col-lg-4 col-xl-4 offset-1">
										<div className="d-flex flex-row flex-wrap justify-content-center justify-content-evenly">
											<div className="col-12">
												<span className="texto-lg fc-steel-blue">
													Registro de Usuarios
												</span>
											</div>
											<div className="col-12">
												<label
													htmlFor="usuario"
													className="form-label-sm fw-semi-bold mt-3"
												>
													Correo Electronico:
												</label>
												<p className="texto-xsm text-muted mb-1">
													Es usando para que se conecte y para algunas funciones
													administrativas
												</p>
												<input
													type="text"
													className="form-control-sm"
													id="usuario"
													name="usuario"
													value={form.usuario}
													placeholder="Ingrese Casilla Correo"
													onChange={handleChange}
												/>
											</div>
											<div className="col-12">
												<article className="check-box">
													<input
														id="terminos"
														name="terminos"
														type="checkbox"
														value={form.terminos}
														onChange={handleChecked}
													/>
													<label htmlFor="terminos" className="texto-xsm">
														Acepto los Terminos del sitio
													</label>
												</article>
											</div>
											<div className="col-12 text-center mt-4">
												<BotonAceptar
													text="Verificacion Correo Electronico"
													onClickHandler={handleLogin}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="d-flex flex-row justify-content-center">
							<div className="col-12">
								<hr className="mt-6"></hr>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Registrarse;
