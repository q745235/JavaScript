import {DataTypes} from 'sequelize';


export default{
  userId:{
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
  },
  identity: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
  },
  email:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
  },
  isManager:{
    type: DataTypes.BOOLEAN,
    allowNull: false,
    default: false
  }
}