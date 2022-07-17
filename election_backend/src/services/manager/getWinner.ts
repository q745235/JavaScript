import {Transaction, fn, col} from 'sequelize';
import {candidateList_tb} from '../../mydb';

export default async function(
  t: Transaction,
  electionName: string,
){
  const max = await candidateList_tb.max('hasVotes',{
    where:{
    electionName: electionName,
    },
  })
  console.log("max", max);
  const r = <any>await candidateList_tb.findAll({
    where:{
      electionName: electionName,
      hasVotes: max
    },
    raw: true
  })
  // console.log("r",r);
  let winner;
  if(r.length > 1){
    winner = 'draw'
  }else{
    winner=r[0].candidate;
  }
  console.log("winner",winner);
  if(!r){
      throw new Error("The electionName is not exist");
  }
  
  
  try {
    return winner;
  } catch (error) {
    console.log("getWinner : ",error);
    throw new Error(`Can not get ${electionName}'s winner`)
  }
  
}

type VotesInfo = {
  electionName: string,
  candidates: [{ candidate: string,  hasVotes: number}]
}