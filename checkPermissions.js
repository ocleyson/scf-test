var { data } =  require("./fakeData");

function checkPermissions(req, res, next) {
    const { tokenId } = req.query;
  
    const user = data.find((user) => user.id == tokenId);
  
    if (!user) {
      return res.status(404).send("Usuário não encontrado");
    }
  
    const { canDelete, canUpdate } = user.permissions;
  
    if (!canDelete && !canUpdate) {
      return res.status(403).send("Permissão insuficiente para alterar ou deletar usuário");
    }
  
    if (req.method === "DELETE" && !canDelete) {
      return res.status(403).send("Permissão insuficiente para deletar usuário");
    }
  
    if (req.method === "PUT" && !canUpdate) {
      return res.status(403).send("Permissão insuficiente para atualizar usuário");
    }
  
    next();
  };

 module.exports = { checkPermissions };