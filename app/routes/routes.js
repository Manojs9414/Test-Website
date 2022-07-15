module.exports = (app) => {
    console.log("passport called :");
            
            const userDetails = require('../controllers/userDetails.js');
             
        //load login page
        /***app.get('/signup', function(req,res){
                
                    //render ejs template with parameters using nodejs    	
                res.render('signup',{
                       loginErrorMsg: req.flash('error')
                      });
        });*/
    
        //load and Retrieve signup page
        app.get('/login', function(req,res){
    
                //render ejs template with parameters using nodejs
                res.render('login.ejs');
        });
        app.get('/index', function(req,res){
    
            //render ejs template with parameters using nodejs
            res.render('index.ejs');
    });
        
//forget                                       
app.get('/forget',function(req,res){
    res.render('forget',{
    loginErrorMsg:req.flash('error')
        });
});
    
        //signout session and redirect login page
        app.get('/logout',function(req,res){
    
                //Session Destroy 
                req.session.destroy();
                req.flash('error', 'Session Expired.');
            res.redirect(301,'/index');
        });
    
        //Signup / Create User
        app.post('/login', userDetails.create);
    
        //Login / Find User using email and password
        app.post('/signup', userDetails.findOne);
    
        //Login / Find User using email and password
        app.post('/forget', userDetails.findOne);
        //index
        app.post('/index', userDetails.index);
             
       
    }