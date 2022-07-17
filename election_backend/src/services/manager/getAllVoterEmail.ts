import {Transaction, Op, DataTypes} from 'sequelize';
import {candidateList_tb, votes_tb, voterList_tb} from '../../mydb';

export default async function(
  t: Transaction,
  electionName: string,
){

  const r = await candidateList_tb.findOne({
      where: {
        electionName: electionName,
      },
      transaction: t
  })
  if(!r){
      throw new Error("The electionName or candidate is not exist");
  }
  
  try {
    const v = await votes_tb.findAll({
      where: {
        electionName: electionName,
      },
      raw: true,
      transaction: t
    })
    console.log("v",v)
    const voters = v.map(voter => {
      return <string>voter['voter']
    })
    console.log("voters",voters)
    const e = await voterList_tb.findAll({
      where:{
        userId: {[Op.in]: voters}
      }
    })
    console.log("e",e)
    const email = e.map(voterList => {
      return <string>voterList['email']
    })
    console.log("email",email)
    return email
  } catch (error) {
    console.log("getAllVoterList : ",error);
    throw new Error(`Can not select votes_tb`)
  }
  
}

type VotesInfo = {
  electionName: string,
  candidates: [{ candidate: string,  hasVotes: number}]
}