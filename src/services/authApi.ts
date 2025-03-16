
// Function to handle user logout
export const logout = () => {
    // Remove the access token from localStorage
    localStorage.removeItem('access_token');

    // Delete the refresh token cookie
    document.cookie = 'refresh_token=; path=/; secure; HttpOnly; SameSite=Strict; expires=Thu, 01 Jan 1970 00:00:00 GMT';

};


const baseUrl = import.meta.env.VITE_API_URL;

export const login = async (email: string, password: string) => {
    try {
        // Send login request to the backend
        console.log(email, password);
        console.log(baseUrl);

        // Prepare the request payload
        const payload = {
            email,
            password,
        };

        const response = await fetch(`${baseUrl}/auth/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        const data = await response.json();

        console.log("donner", data)

        // Check if the response is successful (status 200-299)
        if (data.success == false) {
            return false
        }

        // Parse the response JSON

        const accessToken = data.data.access;
        localStorage.setItem('access_token', accessToken);


        // Set the refresh token as an HttpOnly cookie
        const refreshToken = data.data.refresh;
        document.cookie = `refresh_token=${refreshToken}; path=/; secure; HttpOnly; SameSite=Strict`;

        return true;





    } catch (error) {
        console.error('Login error:', error);
        // Handle error (e.g., show an error message to the user)
        return false;
    }
};

