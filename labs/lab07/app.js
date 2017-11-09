var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var expressValidator = require('express-validator')

var app = express()

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
var tasks = [
    {
        task: 1,
        title: 'Complete Class Project',
        description: 'Program app',
        statuss: 'In Progress',
    },
    {
        task: 2,
        title: 'Scripting homework',
        description: 'Python coding',
        statuss: 'complete',
    },
    {
        task: 3,
        title: 'Data Structures',
        description: 'Binary Tree Lab',
        statuss: 'incomplete',
    }
]

// SetUp Routes
app.get('/', function (req, res) {
    res.render('index', {
        title: 'Tasks',
        tasks: tasks
    })
})

app.post('/tasks/add', function (req, res) {

    req.checkBody('title', 'Title is Required').notEmpty()
    req.checkBody('statuss', 'Statuss is Required').notEmpty()
    req.checkBody('description', 'Description is Required').notEmpty()

    var errors = req.validationErrors()

    if (errors) {
        res.render('index', {
        title: 'Tasks',
        tasks: tasks,
        errors: errors
    })
    } else {
        var tasks = {
            title: req.body.title,
            description: req.body.description,
            statuss: req.body.statuss
        }
        console.log('SUCCESS')
    	console.log("Task", tasks)
	}
})

app.listen(3000, function () {
    console.log('Server started on port 3000...')
})
