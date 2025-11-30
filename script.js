const messages = [
  {
    sender: "Екатерина Борисенко",
    text: "С 25-летием! Пусть каждый новый день приносит Вам радость, лёгкость и повод искренне улыбаться.",
    avatar: "media/1.jpg",
  },
  {
    sender: "Изнавур Ахмадов",
    text: "Вы уже так много достигли, а это только начало. Желаю Вам смелости в мечтах и сил в их воплощении.",
    avatar: "media/1.jpg",
  },
  {
    sender: "Дмитрий Гонтарев",
    text: "Пусть рядом всегда будут люди, которые ценят Вас, поддерживают и искренне восхищаются Вами.",
    avatar: "media/1.jpg",
  },
  {
    sender: "Александр Антилогов",
    text: "Желаю Вам ярких путешествий, вдохновения и тёплых воспоминаний, которые хочется перечитывать как любимую книгу.",
    avatar: "media/1.jpg",
  },
  {
    sender: "Анна Лебедева",
    text: "Пусть каждое Ваше решение будет смелым, а результат — ещё лучше, чем Вы ожидаете. Вы этого достойны.",
    avatar: "media/1.jpg",
  },
  {
    sender: "Дмитрий Горинов",
    text: "Оставайтесь такой же светлой, сильной и настоящей. Мир становится заметно лучше, когда Вы просто в нём есть.",
    avatar: "media/1.jpg",
  },
  {
    sender: "Илья Гулич",
    text: "Желаю Вам баланса между делами и отдыхом, чтобы жизнь приносила и результат, и удовольствие.",
    avatar: "media/1.jpg",
  },
  {
    sender: "Егор Демидов",
    text: "Пусть у Вас всегда остаётся время на себя, свои мечты и маленькие радости, которые делают день особенным.",
    avatar: "media/1.jpg",
  },
  {
    sender: "Алексей Еремкин",
    text: "Желаю Вам верить в себя на все сто процентов и смело идти туда, где по-настоящему откликается сердце.",
    avatar: "media/1.jpg",
  },
  {
    sender: "Михаил Каждан",
    text: "Пусть рядом будут люди, с которыми можно и молчать, и смеяться до слёз, и быть собой без масок.",
    avatar: "media/1.jpg",
  },
  {
    sender: "Жасур Каумов",
    text: "С 25-летием! Желаю Вам делать выбор в пользу себя, своего комфорта и внутреннего спокойствия.",
    avatar: "media/1.jpg",
  },
  {
    sender: "Алиса Князева",
    text: "Пусть все смелые идеи находят поддержку и превращаются в проекты, которыми Вы будете гордиться.",
    avatar: "media/1.jpg",
  },
  {
    sender: "Айдана Мирбекова",
    text: "Желаю Вам ощущать себя любимой, нужной и важной каждый день, а не только в день рождения.",
    avatar: "media/1.jpg",
  },
  {
    sender: "Анна Нестерова",
    text: "Пусть здоровье не подводит, энергии хватает на всё задуманное, а усталость бывает только приятной.",
    avatar: "media/1.jpg",
  },
  {
    sender: "Тимофей Соколов",
    text: "Желаю Вам дней, после которых хочется сказать: «Вот ради этого точно стоило жить и стараться».",
    avatar: "media/1.jpg",
  },
  {
    sender: "Кирилл Софоненко",
    text: "Пусть в Вашей жизни будет больше спонтанных радостей, неожиданных подарков судьбы и приятных встреч.",
    avatar: "media/1.jpg",
  },
  {
    sender: "Бехруз Умаров",
    text: "Желаю Вам чувствовать опору внутри себя и знать: Вы можете намного больше, чем иногда кажется.",
    avatar: "media/1.jpg",
  },
  {
    sender: "Ильнар Шакамеев",
    text: "Пусть каждый новый год жизни делает Вас только спокойнее, увереннее и счастливее.",
    avatar: "media/1.jpg",
  },
  {
    sender: "Ибрагим Бадалов",
    text: "Желаю Вам красивых планов, приятных сюрпризов и людей, которые всегда на Вашей стороне.",
    avatar: "media/1.jpg",
  },
  {
    sender: "Тимур Горбунов",
    text: "Пусть 25 лет станут точкой, с которой начнётся самый гармоничный и насыщенный период Вашей жизни.",
    avatar: "media/1.jpg",
  },
];

const facts = [
  "25 лет - это Ваш личный рубеж четверти века: уже много пройдено, но впереди ещё больше",
  "Это идеальный возраст для начала грандиозных проектов",
  "Профессиональный опыт уже наработан, впереди - великие свершения",
  "Исследования показывают, что в 25 лет человек достигает пика физических возможностей",
  "Это возраст, когда сочетаются опыт молодости и мудрость начинающейся зрелости"
];

let isMusicPlaying = false;

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

document.addEventListener("DOMContentLoaded", () => {
  renderMessages();
  renderFacts();
  createParticles();
  createConfetti();
  createBalloons();
  setupScrollAnimations();
});

function setupScrollAnimations() {
  const allElements = document.querySelectorAll(
    ".message-card, .fact-item, .section-title"
  );

  allElements.forEach((el, index) => {
    el.classList.add("scroll-animate");
    el.style.setProperty("--delay", `${index * 0.1}s`);
    observer.observe(el);
  });
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
  if (e.key === "Escape") {
  }
});
