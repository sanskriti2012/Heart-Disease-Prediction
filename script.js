document.getElementById('heart-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the values from the form
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const bp = document.getElementById('bp').value;
    const cholesterol = document.getElementById('cholesterol').value;
    const ekg = document.getElementById('ekg').value;
    const st_slope = document.getElementById('st_slope').value;

    // Mock prediction output for now
    const prediction = Math.random() > 0.5 ? "Presence" : "Absence";

    // Display the result
    document.getElementById('output').innerText = `Prediction: Heart Disease ${prediction}`;
});
