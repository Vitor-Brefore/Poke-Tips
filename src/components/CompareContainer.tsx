import React from "react";
import {
  pokemonStatType,
  pokemonTypeInterface,
  userPokemonsType,
} from "../utils/Types";
import { FaPlus } from "react-icons/fa";
import { pokemonTypes } from "../utils/getPokemonTypes";
import { useAppDispatch } from "../app/hooks";
import { removeFromCompare } from "../app/slices/PokemonSlice";
import { useNavigate } from "react-router-dom";
import { addPokemonToList } from "../app/reducers/addPokemonToList";

function CompareContainer({
  pokemon = undefined,
  isEmpty = false,
}: {
  pokemon?: userPokemonsType;
  isEmpty?: boolean;
}) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const createStatsArray = (
    types: pokemonTypeInterface[],
    statType: pokemonStatType
  ) => {
    const statsArray: { name: string; image: string }[] = [];
    const statsSet = new Set<string>();
    types.forEach((type: pokemonTypeInterface) => {
      const key = Object.keys(type)[0];
      console.log({ type });
      type[key][statType].forEach((stat: string) => {
        if (!statsSet.has(stat)) {
          // @ts-ignore
          statsArray.push({ name: stat, image: pokemonTypes[stat].image });
          statsSet.add(stat);
        }
      });
    });
    return statsArray;
  };

  const getStats = () => {
    return (
      <>
        <div className="pokemon-types">
          <h4 className="pokemon-type-title">Forte Contra</h4>
          <div className="pokemon-type-icons">
            {createStatsArray(pokemon?.types!, "strength").map(
              (stat: { image: string }) => (
                <div className="pokemon-type">
                  <img
                    src={stat.image}
                    alt="pokemon type"
                    className="pokemon-type-image"
                  />
                </div>
              )
            )}
          </div>
        </div>
        <div className="pokemon-types">
          <h4 className="pokemon-type-title">Resistente Contra</h4>
          <div className="pokemon-type-icons">
            {createStatsArray(pokemon?.types!, "resistance").map(
              (stat: { image: string }) => (
                <div className="pokemon-type">
                  <img
                    src={stat.image}
                    alt="pokemon type"
                    className="pokemon-type-image"
                  />
                </div>
              )
            )}
          </div>
        </div>
        <div className="pokemon-types">
          <h4 className="pokemon-type-title">Vulnerável Contra</h4>
          <div className="pokemon-type-icons">
            {createStatsArray(pokemon?.types!, "vulnerable").map(
              (stat: { image: string }) => (
                <div className="pokemon-type">
                  <img
                    src={stat.image}
                    alt="pokemon type"
                    className="pokemon-type-image"
                  />
                </div>
              )
            )}
          </div>
        </div>
        <div className="pokemon-types">
          <h4 className="pokemon-type-title">Fraco Contra</h4>
          <div className="pokemon-type-icons">
            {createStatsArray(pokemon?.types!, "weakness").map(
              (stat: { image: string }) => (
                <div className="pokemon-type">
                  <img
                    src={stat.image}
                    alt="pokemon type"
                    className="pokemon-type-image"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="compare-container">
      {isEmpty && (
        <div className="empty">
          <button>
            <FaPlus />
          </button>
          <h3>Adicione Um Pokemon para Comparar</h3>
        </div>
      )}
      {pokemon && (
        <div className="compare-element">
          <div className="compare-info">
            <div className="compare-details">
              <h3>{pokemon?.name}</h3>
              <img
                src={pokemon?.image}
                alt="pokemon"
                className="compare-image"
              />
            </div>
            <div className="pokemon-types-container">
              <div className="pokemon-types">
                <h4 className="pokemon-type-title">Tipo</h4>
                <div className="pokemon-type-icons">
                  {pokemon?.types.map((type: pokemonTypeInterface) => {
                    const keys = Object.keys(type);
                    return (
                      <div className="pokemon-type">
                        <img
                          src={type[keys[0]].image}
                          alt="pokemon tipo"
                          className="pokemon-type-image"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              {getStats()}
            </div>
          </div>
          <div className="compare-action-buttons">
            <button
              className="compare-btn"
              onClick={() => dispatch(addPokemonToList(pokemon))}
            >
              Adicionar
            </button>
            <button
              className="compare-btn"
              onClick={() => navigate(`/pokemon/${pokemon.id}`)}
            >
              Ver
            </button>
            <button
              className="compare-btn"
              onClick={() => dispatch(removeFromCompare({ id: pokemon.id }))}
            >
              Remover
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CompareContainer;