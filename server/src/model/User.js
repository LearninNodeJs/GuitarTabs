/*module.exports = (sequelize,DataTypes) =>{
    sequelize.define('User',{
       email:{type:DataTypes.STRING,unique:true},
       passsword:DataTypes.STRING
    });
};*/
module.exports = (sequelize,DataTypes) =>
    sequelize.define('User',{
        email:{type:DataTypes.STRING,unique:true},
        password:DataTypes.STRING
    })
