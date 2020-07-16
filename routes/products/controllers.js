const { Product } = require('../../models');

module.exports = {
    addProduct: async (req, res) => {
        const { name, price } = req.body;

        const product = await Product.create({
            name,
            price,
        });

        res.send({
            message: `Product successfully added`,
            result: product,
        });
    },
};
