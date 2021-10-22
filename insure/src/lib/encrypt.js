const { createCipheriv, createHash } = require("crypto");
const makeHashValue = () => {
  const hash = createHash("sha256");
  const input = "testvalue";
  const encrpytedInput = hash.update(input).digest("base64");
  console.log(encrpytedInput);
};

const makeAES = (plainText) => {
  //https://nodejs.org/api/crypto.html
  //AES_CBC_PKCS5PADDING/256 방식의 알고리즘을 통해
  //방식으로 암호화 결과를 출력 / 리턴할것
  //hint createCipheriv <-- 알고리즘을 지정
};
