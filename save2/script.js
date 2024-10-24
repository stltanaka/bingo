// Example: AWS Lambda function
exports.handler = async (event) => {
    // Generate a simple session token (e.g., a random string)
    const sessionToken = Math.random().toString(36).substring(2, 15);

    // You could store session data in memory or a database, but here we just return it
    return {
        statusCode: 200,
        body: JSON.stringify({ sessionToken }),
    };
};

async function fetchData() {
    const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${window.sessionToken}`, // Using the session token
        },
    });

    const data = await response.json();
    console.log(data);
}
