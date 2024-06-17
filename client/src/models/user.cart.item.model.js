export class CartItem {
    constructor(user_id, product_id, quantity, note, size_index) {
        this._user_id = user_id;
        this._product_id = product_id;
        this._quantity = quantity;
        this._note = note;
        this._size_index = size_index;
    }

    resetInfo(){
        this.quantity = 0;
        this.note = '';
        this.size_index = 0;
        this.index = 0;
    }

    get json(){
        return {
            product_id: this.product_id,
            quantity: this.quantity,
            note: this.note,
            size_index: this.size_index
        }
    }

    // Setter dan Getter untuk user_id
    set user_id(value) {
        this._user_id = value;
    }

    get user_id() {
        return this._user_id;
    }

    // Setter dan Getter untuk product_id
    set product_id(value) {
        this._product_id = value;
    }

    get product_id() {
        return this._product_id;
    }

    // Setter dan Getter untuk quantity
    set quantity(value) {
        this._quantity = value;
    }

    get quantity() {
        return this._quantity;
    }

    // Setter dan Getter untuk note
    set note(value) {
        this._note = value;
    }

    get note() {
        return this._note;
    }

    // Setter dan Getter untuk size_index
    set size_index(value) {
        this._size_index = value;
    }

    get size_index() {
        return this._size_index;
    }
}
