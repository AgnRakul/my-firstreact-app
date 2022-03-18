import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Popular } from "./Popular";

function Character() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    const api = await fetch("http://hp-api.herokuapp.com/api/characters");
    const data = await api.json();

    setCharacter(data);
  };
  return (
    <div>
      {character.map((info) => {
        return (
          <Wrapper>
            <h3>Harry Potter</h3>
            {character.map((info) => {
              return (
                <Card>
                  <p>{info.name}</p>
                  <img src={info.image} alt={info.name} />
                </Card>
              );
            })}
          </Wrapper>
        );
      })}
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
`;

export default Character;
