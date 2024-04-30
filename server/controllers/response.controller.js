export const serverResponse = (pStatus, code, data= 'OK') => {
    return {
        status: pStatus,
        code,
        data
    }
}