var { data } =  require("./fakeData");

const getUser = ( req, res, next ) => { 
    const { name } = req.query;

    const user = data.find((user) => user.name === name);

    if (!user) {
        return res.status(404).send("Usuário não encontrado");
    }

    user.reads = (user.reads || 0) + 1;

    return res.send(user);
};

const getUsers = ( req, res, next ) => {
    data.forEach((user) => {
        user.reads = (user.reads || 0) + 1;
    });

    return res.send(data);
};

module.exports = {
    getUser,
    getUsers
};