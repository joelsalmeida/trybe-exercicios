const service = require('./service');

describe('Testa a função "generateRandomNumber"', () => {
  it('Testa se a função foi chamada', () => {
    const generateRandomNumber = jest.fn().mockReturnValue(10);

    generateRandomNumber();
    expect(generateRandomNumber).toBeCalledTimes(1);

    generateRandomNumber();
    expect(generateRandomNumber).toBeCalledTimes(2);
  });

  it('Testa se a função retorna "10"', () => {
    const generateRandomNumber = jest.fn().mockReturnValue(10);

    generateRandomNumber();
    expect(generateRandomNumber).toHaveReturnedWith(10);
  });

  it('Testa nova implementação de divisão', () => {
    const generateRandomNumber = jest.fn().mockImplementation((a, b) => a / b);

    generateRandomNumber(14, 2);
    expect(generateRandomNumber).toHaveBeenCalledWith(14, 2);
    expect(generateRandomNumber).toHaveReturnedWith(7);
  });

  it('Testa nova implementação de multiplicação de três parâmetros', () => {
    const generateRandomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    generateRandomNumber(2, 4, 6);
    expect(generateRandomNumber).toHaveBeenCalledWith(2, 4, 6);
    expect(generateRandomNumber).toHaveReturnedWith(48);
  });
});

describe('upperCase, firstLetter e concatenate', () => {
  it('upperCase deve retornar em caixa-baixa', () => {
    const mockUpperCase = jest
      .spyOn(service, 'upperCase')
      .mockImplementation((phrase) => phrase.toLowerCase());

    mockUpperCase('CAIXA ALTA');
    expect(mockUpperCase).toHaveBeenCalledWith('CAIXA ALTA');
    expect(mockUpperCase).toHaveReturnedWith('caixa alta');

    // Testa mockRestore()
    expect(service.upperCase('CAIXA-BAIXA')).toBe('caixa-baixa');

    service.upperCase.mockRestore();
    expect(service.upperCase('caixa-baixa')).toBe('CAIXA-BAIXA');
  });

  it('firstLetter deve retornar a ultima letra', () => {
    const mockFirstLetter = jest
      .spyOn(service, 'firstLetter')
      .mockImplementation((phrase) => phrase[phrase.length - 1]);

    mockFirstLetter('Something');
    expect(mockFirstLetter).toHaveBeenCalledWith('Something');
    expect(mockFirstLetter).toHaveReturnedWith('g');
  });

  it('concatenate deve unir três strings', () => {
    const mockConcatenate = jest
      .spyOn(service, 'concatenate')
      .mockImplementation((stringA, stringB, stringC) => stringA + stringB + stringC);

    mockConcatenate('vic', 'to', 'ry');
    expect(mockConcatenate).toHaveBeenCalledWith('vic', 'to', 'ry');
    expect(mockConcatenate).toHaveReturnedWith('victory');
  });
});
