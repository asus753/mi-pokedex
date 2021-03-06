export class CartaPokemon {
  constructor(datosPokemon){
    this.name = datosPokemon.name.toUpperCase()
    this.url = datosPokemon.url
  }
}

export class Pokemon {
  constructor(datosPokemon, datosEspeciePokemon){
    this.name = datosPokemon.name
    this.frontImage = datosPokemon.sprites.front_default
    this.types = obtenerTiposDelPokemon(datosPokemon.types)
    this.height = datosPokemon.height
    this.weight = datosPokemon.weight
    this.description = obtenerDescripcionMasActualPokemon(datosEspeciePokemon.flavor_text_entries)    
  }
}

const obtenerTiposDelPokemon = (listaDeTipos) => {
  const tiposDelPokemon = []
  Object.entries(listaDeTipos).forEach(([indice,tipo]) => {
    tiposDelPokemon.push(tipo.type.name)
  })
  return tiposDelPokemon
}

const obtenerDescripcionMasActualPokemon = (arrayDescripciones) => {
  let descripcion = ''
  arrayDescripciones.forEach(description => {
    if(description.language.name === 'en' && descripcion === ''){
      descripcion = description.flavor_text
    }
  })
  return descripcion
}