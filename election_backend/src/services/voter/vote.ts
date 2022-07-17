import {Transaction} from 'sequelize';
import {electionList_tb, candidateList_tb, voterList_tb, votes_tb} from '../../mydb';


export default async function(
  t: Transaction,
  electionName: string,
  candidate: string,
  userId: string
){
  try {
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

    const u = await voterList_tb.findOne({
      where: {
        userId: userId
      },
      transaction: t
    })

    if(!u){
      throw new Error(`The userId is not exist`);
    }

    const check = await votes_tb.findOne({
        where: {
          electionName: electionName,
          candidate: candidate,
          voter: userId
        },
        transaction: t
    })

    if(check){
      throw new Error("The voter had voted");
    }
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
      voter: userId
    })
  } catch (error) {
    console.log("vote : ",error);
    throw new Error(`Can not vote ${electionName}`)
  }
}
