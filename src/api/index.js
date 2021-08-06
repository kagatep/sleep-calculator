const mockSuccess = {
  statusCode: 200,
  description: 'OK',
};

const mockFailure = {
  statusCode: 400,
  description: 'Bad Request',
};

// This endpoint doesn't exist at the moment so we are mocking it for now
export const postScore = (score) =>
  fetch('/save', {
    method: 'post',
    body: JSON.stringify({ score }),
  }).then(function (res) {
    //return res.json();

    return mockSuccess;
  });
