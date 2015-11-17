/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    create: function (req, res) {
        var user = req.body;
        User.create(user)
        .exec(function () {
            return res.redirect("/form");
        });
    },
    

    // index, create, update, destory
	
};

