import express from 'express';
import User from '../models/user';
import { getToken } from '../config/util';

const router = express.Router();

router.post('/login', async (req, res) => {
   const {email,password} = req.body;

   const loginUser = await User.findOne({
      email,
      password,
   });
   if (loginUser) {
      res.send({
         _id: loginUser.id,
         name: loginUser.name,
         email: loginUser.email,
         token: getToken(loginUser),
      });
   } else {
      res.status(401).send({ message: 'Invalid Email or Password.' });
   }
});

router.post('/register', async (req, res) => {
   const {name,email,password} = req.body;
   User.findOne({
      email
   }, async (err,user)=>{
      if (err) return res.status(402).send({error:err});
      if(user){
         res.status(422).send({message:"Email already exists"});
      }else{
         const user = new User({
            name,
            email,
            password
         });
         const newUser = await user.save();
         if (newUser) {
            res.send({
               _id: newUser.id,
               name: newUser.name,
               email: newUser.email,
               token: getToken(newUser),
            });
         } else {
            res.status(401).send({ message: 'Invalid User Data.' });
         }
      }
   });
});

// router.get('/createadmin', async (req, res) => {
//   try {
//     const user = new User({
//       name: 'Basir',
//       email: 'admin@example.com',
//       password: '1234',
//     });
//     const newUser = await user.save();
//     res.send(newUser);
//   } catch (error) {
//     res.send({ message: error.message });
//   }
// });

export default router;
