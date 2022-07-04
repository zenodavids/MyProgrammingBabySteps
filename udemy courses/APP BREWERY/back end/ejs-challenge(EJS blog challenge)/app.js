const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const ejsLint = require('ejs-lint')
const _ = require('lodash')

//MODULES
const homeWriteUp = require(__dirname + '/homeContent.js')
const aboutWriteUp = require(__dirname + '/about.js')
const contactWriteUp = require(__dirname + '/contact.js')

const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

let posts = []

//home page
app.get('/', (req, res) => {
  const frontPage = homeWriteUp.homePage()
  res.render('home', {
    homeContent: frontPage,
    posts: posts,
  })
})

//about page
app.get('/about', (req, res) => {
  const aboutFrontPage = aboutWriteUp.aboutPage()
  res.render('about', { aboutContent: aboutFrontPage })
})

//contact page
app.get('/contact', (req, res) => {
  const contactFrontPage = contactWriteUp.contactPage()
  res.render('contact', { contactContent: contactFrontPage })
})

//compose page
app.get('/compose', (req, res) => {
  res.render('compose')
})

app.post('/compose', (req, res) => {
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody,
  }
  posts.push(post) //this keeps adding the posts
  res.redirect('/')
})
//////////////////////////////////////////////////
//for tags to open on seperate pages
app.get('/:customTagName', (req, res) => {
  const customTagName = req.params.customTagName
})
//////////////////////////////////////////////////////////
//posts to appear on single page
app.get('/posts/:topic', (req, res) => {
  const requestedTitle = _.lowerCase(req.params.topic)

  posts.forEach((post) => {
    const storedTitle = _.lowerCase(post.title)

    if (storedTitle === requestedTitle) {
      res.render('post', {
        title: post.title,
        content: post.content,
      })
    }
  })
})

app.listen(3000, function () {
  console.log('Server started on port 3000')
})
