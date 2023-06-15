var { data } =  require("./fakeData");

const addUser = (req, res) => {
    const { name, job } = req.body;

    const newId = data.length + 1;
  
    const newUser = {
        id: newId,
        name: name,
        job: job,
        reads: 0
    };
  
    data.push(newUser);
  
    return res.status(201).send(newUser);
  };
  
  module.exports = addUser;