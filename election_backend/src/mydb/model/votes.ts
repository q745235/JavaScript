import {DataTypes} from 'sequelize';


export default{
  
  electionName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  candidate:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  voter:{
    type: DataTypes.STRING,
    allowNull: false,
  },
}