/// <reference types="jquery"/>

import { agregarInfoAlModal, mostrarModal, mostrarErrorModal } from './modal.js'

export function obtenerDatosPokemon (nombre) {
  mostrarModal()
  $.ajax({
    method: 'GET',
    url: `https://pokeapi.co/api/v2/pokemon/${nombre}`,
    success: respuesta => {
      buscarDescripcion(respuesta)
    },
    error: () => {
      mostrarErrorModal()
    }
  })
}

function buscarDescripcion (datosPokemon) {
  $.ajax({
    method: 'GET',
    url: datosPokemon.species.url,
    success: datosEspeciePokemon => {
      agregarInfoAlModal(datosPokemon,datosEspeciePokemon)
    }
  })
}

