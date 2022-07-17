import mydb from '../../../mydb';
import getWinner from "../getWinner";

test("getWinner ",async () => {
  await mydb.transaction(async(t) => {
    let r = await getWinner(t,"test")
    console.log(r) ;
  });
})