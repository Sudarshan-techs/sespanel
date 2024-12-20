// script.js
const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');
const loginError = document.getElementById('login-error');
const attendancePanel = document.getElementById('attendance-panel');
const invoicePanel = document.getElementById('invoice-panel');
const accountsPanel = document.getElementById('accounts-panel');
const attendanceForm = document.getElementById('attendance-form');
const invoiceForm = document.getElementById('invoice-form');
const attendanceCalendar = document.getElementById('attendance-calendar');
const invoiceList = document.getElementById('invoice-list');
const accountsList = document.getElementById('accounts-list');

const users = {
  'admin.ses': '123456',
  'shiva': '123456',
  'sudarshan': '123456',
  'indrakumar': '123456',
};

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (users[username] === password) {
    loginError.textContent = '';
    attendancePanel.style.display = 'block';
    invoicePanel.style.display = 'block';
    accountsPanel.style.display = 'block';
  } else {
    loginError.textContent = 'Invalid username or password';
  }
});

attendanceForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const reason = document.getElementById('reason').value;
  const attendanceHTML = `
    <div>
      <h3>${date}</h3>
      <p>Time: ${time}</p>
      <p>Reason: ${reason}</p>
    </div>
  `;
  attendanceCalendar.innerHTML += attendanceHTML;
});

invoiceForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const invoiceDate = document.getElementById('invoice-date').value;
  const invoiceAmount = document.getElementById('invoice-amount').value;
  const invoiceHTML = `
    <div>
      <h3>${invoiceDate}</h3>
      <p>Amount: ${invoiceAmount}</p>
    </div>
  `;
  invoiceList.innerHTML += invoiceHTML;
});

// Add some dummy data to the accounts list
const accountsHTML = `
  <div>
    <h3>Account 1</h3>
    <p>Balance: $1000</p>
  </div>
  <div>
    <h3>Account 2</h3>
    <p>Balance: $500</p>
  </div>
`;
accountsList.innerHTML = accountsHTML;

// Add event listeners to the navigation links
document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const panelId = link.getAttribute('href').replace('#', '');
    const panel = document.getElementById(`${panelId}-panel`);
    document.querySelectorAll('.panel').forEach((p) => {
      p.style.display = 'none';
    });
    panel.style.display = 'block';
  });
});
