import mydb from '../../../mydb';
import vote from "../vote";

test("vote",async () => {
  await mydb.transaction(async(t) => {
    await vote(t,"test", "A", "1");
  });
})