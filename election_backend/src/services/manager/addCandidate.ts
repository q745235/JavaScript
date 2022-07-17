import {Transaction} from 'sequelize';
import {electionList_tb, candidateList_tb} from '../../mydb';

export default async function(
  t: Transaction,
  electionName: string,
  candidate: string
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
  
  const check = await candidateList_tb.findOne({
    where: {
      electionName: electionName,
      candidate: candidate
    },
    transaction: t
  })

  if(check){
    throw new Error("The candidate is exist");
  }
  
  try {
    await candidateList_tb.create({
      electionName: electionName,
      candidate: candidate
    },{
      transaction: t
    })
  } catch (error) {
    console.log("addCandidate : ",error);
    throw new Error(`Can not add candidate to ${electionName} `)
  }
  
}