import {DataTypes} from 'sequelize';


export default{
  index:{
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true
  },
  electionName: {
      type: DataTypes.STRING,
      allowNull: false,
  },
  candidate:{
      type: DataTypes.STRING,
      allowNull: false,
  },
  hasVotes:{
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0
  },
}