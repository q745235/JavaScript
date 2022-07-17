import mydb from '../../../mydb';
import getAllVoterEmail from "../getAllVoterEmail";

test("getAllVoterEmail",async () => {
  await mydb.transaction(async(t) => {
    let r = await getAllVoterEmail(t,"test");
    console.log(r)
  });
})