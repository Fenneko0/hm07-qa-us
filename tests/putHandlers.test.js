// eslint-disable-next-line no-undef
const config = require("../config");

const requestBody = {
  price: 175,
};

// Test 1 - Status code
test("Check Status code", async () => {
  let actualStatus;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/products/2`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    actualStatus = response.status;
    expect(actualStatus).toBe(200);
    console.log(actualStatus);
  } catch (error) {
    console.error(error);
  }
});

// Test 2 - Checking grocery item price change
test("Response body should be actualy true", async () => {
  let actualResponseBody;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/products/2`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    actualResponseBody = await response.json();
  } catch (error) {
    console.error(error);
  }
  expect(actualResponseBody).toEqual({ ok: true });
  console.log(actualResponseBody);
});
