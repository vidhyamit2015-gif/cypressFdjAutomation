export const pokemonDetailsSchema = {
  type: 'object',
  required: ['id', 'name', 'abilities', 'types', 'stats', 'sprites'],
  properties: {
    id: {
      type: 'number'
    },
    name: {
      type: 'string',
      minLength: 1
    },
    abilities: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'object',
        required: ['ability', 'is_hidden', 'slot'],
        properties: {
          ability: {
            type: 'object',
            required: ['name', 'url'],
            properties: {
              name: {
                type: 'string',
                minLength: 1
              },
              url: {
                type: 'string',
                minLength: 1
              }
            }
          },
          is_hidden: {
            type: 'boolean'
          },
          slot: {
            type: 'number'
          }
        }
      }
    },
    types: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'object',
        required: ['slot', 'type'],
        properties: {
          slot: {
            type: 'number'
          },
          type: {
            type: 'object',
            required: ['name', 'url'],
            properties: {
              name: {
                type: 'string',
                minLength: 1
              },
              url: {
                type: 'string',
                minLength: 1
              }
            }
          }
        }
      }
    },
    stats: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'object',
        required: ['base_stat', 'effort', 'stat'],
        properties: {
          base_stat: {
            type: 'number'
          },
          effort: {
            type: 'number'
          },
          stat: {
            type: 'object',
            required: ['name', 'url'],
            properties: {
              name: {
                type: 'string',
                minLength: 1
              },
              url: {
                type: 'string',
                minLength: 1
              }
            }
          }
        }
      }
    },
    sprites: {
      type: 'object',
      required: ['front_default'],
      properties: {
        front_default: {
          type: ['string', 'null']
        },
        back_default: {
          type: ['string', 'null']
        },
        front_shiny: {
          type: ['string', 'null']
        },
        back_shiny: {
          type: ['string', 'null']
        }
      }
    }
  }
}