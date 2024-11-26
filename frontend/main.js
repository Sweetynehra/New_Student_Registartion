
  document.getElementById('registration-form').addEventListener('submit', async function(e) {
    e.preventDefault();


    const formData = new FormData(this);
    const studentData = {};

    formData.forEach((value, key) => {
        studentData[key] = value;
    });

    try {
        const response = await fetch('http://localhost:3000/api/students/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(studentData),
        });

        const result = await response.text();
        alert(result);

        // Clear all form fields after successful registration
        this.reset();

    } catch (error) {
        alert('Error: ' + error);
    }
});
