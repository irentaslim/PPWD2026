// ========== TYPING EFFECT ==========
const typingText = document.getElementById('typing-text');
const names = ['Iren Meiliani Taslim', 'Web Developer', 'Mahasiswi'];
let nameIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentName = names[nameIndex];

  if (isDeleting) {
    typingText.textContent = currentName.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentName.substring(0, charIndex + 1);
    charIndex++;
  }

  // Delay
  let delay = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentName.length) {
    delay = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    nameIndex = (nameIndex + 1) % names.length;
    delay = 500;
  }

  setTimeout(typeEffect, delay);
}

// Start typing effect
typeEffect();

// ========== GENERATE PROJECT CARDS ==========
const projects = [
  {
    title: 'Website Profil',
    desc: 'Website profil pribadi dengan HTML & CSS',
    image: 'https://via.placeholder.com/300x200/2563eb/fff?text=Profil'
  },
  {
    title: 'Kalkulator',
    desc: 'Kalkulator interaktif dengan JavaScript',
    image: 'https://via.placeholder.com/300x200/2563eb/fff?text=Kalkulator'
  },
  {
    title: 'Form Pendaftaran',
    desc: 'Form interaktif dengan validasi',
    image: 'https://via.placeholder.com/300x200/2563eb/fff?text=Form'
  }
];

const projectGrid = document.getElementById('project-grid');

projects.forEach(project => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h3>${project.title}</h3>
    <p>${project.desc}</p>
  `;

  // Click event
  card.addEventListener('click', function () {
    alert(`Anda memilih proyek: ${project.title}`);
  });

  projectGrid.appendChild(card);
});

// ========== SMOOTH SCROLL NAV ==========
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    // Hanya untuk anchor links (jika ada)
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// ========== ACTIVE NAV LINK ==========
// Highlight nav based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});