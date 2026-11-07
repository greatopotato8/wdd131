const today = new Date();

const formattedDate = today.toLocaleDateString();

document.getElementById('dateDisplay').textContent = formattedDate;