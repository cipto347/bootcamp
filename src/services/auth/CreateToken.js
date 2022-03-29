function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      if ([403].includes(response.status)) {
        alert("submit fail");
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}

export function createToken(url, form, method, body, formData) {
  const urlReq = process.env.REACT_APP_KOMPLEKKU_URL + url;
  let bodyData = null;
  let header = null;
  if (formData === true) {
    bodyData = new FormData();
    Object.keys(body).forEach((key) => {
      if (body[key]) bodyData.append(key, body[key]);
    });
    header = {
      authorization: `Basic ${process.env.REACT_APP_BASIC_AUTH}`,
    };
  } else {
    header = {
      "Content-Type": "application/json",
      authorization: `Basic ${process.env.REACT_APP_BASIC_AUTH}`,
    };
  }
  const requestOptions = {
    method,
    headers: header,
    body: formData === true ? bodyData : JSON.stringify(body),
  };

  return fetch(urlReq, requestOptions).then(handleResponse);
}

export default createToken;
