import { NgForElseDirective } from './ng-for-else.directive';

describe('NgForElse', () => {
  let sut: NgForElseDirective;

  const ngForMock = {
    _ngForOf: [],
  } as any;
  const viewContainerMock = {
    createEmbeddedView: jest.fn(),
    remove: jest.fn(),
    indexOf: jest.fn(),
  } as any;

  beforeEach(() => {
    sut = new NgForElseDirective(ngForMock, viewContainerMock);
  });

  afterEach(() => jest.resetAllMocks());

  it('should create an embedded view with our template when ngFor does not render items', () => {
    const elseMock = 'Rock and stone broter!';
    jest.spyOn(viewContainerMock, 'createEmbeddedView');
    ngForMock._ngForOf = [];
    sut.elseTemplate = elseMock as any;

    sut.ngDoCheck();
    expect(viewContainerMock.createEmbeddedView).toHaveBeenCalledWith(elseMock);
  });

  it('should remove the elseTemplate if ngFor renders items', () => {
    const mockedIndex = 0;
    const mockedViewRef = 'Rock and stone broter!';
    jest.spyOn(viewContainerMock, 'indexOf').mockReturnValue(mockedIndex);
    jest
      .spyOn(viewContainerMock, 'createEmbeddedView')
      .mockReturnValue(mockedViewRef);
    jest.spyOn(viewContainerMock, 'remove');

    // Call it twice, once to add the viewRef and then to remove it
    ngForMock._ngForOf = [];
    sut.ngDoCheck();

    ngForMock._ngForOf = ['Gunner', 'Driller'];
    sut.ngDoCheck();
    expect(viewContainerMock.remove).toHaveBeenCalledWith(mockedIndex);
  });

  it('should store the ViewRef and reset it after removing the elseTemplate', () => {
    const mockedIndex = 0;
    const mockedViewRef = 'Rock and stone broter!';
    jest.spyOn(viewContainerMock, 'indexOf').mockReturnValue(mockedIndex);
    jest
      .spyOn(viewContainerMock, 'createEmbeddedView')
      .mockReturnValue(mockedViewRef);
    jest.spyOn(viewContainerMock, 'remove');

    // Call it twice, once to add the viewRef and then to remove it
    ngForMock._ngForOf = [];
    sut.ngDoCheck();

    ngForMock._ngForOf = ['Gunner', 'Driller'];
    sut.ngDoCheck();
    expect(viewContainerMock.remove).toHaveBeenCalledWith(mockedIndex);

    sut.ngDoCheck();
    expect(viewContainerMock.remove).toHaveBeenCalledTimes(1);
  });
});
