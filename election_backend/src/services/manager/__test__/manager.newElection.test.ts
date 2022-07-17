import mydb from '../../../mydb';
import newElection from "../newElection";

test("newElection",async () => {
  await mydb.transaction(async(t) => {
    await newElection(t,"test");
  });
})