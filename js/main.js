'use strict';

/* ---------- Menú adaptable ---------- */
function iniciarMenu() {
  const boton = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');
  if (!boton || !menu) return;

  const cerrar = () => {
    menu.classList.remove('abierto');
    boton.setAttribute('aria-expanded', 'false');
  };

  boton.addEventListener('click', () => {
    const abierto = menu.classList.toggle('abierto');
    boton.setAttribute('aria-expanded', String(abierto));
  });
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) cerrar(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('abierto')) { cerrar(); boton.focus(); }
  });
}

/* ---------- Filtro del programa ---------- */
function iniciarFiltro() {
  const botones = document.querySelectorAll('.filtro');
  const items = document.querySelectorAll('.actividad');
  const conteo = document.getElementById('conteo');

  function aplicar(tipo) {
    let visibles = 0;
    items.forEach((item) => {
      const mostrar = tipo === 'todas' || item.dataset.tipo === tipo;
      item.hidden = !mostrar;
      if (mostrar) visibles++;
    });
    botones.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.tipo === tipo)));
    conteo.textContent = `Mostrando ${visibles} de ${items.length} actividades.`;
  }

  botones.forEach((b) => b.addEventListener('click', () => aplicar(b.dataset.tipo)));
  aplicar('todas');
}

/* ---------- Validación accesible del formulario ---------- */
const reglas = {
  nombre: (v) => (v.trim().length < 3 ? 'Escriba su nombre completo (mínimo 3 caracteres).' : ''),
  correo: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Escriba un correo válido, por ejemplo nombre@dominio.com.'),
  dia: (v) => (v === '' ? 'Seleccione el día al que asistirá.' : '')
};

function validarCampo(campo) {
  const mensaje = reglas[campo.name](campo.value);
  document.getElementById(`e-${campo.name}`).textContent = mensaje;
  if (mensaje) campo.setAttribute('aria-invalid', 'true');
  else campo.removeAttribute('aria-invalid');
  return mensaje === '';
}

function iniciarFormulario() {
  const form = document.getElementById('form');
  const resultado = document.getElementById('resultado');
  if (!form) return;
  const campos = Array.from(form.querySelectorAll('input, select'));

  campos.forEach((c) => c.addEventListener('blur', () => validarCampo(c)));

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    resultado.textContent = '';
    const invalidos = campos.filter((c) => !validarCampo(c));
    if (invalidos.length) {
      invalidos[0].focus();
      resultado.textContent = `Hay ${invalidos.length} campo(s) por corregir.`;
      return;
    }
    resultado.textContent = 'Inscripción registrada. Gracias por participar.';
    form.reset();
    resultado.focus();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  iniciarMenu();
  iniciarFiltro();
  iniciarFormulario();
});