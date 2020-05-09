module.exports = {

    add_student: (req , res) => {

        let name = req.body.std_name;
        let enrollment = req.body.std_id;
        let address = req.body.std_addr;
        let bday = req.body.b_day;
        let bmonth = req.body.b_month;
        let byear = req.body.b_year;
        let branch = req.body.std_branch;
        let mobile = req.body.std_mob;
        let email = req.body.std_email;
        let bdate =`${byear}-${bmonth}-${bday}`;

        let query = "SELECT * FROM students WHERE students.id= '" + enrollment + "'";

        db.query(query , (err , result) => {

            if(err)
            {
                throw err;
            }

            if(result.length <= 0)
            {
                let data = {
                    id:enrollment,
                    name: name,
                    dob: bdate,
                    address: address,
                    branch: branch,
                    mobile: mobile,
                    email: email                  
                }

                let sql = "INSERT INTO students SET ?";

                db.query(sql , data , (err , result) => {

                    if(err)
                    {
                        throw err;
                    }

                    const msg = "Student Added Successfully !!";

                    res.render('admin_success.ejs', {msg: msg})
                })
            }
            else
            {
                const msg = "Student already exists :)";
                res.render('admin_success.ejs', {msg: msg})
            }

        })
    },

    add_faculty: (req , res) => {

        let id = req.body.fac_id;
        let name = req.body.fac_name;
        let email = req.body.fac_email;
        let mobile = req.body.fac_mobile;
        let dept = req.body.fac_dept;
        let gender = req.body.fac_gender;
        let address = req.body.fac_details;

        let query = "SELECT * FROM instructor WHERE instructor.id = '" + id + "'";

        db.query(query , (err , result) =>{
            if(err)
            {
                throw err;
            }

            if(result.length > 0)
            {
                const msg = "Faculty already exists :)"
                res.render('admin_success.ejs', {msg: msg})
            }
            else
            {
                let data = {
                    id: id,
                    name: name,
                    email:email,
                    mobile: mobile,
                    department: dept,
                    gender: gender,
                    address: address
                }

                let sql = "INSERT INTO instructor SET ?";
                db.query(sql , data , (err , result)=> {
                    if(err)
                    {
                        throw err;
                    }

                    const msg = "Faculty Successfully Added!!"
                    res.render('admin_success.ejs', {msg: msg})
                })
            }
        })

    },

    add_course: (req , res) => {

        let name = req.body.c_name;
        let credit = parseInt(req.body.c_credit);
        let code = req.body.c_code;

        let query = "SELECT * FROM courses WHERE courses.code = ' " + code + "'";

        db.query(query , (err , result) => {
            if(err)
            {
                throw(err);
            }

            if(result.length > 0)
            {
                const msg = "Course already exists :)";
                res.render('admin_success.ejs', {msg: msg})
            }
            else
            {
                let data = {
                    name: name,
                    credit: credit,
                    code: code
                }

                let sql = "INSERT INTO courses SET ?";

                db.query(sql ,data, (err , result) => {

                    if(err)
                    {
                        throw err;
                    }
                    
                   
                       
                        const msg = "Course Successfully Added";
                        res.render('admin_success.ejs', {msg: msg})

                });
            }
        });

    },

    allocate_course: (req , res) => {

        let code = req.body.c_code;
        let id = req.body.f_id;

        let query = "SELECT * FROM courseinstructor WHERE courseinstructor.course_code = '" + code + "'";

        db.query(query , (err , result) => {
            if(err)
            {
                throw err;
            }

            if(result.lenght > 0)
            {
               
                const msg = "Course already allocated :)";
                res.render('admin_success.ejs', {msg: msg})
            }
            else
            {
                let data = {
                    course_code: code,
                    instructor_id: id
                }

                let sql = "INSERT INTO courseinstructor SET ?";

                db.query(sql , data , (err , result) => {

                    if(err)
                    {
                        throw err;
                    }

                    const msg = "Course Successfully Allocated";
                    res.render('admin_success.ejs', {msg: msg})

                });
            }
        });

    },

    view_profile: (req , res) => {
        let person = req.body.v_person;
        let id = req.body.v_id;

        if(person === "Student")
        {
            let query = "SELECT * FROM students WHERE students.id = '" + id + "'";

            db.query(query , (err , result) => {
                if(err)
                {
                    throw err;
                }

                if(result.length > 0)
                {
                    res.render("profile.ejs" , {type: person , student:result});
                }
                else
                {
                    const msg = "The '"+ person + "' with '"+ id + "' does not exist";
                    res.render('admin_success.ejs', {msg: msg})
                }
            });
        }
        else if(person === "Faculty")
        {
            let query = "SELECT * FROM instructor WHERE instructor.id = '" + id + "'";

            db.query(query , (err , result) => {
                if(err)
                {
                    throw err;
                }

                if(result.length > 0)
                {
                    res.render("profile.ejs" , {type: person , faculty:result});
                }
                else
                {
                    const msg = "The '"+ person + "' with '"+ id + "' does not exist";
                    res.render('admin_success.ejs', {msg: msg})
                }
            });
        }
    }
}