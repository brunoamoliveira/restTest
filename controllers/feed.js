
exports.createPost = (req, res, next) => {
  const id = req.body.id;
  const nome = req.body.nome;
  // Create post in db
  res.status(201).json({
    message: 'Usuário criado com sucesso!',
    post: { id: new Date().toISOString(), id: id, nome: nome }
  });
};
