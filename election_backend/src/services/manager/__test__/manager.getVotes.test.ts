import mydb from '../../../mydb';
import getVotes from "../getVotes";

test("getVotes",async () => {
  await mydb.transaction(async(t) => {
    await getVotes(t,"test");
  });
})