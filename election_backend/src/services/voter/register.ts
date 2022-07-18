import {Transaction, Op} from 'sequelize';
import {voterList_tb} from '../../mydb';


export default async function(
  t: Transaction,
  identity: string,
  inputEmail: string,
){

  var regEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
  if(!regEmail.test(inputEmail)){
    throw new Error(`Email is error`);
  }

  var regIdentity = /^[A-Z]{1}[0-9]{6}[(][0-9]{1}[)]$/;
  if(!regIdentity.test(identity)){
    throw new Error(`Identity is error`);
  }
  
  try {

    let check = await voterList_tb.findOne({
      where:{
        [Op.or]:[
          {identity:identity},
          {email: inputEmail}
        ]
      },
    });

    if(check){
      throw new Error(`Identity or Email already used`);
    }else{
    await voterList_tb.create({
      identity: identity,
      email: inputEmail
    })}
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}
