module.exports = {
    
    validate_login: (req , res) => {
        
        let selector = req.body.selector;
        let enrollment = req.body.username;
        let password = req.body.pass;
        
        if(selector == 1)
        {
            let query = "SELECT * FROM students WHERE students.id = '" + enrollment + "'";

        db.query(query , (err , result) => {
            if(err)
            {
                throw err;
            }

            if(result.length > 0)
            {
                res.render('student.ejs' , {student:result});
            }
            else
            {
               let msg = "Wrong Combination of Username and Password !!";
               res.render('login.ejs' , {message: msg});
            }
        });
        
        }
        else if(selector == 2)
        {
           let query = "SELECT * FROM instructor WHERE instructor.id = '" + enrollment + "'";
           
           db.query(query , (err , result) => {
               if(err)
               {
                   throw err;
               }

               if(result.length > 0)
               {
                   res.render('faculty.ejs', {faculty: result});
               }
               else
               {
                    let msg = "Wrong Combination of Username and Password !!";
                    res.render('login.ejs' , {message: msg});
               }
           })
        }
        else if(selector == 3)
        {
            res.render('admin.ejs');
        }
        else
        {
            let msg = "let me know your type :)"
            res.render('login.ejs' , {message: msg});
        }
       

        
    },
}