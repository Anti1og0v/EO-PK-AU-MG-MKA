
const videos = [
  {
    id: 1,
    title: "Поздравление от друзей",
    sender: "Группа друзей",
    thumbnail: "media/video1-thumb.jpg", 
    url: "media/video1.mp4",
    duration: "2:45",
  },
  {
    id: 2,
    title: "Видеовизитка от коллег",
    sender: "Коллектив компании",
    thumbnail: "media/video2-thumb.jpg",
    url: "media/video2.mp4",
    duration: "3:20",
  },
  {
    id: 3,
    title: "Сюрприз-челлендж",
    sender: "Близкие",
    thumbnail: "media/video3-thumb.jpg",
    url: "media/video3.mp4",
    duration: "1:55",
  },
  {
    id: 4,
    title: "Веселые моменты",
    sender: "Семья",
    thumbnail: "media/video4-thumb.jpg",
    url: "media/first.mp4",
    duration: "4:10",
  },
];

const messages = [
  {
    sender: "Лучший друг",
    text: "С 25-летием, брат! Это только начало! Желаю тебе здоровья, успеха и ещё больше приключений! 🎂",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    sender: "Коллега по работе",
    text: "Поздравляю с днём рождения! Спасибо за то, что ты часть нашей команды. Удачи во всех начинаниях!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
  },
  {
    sender: "Старый друг",
    text: "25 лет - это возраст мудрости и опыта! Желаю, чтобы каждый день был полон радости и новых открытий 🎉",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
  },
  {
    sender: "Сестра",
    text: "Мой любимый брат! Мы гордимся тобой! Желаю исполнения всех мечт и целей. С днём рождения! ❤️",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    sender: "Наставник",
    text: "Поздравляю с достижением! 25 лет - это отличный возраст для больших свершений. Впереди ещё столько всего интересного!",
    avatar: "https://images.unsplash.com/photo-1517841905240-8ee364f8f9d1?w=150&h=150&fit=crop",
  },
  {
    sender: "Близкий друг",
    text: "Помню тебя маленьким, а теперь уже 25! Время летит! Желаю всегда оставаться молодым душой! 🚀",
    avatar: "https://images.unsplash.com/photo-1507009997919-a66c7a9b5e39?w=150&h=150&fit=crop",
  },
  {
    sender: "Коллега Игорь",
    text: "25 лет - идеальный возраст для новых проектов! Давай покорять новые вершины вместе! 💪",
    avatar: "https://images.unsplash.com/photo-1500595046891-b0b81e82b4d0?w=150&h=150&fit=crop",
  },
  {
    sender: "Мама",
    text: "Мой любимый сын! Так гордо на тебя смотреть. Здоровья, счастья и любви! Целую! 💕",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop",
  },
  {
    sender: "Папа",
    text: "Сын, ты уже мужчина! Гордимся твоими достижениями. Удачи на жизненном пути! 👨‍👦",
    avatar: "https://images.unsplash.com/photo-1516191066948-7d938d60005f?w=150&h=150&fit=crop",
  },
  {
    sender: "Учитель",
    text: "Помню тебя целеустремленным и талантливым! Желаю воплотить все свои мечты в жизнь! 📚",
    avatar: "https://images.unsplash.com/photo-1507038957343-583b312f0ba2?w=150&h=150&fit=crop",
  },
  {
    sender: "Бизнес-партнёр",
    text: "25 лет - возраст предпринимателей! Давай создавать историю успеха вместе! 📈",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    sender: "Сосед Вячеслав",
    text: "С днём рождения! Помню, как ты был маленький, а теперь вот уже 25! Быстро летит время! 🎊",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
  },
  {
    sender: "Подруга Катя",
    text: "Поздравляю красавца! 25 лет - это только начало! Впереди самое интересное! 💃",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    sender: "Тренер по спорту",
    text: "За 25 лет ты показал волю и упорство! Продолжай идти вперёд! Чемпион! 🏆",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
  },
  {
    sender: "Бабушка",
    text: "Мой внучок! Желаю тебе долгих лет, здоровья, счастья и любви! Обнимаю! 🤗",
    avatar: "https://images.unsplash.com/photo-1517841905240-8ee364f8f9d1?w=150&h=150&fit=crop",
  },
  {
    sender: "Дедушка",
    text: "Внук, ты стал взрослым! Живи достойно, честно и храбро! Горжусь тобой! 🎖️",
    avatar: "https://images.unsplash.com/photo-1507009997919-a66c7a9b5e39?w=150&h=150&fit=crop",
  },
  {
    sender: "Мой друг Денис",
    text: "С 25-летием, бро! Помню наши приключения в детстве. Вперёд к новым! 🎈",
    avatar: "https://images.unsplash.com/photo-1500595046891-b0b81e82b4d0?w=150&h=150&fit=crop",
  },
  {
    sender: "Художник Петр",
    text: "25 лет - отличный возраст для творчества! Воплощай свои идеи в жизнь! 🎨",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop",
  },
  {
    sender: "Врач Ольга",
    text: "Поздравляю! Помни о здоровье - оно важнее всего! Будь здоров! 🏥",
    avatar: "https://images.unsplash.com/photo-1516191066948-7d938d60005f?w=150&h=150&fit=crop",
  },
  {
    sender: "Путешественник Макс",
    text: "25 лет - возраст путешествий и открытий! Давай исследовать мир вместе! ✈️",
    avatar: "https://images.unsplash.com/photo-1507038957343-583b312f0ba2?w=150&h=150&fit=crop",
  },
];

const facts = [
  "25 лет - это твой личный рубеж четверти века: уже много пройдено, но впереди ещё больше",
  "Это идеальный возраст для старта самых смелых проектов",
  "К этому моменту уже есть опыт, но дерзости всё ещё больше, чем осторожности",
  "Исследования показывают, что в 25 лет человек близок к пику физических возможностей",
  "Это возраст, когда сочетаются энергия молодости и первая настоящая мудрость",
];

// State
let currentVideoIndex = 0;
let isMusicPlaying = false;

// Intersection Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Init
document.addEventListener("DOMContentLoaded", () => {
  renderVideoGallery();
  renderMessages();
  renderFacts();
  createParticles();
  createConfetti();
  createBalloons();
  setupScrollAnimations();
});

function setupScrollAnimations() {
  const allElements = document.querySelectorAll(
    ".video-card, .message-card, .fact-item, .section-title"
  );

  allElements.forEach((el, index) => {
    el.classList.add("scroll-animate");
    el.style.setProperty("--delay", `${index * 0.1}s`);
    observer.observe(el);
  });
}

function renderVideoGallery() {
  const videoGrid = document.getElementById("videoGrid");
  videoGrid.innerHTML = videos
    .map(
      (video, index) => `
      <div class="video-card" onclick="openModal(${index})">
        <div class="video-thumbnail">
          <img src="${video.thumbnail}" alt="${video.title}">
          <div class="play-overlay"></div>
        </div>
        <div class="video-info">
          <h3 class="video-title">${video.title}</h3>
          <p class="video-sender">От: ${video.sender}</p>
          <p class="video-duration">⏱ ${video.duration}</p>
        </div>
      </div>
    `
    )
    .join("");
}

function renderMessages() {
  const messagesContainer = document.getElementById("messagesContainer");
  messagesContainer.innerHTML = messages
    .map(
      (message) => `
      <div class="message-card">
        <img src="${message.avatar}" alt="${message.sender}" class="message-avatar">
        <p class="message-text">${message.text}</p>
        <p class="message-sender">— ${message.sender}</p>
      </div>
    `
    )
    .join("");
}

function renderFacts() {
  const factsContainer = document.getElementById("factsContainer");
  factsContainer.innerHTML = facts
    .map((fact) => `<div class="fact-item">${fact}</div>`)
    .join("");
}

function openModal(index) {
  currentVideoIndex = index;
  const video = videos[index];
  const modal = document.getElementById("videoModal");
  const videoPlayer = document.getElementById("videoPlayer");
  const modalTitle = document.getElementById("modalTitle");
  const modalSender = document.getElementById("modalSender");

  videoPlayer.innerHTML = `
    <video src="${video.url}" controls autoplay playsinline style="width:100%;height:100%;display:block;border:0;border-radius:12px;"></video>
  `;

  modalTitle.textContent = video.title;
  modalSender.textContent = `От: ${video.sender}`;
  modal.classList.add("active");
  updateNavButtons();
}

function closeModal() {
  const modal = document.getElementById("videoModal");
  const videoPlayer = document.getElementById("videoPlayer");
  videoPlayer.innerHTML = "";
  modal.classList.remove("active");
}

function navigateVideo(direction) {
  currentVideoIndex += direction;
  if (currentVideoIndex >= 0 && currentVideoIndex < videos.length) {
    openModal(currentVideoIndex);
  }
}

function updateNavButtons() {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  prevBtn.disabled = currentVideoIndex === 0;
  nextBtn.disabled = currentVideoIndex === videos.length - 1;
}

document.getElementById("videoModal").addEventListener("click", (e) => {
  if (e.target.id === "videoModal") {
    closeModal();
  }
});


function shareMessage() {
  const url = window.location.href;
  if (navigator.share) {
    navigator.share({
      title: "С 25-летием!",
      text: "Присоединяйся к празднованию 25-летия!",
      url,
    });
  } else {
    navigator.clipboard?.writeText(url);
    alert("Ссылка скопирована в буфер обмена!");
  }
}

function createParticles() {
  const particlesContainer = document.getElementById("particles");
  const colors = ["#00f7ff", "#b966ff", "#ff6ec7", "#ff8c42"];

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    particle.style.animationDelay = Math.random() * 20 + "s";
    particle.style.animationDuration = Math.random() * 10 + 10 + "s";
    particlesContainer.appendChild(particle);
  }
}

function createConfetti() {
  const hero = document.getElementById("hero");
  const colors = ["#00f7ff", "#b966ff", "#ff6ec7", "#ff8c42"];

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.top = "-10px";
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = Math.random() * 3 + "s";
    confetti.style.animationDuration = Math.random() * 2 + 2 + "s";
    hero.appendChild(confetti);
  }
}

function createBalloons() {
  const balloonsContainer = document.getElementById("balloonsContainer");
  const colors = ["#00f7ff", "#b966ff", "#ff6ec7", "#ff8c42", "#ffeb3b"];

  setInterval(() => {
    const balloon = document.createElement("div");
    balloon.className = "balloon";
    const color = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.left = Math.random() * 100 + "%";
    balloon.style.background = color;

    const duration = Math.random() * 5 + 10;
    balloon.style.setProperty("--duration", `${duration}s`);
    balloon.style.animationDuration = `${duration}s`;
    balloon.style.boxShadow = `0 0 20px ${color}`;
    balloon.dataset.popped = "false";

    balloon.addEventListener("click", (e) => {
      if (balloon.dataset.popped === "true") return;
      balloon.dataset.popped = "true";
      e.stopPropagation();

      balloon.style.animation = "none";
      balloon.style.opacity = "0";
      balloon.style.transform = "scale(0)";
      balloon.style.transition = "all 0.2s ease";

      setTimeout(() => {
        if (balloon.parentNode) balloon.remove();
      }, 200);
    });

    balloonsContainer.appendChild(balloon);

    setTimeout(() => {
      if (balloon.parentNode && balloon.dataset.popped === "false") {
        balloon.style.opacity = "0";
        balloon.style.transition = "opacity 0.3s ease";
        setTimeout(() => {
          if (balloon.parentNode) balloon.remove();
        }, 300);
      }
    }, duration * 1000 + 500);
  }, 2500);
}

document.addEventListener("keydown", (e) => {
  const modal = document.getElementById("videoModal");
  if (!modal.classList.contains("active")) return;

  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowLeft" && currentVideoIndex > 0) navigateVideo(-1);
  if (e.key === "ArrowRight" && currentVideoIndex < videos.length - 1) navigateVideo(1);
});
