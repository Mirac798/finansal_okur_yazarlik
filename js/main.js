function showRegistrationForm() {
    document.getElementById('registrationModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeRegistrationForm() {
    document.getElementById('registrationModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function handleRegistration(event) {
    event.preventDefault();
    alert('Tebrikler! Kayıt başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.\n\nE-posta adresinize detaylı bilgi gönderilecektir.');
    closeRegistrationForm();
    document.getElementById('registrationForm').reset();
}

// Modal dışına tıklanınca kapat
document.getElementById('registrationModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeRegistrationForm();
    }
});