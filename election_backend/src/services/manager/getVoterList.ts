import {Transaction} from 'sequelize';
import {candidateList_tb, votes_tb} from '../../mydb';

export default async function(
  t: Transaction,
  electionName: string,
  candidate: string,
  page: number
){

  const r = await candidateList_tb.findOne({
      where: {
        electionName: electionName,
        candidate: candidate
      },
      transaction: t
  })
  if(!r){
      throw new Error("The electionName or candidate is not exist");
  }
  
  try {
    const v = await votes_tb.findAll({
      offset:((page-1)*10),
      limit : 10,
      where: {
        electionName: electionName,
        candidate: candidate
      },
      transaction: t
    })
  
    const voters = v.map(voter => {
      return <string>voter['voter']
    })
    return voters
  } catch (error) {
    console.log("getVoterList : ",error);
    throw new Error(`Can not select votes_tb`)
  }
  
}

type VotesInfo = {
  electionName: string,
  candidates: [{ candidate: string,  hasVotes: number}]
}