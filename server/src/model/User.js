const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword(user,options){
    const SALT_FACTOR = 8;

    if(!user.changed('password')){
        return;
    }
    return bcrypt
        .genSaltAsync(SALT_FACTOR)
        .then(salt => bcrypt.hashAsync(user.password, salt, null))
        .then(hash => {
            user.setDataValue('password', hash)
        })

};

module.exports = (sequelize,DataTypes) => {
    const user  = sequelize.define('User', {
        email: {type: DataTypes.STRING, unique: true},
        password: DataTypes.STRING
    },{
        hooks:{
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword,
            beforeSave:hashPassword
        }
    });

    user.prototype.comparePassword = function(password){
        return bcyrpt.compareAsync(password,this.password);
    };

    user.prototype.hashPassword = function(password){
        return bcyrpt.hashSync(password,bcyrpt.genSalt(10),null);
    };

    return user;
};
