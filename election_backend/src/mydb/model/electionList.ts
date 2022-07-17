import {DataTypes} from 'sequelize';


export default{
  index:{
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
  },
  electionName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
  },
  startTime:{
      type: DataTypes.DATE,
      allowNull: false,
  },
  endTime:{
    type: DataTypes.DATE,
    allowNull: false,
  },
  isEnd:{
    type: DataTypes.BOOLEAN,
    allowNull: false,
    default: false
  }
}