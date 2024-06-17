export const    isServerOnline = async() => {
    const res = await fetch(`/status`, {
        method: 'GET',
        headers: {
              'Content-Type': 'application/json',
        },
    });
    return res.status !== 500;
}

export const serverApiJsonPost = async (api, body = {}) => {
    const res = await fetch(`/api/v1${api}`, {
        method: 'POST',
        headers: {
              'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });
    return res;
}

export const serverApiJsonGet = async (api) => {
    return await fetch(`/api/v1${api}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

export const serverConnection = async () => {
    return await fetch('/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export async function getBrandCollection(brandName){
    return await fetch(`/api/v1/product/get/brand/${brandName}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export async function getProductById(id){
    return await(await fetch(`/api/v1/product/${id}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })).json();
}

export async function addItemToCart(user_id, item) {
    const apiEndpoint = `/user/cart/${user_id}`;
    const response = await serverApiJsonPost(apiEndpoint, item);
    return response.json();
}