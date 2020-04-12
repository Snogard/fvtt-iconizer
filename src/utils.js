let utils = 
{
    async serverFileExists(path)
    {
        return fetch(path, {method: "HEAD"})
        .then(resp =>{
            return resp.status < 400;
        })
        .catch(err=>false);
    }
}