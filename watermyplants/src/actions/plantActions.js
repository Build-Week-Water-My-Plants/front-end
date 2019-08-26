import {axiosWithAuth} from '../utils/axiosWithAuth';

export const GETTING_PLANTS = 'GETTING_PLANTS';
export const GOT_PLANTS = 'GOT_PLANTS';
export const PLANTS_ERROR = 'PLANTS_ERROR';

export const getGetPlants = dispatch => {
    axiosWithAuth()
        .get('/')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}