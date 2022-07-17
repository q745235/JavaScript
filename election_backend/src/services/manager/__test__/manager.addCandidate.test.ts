import mydb from '../../../mydb';
import addCandidate from "../addCandidate";

test("endElection",async () => {
  await mydb.transaction(async(t) => {
    await addCandidate(t,"test", "A");
  });
})