import React from "react";
import {Link} from 'wouter';

const MARVEL_GIFS = [
  "Spider-Man",
  "Mary Jane",
  "Duende Verde",
  "Doctor Octopus",
  "Gwen Stacy",
  "Miles Morales",
  "Lobezno",
  "Capitán América",
  "Iron Man",
  "Viuda Negra",
  "Hulk",
  "Thor",
  "Doctor Strange",
  "Black Panther",
  "Venom",
  "The Punisher",
  "Tormenta",
  "Deadpool",
  "Daredevil",
  "Carol Danvers",
  "Magneto",
  "Profesor X",
  "Star Lord",
  "Antorcha Humana",
  "Ant-Man",
  "Groot",
  "Rocket Raccoon",
  "Cíclope",
  "Jean Grey",
  "La Cosa",
  "La mujer invisible",
  "Blade",
  "Nick Furia",
  "Mística",
  "Motorista Fantasma",
];

export default function Home() {
    return (
        <>
        <h3 className="App-title">SuperHeroes más populares</h3> 
        <ul>
            {MARVEL_GIFS.map((marvelGif) => (
                <li key={marvelGif}>
                    <Link to={`/search/${marvelGif}`}>Gifs de {marvelGif}</Link>
                </li>
            ))}
        </ul>
        </>
    )
}
