export const ROUTE = {
    homepage: '/',
    not_found: '/notfound',
    server: {
        error: '/error'
    },
    man: '/man',
    woman: '/woman',
    children: '/children',
    product: {
        detail: '/product/detail/:id'
    },
    user: {
        signin: '/user/signin',
        signup: '/user/signup',
        profile: '/user/profile'
    },
    collection: {
        brand: '/collection/brand/:name',
        category: '/collection/category/:category',
        gender: '/collection/gender/:gender',

    },
    cart: '/cart'
}

export function goToCollection(collectionName){
    return `/collection/${collectionName}`
}

export function goToBrandCollection(brandName){
    return `/collection/brand/${brandName}`
}

export function goToAXCollection(a, X){
    return `/collection/${a}/${X}`;
}

export function goToNXCollection(pathArr, x) {
    let url = '/collection';
    for (let i = 0; i < pathArr.length; i++) {
        url = `${url}/${pathArr[i]}`;
    }
    return `${url}/${x}`;
}

export function goToProductDetail(id) {
    return `/product/detail/${id}`;
}