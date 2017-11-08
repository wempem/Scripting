var express = require('express')
var bodyParser = require('body-parser')
var path = require('path');
var expressValidator = require('express-validator')
var mongojs = require('mongojs')
var db = mongojs('students', ['students'])
var ObjectId = mongojs.ObjectId

var app = express()

app.set('port', (process.env.PORT || 8080))

// View Engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Body Parser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Set static path
app.use(express.static(path.join(__dirname, 'public')))

// Global Vars
app.use(function(req, res, next) {
    res.locals.errors = null
    next()
})

// Express Validator Middleware
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}))

// SetUp Routes
app.get('/', function (req, res) {
    db.students.find(function (err, docs) {
	    res.render('index', {
        title: 'Students',
        students: docs
        })
    })
})

app.post('/students/add', function (req, res) {

    req.checkBody('first_name', 'First Name is Required').notEmpty()
    req.checkBody('last_name', 'Last Name is Required').notEmpty()
    req.checkBody('email', 'Email is Required').notEmpty()
    req.checkBody('major', 'Major is Required').notEmpty()
    req.checkBody('gpa', 'GPA is Required').notEmpty()

    var errors = req.validationErrors()

    if (errors) {
        db.students.find(function (err, docs) {
            res.render('index', {
                title: 'Students',
                students: docs,
                errors: errors
            })
        })
    } else {
        var student = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            major: req.body.major,
            gpa: req.body.gpa
        }
        
        // insert the new student into the database
        db.students.insert(student, function (err, result) {
            if (err) {
                console.log(err)
            }
            res.redirect('/')
        })
    }
})

app.delete('/students/delete/:id', function(req, res) {
    db.students.remove( { _id: ObjectId(req.params.id) }, function (err, result) {
        if (err) {
            console.log(err)
        }
        res.redirect('/')
    })
})

app.get('/students/update/:id', function (req, res) {
    db.students.find( { _id: ObjectId(req.params.id) }, function (err, docs) {
	    res.render('update-student', {
        student: docs[0]
        })
    })
})

app.put('/students/update', function (req, res) {
    var student = {
        "_id": ObjectId(req.body.id),
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "email": req.body.email,
        "major": req.body.major,
        "gpa": req.body.gpa
    }
    db.students.save(student, function (err, result) {
        if (err) {
            console.log(err)
        }
        res.redirect('/')
    })
})

app.listen(app.get('port'), function () {
    console.log('Server started on port ' + app.get('port') + '. . .')
})