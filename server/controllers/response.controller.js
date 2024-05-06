export const serverResponse = (pStatus, code, data= 'OK') => {
    return {
        status: pStatus,
        code,
        data
    }
}

export const serverInternalError = (res, msg = '') => {
    return res.status(500).json(serverResponse(false, 500, `Internal Server Error ${msg}`));
}

export const serverNotFound = (res) => {    
    return res.status(404).json(serverResponse(false, 404, 'Not Found'));
}

export const serverBadRequest = (res, data) => {
    return res.status(400).json(serverResponse(false, 400, `${data? data : 'Bad Request'}`));
}

export const serverOk = (res, data) => {
    return res.status(201).json(serverResponse(true, 201, `${data? data : 'OK'}`));
}

export const serverForbidden = (res) => {
    return res.status(401).json(serverResponse(false, 401, `Forbidden`))
}

export const serverNotAcceptable = (res) => {
    return res.status(406).json(serverResponse(false, 406, 'Not Acceptable'))
}