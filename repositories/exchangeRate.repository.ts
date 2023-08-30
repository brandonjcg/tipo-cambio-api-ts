/* eslint-disable class-methods-use-this */
import ExchangeRate from '../classes/ExchangeRate';
import database from '../database';
import { DatabaseRepository, Id } from '../declarations';

export default class ExchangeRateRepository implements DatabaseRepository<ExchangeRate> {
  async create(data: Partial<ExchangeRate>): Promise<ExchangeRate> {
    const repository = database.getRepository(ExchangeRate);

    const result = repository.create(data);

    await repository.save(result);

    return result;
  }

  async list(): Promise<ExchangeRate[]> {
    const repository = database.getRepository(ExchangeRate);

    return repository.find();
  }

  async get(id: Id): Promise<ExchangeRate> {
    const repository = database.getRepository(ExchangeRate);

    const result = await repository.findOneBy({ id: id as any });

    if (!result) {
      throw new Error('Record not found');
    }

    return result;
  }

  async update(id: Id, data: ExchangeRate): Promise<ExchangeRate> {
    const repository = database.getRepository(ExchangeRate);

    await repository.update(id, data);

    return this.get(id);
  }

  async remove(id: Id): Promise<ExchangeRate> {
    const repository = database.getRepository(ExchangeRate);

    const result = await this.get(id);

    await repository.delete(id);

    return result;
  }
}
