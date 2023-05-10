import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from '../models/user';

/**
 * 
 * @param {Number} page
 * @returns { Promise<User[]>}
 */
export const loadUsersByPage = async(page = 1) => {
    
    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    const res = await fetch(url);
    const data = await res.json();

    // const users = data.map( userLike => localhostUserToModel(userLike))
    // el primer argumento sólo se pasa como argumento a la función, por lo que puede se puede simplificar
    const users = data.map( localhostUserToModel ) // Es la forma abreviada, mandando la función como referencia
    // console.log(users)
    return users;
}