let utils = {
    async serverFileExists(path) {
        return fetch(path, { method: "HEAD" })
            .then(resp => {
                return resp.status < 400;
            })
            .catch(err => false);
    },

    log(type,text)
    {
        console.log("iconizer | ".concat(type,": ",text));
    }
};

export default utils;