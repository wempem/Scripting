var express = require('express')
var bodyParser = require('body-parser')
var path = require('path');
var expressValidator = require('express-validator')
var mongojs = require('mongojs')
var db = mongojs('process.env.MONGODB_URL', ['tasks'])
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
    db.tasks.find(function (err, docs) {
            res.render('index', {
        title: 'Tasks',
        tasks: docs
        })
    })
})

app.post('/tasks/add', function (req, res) {

    req.checkBody('task id', 'Task ID is Required').notEmpty()
    req.checkBody('title', 'Title is Required').notEmpty()
    req.checkBody('description', 'Description is Required').notEmpty()
    req.checkBody('statuss', 'Statuss is Required').notEmpty()
    req.checkBody('grade', 'Grade is Required').notEmpty()

    var errors = req.validationErrors()

    if (errors) {
        db.tasks.find(function (err, docs) {
            res.render('index', {
                title: 'Tasks',
                tasks: docs,
                errors: errors
            })
        })
    } else {
        var task = {
            task_id: req.body.task_id,
            title: req.body.title,
            description: req.body.description,
            statuss: req.body.statuss,
            grade: req.body.grade
        }

        // insert the new student into the database
        db.tasks.insert(task, function (err, result) {
            if (err) {
                console.log(err)
            }
            res.redirect('/')
        })
    }
})

app.delete('/taskss/delete/:id', function(req, res) {
    db.tasks.remove( { _id: ObjectId(req.params.id) }, function (err, result) {
        if (err) {
            console.log(err)
        }
        res.redirect('/')
    })
})

app.get('/tasks/update/:id', function (req, res) {
    db.tasks.find( { _id: ObjectId(req.params.id) }, function (err, docs) {
            res.render('update-task', {
        task: docs[0]
        })
    })
})

app.put('/tasks/update', function (req, res) {
    var task = {
        "_id": ObjectId(req.body.id),
        "task_id": req.body.task_id,
        "title": req.body.title,
        "description": req.body.description,
        "statuss": req.body.statuss,
        "grade": req.body.grade
    }
    db.tasks.save(task, function (err, result) {
        if (err) {
            console.log(err)
        }
        res.redirect('/')
    })
})

app.listen(app.get('port'), function () {
    console.log('Server started on port ' + app.get('port') + '. . .')
})

