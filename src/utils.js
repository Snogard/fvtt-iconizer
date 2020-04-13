let utils = {
    serverFileExists(path) 
    {
        let http = new XMLHttpRequest();
        http.open("HEAD",path,false);
        http.send();
        return http.status < 400;
    },

    log(type, text) {
        console.log("iconizer | ".concat(type, ": ", text));
    }
};

export default utils;