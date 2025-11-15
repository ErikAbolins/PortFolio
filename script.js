        // Scroll Reveal
        const revealEls = document.querySelectorAll(".reveal");
        const obs = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add("show");
            });
        }, {
            threshold: 0.15
        });
        revealEls.forEach(el => obs.observe(el));

        // Parallax Orbs
        document.addEventListener("mousemove", e => {
            const orbs = document.querySelectorAll(".parallax-orb");
            const x = (e.clientX / window.innerWidth - 0.5) * 50;
            const y = (e.clientY / window.innerHeight - 0.5) * 50;

            orbs.forEach((orb, i) => {
                const factor = i === 0 ? 1 : -1; 
                orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
            });
        });

        // Typing animation
        const phrases = ["Systems Developer", "C++ Enthusiast", "Game Developer"];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingSpeed = 100;
        const deletingSpeed = 50;
        const pauseDuration = 2000;

        function typeEffect() {
            const typingSpan = document.querySelector('.typing-text span');
            const currentPhrase = phrases[phraseIndex];

            if (isDeleting) {
                typingSpan.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingSpan.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                setTimeout(() => { isDeleting = true; }, pauseDuration);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }

            setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
        }

        typeEffect();