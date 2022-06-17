import React, { useState, useEffect } from "react";

const Character = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [wands, setWands] = useState([]);
  useEffect(() => {
    fetch("https://harry-potter-api.fiqriachmada.repl.co/characters/")
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setWands(data);
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
        {wands.map((wand) => (
          <ul key={wand.id} role="list" class="p-6 divide-y divide-slate-200">
            <li class="flex py-4 first:pt-0 last:pb-0">
              <img class="h-10 w-10 rounded-full" src={wand.image} alt="" />
              <div class="ml-3 overflow-hidden">
                <p class="text-sm font-medium text-slate-900">
                  {wand.full_name}
                </p>
                <p class="text-sm text-slate-500 truncate">{wand.species}</p>
                <p class="text-sm text-slate-500 truncate">{wand.gender}</p>
              </div>
            </li>
          </ul>
        ))}
      </div>
    );
  }
};

export default Character;
