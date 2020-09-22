import dotenv from 'dotenv';

dotenv.config();

import './databases';
import { resolve } from 'path';

import express from 'express';
import home from './routes/home';
import user from './routes/user';
import token from './routes/token';
import aluno from './routes/aluno';
import picture from './routes/picture';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', home);
    this.app.use('/users', user);
    this.app.use('/tokens', token);
    this.app.use('/alunos', aluno);
    this.app.use('/pictures', picture);
  }
}

export default new App().app;
