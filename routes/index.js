const express = require('express')
const router = express.Router()
const mainController =  require('../controllers/mainController')

// @desc Landing Page
// @route GET /
router.get('/', mainController.home_page)

// @desc E-learning Page
// @route GET /
router.get('/learning', mainController.learning_page)

// @desc Support Page
// @route GET /
router.get('/support', mainController.support_page)


// @desc Contact page
// @route GET /
router.get('/contact', mainController.contact_page)

// @desc About page
// @route GET /
router.get('/about', mainController.about_page)

// @desc Galley Page
// @route GET /
router.get('/galley', mainController.galley_page)

// @desc Staff
// @route GET /
router.get('/staff', mainController.staff_page)

// @desc Historical Background page
// @route GET /
router.get('/history', mainController.history)


// Other sub-domain connected to the main ones
router.get('/labs-and-library', (req, res) => {
    res.render('learning_page/labs')
})

router.get('/tests-and-evaluations', (req, res) => {
    res.render('learning_page/tests')
})

router.get('/comptence-base-currilum', (req, res) => {
    res.render('learning_page/CBE')
})

router.get('/sports', (req, res) => {
    res.render('learning_page/sports')
})

router.get('/irere/guy', (req, res) => {
    res.render('error/me')
})


router.get('/e-learning', (req, res) => {
    res.render('learning_page/e-learning')
})

router.get('/descipline', (req, res) => {
    res.render('learning_page/descipline')
})

module.exports = router