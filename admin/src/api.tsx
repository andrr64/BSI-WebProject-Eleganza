export const isServerOnline = async () => {
    const res = await fetch(`/status`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return res.status !== 500;
}

export const getBrandsData = async () => {
    const res = await fetch('/api/v1/brand', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return await res.json();
}

export const serverApiJsonPost = async (api: string, body = {}) => {
    const res = await fetch(`/api/v1${api}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });
    return res;
}

export const serverApiJsonGet = async (api: string) => {
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

export async function getBrandCollection(brandName: any) {
    return await fetch(`/api/v1/product/get/brand/${brandName}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export async function getProductById(id: any) {
    return await (await fetch(`/api/v1/product/${id}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })).json();
}

export async function addItemToCart(user_id: any, item: {} | undefined) {
    const apiEndpoint = `/user/cart/${user_id}`;
    const response = await serverApiJsonPost(apiEndpoint, item);
    return response.json();
}

export async function serverGetItemsLength(user_id: any) {
    const apiEndpoint = `/user/cart/length/${user_id}`;
    const response = await serverApiJsonGet(apiEndpoint);
    return await response.json();
}

export async function serverGetUserCartItems(user_id: any) {
    const endpoint = `/user/cart/${user_id}`;
    const response = await serverApiJsonGet(endpoint);
    return await response.json();
}

export async function serverDelUserCartItem(user_id: any, product_id: string) {
    const endpoint = `/api/v1/user/cart/${user_id}`;
    const response = await fetch(endpoint, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "product_id": product_id
        })
    });
    return await response.json();
}

export async function serverAddTransaction(req_body: any) {
    const res = await fetch('/api/v1/user/transaction', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req_body)
    });
    return await res.json();
}

export async function serverAddProduct(req_body: any) {
    const res = await fetch('/api/v1/product', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req_body)
    });
    return await res.json();
}

export async function serverGetProducts() {
    const response = await fetch('/api/v1/product', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return await response.json();
}

export async function serverGetAllTransaction() {
    const response = await fetch('/api/v1/transaction', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return await response.json();
}