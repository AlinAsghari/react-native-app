import { apiClient } from "./apiClient";
import {create} from 'apisauce'
import {BimApiUrls} from '../settings/BimConfiguration';
 
const login = async (email , password  , onUplaodProgress) =>{

    const data = { email : email , password : password }
    var response = await apiClient.post( BimApiUrls.endpoint_authentication , data , 
        { 
            onUploadProgress : ( progress ) =>{
                 if(onUplaodProgress) 
                    onUplaodProgress(progress.loaded / progress.total);
            }
        } )
    return response;

}

const createUser = async (data  , onUplaodProgress) =>{

    var response = await apiClient.post( BimApiUrls.endpoint_user , data , 
        { 
            onUploadProgress : ( progress ) =>{
                if(onUplaodProgress) 
                   onUplaodProgress(progress.loaded / progress.total);
           }
        } )
    return response;

}

const registerToken = async (pushNotificationtoken  , onUplaodProgress) =>{
    const data = { token : pushNotificationtoken};
    //BimLogger.log("ddd => " + data);
    var response = await apiClient.post( BimApiUrls.endpoint_registerToken , data , 
        { 
            onUploadProgress : ( progress ) =>{
                if(onUplaodProgress) 
                   onUplaodProgress(progress.loaded / progress.total);
           }
        } );
    return response;

}
export default { login , createUser , registerToken }