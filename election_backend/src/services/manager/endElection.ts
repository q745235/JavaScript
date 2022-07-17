import {Transaction} from 'sequelize';
import {electionList_tb} from '../../mydb';


export default async function(
  t: Transaction,
  electionName: string,
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
  
  try {
    await electionList_tb.update({
      isEnd: true,
    },{
      where: {
        electionName: electionName
      },
      transaction: t
    })
  } catch (error) {
    console.log("endElectionName : ",error);
    throw new Error(`Can not end ${electionName}`)
  }
  
}