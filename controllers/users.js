import { nanoid } from 'nanoid';


let users = [];

export const mainPage = (req, res) => {
    res.render('home');
}

export const createUserPage = (req, res) => {
    res.render('createUser');
}

export const editUserPage = (req, res) => {
    const user = users.find((user) => user.id === req.params.id);
    console.log("edit this user", user);
    res.render('editUser', {
        user:user
    });
}

// no msg will be shown in postman we can see either empty page or table
export const getUsers = (req, res) => {
    res.render('users', {
        users: users
    });
}

export const getUser = (req, res) => {
    const foundUser = users.find((user) => user.id === req.params.id);

    if (foundUser) {
        res.send(foundUser);
    } else {
        res.send(`User with id ${req.params.id} is not found in the database. In get flow`);
    }
}

export const createUser = (req, res) => {
    console.log("Im from post request");
    const user = req.body;

    users.push({ ...user, id: nanoid(4) });
    res.render('users', {
        users: users
    });
    // res.status(201);
    // res.send(`User with the name ${req.body.firstName} added to the database.`)
}

export const deleteUser = (req, res) => {
    const nUser = users.length;
    users = users.filter((user) => user.id !== req.params.id);

    if (nUser === users.length) {
        res.send(`User with id ${req.params.id} is not found in the database. In delete flow.`);
    } else {
        res.send(`The user with the id ${req.params.id} is deleted from the database. In delete flow.`)
    }
}

export const updateUser = (req, res) => {
    const user = users.find((user) => user.id === req.params.id);

    console.log("updateUser");
    if (user) {
        const {firstName, lastName, age} = req.body;
        if (firstName) {
            user.firstName = firstName;
        }
        if (lastName) {
            user.lastName = lastName;
        }
        if (age) {
            user.age = age;
        }
        res.render('users', {
            users:users
        });
        // res.send(`User with id ${req.params.id} has been updated. In edit flow.`);
    } else {
        res.send(`User with id ${req.params.id} is not found in the database. In edit flow.`);
    }
    console.log("updateUser", users);
}