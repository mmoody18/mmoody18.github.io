document.getElementById('introForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const form = e.target;
    const result = document.getElementById('result');

    // Check for required fields
    if (!form.name.value || !form.mascot.value || !form.image.files.length || !form.imageCaption.value || !form.agreement.checked) {
        alert('Please fill out all required fields and check the agreement.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function () {
        const imageSrc = reader.result;

        let coursesHTML = "";
        document.querySelectorAll('.courseInput').forEach((input, index) => {
            coursesHTML += `<li>${input.value}</li>`;
        });

        result.innerHTML = `
            <h2>Your Introduction Page</h2>
            <p><strong>Name:</strong> ${form.name.value}</p>
            <p><strong>Mascot:</strong> ${form.mascot.value}</p>
            <img src="${imageSrc}" alt="Uploaded Image" style="max-width: 100%; height: auto; display: block; margin: 20px auto; border: 2px solid #cc0000; border-radius: 10px;">
            <caption>${form.imageCaption.value}</caption>
            <p><strong>Personal Background:</strong> ${form.personalBackground.value}</p>
            <p><strong>Professional Background:</strong> ${form.professionalBackground.value}</p>
            <p><strong>Academic Background:</strong> ${form.academicBackground.value}</p>
            <p><strong>Web Dev Background:</strong> ${form.webDevBackground.value}</p>
            <p><strong>Primary Platform:</strong> ${form.platform.value}</p>
            <p><strong>Courses:</strong></p>
            <ul>${coursesHTML}</ul>
            <p><strong>Funny Thing:</strong> ${form.funnyThing.value}</p>
            <p><strong>Anything Else:</strong> ${form.anythingElse.value}</p>
            <br><a href="" onclick="location.reload()">Reset and Try Again</a>
        `;

        form.style.display = 'none';
    };

    reader.readAsDataURL(form.image.files[0]);
});

function addCourse() {
    const list = document.getElementById('coursesList');
    const div = document.createElement('div');
    div.innerHTML = `
        <input type="text" class="courseInput" placeholder="Enter course">
        <button type="button" onclick="this.parentNode.remove()">Delete</button>
    `;
    list.appendChild(div);
}
