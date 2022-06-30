import React from 'react';

export default useApi = (apiFunc) => {

  const [hasError , setHasError] = React.useState(false);
  const [errorCode , setErrorCode] = React.useState();
  const [errorDesc , setErrorDesc] = React.useState();
  const [loading , setLoading] = React.useState(false);
  const [data , setData] = React.useState();
  const [response , setResponse] = React.useState();

    const request = async (...args) => 
    {
      setHasError(false);
      setErrorCode(null);
      setErrorDesc(null);
      setData(null);
      setResponse(null);

     setLoading(true);
      const response = await apiFunc(...args)
      setResponse(response);
      setLoading(false);
  
      setHasError(!response.ok);
      setData(response.data);
      if(!response.ok)
        setErrorCode(response.problem);
      
      if(response.data && response.data.error )
        setErrorDesc( response.data.error );
        
      return response;
    }  
    return { request , response , loading , hasError , errorCode , errorDesc , data };
};

//export default useApi;