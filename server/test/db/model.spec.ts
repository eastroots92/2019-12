import '../../src/env';
import { sequelize } from '../../src/utils/sequelize';
import { Event, UserTicket, TicketType, User } from '../../src/models';

describe('DB connection Test', () => {
  afterAll(async done => {
    sequelize.close();
    done();
  });

  const modelManager = sequelize.modelManager;
  test('DB는 모든 모델을 소유한다.', async () => {
    const isAllModelsChecked =
      modelManager.getModel('Event') === Event &&
      modelManager.getModel('UserTicket') === UserTicket &&
      modelManager.getModel('TicketType') === TicketType &&
      modelManager.getModel('User') === User;

    expect(isAllModelsChecked).toBeTruthy();
  });
});
