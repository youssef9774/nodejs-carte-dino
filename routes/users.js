const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

//  user model
const User =require('../models/User');

//login
router.get('/login',(req, res) => res.render('login'));

//register
router.get('/register',(req, res) => res.render('register'));

//dashborad 
router.get('/dashborad',(req, res) => res.render('dashborad'));

//login
router.post('/login', (req,res)=>{
    const {  email, password}= req.body;
     let errors= [];
        //check required fields   
        if( !email || !password ) {
            errors.push({msg:'pleas fill  in all fildes'});
            }
               //check password match
               if(password !== password2){
                errors.push({msg:'  password do not match'});
                }

     if(errors.length > 0){
        res.render ('login',{
        email,
        password
        });
        } else    {res.render('dashborad') }
    })

//register
router.post('/register', (req,res)=>{
  const { name, email, password, password2}= req.body;
   let errors= [];

             //check required fields   
            if(!name || !email || !password || !password2) {
            errors.push({msg:'pleas fill  in all fildes'});
            }
            //check password match
            if(password !== password2){
            errors.push({msg:'  password do not match'});
            }
            //chek pass length
            if(password2 < 6 ){
            errors.push({msg:' password should be at least 6 carcters'});
            }

            if(errors.length > 0){
            res.render ('register',{
            errors,
            name,
            email,
            password,
            password2
            });
            } else    {res.render('dashborad') }
    
});

// Logout
router.get('/logout', (req, res) => {
  //  req.logout();
    res.redirect('/users/login');
  });


module.exports= router;