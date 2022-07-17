import {DataTypes} from 'sequelize';


export default{
  electionName: {
      primaryKey: true,
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
  },
  startTime:{
      type: DataTypes.DATE,
  },
  endTime:{
    type: DataTypes.DATE,
  },
  isEnd:{
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}