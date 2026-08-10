(() => {
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
  }

  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => btn.closest('.faq-item').classList.toggle('open'));
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, {threshold: .12});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  // Membership acknowledgement before redirecting to Stripe.
  const modal = document.getElementById('checkoutModal');
  if (modal) {
    const planEl = modal.querySelector('[data-modal-plan]');
    const priceEl = modal.querySelector('[data-modal-price]');
    const termEl = modal.querySelector('[data-modal-term]');
    const feeEl = modal.querySelector('[data-modal-fee]');
    const nameInput = modal.querySelector('#agreementName');
    const checks = [...modal.querySelectorAll('.agreement-check')];
    const continueBtn = modal.querySelector('[data-checkout-continue]');
    let checkoutUrl = '';

    const validate = () => {
      const ok = nameInput.value.trim().length >= 2 && checks.every(c => c.checked);
      continueBtn.classList.toggle('disabled', !ok);
      continueBtn.setAttribute('aria-disabled', String(!ok));
    };
    nameInput.addEventListener('input', validate);
    checks.forEach(c => c.addEventListener('change', validate));

    document.querySelectorAll('.checkout-trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        checkoutUrl = btn.dataset.url;
        planEl.textContent = btn.dataset.plan;
        priceEl.textContent = btn.dataset.price;
        termEl.textContent = btn.dataset.term || 'One-time purchase';
        feeEl.textContent = btn.dataset.regfee === 'yes'
          ? 'A $30 initial registration fee applies to this membership.'
          : 'No registration fee applies to this option.';
        nameInput.value = '';
        checks.forEach(c => c.checked = false);
        validate();
        modal.classList.add('open');
        document.body.classList.add('modal-open');
      });
    });
    const close = () => { modal.classList.remove('open'); document.body.classList.remove('modal-open'); };
    modal.querySelectorAll('[data-modal-close]').forEach(el => el.addEventListener('click', close));
    modal.addEventListener('click', e => { if (e.target === modal) close(); });
    continueBtn.addEventListener('click', e => {
      e.preventDefault(); validate();
      if (!continueBtn.classList.contains('disabled') && checkoutUrl) {
        window.location.href = checkoutUrl;
      }
    });
  }

  // Static-site contact form: creates a ready-to-send text message to the gym.
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const data = new FormData(contactForm);
      const body = [
        'Champion Boxing Gym website inquiry',
        `Name: ${data.get('name') || ''}`,
        `Email: ${data.get('email') || ''}`,
        `Phone: ${data.get('phone') || ''}`,
        `Interest: ${data.get('interest') || ''}`,
        `Message: ${data.get('message') || ''}`
      ].join('\n');
      const phone = '18333821408';
      window.location.href = `sms:${phone}?&body=${encodeURIComponent(body)}`;
    });
  }
})();
