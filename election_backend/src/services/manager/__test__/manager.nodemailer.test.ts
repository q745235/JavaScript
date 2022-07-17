import mydb from '../../../mydb';
import nodemailer from "../nodemailer";
import getWinner from '../getWinner';
import getVotes from '../getVotes';
import getAllVoterEmail from '../getAllVoterEmail'
test("startElection",async () => {
  await mydb.transaction(async(t) => {
    const r = await getWinner(t,"test");
      const voters = await getAllVoterEmail(t,"test");
      const score = await getVotes(t,"test");
      for(let i = 0; i < voters.length; i++){
        console.log(voters[i]);
        sendEmail(voters[i], "test", r, score)
      }
  });
})

async function sendEmail(email : string, electionName: string, winner: string, score : {}){
  const subject = `The ${electionName}'s winner is ${winner}`;
  const text = `${score}`
  nodemailer(email, subject, text)
}