import {Transaction} from 'sequelize';
import {candidateList_tb} from '../../mydb';

export default async function(
  t: Transaction,
  electionName: string,
){

  const r = <any>await candidateList_tb.max('hasVotes',{
      where: {
        electionName: electionName
      },
      transaction: t
  })
  if(!r){
      throw new Error("The electionName is not exist");
  }
  
  
  try {
    return r.candidate;
  } catch (error) {
    console.log("getWinner : ",error);
    throw new Error(`Can not get ${electionName}'s winner`)
  }
  
}

type VotesInfo = {
  electionName: string,
  candidates: [{ candidate: string,  hasVotes: number}]
}