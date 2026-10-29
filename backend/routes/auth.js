const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const db = require("../config/db");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/register", async(req,res)=>{

    const {nome,email,senha} = req.body;

    const hash = await bcrypt.hash(senha,10);

    db.query(
        "INSERT INTO usuarios(nome,email,senha) VALUES(?,?,?)",
        [nome,email,hash],
        (err)=>{

            if(err)
                return res.status(400).json(err);

            res.json({
                mensagem:"Usuário cadastrado."
            });

        });

});

router.post("/login",(req,res)=>{

    const {email,senha} = req.body;

    db.query(
        "SELECT * FROM usuarios WHERE email=?",
        [email],
        async(err,result)=>{

            if(result.length==0)
                return res.status(401).json({erro:"Usuário não encontrado"});

            const usuario = result[0];

            const ok = await bcrypt.compare(senha,usuario.senha);

            if(!ok)
                return res.status(401).json({erro:"Senha incorreta"});

            const token = jwt.sign({

                id:usuario.id,
                email:usuario.email

            },process.env.JWT_SECRET,{
                expiresIn:"1h"
            });

            res.json({token});

        });

});

router.get("/perfil",auth,(req,res)=>{

    res.json({

        mensagem:"Área protegida",
        usuario:req.user

    });

});

module.exports = router;