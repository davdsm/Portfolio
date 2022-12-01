import PocketBase from 'pocketbase';
import env from '../.env.json';

let pb: any = new PocketBase(env.api);
let records: Array<Object> | Boolean, info: Array<Object> | Boolean = false;

export const getPortfolio = async () => {
    if (!records) {
        const data = await pb.collection('portfolio').getFullList(200, {
            sort: '-created',
            expand: 'techs',
        });
        records = data;
        return data
    } else {
        return records;
    }
}

export const getInfo = async () => {
    if (!records) {
        const data = await pb.collection('singles').getFullList(200 /* batch size */, {
            sort: '-created',
        });
        info = data;
        return data
    } else {
        return info;
    }
}

export default getPortfolio