/// <reference types="jquery"/>
import {Pokemon} from './clases.js'

export async function agregarInfoAlModal (datosPokemon, datosEspeciePokemon) {
  const pokemon = new Pokemon(datosPokemon,datosEspeciePokemon)
  
  $('.modal-title').text(pokemon.name)

  if (pokemon.frontImage !== null) {
    $('.modal-content').append(`<div class="modal-body">
                            <img src=${pokemon.frontImage} alt=${pokemon.name} id="img-pokemon"></img>
                        </div>`)
  } else {
    $('.modal-content').append(`<div class="modal-body centrado-modal">
                            <strong>Image not available</strong>
                        </div>`)
  }

  $('.modal-content').append(`<div class="modal-body">${pokemon.description}</div>`)

  $('.modal-content').append(`<div class="modal-body centrado" id="stats">
                          <b>Height: </b><label>${(pokemon.height) * 10} Cm</label>
                              <b>Weight: </b><label>${(pokemon.weight) / 10} Kg</label>
                      </div>"`)

  $('.modal-content').append('<div class="modal-body centrado" id="types"></div>')
  $('#types').append('<h5>Type: </h5>')
  pokemon.types.forEach((e) => {
    $('#types').append(`<img class="type-img" title=${e} src="types_images/${e}.jpg">`)
  })

  $('.modal-content').append(`<div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      </div>`)
}

export function mostrarModal () {
  const modalPokemon = $(`<div class="modal fade" id="modal-pokemon" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title centrado-modal">Loading...</h5>
          </div>
          </div>
      </div>
      </div>`)

  $('body').prepend(modalPokemon)

  $('#modal-pokemon').modal('show')
}

export function mostrarErrorModal () {
  $('.modal-title').text("Sorry, we couldn't get that pokemon")
}
