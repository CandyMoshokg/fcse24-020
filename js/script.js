 function openModal(imageSrc, title, price) {
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalPrice').textContent = price;
    document.getElementById('imageModal').style.display = 'flex';
  }

  function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
  }




  document.addEventListener('DOMContentLoaded', function() {
    
    const orderForm = document.getElementById('orderForm');
    const signupForm = document.getElementById('signupForm');
    
    
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            
            const firstName = document.getElementById('fullname').value.trim();
            const lastName = document.getElementById('lastname').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            
           
            if (!firstName || !lastName) {
                alert('Please enter your full name');
                return;
            }
            
            if (!validateEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            if (password.length < 6) {
                alert('Password must be at least 6 characters');
                return;
            }
            
            
            window.location.href = 'thanks.html';
        });
    }
    
  
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            
            const fullName = document.getElementById('signupFullname').value.trim();
            const password = document.getElementById('signupPassword').value.trim();
            const email = document.getElementById('signupEmail').value.trim();
            
            
            if (!fullName) {
                alert('Please enter your full name');
                return;
            }
            
            if (!validateEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            if (password.length < 6) {
                alert('Password must be at least 6 characters');
                return;
            }
            
            
            alert('Signup successful! You can now place your order.');
            
        });
    }
    
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});









function performSearch() {
  const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
  
  
  const pageMap = {
    'home': 'index.html',
    'shoes': 'shoes.html',
    'males': 'males.html',
    'dresses': 'dresses.html'
  };
  
  
  if (pageMap[searchTerm]) {
    window.location.href = pageMap[searchTerm];
  } else {
    alert("No matching page found for: " + searchTerm);
    
    
  }
}


document.getElementById('searchInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    performSearch();
  }
});









function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  MailApp.sendEmail("candymoshokgo2@gmail.com", "New Form Submission", JSON.stringify(data));
  return ContentService.createTextOutput("Success");
}
