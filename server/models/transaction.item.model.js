export class TransactionItem {
    constructor(id, note, quantity, size_index) {
        this._product_id = id;
        this._transaction_note = note;
        this._size_index = size_index;
        this._quantity = quantity;
    }

    // Getter
    get productId() {
        return this._product_id;
    }

    get note() {
        return this._transaction_note;
    }

    get quantity() {
        return this._quantity;
    }

    get size_index() {
        return this._size_index;
    }

    // Setter
    setProductId(id) {
        this._product_id = id;
    }

    setNote(note) {
        this._transaction_note = note;
    }

    setQuantity(quantity) {
        this._quantity = quantity;
    }

    setSizeIndex(index) {
        this._size_index = index;
    }

    // Method untuk mendapatkan data dalam bentuk JSON
    getDataAsJSON() {
        return {
            id: this._product_id,
            note: this._transaction_note,
            size_index: this._size_index,
            quantity: this._quantity,
        };
    }
}
