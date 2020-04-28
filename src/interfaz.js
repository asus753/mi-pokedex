/// <reference types="jquery"/>
import {CartaPokemon} from './clases.js'

let contadorPagina = 1

export function mostrarCargandoPagina () {
  if ($('#cargando').text() === '') {
    $('.container').append('<h3 class="centrado" id="cargando">Loading...</h3>')
  }
}

export function agregarCartaPokemon (arrayPokemons) {
  arrayPokemons.forEach(pokemon => {
    const cartaPokemon = new CartaPokemon(pokemon)

    $('#contenedor-cartas-padre').append(
      $(`<div class="col">
          <div class="card border-primary">
            <div class="card-body centrado" url=${cartaPokemon.url} id="carta-pokemon">${cartaPokemon.name}</div>
          </div>
        </div>`)
    )
  })
}

export function manejarBotones (URLanterior, URLsiguiente) {
  if (URLanterior === null) { accesoBotones($('#padre-anterior'), 'desactivar') } else { accesoBotones($('#padre-anterior'), 'activar') }

  if (URLsiguiente === null) { accesoBotones($('#padre-siguiente'), 'desactivar') } else { accesoBotones($('#padre-siguiente'), 'activar') }
}

function accesoBotones (boton, eleccion) {
  if (eleccion === 'activar') {
    boton.removeClass('disabled')
    boton.removeClass('noClick')
  }

  if (eleccion === 'desactivar') {
    boton.addClass('disabled')
    boton.addClass('noClick')
  }
}

export function setNumeroPagina (direccion) {
  if (direccion === 'Next') {
    contadorPagina++
    $('#pagina').text(`Page ${contadorPagina}`)
  } else if (direccion === 'Previous') {
    contadorPagina--
    $('#pagina').text(`Page ${contadorPagina}`)
  }
}

export function mostrarErrorServidor () {
  $('#cargando').text('Sorry, the server is down.')
  $('#navegation').detach()
  $('#pagina').detach()
}
