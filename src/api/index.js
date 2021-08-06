const mockSuccess = {
  statusCode: 200,
  description: 'OK',
};

const mockFailure = {
  statusCode: 400,
  description: 'Bad Request',
};

export const postScore = async (score) =>
  fetch('/save', {
    method: 'post',
    body: JSON.stringify({ score }),
  }).then(function (res) {
    //return res.json();
    // Mocking success for now
    return mockSuccess;
  });
