
# Employee Review System

ERS is a web app for companies to evaluate the performance reviews of their employees. Using this web app, admin of this project can assign other employees to participate in the performance reviews of some other employee. Admin can view, update the details of any employee and only admin is authorized to assign tasks and removing any employee from the web app. Employees can view all the performance reviews assigned to them and they can fill necessary details and submit the review.

## How to setup the project on local system

To setup this project, run the following commands on your terminal

 1. Clone the project

```bash
https://github.com/HarshitSingh45/Employee-review-system.git
```

2. Change directory to Ecomerce-API 

```bash
cd employee-review-system/
```

3. Install all depedencies

```bash
npm i --save
```

4. Run the project

```bash
npm start
```

## Features

- Same Login page for admin and employees
- Admin can view, update employee details
- Admin can remove any employee
- Admin can add new employee
- Admin can assign task to employees
- Admin can view all performance reviews and can update them if needed
- Admin can add performance review 
- Employee can view all the pending performance reviews
- Employee can fill and submit the assigned reviews


## Tech Stack

- NodeJS
- Express
- mongodb
- ejs
- Javascript
- passport
## Directory Structure

```
.
├── assets
│   ├── images
│   ├── scripts
│   │   ├── assignReview.js
│   │   └── homeAdmin.js
│   ├── scss
│   │   ├── addEmp.scss
│   │   ├── addPRAdmin.scss
│   │   ├── allPR.scss
│   │   ├── assignPR.scss
│   │   ├── empDetails.scss
│   │   ├── header.scss
│   │   ├── homeAdmin.scss
│   │   ├── homeEmployee.scss
│   │   ├── layout.scss
│   │   ├── signin.scss
│   │   ├── signup.scss
│   │   └── updatePR.scss
│   └── styles
│       ├── addEmp.css
│       ├── addPRAdmin.css
│       ├── allPR.css
│       ├── assignPR.css
│       ├── empDetails.css
│       ├── header.css
│       ├── homeAdmin.css
│       ├── homeEmployee.css
│       ├── layout.css
│       ├── signin.css
│       ├── signup.css
│       └── updatePR.css
├── config
│   ├── mongoose.js
│   └── passport-local-strategy.js
├── controllers
│   ├── assignController.js
│   ├── employeeController.js
│   ├── homeController.js
│   ├── reviewController.js
│   └── userController.js
├── index.js
├── models
│   ├── employee.js
│   └── reviews.js
├── package-lock.json
├── package.json
├── routes
│   ├── assign.js
│   ├── employees.js
│   ├── index.js
│   ├── review.js
│   └── users.js
└── views
    ├── _footer.ejs
    ├── _header.ejs
    ├── addEmp.ejs
    ├── addPRAdmin.ejs
    ├── allPR.ejs
    ├── assignPR.ejs
    ├── empDetails.ejs
    ├── homeAdmin.ejs
    ├── homeEmployee.ejs
    ├── layout.ejs
    ├── signin.ejs
    ├── signup.ejs
    └── updatePR.ejs

```
## Author

- [@HarshitSingh45](https://www.github.com/HarshitSingh45)

