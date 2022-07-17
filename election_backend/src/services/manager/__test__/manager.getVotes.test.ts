import mydb from '../../../mydb';
import getVotes from "../getVotes";

test("getVotes",async () => {
  await mydb.transaction(async(t) => {
    let r = await getVotes(t,"test");
    console.log(r)
  });
})