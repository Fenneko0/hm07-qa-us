// eslint-disable-next-line no-undef
const config = require("../config");

const requestBody = {
  products: [
    { id: 5, quantity: 1 },
    { id: 4, quantity: 5 },
  ],
};

// Test 1 - Status code
test("status should be 200", async () => {
  let actualStatus;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    actualStatus = response.status; // Set the status from the response here
    console.log("Response Status:", actualStatus); // Log actualStatus
  } catch (error) {
    console.error(error);
  }
  expect(actualStatus).toBe(200); // This will now work correctly
});

// Testing the presence of specific product accross all stores
test("Test Product", async () => {
  let testProduct;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();
    console.log("Response Data:", data); // Log the entire response

    // Verify specific product across all stores
    const queriedProduct = "Sprite Soft Drink";
    const storeNames = Object.keys(data); // Ensure this matches the response structure
    for (const store of storeNames) {
      console.log(`Checking store: ${store}`);
      const products = data[store];
      console.log(`Products in store ${store}:`, products);


    }
  } catch (error) {
    console.error("Fetch Error:", error);
  }
});
