Object.defineProperty(exports, '__esModule', { value: true }); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } const _dotenv = require('dotenv');

const _dotenv2 = _interopRequireDefault(_dotenv);

_dotenv2.default.config();

require('./databases');
const _path = require('path');

const _express = require('express');

const _express2 = _interopRequireDefault(_express);
const _home = require('./routes/home');

const _home2 = _interopRequireDefault(_home);
const _user = require('./routes/user');

const _user2 = _interopRequireDefault(_user);
const _token = require('./routes/token');

const _token2 = _interopRequireDefault(_token);
const _aluno = require('./routes/aluno');

const _aluno2 = _interopRequireDefault(_aluno);
const _picture = require('./routes/picture');

const _picture2 = _interopRequireDefault(_picture);

class App {
  constructor() {
    this.app = _express2.default.call(void 0);
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', _home2.default);
    this.app.use('/users', _user2.default);
    this.app.use('/tokens', _token2.default);
    this.app.use('/alunos', _aluno2.default);
    this.app.use('/pictures', _picture2.default);
  }
}

exports.default = new App().app;
