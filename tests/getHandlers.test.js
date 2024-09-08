// eslint-disable-next-line no-undef
const config = require("../config");

// Test 1 - Status code
test("status should be 200", async () => {
  let actualStatus;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
    actualStatus = response.status;
  } catch (error) {
    console.error(error);
  }
  // Check code status
  expect(actualStatus).toBe(200);
  console.log(actualStatus);
});

// Test 2 - check that the response body contains the expected data
test("Name of warehouse is in array", async () => {
  let warehouseName;
  try {
    //making a request
    const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
    warehouseName = await response.json();
    console.log(warehouseName);
  } catch (error) {
    console.error(error);
  }
  const objectFromArray = warehouseName[0];
  const nameOfObject = objectFromArray.name;
  expect(nameOfObject).toContain("Everything You Need");
});
