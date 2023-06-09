const { use } = require("../routes/authRouter");

USER_BASE = [
    {email: 'admin', password: 'admin', status: 'false'},
]

const signupController = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const status = false;
    const userExists = USER_BASE.some(user => user.email === email);
    if (userExists){
        return res.status(400).json({message: 'Email already in use.'});
    }
    else{
        USER_BASE.push({email, password, status});
        const user = USER_BASE.find(user => user.email === email);
        res.status(200).json({message: 'Sign up successful.', user: user});
    }
}

const loginController = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = USER_BASE.find(user => user.email === email);
    if (!user) {
        res.status(401).json({ message: 'User not found.' });
      } else if (user.password !== password) {
        res.status(401).json({ message: 'Incorrect password.' });
      } else {
        // Successful login
        user.status = true;
        res.status(200).json({ message: 'Login successful.', user: user});
      }
}

const logoutController = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    // TODO 
    // const user = USER_BASE.find(user => user.email === email);
    const user = {email: email, password: password, status: 'true'}
    if (!user) {
        res.status(401).json({ message: 'User not found.' });
      } else {
        user.status = false;
        res.status(200).json({ message: 'Logout successful.', user: user});
      }
}

const authController = {
    signup: signupController, 
    login: loginController,
    logout: logoutController
}

module.exports = authController;
