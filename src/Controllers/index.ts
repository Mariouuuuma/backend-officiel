import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;
const projectName = 'AviaHelper'; // Nom de votre projet

// Middleware pour parser le corps des requêtes en JSON
app.use(bodyParser.json());

// Endpoint pour Dialogflow avec le nom du projet dans l'URL
app.post(`/${projectName}/webhook`, (req: Request, res: Response) => {
  console.log('Requête reçue de Dialogflow :', req.body);

  // Traitez la requête ici (par exemple, récupérez des données, effectuez des opérations, etc.)
  const intentName = req.body.queryResult.intent.displayName;

  // Réponse à envoyer à Dialogflow
  const response = {
    fulfillmentText: `Vous avez invoqué l'intention : ${intentName}`
  };

  // Envoyer la réponse à Dialogflow
  res.json(response);
});

// Démarrer le serveur et écouter les requêtes entrantes sur le port spécifié
app.listen(port, () => {
  console.log(`Serveur ${projectName} démarré sur le port ${port}`);
});
