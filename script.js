const menuData = {
  "قاوە ساردەکان": {
    ku: "قاوە ساردەکان",
    image: "iced-coffee.jpg",
    items: [
      ["ئیسپریسۆ تۆنیکی سارد", "٣،٥٠٠"],
      ["ئەمریکانۆی سارد", "٤،٥٠٠"],
      ["کاپوچینۆی سارد", "٥،٠٠٠"],
      ["مۆکای سارد", "٥،٥٠٠"],
      ["مۆکای سپیی سارد", "٥،٥٠٠"],
      ["قاوەی کوردیی سارد", "٥،٠٠٠"],
      ["لاتێی سارد", "٥،٠٠٠"],
      ["لاتێی ئیسپانیی سارد", "٦،٠٠٠"],
      ["لاتێی دارچینی سارد", "٦،٠٠٠"],
      ["لاتێی ژاپۆنیی سارد", "٦،٠٠٠"],
      ["لاتێی کارامێلی سارد", "٦،٠٠٠"],
      ["لاتێی کارامێلی سوێر سارد", "٦،٠٠٠"],
      ["لاتێی کۆڵانی ٢١ سارد", "٦،٥٠٠"],
      ["کۆکۆ ئیسپریسۆی سارد", "٦،٥٠٠"],
      ["ئەمریکانۆی پرتەقاڵ", "٦،٠٠٠"],
      ["قاوەی ساردکراوە", "٦،٠٠٠"],
      ["ئافۆگاتۆ", "٤،٥٠٠"]
    ]
  },

  "قاوە گەرمەکان": {
    ku: "قاوە گەرمەکان",
    image: "hot-coffe.jpg",
    items: [
      ["ئیسپریسۆ", "٣،٠٠٠"],
      ["ئەمریکانۆ", "٤،٠٠٠"],
      ["کاپوچینۆ", "٥،٠٠٠"],
      ["لاتێ", "٥،٠٠٠"],
      ["قاوەی کوردی", "٥،٠٠٠"],
      ["مۆکا", "٥،٥٠٠"]
    ]
  },

  "ماچا": {
    ku: "ماچا",
    image: "macha.jpg",
    items: [
      ["ماچای سارد", "٦،٠٠٠"],
      ["لاتێی ماچا", "٦،٥٠٠"],
      ["ماچای فرێز", "٧،٠٠٠"],
      ["ماچای ڤانیلا", "٧，٠٠٠"]
    ]
  },

  "مۆهیتۆ": {
    ku: "مۆهیتۆ",
    image: "mohito.jpg",
    items: [
      ["مۆهیتۆی کلاسیک", "٥،٠٠٠"],
      ["مۆهیتۆی شین", "٥،٥٠٠"],
      ["مۆهیتۆی فرێز", "٥،٥٠٠"],
      ["مۆهیتۆی پاشن", "٦،٠٠٠"]
    ]
  },

  "چا": {
    ku: "چا",
    image: "tea.jpg",
    items: [
      ["چای کوردی", "١،٥٠٠"],
      ["چای سەوز", "٢،٠٠٠"],
      ["چای گیایی", "٢،٥٠٠"],
      ["چای بە شیر", "٣،٠٠٠"]
    ]
  },

  "میلکشەیکەکان": {
    ku: "میلکشەیک",
    image: "https://id-preview--ff138ebc-7c5d-48d8-80b7-5add13a8e446.lovable.app/assets/iced-coffee-B5sh6Mrd.jpg",
    items: [
      ["میلکشەیکی ڤانیلا", "٦،٠٠٠"],
      ["میلکشەیکی چۆکڵاتە", "٦،٠٠٠"],
      ["میلکشەیکی کارامێل", "٦،٥٠٠"],
      ["میلکشەیکی ئۆریۆ", "٧،٠٠٠"]
    ]
  }
};

const tabs = document.getElementById("menuTabs");
const menuItems = document.getElementById("menuItems");
const menuImage = document.getElementById("menuImage");
const menuKu = document.getElementById("menuKu");
const menuEnglish = document.getElementById("menuEnglish");

function setمینیو(category) {
  const data = menuData[category];

  menuImage.style.opacity = "0";
  menuItems.style.opacity = "0";
  menuItems.style.transform = "translateY(10px)";

  setTimeout(() => {
    menuImage.src = data.image;
    menuImage.alt = category;
    menuKu.textContent = data.ku;
    menuEnglish.textContent = category;

    menuItems.innerHTML = data.items.map(([name, price], index) => `
      <article class="menu-row" style="--row-delay:${index * 35}ms">
        <span class="dish">${name}</span>
        <span class="dash"></span>
        <strong>${price}</strong>
      </article>
    `).join("");

    menuImage.style.opacity = "1";
    menuItems.style.opacity = "1";
    menuItems.style.transform = "translateY(0)";
  }, 180);
}

Object.keys(menuData).forEach((category, index) => {
  const button = document.createElement("button");
  button.className = "menu-tab" + (index === 0 ? " active" : "");
  button.textContent = category;

  button.addEventListener("click", () => {
    document.querySelectorAll(".menu-tab").forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");
    setمینیو(category);
  });

  tabs.appendChild(button);
});

setمینیو("قاوە ساردەکان");

const menuButton = document.getElementById("menuButton");
const mobileمینیو = document.getElementById("mobileمینیو");

menuButton.addEventListener("click", () => {
  const open = menuButton.classList.toggle("active");
  mobileمینیو.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", open ? "true" : "false");
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    menuButton.classList.remove("active");
    mobileمینیو.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const revealItems = document.querySelectorAll(".reveal-up, .reveal-zoom");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

revealItems.forEach(item => revealObserver.observe(item));

const header = document.getElementById("siteHeader");
const progress = document.getElementById("scrollProgress");
const parallaxEls = document.querySelectorAll("[data-parallax]");

let ticking = false;

function onScroll() {
  const y = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (y / docHeight) * 100 : 0;

  progress.style.width = pct + "%";
  header.classList.toggle("scrolled", y > 28);

  parallaxEls.forEach(el => {
    const speed = Number(el.dataset.parallax || 0);
    const rect = el.getBoundingClientRect();

    if (rect.bottom > 0 && rect.top < window.innerHeight) {
      const offset = rect.top * speed;
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
    }
  });

  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(onScroll);
    ticking = true;
  }
}, { passive: true });

onScroll();