import express from 'express'
const app = express()
const PORT = 3000


// Set EJS as the template engine for the project

app.set('view engine', 'ejs')

//public static folder 

app.use(express.static('public'))

// Student data


// routes for users

app.get('/', (req, res) => {
    res.render('index',{title:"Welcome to the student dashboard"})
    // because we are using a template engine, like EJS, the function render is now possible to use, allowing the templating engine to directly reference any file in the views folder index -> index.ejs
    // the object with the title attribute are being passed directly into the template, like a function paramater- here, the index.ejs file will be made using the data we pass in (wow) (so cool(and original))
})

app.get('/students', (req, res) => {
    res.render('students', {title:"Our Students", students})
})

app.listen(PORT, ()=>{
    console.log(`Server is running! check http://localhost:${PORT} c:`)
})