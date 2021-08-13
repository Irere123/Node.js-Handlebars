/* 
 -Homepage, 
 -Learning page, 
 -Staff Page, 
 -Galley Page, 
 -Support Page 
 
*/

const home_page = (req, res) =>{
    res.render('index')
}

const learning_page = (req, res) =>{
    res.render('learning')
}

const support_page = (req, res) =>{
    res.render('support')
}

const staff_page =  (req, res) =>{
    res.render('staff')
}

const contact_page = (req, res) =>{
    res.render('contact')
}

const about_page = (req, res) =>{
    res.render('about')
}

const galley_page = (req, res) =>{
    res.render('galley')
}

const history = (req, res) =>{
    res.render('history')
}

// More Controllers


// Exporting the controller functions
module.exports = {
    home_page,
    learning_page,
    support_page,
    staff_page,
    contact_page,
    about_page,
    galley_page,
    history
}