export const pokemonListSchema = {
  type: "object",
  required: ["count", "next", "previous", "results"],
  properties: {
    count: { type: "number" },
    next: { type: ["string", "null"] },
    previous: { type: ["string", "null"] },
    results: {
      type: "array",
      items: {
        type: "object",
        required: ["name", "url"],
        properties: {
          name: { type: "string" },
          url: { type: "string" }
        }
      }
    }
  }
}