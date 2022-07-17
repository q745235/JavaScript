import mydb from '../../../mydb';
import addCandidate from "../addCandidate";

test("addCandidate",async () => {
  await mydb.transaction(async(t) => {
    await addCandidate(t,"test", "B");
  });
})