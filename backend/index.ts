import express, { Request, Response } from 'express';
const app = express();
const port = 5000;

app.use(express.json());

// Hardcoded user credentials
const validUser = {
    name: 'John Doe',
    password: 'password123'
};

app.post('/login', (req: Request, res: Response) => {
    const { name, password } = req.body;

    // Authentication
    if (name === validUser.name && password === validUser.password) {
        res.json({ success: true, message: 'Login successful' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
