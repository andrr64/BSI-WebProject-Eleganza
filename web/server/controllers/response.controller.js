export const serverResponse = (pStatus, code, data) => {
    return {
        status: pStatus,
        code,
        data
    }
}