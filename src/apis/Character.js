import axios from "axios";

const baseURL = "https://harry-potter-api.fiqriachmada.repl.co/characters";

const getCharacter = () => axios.get(`${baseURL}`);

export { getCharacter };
