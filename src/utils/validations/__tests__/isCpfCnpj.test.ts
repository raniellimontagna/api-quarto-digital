import { isCpfCnpj } from "../isCpfCnpj";

describe("isCpfCnpj - Função para verificar se o valor enviado é um CPF ou CNPJ válido", () => {
  it("Deve retornar undefined se o CPF ou CNPJ for válido", () => {
    expect(isCpfCnpj({ value: "76868644809" })).toBeUndefined();
    expect(isCpfCnpj({ value: "07081093000175" })).toBeUndefined();
  });

  it("Deve retornar undefined se o valor for vazio", () => {
    expect(isCpfCnpj({ value: "" })).toBeUndefined();
  });

  it("Deve retornar um erro se o CPF ou CNPJ for inválido", () => {
    expect(() => isCpfCnpj({ value: "76868644800" })).toThrow();
    expect(() => isCpfCnpj({ value: "768.686.448-00" })).toThrow();
    expect(() => isCpfCnpj({ value: "07081093000176" })).toThrow();
    expect(() => isCpfCnpj({ value: "07.081.093/0001-76" })).toThrow();
  });

  it("Deve retornar um erro se todos os dígitos forem iguais", () => {
    expect(() => isCpfCnpj({ value: "768.686.448-00" })).toThrow();
    expect(() => isCpfCnpj({ value: "111.111.111-11" })).toThrow();
    expect(() => isCpfCnpj({ value: "11111111111111" })).toThrow();
    expect(() => isCpfCnpj({ value: "11.111.111/1111-11" })).toThrow();
  });

  it("Deve retornar um erro se o CPF não tíver 11 dígitos", () => {
    expect(() => isCpfCnpj({ value: "768686448091" })).toThrow();
    expect(() => isCpfCnpj({ value: "768.686.448-091" })).toThrow();
    expect(() => isCpfCnpj({ value: "070810930001751" })).toThrow();
    expect(() => isCpfCnpj({ value: "07.081.093/0001-751" })).toThrow();
  });

  it("Deve retornar um erro se o segundo dígito verificador for inválido", () => {
    expect(() => isCpfCnpj({ value: "12345678912" })).toThrow();
    expect(() => isCpfCnpj({ value: "123.456.789-12" })).toThrow();
    expect(() => isCpfCnpj({ value: "07081092000174" })).toThrow();
    expect(() => isCpfCnpj({ value: "07.081.092/0001-74" })).toThrow();
  });
});
