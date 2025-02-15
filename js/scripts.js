function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    document.querySelectorAll('.nav-btn').forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`.nav-btn[onclick="showSection('${sectionId}')"]`).classList.add('active');
}