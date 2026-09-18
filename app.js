/**
 * SAI DENTAL AND COSMETOLOGY CENTER - CLIENT APPLICATION SCRIPTS
 * Doctor: Dr. Pragya Shrivastava | Ratnagiri, Maharashtra
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileDrawer();
  initSmoothScroll();
  initAppointmentForm();
  initModalActions();
});

/**
 * Header shadow effect on scroll
 */
function initStickyHeader() {
  const header = document.querySelector('.main-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileDrawer() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const backdrop = document.querySelector('.mobile-drawer-backdrop');
  const closeBtn = document.querySelector('.drawer-close-btn');
  const navLinks = document.querySelectorAll('.mobile-nav-links a');

  if (!toggleBtn || !drawer || !backdrop) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  navLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Mobile accordion toggle
  const mobileDropdownBtn = document.querySelector('.mobile-dropdown-btn');
  const mobileDropdownGroup = document.querySelector('.mobile-dropdown-group');
  if (mobileDropdownBtn && mobileDropdownGroup) {
    mobileDropdownBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = mobileDropdownGroup.classList.toggle('active');
      mobileDropdownBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Desktop dropdown click/touch support
  const dropdownToggleBtn = document.querySelector('.dropdown-toggle-btn');
  const dropdownGroup = document.querySelector('.nav-item-dropdown');
  if (dropdownToggleBtn && dropdownGroup) {
    dropdownToggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      dropdownGroup.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!dropdownGroup.contains(e.target)) {
        dropdownGroup.classList.remove('open');
      }
    });
  }
}

/**
 * Smooth scrolling for internal anchor links with sticky header offset
 */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  const header = document.querySelector('.main-header');
  const headerOffset = header ? header.offsetHeight + 10 : 90;

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Appointment Form Handling (Direct WhatsApp Dispatch & Backend Prep)
 * Important compliance rule: If no backend is configured, DO NOT falsely
 * claim an appointment has been submitted to a database.
 * Instead, provide an instant option to transfer the details directly to clinic WhatsApp.
 */
function initAppointmentForm() {
  const form = document.getElementById('appointmentForm');
  const statusContainer = document.getElementById('formStatusAlert');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('fullName')?.value.trim() || '';
    const phone = document.getElementById('phoneNumber')?.value.trim() || '';
    const date = document.getElementById('prefDate')?.value || '';
    const time = document.getElementById('prefTime')?.value || '';
    const service = document.getElementById('serviceConcern')?.value || '';
    const message = document.getElementById('notesMessage')?.value.trim() || '';

    if (!name || !phone) {
      if (statusContainer) {
        statusContainer.innerHTML = `
          <div style="background-color: #FEF2F2; border: 1px solid #F87171; color: #991B1B; padding: 12px; border-radius: 4px; font-size: 0.85rem; margin-top: 14px;">
            Please provide your name and phone number so the clinic team can connect with you.
          </div>
        `;
      }
      return;
    }

    // Format WhatsApp message
    const formattedMsg = 
      `*Appointment Enquiry - Sai Dental and Cosmetology Center*\n\n` +
      `*Patient Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Preferred Date:* ${date || 'Flexible'}\n` +
      `*Preferred Time:* ${time || 'Flexible'}\n` +
      `*Treatment / Area of Concern:* ${service || 'General / Cosmetic Consultation'}\n` +
      (message ? `*Patient Notes:* ${message}\n\n` : '\n') +
      `_Sent via Sai Dental & Cosmetology official website_`;

    const clinicWhatsAppUrl = `https://wa.me/918971729177?text=${encodeURIComponent(formattedMsg)}`;

    if (statusContainer) {
      statusContainer.innerHTML = `
        <div style="background-color: #F0FDF4; border: 1px solid #86EFAC; color: #166534; padding: 16px; border-radius: 6px; font-size: 0.88rem; margin-top: 16px;">
          <p style="font-weight: 600; margin-bottom: 6px;">Your enquiry details are ready.</p>
          <p style="margin-bottom: 12px; font-size: 0.82rem; color: #374151;">
            To ensure immediate scheduling with Dr. Pragya Shrivastava's reception desk, tap below to send directly via WhatsApp:
          </p>
          <a href="${clinicWhatsAppUrl}" target="_blank" rel="noopener" class="btn btn-whatsapp" style="display: inline-flex; width: 100%; justify-content: center;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            Send Details via WhatsApp
          </a>
          <p style="margin-top: 10px; font-size: 0.74rem; color: #6B7280; text-align: center;">
            Or call clinic reception directly at <a href="tel:+918971729177" style="text-decoration: underline; font-weight: 600; color: #166534;">08971729177</a>
          </p>
        </div>
      `;
    }
  });
}

/**
 * Modal Consultation Dialog
 */
function initModalActions() {
  const modal = document.getElementById('consultationModal');
  const openButtons = document.querySelectorAll('[data-open-modal="consultationModal"]');
  const closeButtons = document.querySelectorAll('[data-close-modal]');

  if (!modal) return;

  const openModal = () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  openButtons.forEach(btn => btn.addEventListener('click', openModal));
  closeButtons.forEach(btn => btn.addEventListener('click', closeModal));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}
