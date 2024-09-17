
// وظيفة لعرض بيانات المستخدمين في الجدول
function displayUsers() {
    const tableBody = document.querySelector('#usersTable tbody');
    
    // قراءة بيانات المستخدمين من التخزين المحلي
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // مسح المحتوى الحالي
    tableBody.innerHTML = '';

    // إضافة بيانات المستخدمين إلى الجدول
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.email}</td>
            <td>${user.password}</td>
        `;
        tableBody.appendChild(row);
    });
}

// تنفيذ وظيفة العرض عند تحميل الصفحة
window.onload = displayUsers;
