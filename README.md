# PokéMMO Shiny Showcase

A simple React website to display your PokéMMO shiny Pokémon collection in a Pokédex-themed layout.

## Getting Started

1. **Clone the repo or copy the files**
2. Place your shiny Pokémon data in `shinyData.json` (update with your own collection!)
3. Make sure your sprites use the official URLs (see examples in `shinyData.json`)
4. Install dependencies and run:

```bash
npm install
npm start
```

## Add Your Shinies

Edit `shinyData.json` with your Pokémon info:

```json
{
  "species": "Weezing",
  "dexNumber": 110,
  "caughtDate": "YYYY-MM-DD",
  "originalTrainer": "chikimii",
  "spriteUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/110.png"
}
```

## Deployment

You can deploy this site easily on [GitHub Pages](https://pages.github.com/) or [Vercel](https://vercel.com/).

## Credits

- Pokémon sprites from [PokéAPI](https://pokeapi.co/)
- Design by chikimii & GitHub Copilot
