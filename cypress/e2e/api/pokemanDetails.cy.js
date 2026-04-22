import { pokemonDetailsSchema } from "../../schemas/pokemonDetails.schema"

describe('PokeAPI - Pokémon Details Validation', () => {
  it('should validate pokemon details for multiple ids', () => {
    cy.fixture('pokemon').then((data) => {
      data.pokemonIds.forEach((id) => {
        cy.getPokemon(id).then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.be.jsonSchema(pokemonDetailsSchema)
          expect(response.body).to.have.property('id', id)
        })
      })
    })
  })

  it('should return 404 for invalid pokemon id', () => {
    cy.fixture('pokemon').then((data) => {
      data.invalidIds.forEach((invalidId) => {
        cy.getPokemonInvalid(invalidId).then((response) => {
          expect(response.status).to.eq(404)
        })
      })
    })
  })
})