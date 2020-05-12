import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import OngsController from './app/controllers/OngsController';
import IncidentsController from './app/controllers/IncidentsController';
import ProfileController from './app/controllers/ProfileController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

const { BODY, HEADERS, QUERY, PARAMS } = Segments;

routes.get('/', (req, res) => {
  return res.status(200).json({
    name: 'Be The Hero',
    description: 'Projeto desenvolvido na semana omnistack 11',
  });
});

routes.post(
  '/sessions',
  celebrate({
    [BODY]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }),
  SessionController.store
);

routes.get('/ongs', OngsController.index);
routes.post(
  '/ongs',
  celebrate({
    [BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      whatsapp: Joi.string().required().min(10).max(11),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2),
    }),
  }),
  OngsController.store
);

routes.get(
  '/profile',
  celebrate({
    [HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  ProfileController.index
);

routes.get(
  '/incidents',
  celebrate({
    [QUERY]: Joi.object().keys({
      page: Joi.number().default(1),
    }),
  }),
  IncidentsController.index
);
routes.post(
  '/incidents',
  celebrate({
    [HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
    [BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      value: Joi.number().required(),
    }),
  }),
  IncidentsController.store
);
routes.delete(
  '/incidents/:id',
  celebrate({
    [PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
    [HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  IncidentsController.delete
);

export default routes;
