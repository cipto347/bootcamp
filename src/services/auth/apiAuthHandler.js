import Cookies from "js-cookie";

function handleAuthResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    console.log(data);
    if (!response.ok) {
      if ([401, 403].includes(response.status)) {
        alert("authorization error");
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    Cookies.set("token", String(data.data.accessToken), {
      expires: 1,
    });
    Cookies.set("refreshToken", String(data.data.refreshToken), {
      expires: 1,
    });
    return data;
  });
}

function getToken(url, formData, method, customHeader) {
  const urlReq = import.meta.env.VITE_KOMPLEKKU_URL + url;
  const formBody = {
    email: formData.username,
    password: formData.password,
  };
  const requestOptions = {
    method,
    headers: customHeader || {
      "Content-Type": "application/json",
      authorization: `Basic ${import.meta.env.VITE_BASIC_AUTH}`,
    },
    body: JSON.stringify(formBody),
  };
  return fetch(urlReq, requestOptions).then(handleAuthResponse);
}

export default getToken;
