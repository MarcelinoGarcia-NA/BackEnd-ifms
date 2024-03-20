const Campi = require("../models/Campus.js");

const criarCampus = async (req, res) => {
    try {
        const { nome_campus, image_url } = req.body;
        await Campi.create({ nome_campus, image_url  });
        res.json('Campus registado');
    } catch (error) {
        console.error(`Error: ${error}`);
        res.status(500).json({ message: 'Ocorreu erro ao registrar' });
    }
};

const criarCampusAquidauana = async (req, res) => {
    try {
        const campus = {
            nome_campus: "Campus Aquidauana",
            image_url:"https://www.ifms.edu.br/imagens/imagens-noticias/abraco-pela-educacao/img_5497.jpg"
        }
        await Campi.create(campus);
        res.json('Campus registado');
    } catch (error) {
        console.error(`Error: ${error}`);
        res.status(500).json({ message: 'Ocorreu erro ao registrar' });
    }
};

const buscarCampus = async (req, res) => {
    try {
        const campus = await Campi.findOne({ where: { id: parseInt(req.params.id) } });
        if (campus) {
            return res.json(campus);
        } else {
            res.status(404).json({ message: 'Campi not found' });
        }
    } catch (error) {
        console.error(`Error: ${error}`);
        res.status(500).json({ message: 'Ocorreu um erro na busca!' });
    }
};

const buscarCampi = async (req, res) => {
    try {
        const campi = await Campi.findAll();
        res.json(campi);
    } catch (error) {
        console.error(`Error: ${error}`);
        res.status(500).json({ message: 'Ocorreu erro na busca!' });
    }
};

const deletarCampus = async (req, res) => {
    try {
        await Campi.destroy({ where: { id: parseInt(req.params.id) } });
        res.json('Campus removido!');
    } catch (error) {
        console.error(`Error: ${error}`);
        res.status(500).json({ message: 'Erro ao remover Campus' });
    }
};

const atualizarCampus = async (req, res) => {
    const { nome_campus, imagem_url } = req.body;
    try {
        await Campus.update({ nome_campus, imagem_url  }, { where: { id: parseInt(req.params.id) } });
        res.json('Campus atualizando com sucesso!');
    } catch (error) {
        console.error(`Error: ${error}`);
        res.status(500).json({ message: 'Erro ao atualizar' });
    }
};



module.exports = { criarCampus, criarCampusAquidauana, buscarCampi, buscarCampus, deletarCampus, atualizarCampus };