import mydb from '../../../mydb';
import startElection from "../startElection";

test("startElection",async () => {
  await mydb.transaction(async(t) => {
    await startElection(t,"test", new Date("2022-7-18"), new Date("2022-7-20"));
  });
})