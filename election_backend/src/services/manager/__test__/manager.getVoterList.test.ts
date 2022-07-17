import mydb from '../../../mydb';
import getVoterList from "../getVoterList";

test("getVoterList",async () => {
  await mydb.transaction(async(t) => {
    let r = await getVoterList(t,"test", "A", 1);
    console.log(r);
  });
})