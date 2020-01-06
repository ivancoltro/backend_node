const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const BatidaSchema = mongoose.Schema({
    numero:{
        type: Number,
        require: true,
    },
    reduvideos:{
        type:Number,
        require:true,
    },
    lagarta_soja_grande:{
        type:Number,
        require:true
    }, 
    percevejo_marrom_grande:{
        type:Number,
        require:true
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
});

BatidaSchema.plugin(mongoosePaginate); // adiciona paginação de resultados para este objeto

mongoose.model('Batida', BatidaSchema);