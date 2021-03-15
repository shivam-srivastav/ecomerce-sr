const jwt = require('jsonwebtoken');
const { Product, User } = require('../model');

addProduct = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            message:"Bad Request"
        })
    }
    jwt.verify(req.header('token').split(' ')[1], 'shivam', (err, data) => {
        if (err) {
            res.status(403).json({
                message: "Invalid Token",
                err
            })
        }
        if (data.user._id !== req.body.seller_id) {
            console.log({ data });
            console.log(req.body)
            res.status(403).json({
                message: "Invalid User"
            });
        }

        
        const product =  new Product({ ...req.body }).save();
        User.findByIdAndUpdate(req.body.seller_id, { $push: { sell_product: product._id } }, (err, update) => {
            if (err) {
                return res.status(400).json({
                    message: 'Error while updating User',
                    err
                })
            }
            console.log(update);
            return res.status(200).json({
                msg:"User is updated with new item"
            })
        }).then(person => {
                return res.status(200).json({
                    message: "Product is added",
                    product,
                    person
                })
            })
     
    });
}
getAllProducts = (req, res) => {
}

module.exports= {
    addProduct
}