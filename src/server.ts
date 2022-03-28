import express from "express";
import {router} from "./routes";

const app = express();

app.use(express.json());

app.use(express.static(__dirname + "/../public/"));

// TODOS
// * Fazer seleção de ML para L ou de Kg para g
// ^ Refatorar o código, melhorar o use case e as classes dos objetos finais

app.get("/", (req, res)=>{
  res.sendFile("index.html");
});

/**
 *  Item1 -> Optional
 *  Item2 -> Optional
 *
 *  Type1 -> kg, g, ml ou L Lembrando que se type 1 for peso t2 também será
 *  Value1 -> peso ou volume
 *  amount1 -> Obrigatório
 *
 *  Type2 -> kg, g, ml ou L
 *  Value2 -> peso ou volume
 *  amount2 ->
 */

app.use(router);

app.get("/teste", (req, res)=>{
  const {fName, lName} = req.query;
  console.log(fName, lName);

  return res.json({message: "OK"}).send();
});

app.listen(3000, ()=>{
  console.log("server is running!");
});
