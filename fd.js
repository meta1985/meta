document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إرسال النموذج

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    // حفظ بيانات المستخدم في التخزين المحلي
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ email: email, password: password });
    localStorage.setItem('users', JSON.stringify(users));

    messageDiv.textContent = 'حدث خطا!اعد المحاولة';
    messageDiv.style.color = 'red';
    
    // يمكنك إعادة توجيه المستخدم إلى صفحة عرض بيانات المستخدمين إذا كنت ترغب في ذلك
    // window.location.href = 'users.html';
});
