USER_BASE = [
    {email: 'admin', password: 'admin'},
]

const signupController = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const userExists = USER_BASE.some(user => user.email === email);
    if (userExists){
        return res.status(400).json({message: 'Email already in use. Try a different one'});
    }
    else{
        USER_BASE.push({email, password});
        res.status(200).json({message: 'Sign up successful'});
    }
}

const loginController = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = USER_BASE.find(user => user.email === email);
    if (!user) {
        res.status(401).json({ message: 'User not found' });
      } else if (user.password !== password) {
        res.status(401).json({ message: 'Incorrect password' });
      } else {
        // Successful login
        res.status(200).json({ message: 'Login successful' });
      }
}

const logoutController = (req, res) => {

}

const authController = {
    signup: signupController, 
    login: loginController,
    logout: logoutController
}

module.exports = authController;
