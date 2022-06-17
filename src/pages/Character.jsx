import React, { useState, useEffect } from "react";

const Character = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch("https://harry-potter-api.fiqriachmada.repl.co/characters/")
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setCharacters(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {characters.map((character) => (
          <ul
            key={character.id}
            role="list"
            class="p-6 divide-y divide-slate-200"
          >
            <li class="flex py-4 first:pt-0 last:pb-0">
              <img
                class="h-10 w-10 rounded-full"
                src={character.image}
                alt=""
              />
              <div class="ml-3 overflow-hidden">
                <p class="text-sm font-medium text-slate-900">
                  <Link to={`user/${user.id}`}>{character.full_name}</Link>
                </p>
              </div>
            </li>
          </ul>
        ))}
      </div>
    );
  }
};

export default Character;
