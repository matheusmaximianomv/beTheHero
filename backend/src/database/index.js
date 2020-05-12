import Knex from 'knex';

import configuration from '../../knexfile';

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Knex(configuration.development);
  }
}

export default new Database().connection;
