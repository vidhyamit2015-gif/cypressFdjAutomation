import {pokemonListSchema} from '../../schemas/pokemanList.schema'

describe('PokeAPI - Pokémon List Validation', () => {

  it('should return pokemon list with valid structure', () => {

    cy.getPokemonList().then((response) => {

      expect(response.status).to.eq(200)

      expect(response.body).to.have.property('results')
      expect(response.body.results).to.be.an('array')
      expect(response.body.results.length).to.be.greaterThan(0)
      expect(response.body).to.be.jsonSchema(pokemonListSchema)

      const firstPokemon = response.body.results[0]

      expect(firstPokemon).to.have.property('name')
      expect(firstPokemon).to.have.property('url')
    })

  })

})