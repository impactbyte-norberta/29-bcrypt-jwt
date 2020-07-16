const bcrypt = require('bcryptjs');

const { User } = require('../../models');

module.exports = {
    userRegistration: async (req, res) => {
        const { name, email, password } = req.body;

        try {
            // Cek apakah user sudah terdaftar atau belum
            const checkEmail = await User.findOne({
                email,
            }).exec();

            if (checkEmail) {
                return res.send(`Email has been registered`);
            }

            // hash password
            const hash = 10;

            bcrypt.genSalt(hash, function (err, salt) {
                bcrypt.hash(password, salt, async function (err, hash) {
                    const result = await User.create({
                        name,
                        email,
                        password: hash,
                    });

                    res.send({
                        message: `User Registration success`,
                        result,
                    });
                });
            });
        } catch (error) {
            console.error(error);
        }
    },
};
