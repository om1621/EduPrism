Steps to set up the environment for running "EDU-PRISM"

1. First of All, we need the set up the Database. For that we have to use Xammp(Php MyAdmin).

2. In PhpMyAdmin, you have to create a empty database with name "eduprism". 

3. After that, click on the eduprism databse and select the import option that will make you to
  choose the database file (which is present in our submission with name "database.sql") then database 
  be successfully imported.

4. The project code is written in Node.js thus, your system must have node.js installed and also npm.

5. After successfully installing Node.js and npm , open the project folder in text editor of your choice
   (Visual studio code) and then change command prompt directory the project folder location and then in 
   command prompt type "npm install" that will install all the required dependencies and then type
   " node app.js" in command prompt.

6. now if threre is no error in the console displayed, then go to browser and type "localhost:3000/login"
  This will take you to the login page of Eduprism. In case you got error in console log that database is
  not connected then check your port number on which xampp is running and change port value in app.js to 
  that value.

7. If you have reached successfully till login page then credentials for login are as following,

	student login : username - IIT2018065 , password - you can enter any number
        faculty login : username - RK         , password - you can enter any number
	Admin login   : username - Admin      , password - you can enter any number

	before entring credentials you have to choose your user type. i.e. if you want to login as 
        user then choose student.

8. After successful login You may check functionality of each User type.

Thank You.
     
    