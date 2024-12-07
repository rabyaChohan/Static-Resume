function toggleSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
        if (section.style.display === 'none' || section.style.display === '') {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    }
}

// Event listeners for buttons
const personalInfoButton = document.getElementById('toggle-personal-info');
const educationButton = document.getElementById('toggle-education');
const skillsButton = document.getElementById('toggle-skills');
const workExperienceButton = document.getElementById('toggle-work-experience');

personalInfoButton?.addEventListener('click', () => toggleSection('personal-info'));
educationButton?.addEventListener('click', () => toggleSection('education'));
skillsButton?.addEventListener('click', () => toggleSection('skills'));
workExperienceButton?.addEventListener('click', () => toggleSection('work-experience'));