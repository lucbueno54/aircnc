const User = require('../model/User')

module.exports = {
    async store(req, res) {
        let {email} = req.body;

        let user = await User.findOne({email});

        if(!user)
        {
           user = await User.create({email});
        }
        return res.json(user);
    }



}