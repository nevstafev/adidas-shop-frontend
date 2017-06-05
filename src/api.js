const basicUrl = 'https://erodionov-adidas-fake-api.now.sh';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const { status, body } = response;
  const error = {
    status,
    body,
  };

  throw error;
}

const request = (method, resource, headers, body = null) =>
  fetch(basicUrl + resource, {
    method,
    body,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(checkStatus);

export function get(resource, headers) {
  return request('GET', resource, headers);
}

export function post(resource, body, headers) {
  return request('POST', resource, headers, JSON.stringify(body));
}

export function put(resource, body, headers) {
  return request('PUT', resource, headers, JSON.stringify(body));
}
