🔐 Signature Generator for Secure API Requests
==============================================

This Node.js script generates an **HMAC SHA-256 signature** with a **timestamp** to securely authenticate API requests.

* * * * *

🚀 Features
-----------

-   Generates a secure HMAC SHA-256 signature using a **client secret**.
-   Includes a **timestamp** to prevent replay attacks.
-   Designed to verify requests on the backend for added security.

* * * * *

📦 Installation
---------------

1.  Clone the repository:

    ```
    git clone https://github.com/charlespalmerbf/node-signature-test.git
    cd node-signature-test
    ```

3.  Install dependencies:

    ```
    npm install
    ```

5.  Create a `.env` file in the root folder and add your client secret:

    ```
    META_CLIENT_SECRET=XYZ
    ```

* * * * *

⚙️ Usage
--------

Run the script with Node.js:

```
node generateSignature.js
```

Upon success, you should see:

```
Generated Signature: [your_generated_signature]
Timestamp: 2025-03-11T10:00:00Z
Payload: {"data":{"event_name":"TestEvent","custom_data":{"value":123,"currency":"BLAHBLAH"}},"timestamp":"2025-03-11T10:00:00Z"}
```

* * * * *

🔎 How It Works
---------------

1.  The script takes a sample JSON payload.
2.  It appends the **current timestamp** to the payload.
3.  The payload is hashed with **HMAC SHA-256** using the `META_CLIENT_SECRET` from your `.env` file.
4.  The resulting **signature** is displayed alongside the payload and timestamp.

* * * * *

🧪 Testing in Postman
---------------------

1.  Copy the generated **signature** and **timestamp**.

2.  In Postman, set:

    -   **Method:** `POST`
    -   **Headers:**

        ```
        Content-Type: application/json
        X-Signature: [PASTE GENERATED SIGNATURE]
        ```

    -   **Body (JSON):**

        ```
        {
          "data": {
            "event_name": "TestEvent",
            "custom_data": {
              "value": 123,
              "currency": "BLAHBLAH"
            }
          },
          "timestamp": "[PASTE GENERATED TIMESTAMP]"
        }
        ```

3.  Send the request to your endpoint.

* * * * *

❗ Important Notes
-----------------

-   Ensure `.env` is included in your `.gitignore` to keep your **client secret** secure.
-   The timestamp helps prevent replay attacks by expiring old requests.
-   For best results, ensure your server also verifies the signature and timestamp.
