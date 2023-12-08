const data = require('../storage/data')

const getItemsBySkus = skus => {
    const items = []

    skus.forEach(sku => {
        const item = data.testData.find(obj => sku === obj.sku)
        if (item) {
            items.push(item)
        }
    });

    return items
}

module.exports = {
    getItemsBySkus
}