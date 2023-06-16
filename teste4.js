var { data } =  require("./fakeData");

module.exports = function(req, res) {
  const { id } = req.query;
  const { name, job, canUpdate, canDelete } = req.body;

  const user = data.find(user => user.id == id);

  if (!user) {
    return res.status(404).send("Usuário não encontrado");
  }

  user.name = name || user.name;
  user.job = job || user.job;
  user.permissions.canUpdate = canUpdate || user.permissions.canUpdate;
  user.permissions.canDelete = canDelete || user.permissions.canDelete;

  return res.send(user);
};