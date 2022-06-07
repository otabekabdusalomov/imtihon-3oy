


for (i = 0; i < pokemons.length; i++) {
    
  const currentPokemons = pokemons[i];

  const firstPokemon = document.querySelector(".pokemons");
  firstPokemon.className = "pokemons";
  const pokemonItem = document.createElement("li");
  pokemonItem.className = "pokemons__item";
  const pokemonTitle = document.createElement("h3");
  pokemonTitle.className = "pokemons__item-title";
  pokemonTitle.textContent = currentPokemons.name;
  const pokemonNumber = document.createElement("p");

  const pokemonImg = document.createElement("img");
  pokemonImg.src = currentPokemons.img;
  const pokemonType = document.createElement("p");
  pokemonType.textContent = currentPokemons.type;

  pokemonItem.append(pokemonNumber);
  pokemonItem.append(pokemonTitle);
  pokemonItem.append(pokemonImg);
  pokemonItem.append(pokemonType);
  firstPokemon.append(pokemonItem);
  pokemonItem.append(currentPokemons);
}