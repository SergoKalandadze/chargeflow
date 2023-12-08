const purchaseHlp = require('../helpers/purchase.hlp')

const purchase = async (req, res) => {

    try {

        const userId = req.body["userId"]

        const skus = req.body["skus"] 

        if(!userId) {
            return res.status(400).json({success: false, message: "UserId not provided"})
        }

        if(!skus || skus.length === 0) {
            return res.status(400).json({success: false, message: "SKUs of items not provided"})
        }

        const timestamp = req.body["timestamp"] && req.body["timestamp"] !== "null" ? req.body["timestamp"] : Date.now()

        const result = await purchaseHlp.purchase(userId, skus, timestamp)

        if(result) {

            return res.status(200).json(result)

        }

        return res.status(500).json({success: false, message: "Cannot create an order"})

    } catch (ex) {

        console.log(`payment.ctrl -> error to create order: ${ex}`)

        return res.status(500).json({success: false, message: "Cannot create an order"})

    }

}

module.exports = {
    purchase
}
