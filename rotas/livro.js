const { Router } = require("express")
const { getLivros, getLivro, postLivro, patchLivro, deleteLivro } = require("../controladores/livro")

const router = Router()

//Leitura dos dados
router.get('/', getLivros)

router.get('/:id', getLivro)

//Inserir os dados
router.post('/', postLivro)

// Editar os dados
router.patch('/:id',patchLivro)

//Excluir os dados
router.delete('/:id',deleteLivro)


module.exports = router