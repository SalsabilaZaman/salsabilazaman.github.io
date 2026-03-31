/* ===================================================================
   MAIN.JS — Renders DATA + all interactions.
   Edit js/data.js for content. Only touch this for layout/behaviour.
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderHero();
  renderTechScroll();
  renderAbout();
  renderSkills();
  renderFeaturedProjects();
  renderOtherProjects();
  renderAchievements();
  renderEducation();
  renderContact();
  renderFooter();

  initScrollAnimations();
  initNavActiveLink();
  initHamburger();
  initStatCounters();
});

/* ---- Helpers ------------------------------------------------------------ */

function tags(arr, cls = 'tag') {
  return arr.map(t => `<span class="${cls}">${t}</span>`).join('');
}

function projectLinks(github, demo) {
  let html = '';
  if (github) html += `<a href="${github}" class="project-link" target="_blank" rel="noopener">↗ GitHub</a>`;
  if (demo)   html += `<a href="${demo}"   class="project-link" target="_blank" rel="noopener">↗ Live Demo</a>`;
  return html;
}

/* ---- Nav ---------------------------------------------------------------- */

function renderNav() {
  const ul = document.getElementById('nav-links');
  const links = DATA.navLinks.map(l =>
    `<li><a href="${l.href}">${l.label}</a></li>`
  ).join('');
  ul.innerHTML = links +
    `<li><a href="${DATA.resumePdf}" class="nav-resume" download>Resume</a></li>`;
}

/* ---- Hero --------------------------------------------------------------- */

function renderHero() {
  const h = DATA.hero;

  const avatar = h.profilePhoto
    ? `<img src="${h.profilePhoto}" alt="${h.firstName} ${h.lastName}" class="avatar-photo">`
    : `<span class="avatar-placeholder">${h.firstName[0]}${h.lastName[0]}</span>`;
  document.querySelector('.hero-avatar').innerHTML = avatar;

  document.getElementById('hero-content').innerHTML = `
    <div class="hero-greeting">${h.greeting}</div>
    <h1 class="hero-name">${h.firstName}<br><span>${h.lastName}</span></h1>
    <div class="hero-title">${h.title}</div>
    <p class="hero-desc">${h.desc}</p>
    <div class="hero-btns">
      <a href="#projects" class="btn-primary">View Projects</a>
      <a href="${DATA.resumePdf}" class="btn-secondary" download>Download Resume</a>
      <a href="#contact" class="btn-secondary">Contact Me</a>
    </div>
  `;
}

/* ---- Tech Scroll -------------------------------------------------------- */

function renderTechScroll() {
  const item = t => `<span class="tech-item"><span>✦</span>${t}</span>`;
  const set = DATA.techStack.map(item).join('');
  document.getElementById('tech-track').innerHTML = set + set;
}

/* ---- About -------------------------------------------------------------- */

function renderAbout() {
  const services = DATA.about.services.map(s =>
    `<div class="service-item">
       <span class="service-icon">${s.icon}</span>
       <span class="service-name">${s.name}</span>
     </div>`
  ).join('');

  const paragraphs = DATA.about.paragraphs.map(p =>
    `<p class="about-text">${p}</p>`
  ).join('');

  // Stats: store the raw number in data-target for the counter animation
  const stats = DATA.about.stats.map(s => {
    const raw = parseFloat(s.num.replace('+', ''));
    const isPlus = s.num.includes('+');
    return `<div>
      <div class="stat-num" data-target="${raw}" data-plus="${isPlus}">0${isPlus ? '+' : ''}</div>
      <div class="stat-label">${s.label}</div>
    </div>`;
  }).join('');

  document.getElementById('about-grid').innerHTML = `
    <div class="fade-up">
      <div class="section-label">// who i am</div>
      <div class="section-title">About<br><span>Me</span></div>
      <div class="divider"></div>
      <div class="about-services">${services}</div>
    </div>
    <div class="fade-up">
      ${paragraphs}
      <div class="stats">${stats}</div>
    </div>
  `;
}

/* ---- Skills ------------------------------------------------------------- */

function renderSkills() {
  const cards = DATA.skills.map((s, i) => `
    <div class="skill-card stagger-child" style="--delay: ${i * 0.07}s">
      <div class="skill-cat">${s.category}</div>
      <div class="skill-tags">${tags(s.tags)}</div>
    </div>
  `).join('');

  document.getElementById('skills-container').innerHTML = `
    <div class="section-label fade-up">// what i use</div>
    <div class="section-title fade-up">Skills &amp;<br><span>Tech Stack</span></div>
    <div class="divider fade-up"></div>
    <div class="skills-grid">${cards}</div>
  `;
}

/* ---- Featured Projects -------------------------------------------------- */

function renderFeaturedProjects() {
  const items = DATA.featuredProjects.map((p, i) => {
    const num    = String(i + 1).padStart(2, '0');
    const rev    = i % 2 !== 0 ? 'reverse' : '';
    const visual = p.visual.replace('\n', '<br>');
    const imgClass = p.imageStyle === 'contain'
      ? 'project-screenshot project-screenshot--contain'
      : 'project-screenshot';
    const visualEl = p.image
      ? `<div class="project-visual project-visual--img">
           <img src="${p.image}" alt="${p.name} screenshot" class="${imgClass}">
         </div>`
      : `<div class="project-visual">
           <span class="project-visual-label">${visual}</span>
         </div>`;
    return `
      <div class="project-item ${rev} fade-up">
        <div>
          <div class="project-num">${num}</div>
          <div class="project-name">${p.name}</div>
          <div class="project-tags">${tags(p.tags, 'project-tag')}</div>
          <p class="project-desc">${p.desc}</p>
          <div class="project-links">${projectLinks(p.github, p.demo)}</div>
        </div>
        ${visualEl}
      </div>
    `;
  }).join('');

  document.getElementById('featured-projects-container').innerHTML = `
    <div class="section-label fade-up">// what i built</div>
    <div class="section-title fade-up">Featured<br><span>Projects</span></div>
    <div class="divider fade-up"></div>
    ${items}
  `;
}

/* ---- Other Projects ----------------------------------------------------- */

function renderOtherProjects() {
  const cards = DATA.otherProjects.map((p, i) => `
    <div class="other-project-card stagger-child" style="--delay: ${i * 0.08}s">
      <div class="other-project-name">${p.name}</div>
      <p class="other-project-desc">${p.desc}</p>
      <div class="other-project-tags">${tags(p.tags, 'project-tag')}</div>
      ${p.github ? `<div style="margin-top:1rem"><a href="${p.github}" class="project-link" target="_blank" rel="noopener">↗ GitHub</a></div>` : ''}
    </div>
  `).join('');

  document.getElementById('other-projects-container').innerHTML = `
    <div class="section-label fade-up">// more work</div>
    <div class="section-title fade-up">Other<br><span>Projects</span></div>
    <div class="divider fade-up"></div>
    <div class="other-projects-grid">${cards}</div>
  `;
}

/* ---- Achievements ------------------------------------------------------- */

function renderAchievements() {
  const items = DATA.achievements.map((a, i) => `
    <div class="achieve-item stagger-child" style="--delay: ${i * 0.1}s">
      <span class="achieve-bullet">▶</span>
      <span class="achieve-text">${a}</span>
    </div>
  `).join('');

  document.getElementById('achievements-container').innerHTML = `
    <div class="section-label fade-up">// highlights</div>
    <div class="section-title fade-up">Achievements &amp;<br><span>Activities</span></div>
    <div class="divider fade-up"></div>
    <div class="achieve-list">${items}</div>
  `;
}

/* ---- Education ---------------------------------------------------------- */

function renderEducation() {
  const cards = DATA.education.map(e => `
    <div class="education-card fade-up">
      <div class="edu-label">// university</div>
      <div class="edu-degree">${e.degree}</div>
      <div class="edu-uni">${e.uni}</div>
      <div class="edu-years">${e.years}</div>
      <div class="edu-cgpa">${e.cgpa}</div>
      <div class="edu-cgpa-label">CGPA / ${e.cgpaMax}</div>
    </div>
  `).join('');

  document.getElementById('education-container').innerHTML = `
    <div class="section-label fade-up">// my background</div>
    <div class="section-title fade-up">Edu<span>cation</span></div>
    <div class="divider fade-up"></div>
    ${cards}
  `;
}

/* ---- Contact ------------------------------------------------------------ */

function renderContact() {
  const c = DATA.contact;
  document.getElementById('contact-container').innerHTML = `
    <div class="fade-up">
      <div class="section-label">// let's connect</div>
      <div class="contact-heading">Have something<br>in mind?<br><span>I'm around.</span></div>
      <div class="contact-info">
        <div class="contact-row">✉ <a href="mailto:${c.email}">${c.email}</a></div>
        <div class="contact-row">⌥ <a href="${c.github}" target="_blank" rel="noopener">${c.github.replace('https://', '')}</a></div>
        <div class="contact-row">in <a href="${c.linkedin}" target="_blank" rel="noopener">${c.linkedin.replace('https://', '')}</a></div>
        <div class="contact-row">⌖ ${c.location}</div>
      </div>
    </div>
    <form class="contact-form fade-up">
      <div class="form-field">
        <label class="form-label" for="name">Name</label>
        <input type="text" id="name" class="form-input" placeholder="Your name">
      </div>
      <div class="form-field">
        <label class="form-label" for="email">Email</label>
        <input type="email" id="email" class="form-input" placeholder="your@email.com">
      </div>
      <div class="form-field">
        <label class="form-label" for="message">Message</label>
        <textarea id="message" class="form-textarea" placeholder="Tell me about your project..."></textarea>
      </div>
      <button type="submit" class="btn-submit">Send Message →</button>
    </form>
  `;
}

/* ---- Footer ------------------------------------------------------------- */

function renderFooter() {
  const c = DATA.contact;
  document.getElementById('site-footer').innerHTML = `
    <a href="#" class="footer-logo">Salsabila<span>.</span></a>
    <div class="footer-copy">© 2025 · Designed &amp; built by Salsabila Zaman</div>
    <div class="footer-socials">
      <a href="mailto:${c.email}" class="social-link" title="Email">✉</a>
      <a href="${c.github}"   class="social-link" target="_blank" rel="noopener" title="GitHub">GH</a>
      <a href="${c.linkedin}" class="social-link" target="_blank" rel="noopener" title="LinkedIn">in</a>
    </div>
  `;
}

/* ---- Scroll Animations -------------------------------------------------- */

function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // animate once only
        }
      });
    },
    { threshold: 0.12 }
  );

  // Observe after a tick so rendered DOM is available
  requestAnimationFrame(() => {
    document.querySelectorAll('.fade-up, .stagger-child').forEach(el => {
      observer.observe(el);
    });
  });
}

/* ---- Active Nav Link on Scroll ------------------------------------------ */

function initNavActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('#nav-links a[href^="#"]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach(l => l.classList.remove('active'));
          const active = document.querySelector(`#nav-links a[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach(s => observer.observe(s));
}

/* ---- Hamburger Menu ----------------------------------------------------- */

function initHamburger() {
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');

  toggle.addEventListener('click', () => {
    const isOpen = toggle.classList.toggle('open');
    links.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on nav link click
  links.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
      toggle.classList.remove('open');
      links.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* ---- Stat Counters ------------------------------------------------------ */

function initStatCounters() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const els = entry.target.querySelectorAll('.stat-num[data-target]');
        els.forEach(el => animateCounter(el));
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );

  // Observe the stats container (rendered inside about-grid)
  requestAnimationFrame(() => {
    const statsEl = document.querySelector('.stats');
    if (statsEl) observer.observe(statsEl);
  });
}

function animateCounter(el) {
  const target   = parseFloat(el.dataset.target);
  const isPlus   = el.dataset.plus === 'true';
  const isFloat  = !Number.isInteger(target);
  const duration = 1200;
  const start    = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const value    = target * eased;
    el.textContent = (isFloat ? value.toFixed(2) : Math.floor(value)) + (isPlus ? '+' : '');
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}
