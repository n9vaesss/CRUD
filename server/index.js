const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    passowrd: "",
    database: "crud"
})

app.use(express.json());
app.use(cors());


app.post("/insert", (req, res)=>{
    const name = req.body.name
    const cpf = req.body.cpf
    const date = req.body.date
    const office = req.body.office

    db.query("INSERT INTO info_usuarios (nome_usuario, cpf_usuario, data_adm_usuario, cargo_usuario) VALUES (?, ?, ?, ?)", [name, cpf, date, office], (err)=>{
        if(err){
            res.send(err)
        }else{
            res.send({msg:"1"})
        }
    })
})

app.post("/search", (req, res) => {

    const params = req.body.params

    db.query(" SELECT * FROM info_usuarios WHERE nome_usuario LIKE ? OR  cpf_usuario LIKE ? OR cargo_usuario LIKE ?", [params, params, params], (err, result) =>{
        if(err){
            res.send(err);
        }else{
        res.send(result)
        }
    })
})

app.post("/infoCRUD", (req, res) => {

    const cpf = req.body.cpf

    db.query(" SELECT * FROM info_usuarios WHERE cpf_usuario = ?", [cpf], (err, result) =>{
        if(err){
            res.send(err);
        }else{ 
        res.send(result)
        }
    })
})

app.put("/save", (req, res) => {

    const name = req.body.name
    const cpf = req.body.cpf
    const data = req.body.data
    const cargo = req.body.cargo
    const cpfOld = req.body.cpfOld

    db.query(" UPDATE info_usuarios SET nome_usuario = ?, cpf_usuario = ?, data_adm_usuario = ?, cargo_usuario = ? WHERE cpf_usuario = ? ", [name, cpf, data, cargo, cpfOld], (err, result) =>{
        if(err){
            res.send(err);
        }else{
        res.send({msg: "Alterações salvas com sucesso!"})
        }
    })
})

app.delete("/delete/:cpf", (req, res) => {

    const {cpf} = req.params

    db.query(" DELETE FROM info_usuarios WHERE cpf_usuario = ? ", [cpf], (err, result) =>{
        if(err){
            res.send(err);
        }else{ 
        res.send({msg: "Usuario deletado com sucesso"})
        }
    })
})


app.listen(3001, ()=>{
    console.log("Rodando na porta 3001");
});