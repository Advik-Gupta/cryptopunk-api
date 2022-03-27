const axios = require('axios');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
// ___________________________________________________________________________________________________________________________

app.use(express.json());
app.use(cors());

// ___________________________________________________________________________________________________________________________

app.get('/trial', (req, res) => {
	res.send('API is working');
});

app.get('/getPunks', async (req, res) => {
	const openseaData = await axios.get(
		'https://testnets-api.opensea.io/assets?asset_contract_address=0xb80409A31B53d3EF54dD9900eA84980cA2BE5eB5&order_direction=asc'
	);
	res.send(openseaData.data.assets);
});

app.get('/getApes', async (req, res) => {
	const openseaDataApes = await axios.get(
		'https://testnets-api.opensea.io/assets?asset_contract_address=0x4771fAB23a9ba5490bb126B1D6ef2c8300E300A8&order_direction=asc'
	);
	res.send(openseaDataApes.data.assets);
});

app.get('/getAzuki', async (req, res) => {
	const openseaDataAzuki = await axios.get(
		'https://testnets-api.opensea.io/assets?asset_contract_address=0xe7a79e9438d94e06C261c8ef8Abcc27334e4d72E&order_direction=asc'
	);
	res.send(openseaDataAzuki.data.assets);
});

// ___________________________________________________________________________________________________________________________

app.listen(port, () => {
	console.log(`Example app listening at ${port}`);
});
