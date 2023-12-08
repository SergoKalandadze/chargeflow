//const ShortUniqueId = require("short-unique-id")
const dal = require('../dal/items.data')

const purchase = (userId, skus, timestamp) => {

    const items = dal.getItemsBySkus(skus) 

    //Here we will send our request to Payment Service
    // and initiate async communication between all other services

    if (items && items.length > 0) {

        return {
            success: true,
            purchaseId: 1, //new ShortUniqueId({length: 10}),
            timestamp,
            userId,
            skus
        }

    }

    return null

}

module.exports = {
    purchase
}
