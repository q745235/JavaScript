import mydb from '../../../mydb';
import getVoterList from "../getVoterList";

test("endElection",async () => {
  await mydb.transaction(async(t) => {
    await getVoterList(t,"test", "A", 1);
  });
})