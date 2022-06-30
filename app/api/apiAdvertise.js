import { apiClient } from "./apiClient";
import {create} from 'apisauce'
import {BimApiUrls} from '../settings/BimConfiguration';
import BimSecureStorage from "../utility/helpers/BimSecureStorage";
import BimLogger from "../utility/helpers/BimLogger";


const getAdverts = async () =>{ 
    const realHostServerIP = BimApiUrls.baseServiceURL.toLowerCase()
        .replace("https://" , "")
        .replace( "http://" , "")
        .replace(":9000/" , "")
        .replace(":9000" , "")

    BimLogger.log( " realHostServerIP => " + realHostServerIP);
    var response = await apiClient.get( BimApiUrls.endpoint_adverts )
    if(!response.ok)
        return response
    response.data.map((item) =>{
        item.images.map( (image) =>{
            image.url =  image.url.replace(BimApiUrls.fakeServerIPInData  , realHostServerIP)
            image.thumbnailUrl =  image.thumbnailUrl.replace(BimApiUrls.fakeServerIPInData  , realHostServerIP)
        })
    })
    return response
}       
const addAdvert = async (advert , onUplaodProgress) =>{
    const data = new FormData();
    data.append( "title" , advert.bimTitle)
    data.append( "price" , advert.bimPrice)
    data.append( "categoryId" , advert.bimCategoryType.key)
    data.append( "description" , advert.bimDescription)

    advert.bimAdvertiseImages.forEach( ( image , index ) => {
        data.append( "images" , {
            name : 'image' + index,
            type : 'image/jpeg',
            uri : image
        })
    });
    if(advert.location)
        data.append( "location" , JSON.stringify(advert.location))

    var response = await apiClient.post( BimApiUrls.endpoint_adverts , data , 
        { 
            onUploadProgress : ( progress ) => { 
                onUplaodProgress(progress.loaded / progress.total)
            }
        } )
    return response;

}

const sendMessage = async ( listingId, title , body  , onUplaodProgress) =>{
    const  messageData = { listingId , title , body  , data : { _displayInForeground: 'true' }}
    var response = await apiClient.post( BimApiUrls.endpoint_sendMessage , messageData , 
        { 
            onUploadProgress : ( progress ) =>{
                if(onUplaodProgress) 
                   onUplaodProgress(progress.loaded / progress.total);
           }
        } )
    return response;

}
//=====================================
//Named export
export default { getAdverts  , addAdvert , sendMessage}