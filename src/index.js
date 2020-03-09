const express = require('express');
const { countries, languages } = require('countries-list');

const app = express();

app.get('/', (request, response) => {
  response.status(200).send('Hello');
});

app.get('/country', (request, response) => {
  // console.log('request.query', request.query);
  response.json(countries[request.query.code]);
});

app.get('/languages/:lang', (request, response) => {
  // console.log('request.params', request.params);

  const lang = languages[request.param.lang];
  if (lang) {
    response.json({ status: 'OK', data: lang });
  } else {
    response.status(404).json({
      status: 'NOT_FOUND',
      message: `language ${request.params.lang} not_fund`,
    });
  }
});

app.get('*', (request, response) => {
  response.status(404).send('Not Funsd');
});

app.listen(4000, () => {
  console.log('runing on 4000');
});
