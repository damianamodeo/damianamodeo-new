export const charactersAfterFirstComma = (inputString: string) => {
  const match: RegExpMatchArray | string =
    inputString.match(/[^,]+,(.*)/) || inputString;

  return match[1];
};

export default charactersAfterFirstComma;
