const { Ledger } = require("../model")


getLedger = (req, res) => {
    if (req.body) {
        return res.status(400).json({
            msg:"Request is empty"
        })
    }
    const id = req.body._id
    Ledger.find({ user_id: id }, (err, data) => {
        if (err) {
            res.status(404).json({
                msg: "ledger has error",
                err
            })
        }
        res.status(200).json({
            msg: "Success",
            ledger:data
        })
    })
}