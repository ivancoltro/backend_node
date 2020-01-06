const mongoose = require("mongoose");
const Batida = mongoose.model("Batida");

module.exports ={
    async index(req, res){
        const {page} =req.query;  // query serve para pegar parametros passados na url por get
        // const batidas = await Batida.find(); altera o find para adicionar paginação
        const batidas = await Batida.paginate({}, {page:page, limit:5});// o primeiro objeto seria alguma condição

        return res.json(batidas);
    },

    async detalhar(req, res){
        const batida = await Batida.findById(req.params.id); // pega o id passado para essa função na rota. params serve apenas para atributos de rota
        return res.json(batida);
    },

    async rd(req, res){
        //console.log(req.params.n);
        const id = await Batida.find({'reduvideos': req.params.n});
        return res.json(id.map(obj => (obj._id)));
    },

    async gravar(req, res){
        const batida = await Batida.create(req.body);
        return res.json(batida);
    },

    async atualizar(req, res){
        const batida  = await Batida.findByIdAndUpdate(req.params.id, req.body, {new:true}); // esse new obriga a retornar o objeto ja atualizado
        return res.json(batida);
    },

    async apagar(req, res){
        await Batida.findByIdAndRemove(req.params.id);
        return res.send("Apagado com sucesso");
    }
};