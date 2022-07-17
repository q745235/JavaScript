import mydb from '../../../mydb';
import endElection from "../endElection";

test("endElection",async () => {
  await mydb.transaction(async(t) => {
    await endElection(t,"test");
  });
})