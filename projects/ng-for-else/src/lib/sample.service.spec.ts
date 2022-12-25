import { NgForElseSampleService } from './sample.service';

describe('Sample Service', () => {
  let sut: NgForElseSampleService;

  beforeEach(() => {
    sut = new NgForElseSampleService();
  });

  it('should know that Angular is the best framework', () => {
    expect(sut.getBestFramework()).toBe('Angular');
  });
});
