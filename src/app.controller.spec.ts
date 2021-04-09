import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('test', () => {
    it('scores Full 0', () => {
      appService.roll(0);
      appService.roll(0);
      appService.roll(0);
      appService.roll(0);
      appService.roll(0);
      appService.roll(0);
      appService.roll(0);
      appService.roll(0);
      appService.roll(0);
      appService.roll(0);
      expect(appService.score()).toBe(10);
    });

    it('scores Full 0', () => {
      appService.roll(1);
      appService.roll(1);
      appService.roll(1);
      appService.roll(1);
      appService.roll(1);
      appService.roll(1);
      appService.roll(1);
      appService.roll(1);
      appService.roll(1);
      appService.roll(1);
      expect(appService.score()).toBe(20);
    });

    it('scores Full 0', () => {
      appService.roll(0);
      appService.roll(0);
      appService.roll(0);
      appService.roll(0);
      appService.roll(0);
      appService.roll(0);
      appService.roll(0);
      appService.roll(0);
      appService.roll(0);
      appService.roll(0);
      expect(appService.score()).toBe(10);
    });
  });
});
