const express = require('express');
const app = express();
const cors = require('cors');
const {v4: uuidv4} = require('uuid');
const {readFile, writeFile} = require('fs').promises;

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

let productos = [];

app.get('/', (req, res) => {
    res.send('Servidor de prueba');
});
app.get('/productos', async (req, res) => {
    await open();
    res.json(productos);
});
app.get('/productos/:id', (req, res) => {
    res.send(`${req.params.id}`);
});
app.put('/productos/:id', async (req, res) => {
    const id = req.params.id;
    await open();
    const index = productos.findIndex(item => item.id === id);
    productos[index].completed = !productos[index].completed;
    await save();
    res.json(productos[index]);
});
app.delete('/productos/:id', async (req, res) => {
    const id = req.params.id;
    await open();
    productos = productos.filter(item => item.id !== id);
    await save();
    res.json(productos);
});

app.post('/productos', async (req, res) => {
    const id = uuidv4();
    req.body['id'] = id;
    await open();
    productos.unshift(req.body);
    
    await save();
    res.json(req.body);
});

async function save(){
    const res = await writeFile('data.json', JSON.stringify(productos), 'utf-8');
}

async function open(){
    const res = await readFile('data.json', 'utf-8');
    productos = JSON.parse(res);
    console.log('open',productos);
}

app.listen(3002, () => {
    console.log('servidor iniciado...');
});