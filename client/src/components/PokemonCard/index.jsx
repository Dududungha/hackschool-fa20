import React from 'react';
import './style.css';
import Move from '../Move';
import CanvasDraw from 'react-canvas-draw';

const PokemonCard = (props) => {
    
    const displayedMoves = props.moves.map((move, key) => {
        return <Move key={key} name={move.name} type={move.type} power={move.power}></Move>
    })
    
    return (
    <div className="pokemon-card-container">
        <div className="pokemon-card-container-inner">
            <CanvasDraw
                hideGrid={true}
                disabled={true}
                hideInterface={true}
                saveData={props.image}
            />
            <div className="pokemon-data-container">
                <p className="pokemoncard-name">{props.name}</p>
                <p className="pokemoncard-description">{props.description}</p>
                <p className="pokemoncard-types"></p>
                    <span className="pokemon-type-1" style={{color: "#000000"}}>{props.type1}</span>
                    <span className="pokemon-type-2" style={{color: "#000000"}}>{props.type2}</span>
                <table className="moves-table">
                    <tbody>
                        {displayedMoves}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
};

export default PokemonCard;