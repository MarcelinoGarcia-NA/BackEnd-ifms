const Campus = require("../models/Campus.js");

const criarCampi = async (req, res) => {
    try {
        const { nome_campi, image_url } = req.body;
        await Campus.create({ nome_campi, image_url  });
        res.json('Campi registado');
    } catch (error) {
        console.error(`Error: ${error}`);
        res.status(500).json({ message: 'Ocorreu erro ao registrar' });
    }
};

const criarCampusAquidauana = async (req, res) => {
    try {
        const campus = {
            nome_campi: "Campus Aquidauana",
            image_url:"https://www.ifms.edu.br/imagens/imagens-noticias/abraco-pela-educacao/img_5497.jpg"
        }
        await Campus.create(campus);
        res.json('Campi registado');
    } catch (error) {
        console.error(`Error: ${error}`);
        res.status(500).json({ message: 'Ocorreu erro ao registrar' });
    }
};

const buscarCampi = async (req, res) => {
    try {
        const campi = await Campus.findOne({ where: { id: parseInt(req.params.id) } });
        if (campi) {
            return res.json(campi);
        } else {
            res.status(404).json({ message: 'Campi not found' });
        }
    } catch (error) {
        console.error(`Error: ${error}`);
        res.status(500).json({ message: 'Ocorreu um erro na busca!' });
    }
};

const buscarCampus = async (req, res) => {
    try {
        const campi = await Campus.findAll();
        res.json(campi);
    } catch (error) {
        console.error(`Error: ${error}`);
        res.status(500).json({ message: 'Ocorreu erro na busca!' });
    }
};

const deletarCampi = async (req, res) => {
    try {
        await Campus.destroy({ where: { id: parseInt(req.params.id) } });
        res.json('Campi removido!');
    } catch (error) {
        console.error(`Error: ${error}`);
        res.status(500).json({ message: 'Erro ao remover Campi' });
    }
};

const atualizarCampi = async (req, res) => {
    const { nome_campi, imagem_url } = req.body;
    try {
        await Campus.update({ nome_campi, imagem_url  }, { where: { id: parseInt(req.params.id) } });
        res.json('Campi atualizando com sucesso!');
    } catch (error) {
        console.error(`Error: ${error}`);
        res.status(500).json({ message: 'Erro ao atualizar' });
    }
};



module.exports = { criarCampi, criarCampusAquidauana, buscarCampi, buscarCampus, deletarCampi, atualizarCampi };