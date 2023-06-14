
import axios from 'axios';

const root = 'https://rickandmortyapi.com/api/';

export const bringCharacters = async (pagina) => {

    return await axios.get(`${root}character/?page=${pagina}`);
}