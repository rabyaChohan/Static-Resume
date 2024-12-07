function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        if (section.style.display === 'none' || section.style.display === '') {
            section.style.display = 'block';
        }
        else {
            section.style.display = 'none';
        }
    }
}
// Event listeners for buttons
var personalInfoButton = document.getElementById('toggle-personal-info');
var educationButton = document.getElementById('toggle-education');
var skillsButton = document.getElementById('toggle-skills');
var workExperienceButton = document.getElementById('toggle-work-experience');
personalInfoButton === null || personalInfoButton === void 0 ? void 0 : personalInfoButton.addEventListener('click', function () { return toggleSection('personal-info'); });
educationButton === null || educationButton === void 0 ? void 0 : educationButton.addEventListener('click', function () { return toggleSection('education'); });
skillsButton === null || skillsButton === void 0 ? void 0 : skillsButton.addEventListener('click', function () { return toggleSection('skills'); });
workExperienceButton === null || workExperienceButton === void 0 ? void 0 : workExperienceButton.addEventListener('click', function () { return toggleSection('work-experience'); });
