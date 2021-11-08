const login = (req, res) => {

}

const signup = (req, res) => {
    const {  } = req.body;

    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ error })
    }
}

module.exports = { login, signup };
