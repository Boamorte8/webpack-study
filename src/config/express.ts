import express, { json, Request, Response } from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import apiV1Router from '../routes/api-v1.routes';

const expressApp = express();

const customDirname = dirname(fileURLToPath(import.meta.url));
expressApp.use('/public', express.static(join(customDirname, '../../public')));

expressApp.use(json());

// To handle CORS requests errors
expressApp.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, DELETE, PUT; PATCH, OPTIONS'
	);
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});

expressApp.get('/', (req: Request, res: Response) => {
	res.send('Hello TypeScript');
});

expressApp.use('/api/v1', apiV1Router);

expressApp.use((err, req, res, next) => {
	res.err = {
		message: err.message,
		stack: err.stack
	};
	next(err);
});

expressApp.use((err, req, res, next) => {
	return res
		.status(404)
		.send({ errors: [err.message || 'Endpoint not found'] });
});

export default expressApp;
