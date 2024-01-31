/* eslint-disable import/no-anonymous-default-export */
import { errorCode } from '@/utils/errorCode';
import { updatePage, deleteManyPage, getPageById } from '@/libs/pages';

/**
 * @swagger
 * /api/pages/{id}:
 *   get:
 *     tags:
 *       - pages
 *     summary: Get a pages of Page
 *     description: Get a pages of Page
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of Page
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: pages 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/pages'
 *   patch:
 *     tags:
 *       - pages
 *     summary: Update a pages
 *     description: Update a pages
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the pages
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/pages'
 *     responses:
 *       200:
 *         description: pages user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/pages'
 *   delete:
 *     tags:
 *       - pages
 *     summary: Delete a pages
 *     description: Delete a pages
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the pages
 *         schema:
 *           type: int
 *     responses:
 *       200:
 *         description: pages
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/pages'
 */
export default async (req, res) => {
	let {
		query: { id },
		body: data,
		method,
	} = req;

	id = parseInt(id);
	let pages;

	switch (method) {
		case 'GET':
			try {
				pages = await getPageById(id);
			} catch (e) {
				res.status(e.statusCode).json(e);
				return;
			}
			break;
		case 'PATCH':
			if (!data) {
				res.status(400).json(errorCode.BadRequest);
				return;
			}

			try {
				pages = await updatePage(id, data);
			} catch (e) {
				res.status(e.statusCode).json(e);
				return;
			}
			break;
		case 'DELETE':
			try {
				pages = await deleteManyPage(id);
			} catch (e) {
				res.status(e.statusCode).json(e);
				return;
			}
			break;
		default:
			res.setHeader('Allow', ['GET', 'PATCH', 'DELETE']);
			res.status(405).json(errorCode.MethodNotAllowed);
			return;
	}

	if (pages) {
		res.status(200).json({ success: true, rows: pages });
		return;
	}

	res.status(500).json(errorCode.InternalServerError);
};
