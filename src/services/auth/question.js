import axios from "axios";

const { env } = process;

let Token;

const getQuestion = () => {
  if (Token) Token.cancel();

  Token = axios.Token.source();

  return new Promise((resolve, reject) => {
    axios
      .get(
        `${env.VITE_BASE_URL}/v1/pub/smart-survey/62848875b15aba004d9954af`,
        {
          auth: {
            username: env.APP_USER,
            password: env.APP_PASSWORD,
          },
          Token: Token.token,
        }
      )
      .then((result) => {
        resolve(result.data.data);
      })
      .catch((error) => {
        reject(error || "Network error.");
      });
  });
};

export default getQuestion;
