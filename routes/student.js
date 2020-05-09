module.exports = {

    edit_student: (req , res) => {
        let id = req.params.id;
        let address = req.body.new_add;
        let mobile = req.body.new_mob;
        let email = req.body.new_email;

        let query ="UPDATE `students` SET `address` = '" + address + "', `mobile` = '" + mobile + "', `email` = '" + email + "' WHERE `students`.`id` = '" + id + "'";
        
        db.query(query , (err , result) => {
           
            if(err)
            {
                throw err;
            }
            else
            {
                let sql = "SELECT * FROM students WHERE students.id = '" + id + "'";
                db.query(sql , (err , result) =>{
                    if(err)
                    {
                        throw err;
                    }
                    res.render('student.ejs' , {student:result});
                });
            }

           
        });
    },

    student_feed: (req , res) => {
        let feed_id = req.body.q_id;
        let std_id = req.params.id;
        let f_id = req.body.f_id;
        let feedback = req.body.fb;
        let answer = "";

        let query = "SELECT * FROM questions WHERE questions.question_id = '" + feed_id + "'";

        db.query(query , (err , result) => {
            if(err)
            {
                throw err;
            }

            if(result.length > 0)
            {
                res.send("question id already exists");
            }
            else
            {
                let data = {
                    question_id: feed_id,
                    sender_id: std_id,
                    faculty_id: f_id,
                    que: feedback,
                    ans: answer
                }

                let sql = "INSERT INTO questions SET ?";

                db.query(sql , data , (err, result) => {
                    if(err)
                    {
                        throw err;
                    }

                    let query = "SELECT * FROM questions WHERE questions.sender_id = '" + std_id + "'";

                    db.query(query , (err , result) => {

                        if(err)
                        {
                            throw err;
                        }

                        res.render('student_feedback.ejs', {flag: 1 , result:result , std_id:std_id});

                    });  
                });
            }
        });
    },

    student_get_feedback: (req , res) => {
        let id = req.params.id;

        let query = "SELECT * FROM questions WHERE questions.sender_id = '" + id + "'";

        db.query(query , (err, result) => {
            if(err)
            {
                throw err;
            }

            if(result.length > 0)
            {
                res.render('student_feedback.ejs', {flag: 1 , result:result , std_id:id});
            }
            else
            {
                res.render('student_feedback.ejs', {flag: 0 , result:result , std_id:id});
            }
        })
    },

    get_grades: (req , res) => {
        let id = req.params.id;

        let query = "SELECT * FROM grades WHERE grades.student_id = '" + id +"'";

        db.query(query , (err , result) => {
            if(err)
            {
                throw err;
            }

            res.render('student_grades.ejs' , {result: result});
        });
    }


}