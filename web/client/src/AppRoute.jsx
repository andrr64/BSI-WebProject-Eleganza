export const ROUTE = {
    homepage: '/',
    man: '/man',
    woman: '/woman',
    children: '/children',
    user: {
        signin: '/user/signin',
        signup: '/user/signup',
        profile: '/user/profile'
    },
    collection_brand: '/collection/brand/:brand_name',
    collection_gender: '/collection/gender/:gender',
    collection_category: '/collection/category/:category',
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
        console.log(pathArr[i]);
        url = `${url}/${pathArr[i]}`;
    }
    return `${url}/${x}`;
}
