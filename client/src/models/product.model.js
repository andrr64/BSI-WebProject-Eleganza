class Product {
    constructor(data, brand) {
        this._data = data;
        this._brand = brand;    
    }

    get data() {
        return this._data;
    }

    get brand() {
        return this._brand;
    }
    
    get name() {
        return this._data.name;
    }

    get brand_id() {
        return this._data.brand_id;
    }

    get category() {
        return this._data.category;
    }

    get gender() {
        return this._data.sex;
    }

    get list_size() {
        return this._data.list_size;
    }

    get list_picture() {
        return this._data.list_picture;
    }

    get previous_version() {
        return this._data.previous_version;
    }

    get price() {
        return this._data.price;
    }

    get discount() {
        return this._data.discount;
    }

    get stock() {
        return this._data.stock;
    }

    get hidden() {
        return this._data.hidden;
    }

    get createdAt() {
        return this._data.createdAt;
    }

    get updatedAt() {
        return this._data.updatedAt;
    }
}

export default Product;