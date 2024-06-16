export class ProductTransaction {
    constructor(id, note, quantity) {
        this.product_id = id;
        this.transaction_note = note;
        this.quantity = quantity;
        this.status = 0;
    }

    getProductId(){
        return this.product_id;
    }

    getNote(){
        return this.note;
    }

    getQty(){
        return this.quantity;
    }

    getDataAsJSON(){
        return {
            id: this.product_id,
            note: this.note,
            quantity: this.quantity,
            status: this.status
        }
    }
}