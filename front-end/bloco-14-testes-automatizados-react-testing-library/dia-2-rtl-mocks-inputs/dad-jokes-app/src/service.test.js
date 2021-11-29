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
});
