const $botonIniciar = document.querySelector('#iniciar');
const $botonPausar = document.querySelector('#pausar');
const $botonReiniciar = document.querySelector('#reiniciar');

const $hora = document.querySelector('#horas');
const $minutos = document.querySelector('#minutos');
const $segundos = document.querySelector('#segundos');

const $aumentarHora = document.querySelector('#aumentarHora');
const $aumentarMinuto = document.querySelector('#aumentarMinuto');
const $aumentarSegundo = document.querySelector('#aumentarSegundo');
const $disminuirHora = document.querySelector('#disminuirHora');
const $disminuirMinuto = document.querySelector('#disminuirMinuto');
const $disminuirSegundo = document.querySelector('#disminuirSegundo');

let hora = Number($hora.innerHTML);
let minutos = Number($minutos.innerHTML);
let segundos = Number($segundos.innerHTML);

let pausar;

function mostrarTiempo() {
	$hora.innerText = `${hora < 10 ? '0' + hora : hora}`
	$minutos.innerText = `${minutos < 10 ? '0' + minutos : minutos}`;
	$segundos.innerText = `${segundos < 10 ? '0' + segundos : segundos}`
};

function iniciarCuentaRegresiva() {
	if (hora === 0 && minutos === 0 && segundos === 0) {
		segundos === 0;
		reiniciar();
		habilitarBotones();
		alert('Tiempo!');
	} else if (segundos === 0) {
		segundos = 59;
		restarMinuto();
	} else {
		segundos--;
	};

	mostrarTiempo();
};

function restarMinuto() {
	if (hora === 0 && minutos === 0) {
		minutos = 0
	} else if (minutos === 0) {
		minutos = 59;
		restarHora();
	} else {
		minutos--
	};
};

function restarHora() {
	if (hora > 0) {
		hora--;
	};
};

function reiniciar() {
	clearInterval(pausar);
	$hora.innerText = '00';
	$minutos.innerText = '00';
	$segundos.innerText = '00';
	$botonIniciar.disabled = false;
	$botonPausar.disabled = true;
	$botonPausar.innerText = 'Pausar';
	hora = 0;
	minutos = 0;
	segundos = 0;
};

function deshabilitarBotonesDisminuir() {
	$disminuirHora.disabled =true;
	$disminuirMinuto.disabled =true;
	$disminuirSegundo.disabled =true;
};

function deshabilitarBotonesAumentar() {
	$aumentarHora.disabled =true;
	$aumentarMinuto.disabled =true;
	$aumentarSegundo.disabled =true;
};

function habilitarBotones() {
	$aumentarHora.disabled = false;
	$aumentarMinuto.disabled = false;
	$aumentarSegundo.disabled = false;
}

$botonIniciar.onclick = function () {
	pausar = setInterval(iniciarCuentaRegresiva, 1000);
	$botonIniciar.disabled = true;
	$botonPausar.disabled = false;
	deshabilitarBotonesDisminuir();
	deshabilitarBotonesAumentar();
};

$botonPausar.onclick = function () {
	if ($botonPausar.innerText === 'Pausar') {
		clearInterval(pausar);
		$botonPausar.innerText = 'Reanudar';
	} else if ($botonPausar.innerText = 'Reanudar') {
		pausar = setInterval(iniciarCuentaRegresiva, 1000);
		$botonPausar.innerText = 'Pausar';
	};
};

$botonReiniciar.onclick = function () {
	reiniciar();
	deshabilitarBotonesDisminuir();
	habilitarBotones();
};

$aumentarHora.onclick = function () {
	activarDesactivarBoton($disminuirHora, hora);
	hora++;
	$hora.innerHTML = hora < 10 ? '0' + hora : hora;
	return hora;
};

$aumentarMinuto.onclick = function () {
	activarDesactivarBoton($disminuirMinuto, minutos);
	minutos++;
	$minutos.innerHTML = minutos < 10 ? '0' + minutos : minutos;
	return minutos;
};

$aumentarSegundo.onclick = function () {
	activarDesactivarBoton($disminuirSegundo, segundos);
	segundos++;
	$segundos.innerHTML = segundos < 10 ? '0' + segundos : segundos;
	return segundos;
};

$disminuirHora.onclick = function () {
	hora--;
	$hora.innerHTML = hora < 10 ? '0' + hora : hora;
	activarDesactivarBoton($disminuirHora, hora);
	return hora;
};

$disminuirMinuto.onclick = function () {
	minutos--;
	$minutos.innerHTML = minutos < 10 ? '0' + minutos : minutos;
	activarDesactivarBoton($disminuirMinuto, minutos);
	return minutos;
};

$disminuirSegundo.onclick = function () {
	segundos--;
	$segundos.innerHTML = segundos < 10 ? '0' + segundos : segundos;
	activarDesactivarBoton($disminuirSegundo, segundos);
	return segundos;
};

function activarDesactivarBoton(boton, numero) {
	if (numero === 0) {
		if (boton.disabled) {
			boton.disabled = false;
		} else {
			boton.disabled = true;
		};
	};
};