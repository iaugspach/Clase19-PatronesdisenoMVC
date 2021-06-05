const express = require ('express')

const app = express ()
const port = process.env.port


app.use(express.static('public'));
app.set ('view engine', 'ejs')

app.listen(port || 3000, () => {
    console.log('Example app listerning on port');
}); 

app.get ('/', (req, res)=>{
    res.render('home')
});

app.get ('/register', (req, res)=>{
    res.render('register')
});

app.get ('/login', (req, res)=>{
    res.render('login')
});


// render quiere decir dibujar, hay un procesamiento, es más amplio