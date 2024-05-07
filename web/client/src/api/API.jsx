export const serverApiJsonPost = async (api, body) => {
    const res = await fetch(`/api/v1${api}`, {
        method: 'POST',
        headers: {
              'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });
    return res;
}