function requestValidator(obj) {
    const validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    const uriPatern = /^[\w.]+$/g;
    const validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    const validSymbols = ['<', '>', '\\', '&', '\'','"']
    if (!validMethods.includes(obj.method)) {
        throw new Error(`Invalid request header: Invalid Method`);
    }

    if (!obj.uri || !obj.uri === '*' || !obj.uri.match(uriPatern)) { 
        throw new Error(`Invalid request header: Invalid URI`);
    }

    if (!validVersions.includes(obj.version)) {
        throw new Error(`Invalid request header: Invalid Version`);
    }

    if (!obj.hasOwnProperty('message')) {
        throw new Error(`Invalid request header: Invalid Message`);
    }

    for (let el of obj.message) {
        if (validSymbols.includes(el)) {
            throw new Error(`Invalid request header: Invalid Message`);
        }
    }


    return obj;
}

const obj = {
  method: 'OPTIONS',
  uri: 'git.master',
  version: 'HTTP/1.1',
  message: '-recursive'
}

requestValidator(obj);