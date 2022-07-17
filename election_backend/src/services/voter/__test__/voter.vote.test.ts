import mydb from '../../../mydb';
import vote from "../vote";

test("vote",async () => {
  await mydb.transaction(async(t) => {
    await vote(t,"test", "A", "c870e5a4-56dc-4bd4-9533-2620c489951a");
  });
})