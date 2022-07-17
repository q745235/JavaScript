import mydb from '../../../mydb';
import getAllVoterEmail from "../getAllVoterEmail";

test("endElection",async () => {
  await mydb.transaction(async(t) => {
    await getAllVoterEmail(t,"test");
  });
})