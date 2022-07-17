import {Transaction} from 'sequelize';
import {candidateList_tb} from '../../mydb';

export default async function(
  t: Transaction,
  electionName: string,
){

  const r = await candidateList_tb.findAll({
      where: {
        electionName: electionName
      },
      transaction: t
  })
  if(!r){
      throw new Error("The electionName is not exist");
  }
  
  
  try {
    const candidates = r.map(candidate => {
      return{
          candidate: <string>candidate['candidate'],
          hasVotes: <number>candidate['hasVotes'],
      }
    })
    return{
      electionName: electionName,
      candidates: candidates
    }
  } catch (error) {
    console.log("startElectionName : ",error);
    throw new Error(`Can not get ${electionName}'s votes`)
  }
  
}

type VotesInfo = {
  electionName: string,
  candidates: [{ candidate: string,  hasVotes: number}]
}