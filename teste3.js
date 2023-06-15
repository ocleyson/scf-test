var { data } =  require("./fakeData");

module.exports = function(req, res) {
  const { name } = req.query;

  const userIndex = data.findIndex(user => user.name === name);

  if (userIndex !== -1) {
    data.splice(userIndex, 1);
    return res.send("Usuário removido com sucesso");
  }

  return res.status(404).send("Usuário não encontrado");
};