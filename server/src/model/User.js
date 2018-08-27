const Promise = require('bluebird');
const bcyrpt = Promise.promisifyAll(require('bcrypt-nodejs'));

function hashPassword(){
    const SALT_FACTOR = 8;
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
        return bcyrpt.compareSync(password,this.password);
    };

    user.prototype.hashPassword = function(password){
        return bcyrpt.hashSync(password,bcyrpt.genSalt(10),null);
    };

    return user;
};
