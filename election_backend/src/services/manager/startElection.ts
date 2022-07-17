import {Transaction} from 'sequelize';
import {electionList_tb, candidateList_tb} from '../../mydb';


export default async function(
  t: Transaction,
  electionName: string,
  startTime: Date,
  endTime: Date
){

  const r = await electionList_tb.findOne({
      where: {
        electionName: electionName
      },
      transaction: t
  })
  if(!r){
      throw new Error("The electionName is not exist");
  }
  if(startTime < new Date()){
    throw new Error("The startTime is past");
  }

  if(startTime > endTime){
    throw new Error("The endTime must over than startTime");
  }

  const c = await candidateList_tb.findAll({
    where: {
      electionName: electionName
    },
    transaction: t
  })

  if(c.length < 2){
    throw new Error("The candidate must more than 2");
  }
  
  try {
    await electionList_tb.update({
      startTime: startTime,
      endTime: endTime
    },{
      where: {
        electionName: electionName
      },
      transaction: t
    })
  } catch (error) {
    console.log("startElectionName : ",error);
    throw new Error(`Can not start ${electionName}`)
  }
  
}