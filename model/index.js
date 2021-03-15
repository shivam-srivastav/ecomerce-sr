const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    role: { type: String },
    profile_pic: { type: String },
    balance: { type: Number },
    sell_product: { type: Array },
    orders: { type: Array },
    history: { type: Array },
    address:{type:String}

});
const ProductSchema = new Schema({
    p_name: String,
    p_price: Number,
    p_img: String,
    p_details: String,
    seller_id: String,
    rating: Array,
    reviews: Array,
    tags: Array,
    category: String,
    createdAt: Date,
    buyer_id: String,
    discount:String,
    
})

const LedgerSchema = new Schema({
    user_id: String,
    product_id: String,
    txn_no: String,
    order_no: String,
    bal_before_txn: Number,
});

const User = mongoose.model("User", UserSchema);
const Product = mongoose.model("Product", ProductSchema);
const Ledger = mongoose.model("Ledger", LedgerSchema);

module.exports = {
    User,
    Product,
    Ledger
}