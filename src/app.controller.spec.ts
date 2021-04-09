import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

describe("AppController", () => {
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

  describe("test", () => {
    it("scores Full 0", () => {
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

    it("scores Full 1", () => {
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

    it("scores with spares", () => {
      appService.roll(5);
      appService.roll(5); // This is a spare
      appService.roll(3);
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
      appService.roll(0);
      appService.roll(0);
      appService.roll(0);
      appService.roll(0);
      appService.roll(0);
      appService.roll(0);
      appService.roll(0);
      expect(appService.score()).toBe(16);
    });

    it("scores with strikes", () => {
      appService.roll(10);
      appService.roll(3); // This is a strike
      appService.roll(3);
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
      appService.roll(0);
      appService.roll(0);
      appService.roll(0);
      appService.roll(0);
      appService.roll(0);
      appService.roll(0);
      appService.roll(0);
      expect(appService.score()).toBe(24);
    });

    it("perfect score", () => {
      appService.roll(10);
      appService.roll(10); // This is a strike
      appService.roll(10);
      appService.roll(10);
      appService.roll(10);
      appService.roll(10);
      appService.roll(10);
      appService.roll(10);
      appService.roll(10);
      appService.roll(10);
      appService.roll(10);
      appService.roll(10);
      appService.roll(10);
      appService.roll(10);
      appService.roll(10);
      appService.roll(10);
      appService.roll(10);
      appService.roll(10);
      appService.roll(10);
      appService.roll(10);
      appService.roll(10);
      appService.roll(10);
      appService.roll(10);
      appService.roll(10);
      appService.roll(10);
      appService.roll(10);
      appService.roll(10);
      expect(appService.score()).toBe(300);
    });
  });
});
