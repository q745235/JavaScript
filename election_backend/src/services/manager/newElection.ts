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
  if(r){
      throw new Error("The electionName is exist");
  }
  
  try {
    await electionList_tb.create({
      electionName: electionName
    },{
      transaction: t
    })
  } catch (error) {
    console.log("newElection : ",error);
    throw new Error(`Can not create ${electionName}`)
  }
  
}