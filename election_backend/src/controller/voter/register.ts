import { Request, Response, NextFunction } from 'express';
import { voterList_tb} from '../../mydb';
import {Op} from 'sequelize';
export default async(req: Request, res: Response, next: NextFunction): Promise<void> => {
  const {identity,inputEmail} = req.body;
  console.log(req.body);
  var regEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
  if(!regEmail.test(inputEmail)){
    res.status(400).json({
      info: 'error',
      data:{
        errorNumber: 1,
        error: 'Email is error'
      }
    })
  }

  var regIdentity = /^[A-Z]{1}[0-9]{6}[(][0-9]{1}[)]$/;
  if(!regIdentity.test(identity)){
    res.status(400).json({
      info: 'error',
      data:{
        errorNumber: 2,
        error: 'Identity is error'
      }
    })
  }

  let check = await voterList_tb.findOne({
    where:{
      [Op.or]:[
        {identity:identity},
        {inputEmail: inputEmail}
      ]
      
    },
  });
  // let findIdentity = await voterList_tb.findOne({
  //   where:{
  //       identity:identity  
  //   },
  // });
  // let findEmail = await voterList_tb.findOne({
  //   where:{
  //     inputEmail: inputEmail,
  //   },
  // });
  // const result = await checkBought(chooseDev, accountSign,inputEmail);
  // if(findEmail){
  //   res.status(400).json({
  //       info :"err",
  //       data:{
  //         errorNumber: 3,
  //         error: "Email already used"
  //       }
  //   });
  // }else if(findIdentity){
  //   res.status(400).json({
  //     info :"err",
  //     data:{
  //       errorNumber: 4,
  //       error: "Identity already used"
  //     }
  //   });
  // }
  if(check){
    res.status(400).json({
          info :"err",
          data:{
            errorNumber: 3,
            error: "Identity or Email already used"
          }
        });
  }else{
    try {
      await voterList_tb.create({
        identity: identity,
        email: inputEmail
      })
      res.status(200).json({
        info: 'success',
        message:"success"
      })
    } catch (error) {
      res.status(400).json({
        info :"err",
        data:{
          errorNumber: 4,
          error: error.message
        }
      });
    }
    
  }
}