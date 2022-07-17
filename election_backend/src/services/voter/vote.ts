import {Transaction} from 'sequelize';
import {electionList_tb, candidateList_tb, votes_tb} from '../../mydb';


export default async function(
  t: Transaction,
  electionName: string,
  candidate: string,
  voter: string
){

  const r = <any>await electionList_tb.findOne({
      where: {
        electionName: electionName
      },
      transaction: t
  })

  if(!r){
      throw new Error("The electionName is not exist");
  }

  if(r.isEnd || new Date() > r.endTime){
    throw new Error(`The ${electionName} is end`);
  }

  const check = await votes_tb.findOne({
      where: {
        electionName: electionName,
        candidate: candidate,
        voter: voter
      },
      transaction: t
  })

  if(check){
    throw new Error("The voter had voted");
  }
  
  try {
    await candidateList_tb.increment({
      hasVotes: 1
    },{
      where: {
        electionName: electionName,
        candidate: candidate
      },
      transaction: t
    });
    await votes_tb.create({
      electionName: electionName,
      candidate: candidate,
      voter: voter
    })
  } catch (error) {
    console.log("vote : ",error);
    throw new Error(`Can not start ${electionName}`)
  }
}
