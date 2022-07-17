import mydb from '../../../mydb';
import startElection from "../startElection";

test("startElection",async () => {
  await mydb.transaction(async(t) => {
    await startElection(t,"test", new Date("2022-7-16"), new Date("2022-7-19"));
  });
})