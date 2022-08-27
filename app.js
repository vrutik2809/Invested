import express from "express";
import homeRouter from "./routes/index.routes.js";
import authRouter from "./routes/auth.routes.js";
import companyRouter from "./routes/company.routes.js";

const app = express();

app.set('view engine','ejs');
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));
// app.use(cookieParser());

app.use(homeRouter);

app.use(authRouter);

app.use(companyRouter);

// app.get('/',(req,res)=>{
//     res.render('index');
// });

//temp redirect -- Neel Poriya
app.get('/company',(req,res)=>{
  res.render('company');
});
app.get('/form',(req,res)=>{
  res.render('company_form');
});

const port = 3000;
const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});