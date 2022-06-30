import {create} from 'apisauce'
import {BimApiUrls} from '../settings/BimConfiguration';
import * as BimCache from '../utility/helpers/BimCache'
import BimSecureStorage from '../utility/helpers/BimSecureStorage';

const apiClient = create({ baseURL: BimApiUrls.baseServiceURL } )

apiClient.addAsyncRequestTransform( async(request) => {
    const authToken = await BimSecureStorage.getToken()
    if(!authToken) return
    request.headers["x-auth-token"] = authToken;
     //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJNb3NoIiwiZW1haWwiOiJtb3NoQGRvbWFpbi5jb20iLCJpYXQiOjE2NTYxMzI5MDN9._1XGwhy-LxgKByXOvQhApC5yAO43LgUytYzpaXr8a8o
});
const get = apiClient.get;
apiClient.get = async ( url , params , axiosConfig ) =>{
    const key = url + ((params === null || params === undefined)? "" : params)
    const response = await get(url , params , axiosConfig);
    if(response.ok)
    {
        BimCache.store( key , response.data);
        return response;
    }
    const data = await BimCache.get(key);
    const responsedata =  (data)? { ok : true , data } : response;
    return responsedata
}

export { apiClient };