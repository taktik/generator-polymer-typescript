import {OzoneAPIRequest} from 'ozone-api-request'

/**
 * MyApi class to access server API
 *
 * ### Usage
 *
 * ```javascript
 * import {MyAPI, getMyAPI} from './my-api/my-api'
 * const myAPI = getMyAPI();
 * myApi.getInfo().then((infos)=> this.items= infos)
 * ```
 */
export class MyAPI{

    /**
     *
     * @return {Promise<any>}
     */
    async getInfo(){

        const request = new OzoneAPIRequest();
        request.url = 'api/info';
        const res:XMLHttpRequest = await request.sendRequest();
        return res.response;
    }
}

const myApi =  new MyAPI();
/**
 * MyApi factory
 * @return {MyAPI}
 */
export const getMyAPI= function ():MyAPI{
    return myApi
};
