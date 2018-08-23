module.exports = (sequelize,DataTypes) =>{
    sequelize.define('User',{
       email:{type:DataTypes.STRING,unique:true},
       passsword:{type:DataTypes.STRING}
    });
};