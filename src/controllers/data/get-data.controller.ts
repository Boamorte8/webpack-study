import { Response } from 'express';

import { initialState } from '../../data';

const data = initialState;

const getData = (req, res: Response) => {
	return res.json({ data });
};

export default getData;
