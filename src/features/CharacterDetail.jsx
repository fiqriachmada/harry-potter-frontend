import React, { useState, useEffect}  from 'react';

const CharacterDetail= props => {
    var id = props.match.params.id
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [character, setCharacter] = useState([]);
    
    useEffect(() => {
        fetch("https://harry-potter-api.fiqriachmada.repl.co/characters/" + id)
          .then((res) => res.json())
          .then(
            (data) => {
              console.log(data);
              setCharacter(data);
              setIsLoaded(true);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          );
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
        return <div>Loading...</div>;
    }  
    
    if (character) {
        return (
          <div>
            <img class="h-30 w-30 rounded-full" src={character.image} alt="" />
            <h1>{character.full_name}</h1>
            {/* <div>
                    Email: {user.email}
                </div>
                <div>
                    Phone: {user.phone}
                </div>
                <div>
                    Website: {user.website}
                </div> */}
          </div>
        );
    }
}

export default CharacterDetail;
