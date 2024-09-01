
document.querySelector('input[type="file"]').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const photoPreview = document.querySelector('.photo-preview');

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            
            photoPreview.innerHTML = '';
            
            photoPreview.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});

const show_art=()=>{
    const plan5Radio = document.getElementById('plan5');
        const daysLabel = document.getElementById('days');
        if (plan5Radio.checked) 
        {
            daysLabel.style.display = 'block';
        } 
        if (!plan5Radio.checked) {
            daysLabel.style.display = 'none';
        }
        }


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[name="plan"]').forEach(radio => {
        radio.addEventListener('change', show_art);
    });
    show_art();
});

// Function to calculate age from birthdate
const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
};

document.getElementById('birthdate').addEventListener('input', (event) => {
    const birthdate = event.target.value;
    if (birthdate) {
        const age = calculateAge(birthdate);
        console.log(`Age: ${age}`);
    }
});
