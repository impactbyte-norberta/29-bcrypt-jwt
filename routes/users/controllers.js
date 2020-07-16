const bcrypt = require('bcryptjs');

const { User } = require('../../models');
const { createToken } = require('../../helpers');

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
    userLogin: async (req, res) => {
        const { email, password } = req.body;

        const registeredUser = await User.findOne({ email });

        if (registeredUser) {
            bcrypt.compare(password, registeredUser.password).then((result) => {
                if (result === true) {
                    const userData = {
                        id: registeredUser._id,
                    };

                    const token = createToken(userData);

                    res.send({
                        message: 'Login success',
                        token,
                    });
                } else {
                    return res.send(`Your email or password is wrong`);
                }
            });
        } else {
            res.send(`Your email is not registered`);
        }
    },
};
