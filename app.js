/* ==========================================================================
   CeylonEscape Interactive Front-end Javascript Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const mainHeader = document.getElementById('mainHeader');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Booking Form Widget
    const bookingForm = document.getElementById('bookingForm');
    
    // Filters & Grid
    const filterButtons = document.querySelectorAll('.filter-btn');
    const destinationCards = document.querySelectorAll('.destination-card');
    
    // Modals
    const bookingModal = document.getElementById('bookingModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalBookingForm = document.getElementById('modalBookingForm');
    const modalDestInput = document.getElementById('modal-dest');
    const modalDateInput = document.getElementById('modal-date');
    const openModalButtons = document.querySelectorAll('.open-modal-btn');
    const openDetailButtons = document.querySelectorAll('.open-booking-details');
    
    // Toast Notification
    const successToast = document.getElementById('successToast');
    const toastTitle = document.getElementById('toastTitle');
    const toastBody = document.getElementById('toastBody');
    
    // Newsletter
    const newsletterForm = document.getElementById('newsletterForm');
    const newsletterEmail = document.getElementById('newsletterEmail');

    // 1. Scroll Event: Add Header Background Glassmorphism
    const handleScroll = () => {
        if (window.scrollY > 20) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
        
        // Dynamic Active Navigation Item Highlight on Scroll
        let currentSection = '';
        const sections = document.querySelectorAll('section, header');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 150) {
                currentSection = section.getAttribute('id') || '';
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on load in case page starts scrolled

    // 2. Mobile Menu (Hamburger Menu Toggle)
    const toggleMobileMenu = () => {
        hamburgerBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
        // Lock body scrolling when mobile menu is active
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    };

    hamburgerBtn.addEventListener('click', toggleMobileMenu);

    // Close Mobile Menu on Nav Link Click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburgerBtn.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // 3. Category Filter Logic for Destination Grid
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active state from all filters
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active to current filter
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            destinationCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                // Add scale-down fade animation
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95) translateY(10px)';
                
                setTimeout(() => {
                    if (filterValue === 'all' || cardCategory === filterValue) {
                        card.style.display = 'flex';
                        // Trigger fade back in
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1) translateY(0)';
                        }, 50);
                    } else {
                        card.style.display = 'none';
                    }
                }, 300); // Wait for fade-out to finish
            });
        });
    });

    // 4. Custom Modals & Booking Flow
    const openModal = (destinationName = '') => {
        bookingModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Auto-set the date tomorrow by default
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        modalDateInput.value = tomorrow.toISOString().split('T')[0];
        
        if (destinationName) {
            modalDestInput.value = destinationName;
        } else {
            modalDestInput.value = 'Custom Sri Lankan Expedition';
        }
    };

    const closeModal = () => {
        bookingModal.classList.remove('active');
        document.body.style.overflow = '';
    };

    // Bind generic "Book Adventure" buttons
    openModalButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    });

    // Bind Destination card "Explore" buttons
    openDetailButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const place = btn.getAttribute('data-place');
            openModal(place);
        });
    });

    closeModalBtn.addEventListener('click', closeModal);

    // Close Modal on clicking outside the modal box
    bookingModal.addEventListener('click', (e) => {
        if (e.target === bookingModal) {
            closeModal();
        }
    });

    // 5. Toast Notification triggers
    const triggerToast = (title, message) => {
        toastTitle.textContent = title;
        toastBody.textContent = message;
        successToast.classList.add('active');
        
        // Auto-remove toast after 4 seconds
        setTimeout(() => {
            successToast.classList.remove('active');
        }, 4000);
    };

    // 6. Form Submission Handlers with simulated responses
    
    // Widget search form
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const destSelect = document.getElementById('destination');
        const dateVal = document.getElementById('date-start').value;
        const guestsVal = document.getElementById('guests').value;
        const selectedText = destSelect.options[destSelect.selectedIndex].text;
        
        const searchBtn = bookingForm.querySelector('button[type="submit"]');
        const origContent = searchBtn.innerHTML;
        
        // Loading animation state on button
        searchBtn.disabled = true;
        searchBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Finding Routes...';
        
        setTimeout(() => {
            // Restore button
            searchBtn.disabled = false;
            searchBtn.innerHTML = origContent;
            
            // Trigger customized popup
            triggerToast(
                'Routes Found!', 
                `We found 5 premium itineraries for "${selectedText}" starting on ${dateVal} for ${guestsVal} guest(s). Opening details...`
            );
            
            // Auto-open modal with correct destination search context
            setTimeout(() => {
                openModal(`${selectedText} - (${guestsVal} Guests, Start: ${dateVal})`);
            }, 1000);
            
        }, 1500);
    });

    // Modal detailed booking form
    modalBookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nameVal = document.getElementById('modal-name').value;
        const destName = modalDestInput.value;
        
        const submitBtn = modalBookingForm.querySelector('button[type="submit"]');
        const origBtnText = submitBtn.textContent;
        
        submitBtn.disabled = true;
        submitBtn.textContent = 'Crafting Your Journey...';
        
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = origBtnText;
            
            closeModal();
            triggerToast(
                'Itinerary Requested!',
                `Thank you ${nameVal}! Our local designer is crafting your plan for "${destName}". Check your inbox soon.`
            );
            modalBookingForm.reset();
        }, 2000);
    });

    // Newsletter email form
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const emailVal = newsletterEmail.value;
        const submitBtn = newsletterForm.querySelector('button[type="submit"]');
        const origBtnText = submitBtn.textContent;
        
        submitBtn.disabled = true;
        submitBtn.textContent = 'Subscribing...';
        
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = origBtnText;
            
            triggerToast(
                'Welcome Aboard!',
                `Successfully subscribed ${emailVal} to our seasonal travel journal!`
            );
            newsletterForm.reset();
        }, 1200);
    });

    // 7. Intersection Observer for Scroll Reveals
    const revealOnScroll = () => {
        const revealElements = document.querySelectorAll('.fade-in-el');
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal');
                    // Stop observing once animation triggered to preserve layout state
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1, // Trigger once 10% of element is in view
            rootMargin: '0px 0px -50px 0px' // Trigger slightly before it hits mid screen
        });
        
        revealElements.forEach(el => observer.observe(el));
    };

    // Initialize reveal observer
    if ('IntersectionObserver' in window) {
        revealOnScroll();
    } else {
        // Fallback for older browsers: show elements immediately
        document.querySelectorAll('.fade-in-el').forEach(el => el.classList.add('reveal'));
    }
});
