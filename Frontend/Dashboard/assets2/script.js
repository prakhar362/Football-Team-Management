 // dashboard.js
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('https://football-team-management-two.vercel.app/api/user/profile', {
            method: 'GET',
            credentials: 'include', // Include cookies if needed
        });

        if (response.ok) {
            const data = await response.json();
            // Update the dashboard with user data
            document.getElementById('userName').innerText = data.username;
        } else {
            // Handle errors
            console.error('Error fetching user data:', await response.text());
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

 
 var tl=gsap.timeline();
tl.from("a",{
    y:-30,
    opacity:0,
    duration:1,
    stagger:0.2
})
