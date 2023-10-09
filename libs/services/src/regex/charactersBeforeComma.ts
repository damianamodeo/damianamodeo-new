export function charactersBeforeComma(inputString: string) {
  const regexPattern = /^([^,]+),/;

  const match: RegExpMatchArray | string =
    inputString.match(regexPattern) || inputString;

  return match[1];
}

export default charactersBeforeComma;
