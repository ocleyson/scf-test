var { data } =  require("./fakeData");

module.exports = function(req, res) {
  const { name } = req.query;

  const user = data.find(user => user.name === name);

  if (!user) {
    return res.status(404).send("Usuário não encontrado");
  }

  const reads = user.reads || 0;

  res.send(`Usuário ${name} foi lido ${reads} vezes.`);
};