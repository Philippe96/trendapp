const express = require('express');
const bodyParser = require('body-parser');
const { ExploreTrendRequest } = require('g-trends')

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
    const explorer = new ExploreTrendRequest()

explorer.pastDay()
        .addKeyword('Cats france')
        .download().then( csv => {
            console.log('[✔] Done, take a look at your beautiful CSV formatted data!')
            console.log(csv)
            res.send({ csv: csv });

        }).catch( error => {
            console.log('[!] Failed fetching csv data due to an error',error)
            res.send({ error: error });
            
        })
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));