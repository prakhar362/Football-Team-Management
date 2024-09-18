// dashboard.js
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('https://football-team-management-rho.vercel.app/api/user/profile', {
            method: 'GET',
            credentials: 'include', // Include cookies if needed
        });

        if (response.ok) {
            const data = await response.json(); // Retrieve JSON data

            // Update the dashboard with user data
            document.getElementById('userName').innerText = data.username;
        } else {
            // Handle errors
            const errorText = await response.text();
            console.error('Error fetching user data:', errorText);
            alert('Failed to load user data: ' + errorText); // Notify user about the error
        }
    } catch (error) {
        console.error('Error:', error); // Log any unexpected errors
        alert('An error occurred while fetching user data. Please try again.'); // Notify user about the error
    }
});


 
 var tl=gsap.timeline();
tl.from("a",{
    y:-30,
    opacity:0,
    duration:1,
    stagger:0.2
})
