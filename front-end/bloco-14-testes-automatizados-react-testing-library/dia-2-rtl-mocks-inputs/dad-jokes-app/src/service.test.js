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
  })
});
