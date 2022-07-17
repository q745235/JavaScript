import mydb from '../../../mydb';
import getWinner from "../getWinner";

test("getVotes",async () => {
  await mydb.transaction(async(t) => {
    await getWinner(t,"test");
  });
})