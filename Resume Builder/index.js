const express = require ('express')
const passport = require ('passport')
const session = require('express-session')
const path = require('path')
const app = express () 
require ('./auth')


// app.use( express.json() )
// app.use( express.static(path.join(__dirname, 'client')))

function isLoggedIn(req, res, next){
    req.user ? next() : res.sendStatus(401)
}

app.use(session({
    secret: 'luffy',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('/protected', isLoggedIn, (req, res) => {
    let name = req.user.displayName
    res.sendFile(path.join(__dirname, 'public', 'home/home.html'));
})

app.get('/auth/google',
  passport.authenticate('google', { scope:[ 'email', 'profile' ] } ));

  app.get( '/google/callback',
      passport.authenticate( 'google', {
          successRedirect: '/protected',
          failureRedirect: '/auth/failure'
  }));

  app.get('/auth/failure', (req, res) => {
      res.send ("Somethings wrong!!")
  })
  app.get('/logout', (req, res) => {
    req.logout(() => {
        req.session.destroy(); 
        res.redirect('/'); 
    });
});


app.listen(5000, () => console.log("Listenting on port 5000"))




