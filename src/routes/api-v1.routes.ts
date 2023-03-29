import { Router } from 'express';
import getData from '../controllers/data/get-data.controller';

const apiV1Router = Router();

apiV1Router.route('/data').get(getData);

export default apiV1Router;
