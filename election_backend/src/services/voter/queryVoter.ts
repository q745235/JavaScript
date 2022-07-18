import {Transaction, Op} from 'sequelize';
import {voterList_tb} from '../../mydb';

export default async function (
  t: Transaction,
  identity: string,
  email: string,
  ){
    try {

      let check = <any>await voterList_tb.findOne({
        where:{
            identity:identity,
            email: email
        },
      });
  
      if(!check){
        throw new Error(`Identity or Email is Error`);
      }else{
        return check.userId;
      }
    } catch (error) {
      throw new Error(`${error.message}`);
    }
}