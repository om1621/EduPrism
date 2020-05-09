const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

const {validate_login} = require('./routes/login');
const {edit_student , student_get_feedback , student_feed , get_grades} = require('./routes/student');
const {add_student, add_faculty , add_course , allocate_course , view_profile} = require('./routes/admin');
const {edit_faculty, upload_grades , course_allocated, faculty_feedback , faculty_answer} = require('./routes/faculty');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3307',
    password: '',
    database: 'eduprism'
});

db.connect((err) => {
    if(err)
    {
        throw err;
    }
    console.log("Hey Man , ur database is connected");
})

global.db = db;

app.set('views' , __dirname + '/views');
app.set('view engine' , 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: 'false'}));

app.get('/', (req , res) => {
    res.send("Hello started this project in corona holidays :)");
});

app.get('/login', (req , res) => {
    res.render('login' , {message:""});
});

app.post('/login', validate_login);

app.get('/student-update/:id' , (req , res) => {
    res.render('student_update');
});

app.get('/courseallocated/:id', course_allocated);

app.get('/admin', (req , res) =>{
    res.render('admin');
});

app.get('/facultyfeedbackform/:id' , (req , res) => {
    res.render('faculty_feedback_form');
});

app.get('/studentgrades/:id', get_grades);

app.post('/facultyfeedbackform/:id', faculty_answer);

app.get("/studentfeedback/:id" , student_get_feedback);

app.get("/studentfeedbackform/:id", (req , res) => {
    res.render('student_feedback_form');
});

app.post("/studentfeedbackform/:id", student_feed);

app.post('/student-update/:id', edit_student);

app.post("/addfaculty", add_faculty);

app.get('/addstudent', (req , res) => {
    res.render('add_student');
});

app.get('/facultyfeedback/:id' , faculty_feedback )

app.post('/addstudent' , add_student);

app.post('/allocatecourse', allocate_course);

app.get('/addfaculty', (req , res) =>{
    res.render('add_faculty');
});

app.get('/addcourse', (req , res) => {
    res.render('add_course');
});

app.get('/allocatecourse', (req, res) => {
    res.render('allocate_course');
});

app.get('/viewprofile', (req, res) => {
    res.render('viewprofile');
});

app.post('/viewprofile', view_profile);

app.get('/uploadgrades', (req , res) => {
    res.render('upload_grades');
});

app.post('/uploadgrades', upload_grades);

app.post('/addcourse', add_course);



app.get('/sendupdate', (req , res) => {
    res.render('admin_updates');
});

app.get('/faculty', (req , res) => {
    res.render('faculty');
});

app.get('/facultyupdate/:id', (req , res) => {
    res.render('faculty_update');
});

app.post('/facultyupdate/:id' , edit_faculty);

app.listen(3000 , ()=>{
    console.log("You are working on port 3000");
})