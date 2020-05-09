module.exports = {
    edit_faculty: (req , res) => {
        let id = req.params.id;
        let address = req.body.new_office;
        let mobile = req.body.new_mobile;
        let email = req.body.new_email;

        let query = "UPDATE `instructor` SET `address` = '" + address + "', `mobile` = '" + mobile + "', `email` = '" + email + "' WHERE `instructor`.`id` = '" + id + "'";

        db.query(query , (err , result) => {
            if(err)
            {
                throw err;
            }
            else
            {
                let sql = "SELECT * FROM instructor WHERE instructor.id = '" + id + "'";

                db.query(sql , (err , result) =>{
                    if(err)
                    {
                        throw err;
                    }
                    else
                    {
                        res.render('faculty.ejs', {faculty: result});
                    }

                });
            }
        });
    },

    upload_grades: (req , res) => {

        let code = req.body.c_code;
        let id = req.body.std_id;
        let c1 = parseInt(req.body.c1_mark);
        let c2 = parseInt(req.body.c2_mark);
        let c3 = parseInt(req.body.c3_mark);

        let query = "SELECT * FROM grades WHERE grades.course_code = '" + code + "' AND grades.student_id ='" + id + "'";

        db.query(query , (err , result) => {
            if(err)
            {
                throw err;
            }

            if(result.length > 0)
            {
                const msg = "Student already graded :)";
                res.render('faculty_success.ejs', {msg: msg})
            }
            else
            {
                let data = {
                    course_code: code,
                    student_id: id,
                    c1_marks: c1,
                    c2_marks: c2,
                    c3_marks: c3
                }

                let sql = "INSERT INTO grades SET ?"

                db.query(sql , data , (err , result) => {
                    if(err)
                    {
                        throw err;
                    }

                    const msg = "Succesfully uploaded marks."
                    res.render('faculty_success.ejs', {msg: msg} );
                });
            }
        });

    },

    course_allocated: (req , res) => {
        let id = req.params.id;

        let query = "SELECT * FROM courseinstructor WHERE instructor_id = '"+ id +"'";

        db.query(query , (err , result) => {
            if(err)
            {
                throw err;
            }

            if(result.length > 0)
            {
                res.render('course_allocated.ejs' , {courses: result , flag:1});
            }
            else
            {
                res.render('course_allocated.ejs', {courses: result , flag: 0});
            }
        });
    },

    faculty_feedback: (req, res) => {

        let id = req.params.id;

        let query = "SELECT * FROM questions WHERE questions.faculty_id = '" + id + "'";

        db.query(query , (err, result) => {
            if(err)
            {
                throw err;
            }

            if(result.length > 0)
            {
                res.render('faculty_feedback.ejs', {flag: 1 , result:result , std_id:id});
            }
            else
            {
                res.render('faculty_feedback.ejs', {flag: 0 , result:result , std_id:id});
            }
        });
    },

    faculty_answer: (req , res) => {
        let q_id = req.params.id;
        let answer = req.body.f_feed;

     let query = "UPDATE `questions` SET `ans` = '" + answer + "' WHERE `questions`.`question_id` = '" + q_id + "'";

     db.query(query , (err , result) => {
         if(err)
         {
             throw err;
         }

         const msg = "Successfully answered query";

         res.render('faculty_success.ejs', {msg:msg});
     });
    }
}