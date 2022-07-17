import mydb from '../../../mydb';
import register from "../register";

test("register",async () => {
  await mydb.transaction(async(t) => {
    await register(t,"A123456(8)", "test@gmail.com");
  });
})