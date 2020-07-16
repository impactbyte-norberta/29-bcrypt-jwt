const bcrypt = require('bcryptjs');

const { User } = require('../../models');

module.exports = {
    userRegistration: async (req, res) => {
        const { email, password } = req.body;

        try {
            // Cek apakah user sudah terdaftar atau belum
            const checkEmail = await User.findOne({
                email,
            }).exec();

            if (checkEmail) {
                return res.send(`Email has been registered`);
            }

            // hash password

            const saltRounds = 10;

            bcrypt.genSalt(saltRounds, function (err, salt) {
                bcrypt.hash(password, salt, async function (err, hash) {
                    const result = await User.create({
                        ...req.body,
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
