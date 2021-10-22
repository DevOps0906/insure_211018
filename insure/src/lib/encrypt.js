const { createCipheriv, createHash } = require("crypto");
const makeHashValue = (value) => {
  const hash = createHash("sha256");
  const input = value;
  const encrpytedInput = hash.update(input).digest("base64");
  console.log(encrpytedInput);
  return encrpytedInput;
};

const makeAES = (plainText) => {
  //https://nodejs.org/api/crypto.html
  //AES_CBC_PKCS5PADDING/256 방식의 알고리즘을 통해
  //방식으로 암호화 결과를 출력 / 리턴할것
  //hint createCipheriv <-- 알고리즘을 지정
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  makeAES,
  makeHashValue,
};
