// eslint-disable-next-line no-undef
const config = require("../config");

//Test 1 - Status code
test("Test should show 200 OK", async () => {
  let actualStatus;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/5`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    actualStatus = response.status;
  } catch (error) {
    console.error(error);
  }
  expect(actualStatus).toBe(200);
});

//Test 2 -  show whether the request response with true
test('Test should show response body "ok:true"', async () => {
  let deleteResponse;
  let actualDeleteResponse;
  try {
    deleteResponse = await fetch(`${config.API_URL}/api/v1/kits/7`, {
      method: "DELETE",
    });
    actualDeleteResponse = await deleteResponse.json();
  } catch (error) {
    console.error(error);
  }
  expect(actualDeleteResponse).toEqual({ ok: true });
});
