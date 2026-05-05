// Intersection Observer for fade-in animations
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToFadeIn = document.querySelectorAll('.fade-in-section');
    elementsToFadeIn.forEach(el => observer.observe(el));
});

window.togglePremiumMobileMenu = function () {
    const menu = document.getElementById('premium-mobile-menu');
    const burger = document.querySelector('.premium-burger-icon');
    const label = document.querySelector('.burger-label');
    const body = document.body;

    if (!menu || !burger) return;

    // Toggle active classes
    menu.classList.toggle('active');
    burger.classList.toggle('active');

    if (menu.classList.contains('active')) {
        body.style.overflow = 'hidden';
        if (label) label.textContent = currentLang === 'fr' ? 'FERMER' : 'CLOSE';
    } else {
        body.style.overflow = '';
        if (label) label.textContent = currentLang === 'fr' ? 'MENU' : 'MENU';
    }
}

const TRANSLATIONS = {
    'nav.services': { en: 'Services', fr: 'Services' },
    'nav.about': { en: 'About', fr: 'À Propos' },
    'nav.team': { en: 'Team', fr: 'Équipe' },
    'nav.reviews': { en: 'Reviews', fr: 'Avis' },
    'nav.gallery': { en: 'Gallery', fr: 'Galerie' },
    'nav.book': { en: 'Book Consultation', fr: 'Réserver' },
    'nav.contact': { en: 'Contact & Location', fr: 'Contact & Emplacement' },
    'topbar.book': { en: 'Book Now', fr: 'Réserver' },
    'hero.h1': {
        en: '<span class="desktop-only">Laser hair removal and skincare in Grande Digue, NB</span><span class="mobile-only">Laser hair removal and skincare</span>',
        fr: '<span class="desktop-only">Épilation au laser et soins de la peau à Grande-Digue, NB</span><span class="mobile-only">Épilation au laser et soins de la peau</span>'
    },
    'hero.location': {
        en: `
            <div style="font-size: 1.1rem; font-weight: 500; display: flex; align-items: center; gap: 8px;">
                <span class="material-icons" style="font-size: 1.2rem;">location_on</span> Grande-Digue NB
            </div>
        `,
        fr: `
            <div style="font-size: 1.1rem; font-weight: 500; display: flex; align-items: center; gap: 8px;">
                <span class="material-icons" style="font-size: 1.2rem;">location_on</span> Grande-Digue NB
            </div>
        `
    },
    'hero.subhead': {
        en: `
            <span class="desktop-only">Step into a calm coastal oasis for comfortable, results-driven treatments designed around you—from first visit to final glow.</span>
            <span class="mobile-only">Tailored treatments for your wellness.</span>
        `,
        fr: `
            <span class="desktop-only">Entrez dans une oasis côtière apaisante pour des soins confortables et axés sur les résultats, imaginés pour vous — de la première visite à l'éclat final.</span>
            <span class="mobile-only">Des traitements sur mesure pour votre bien-être.</span>
        `
    },
    'hero.cta': { en: 'Book your session', fr: 'Réservez votre séance' },
    'services.title': { en: 'Our Expertise', fr: 'Notre Expertise' },
    'services.subtitle': { en: 'Curated treatments for the discerning individual.', fr: 'Des soins choisis pour les personnes exigeantes.' },
    'services.item1.title': { en: 'Body Hair Removal', fr: 'Épilation Corporelle' },
    'services.item2.title': { en: 'Hands & Feet', fr: 'Mains & Pieds' },
    'services.item3.title': { en: 'Facials', fr: 'Soins du Visage' },
    'services.item4.title': { en: 'Eyelash', fr: 'Cils' },
    'services.item5.title': { en: 'Relaxation Massage', fr: 'Massage de Détente' },
    'services.item6.title': { en: 'Advance Medical', fr: 'Avancées Médicales' },
    'services.desc': { en: 'Premium aesthetic solution tailored for your exact needs.', fr: 'Solution esthétique premium adaptée à vos besoins précis.' },
    'services.book': { en: 'Book Now', fr: 'Réserver' },
    'about.eyebrow': { en: 'Who We Are', fr: 'Qui Nous Sommes' },
    'about.title': { en: 'A Sanctuary for Your Skin', fr: 'Un Sanctuaire pour Votre Peau' },
    'about.p1': { en: 'Welcome to Caissie Cape Oasis, where we specialize in providing personalized and rejuvenating esthetic services.', fr: 'Bienvenue à Caissie Cape Oasis, où nous nous spécialisons dans l\'offre de services d\'esthétique personnalisés et rajeunissants.' },
    'about.p2': { en: 'Our mission is to enhance your natural beauty and promote wellness through our range of treatments.', fr: 'Notre mission est de rehausser votre beauté naturelle et de promouvoir le bien-être grâce à notre gamme de soins.' },
    'about.gallery': { en: 'View Our Gallery', fr: 'Voir Notre Galerie' },
    'team.eyebrow': { en: 'The Experts', fr: 'Les Experts' },
    'team.title': { en: 'Meet Our Team', fr: 'Rencontrez Notre Équipe' },
    'team.subtitle': { en: 'Dedicated professionals passionate about your wellness.', fr: 'Des professionnels dévoués et passionnés par votre bien-être.' },
    'team.read_more': { en: 'Read More', fr: 'Lire la suite' },
    'team.christine.bio': {
        en: "Christine is a proud Caissie Cape local, born and raised with strong roots in the community she loves. With more than 19 years of experience in the beauty industry, she’s a passionate and dedicated esthetician specializing in painless laser hair removal, waxing, and sugaring. <span class='bio-more-text'>As a mom of three, she adores her kids and balances her family life with a deep passion for helping women feel confident, comfortable, and amazing in their own skin. Having personally struggled with ingrown hairs, Christine is devoted to offering real solutions that make a difference. Her warm, caring approach shines through in every service she provides, including manicures, pedicures, facials, and radio frequency skin treatments. For Christine, there's nothing more fulfilling than combining her love of home, family, and beauty to uplift and empower the women around her.</span><button class='bio-read-more-btn' onclick='toggleBio(this)' data-i18n='team.read_more'>Read More <span class='material-icons' style='font-size: 14px; vertical-align: middle;'>expand_more</span></button>",
        fr: "Christine est fière d'être originaire de Caissie Cape, née et élevée avec de fortes racines dans la communauté qu'elle aime. Avec plus de 19 ans d'expérience dans l'industrie de la beauté, c'est une esthéticienne passionnée et dévouée, spécialisée dans l'épilation au laser sans douleur, l'épilation à la cire et au sucre. <span class='bio-more-text'>Mère de trois enfants, elle adore ses enfants et équilibre sa vie de famille avec une profonde passion pour aider les femmes à se sentir confiantes, à l'aise et incroyables dans leur propre peau. Ayant personnellement lutté contre les poils incarnés, Christine se consacre à offrir de vraies solutions qui font la différence. Son approche chaleureuse et attentionnée transparaît dans tous les services qu'elle offre, y compris les manucures, les pédicures, les soins du visage et les traitements de la peau par radiofréquence. Pour Christine, il n'y a rien de plus gratifiant que de combiner son amour du foyer, de la famille et de la beauté pour élever et responsabiliser les femmes qui l'entourent.</span><button class='bio-read-more-btn' onclick='toggleBio(this)' data-i18n='team.read_more'>Lire la suite <span class='material-icons' style='font-size: 14px; vertical-align: middle;'>expand_more</span></button>"
    },
    'team.franki.role': { en: 'Medical Aesthetician', fr: 'Esthéticienne Médicale' },
    'team.franki.bio': {
        en: "Franki is a certified Medical Aesthetician with a big heart, a steady hand, and a true passion for helping clients feel confident in their skin. Whether it’s a rejuvenating facial, precise waxing service, or a full glam moment with nails, she brings a perfect balance of clinical care and feel-good energy to every treatment. <span class='bio-more-text'>She believes skincare should be just as enjoyable as it is effective so clients can expect real results along with a warm, welcoming experience. Franki’s goal is simple: to make every client feel amazing the moment they walk in, and even better when they leave. Dedicated to her craft, she is constantly learning the latest techniques, refining her skills, and staying ahead of trends to provide the highest level of service. She is passionate about creating a safe, relaxing space where clients can unwind, recharge, and leave feeling radiant inside and out. Kindness is her language. Skin is her passion. And helping people feel confident, that’s her superpower. Book your self-care session she can’t wait to meet you.</span><button class='bio-read-more-btn' onclick='toggleBio(this)' data-i18n='team.read_more'>Read More <span class='material-icons' style='font-size: 14px; vertical-align: middle;'>expand_more</span></button>",
        fr: "Franki est une esthéticienne médicale certifiée avec un grand cœur, une main sûre et une véritable passion pour aider ses clients à se sentir en confiance dans leur peau. Qu'il s'agisse d'un soin du visage rajeunissant, d'un service d'épilation précis ou d'un moment glamour complet avec les ongles, elle apporte un équilibre parfait entre soins cliniques et énergie positive à chaque traitement. <span class='bio-more-text'>Elle croit que les soins de la peau devraient être tout aussi agréables qu'efficaces, afin que les clients puissent s'attendre à des résultats réels ainsi qu'à une expérience chaleureuse et accueillante. L'objectif de Franki est simple : faire en sorte que chaque client se sente merveilleusement bien dès son arrivée, et encore mieux à son départ. Dédiée à son métier, elle apprend constamment les dernières techniques, affine ses compétences et reste à l'affût des tendances pour offrir le plus haut niveau de service. Elle est passionnée par la création d'un espace sûr et relaxant où les clients peuvent se détendre, se ressourcer et repartir rayonnants de l'intérieur comme de l'extérieur. La gentillesse est son langage. La peau est sa passion. Et aider les gens à se sentir en confiance, c'est son super-pouvoir. Réservez votre séance de soins personnels, elle a hâte de vous rencontrer.</span><button class='bio-read-more-btn' onclick='toggleBio(this)' data-i18n='team.read_more'>Lire la suite <span class='material-icons' style='font-size: 14px; vertical-align: middle;'>expand_more</span></button>"
    },
    'team.janika.role': { en: 'Certified Hairstylist', fr: 'Coiffeuse Certifiée' },
    'team.janika.bio': {
        en: "Janika is a certified hairstylist who brings creativity and precision to every cut, color, and style. She is passionate about staying on top of the latest trends and is always eager to continue learning and growing in her craft. <span class='bio-more-text'>As a Moroccanoil product specialist, she delivers not only beautiful results but also expert product knowledge tailored to each client. She brings balance, care, and positive energy into every client experience, making each visit both uplifting and personalized.</span><button class='bio-read-more-btn' onclick='toggleBio(this)' data-i18n='team.read_more'>Read More <span class='material-icons' style='font-size: 14px; vertical-align: middle;'>expand_more</span></button>",
        fr: "Janika est une coiffeuse certifiée qui apporte créativité et précision à chaque coupe, couleur et style. Elle est passionnée par les dernières tendances et a toujours soif d'apprendre et de se perfectionner dans son métier. <span class='bio-more-text'>En tant que spécialiste des produits Moroccanoil, elle offre non seulement des résultats magnifiques, mais aussi une connaissance experte des produits adaptée à chaque client. Elle apporte équilibre, soin et énergie positive à chaque expérience client, rendant chaque visite à la fois vivifiante et personnalisée.</span><button class='bio-read-more-btn' onclick='toggleBio(this)' data-i18n='team.read_more'>Lire la suite <span class='material-icons' style='font-size: 14px; vertical-align: middle;'>expand_more</span></button>"
    },
    'gallery.title': { en: 'The Caissie Cape Oasis Experience', fr: 'L\'Expérience Caissie Cape Oasis' },
    'reviews.title': { en: 'Client Testimonials', fr: 'Témoignages Clients' },
    'reviews.see_all': { en: 'See all reviews on Google', fr: 'Voir tous les avis sur Google' },
    'reviews.q1.text': { en: '"Highly Recommend Franki she was amazing she made me feel super comfortable and was super welcoming!!"', fr: '"Je recommande vivement Franki, elle était incroyable, elle m\'a mis très à l\'aise et a été super accueillante !!"' },
    'reviews.q1.author': { en: 'manon dugas', fr: 'manon dugas' },
    'reviews.q2.text': { en: '"So kind and welcoming, I felt so comfortable. Great prices also. Highly recommend this place!"', fr: '"Si gentilles et accueillantes, je me suis sentie tellement à l\'aise. De super prix aussi. Je recommande vivement cet endroit !"' },
    'reviews.q2.author': { en: 'zoe robichaud', fr: 'zoe robichaud' },
    'reviews.q3.text': { en: '"Christine, your work is amazing and your soul is beautiful. My nails have never looked so good. I receive compliments daily ❤️ I look forward to my appointments and conversation with you."', fr: '"Christine, ton travail est incroyable et ton âme est magnifique. Mes ongles n\'ont jamais été aussi beaux. Je reçois des compliments tous les jours ❤️ J\'ai hâte d\'être à mes rendez-vous et de discuter avec toi."' },
    'reviews.q3.author': { en: 'Norma Zavarella', fr: 'Norma Zavarella' },
    'contact.title': { en: 'Get in Touch', fr: 'Contactez-nous' },
    'contact.subtitle': { en: 'Start your transformation today.', fr: 'Commencez votre transformation dès aujourd\'hui.' },
    'contact.phone': { en: 'Phone', fr: 'Téléphone' },
    'contact.addressTitle': { en: 'Address', fr: 'Adresse' },
    'contact.hours': { en: 'Hours', fr: 'Heures' },
    'contact.h1': { en: 'Mon - Fri: 9am - 7pm', fr: 'Lun - Ven : 9h - 19h' },
    'contact.h2': { en: 'Sat: Closed', fr: 'Sam : Fermé' },
    'contact.h3': { en: 'Sun: Closed', fr: 'Dim : Fermé' },
    'contact.directions': { en: 'Get Directions', fr: 'Itinéraire' },
    'footer.desc': { en: 'Excellence in every detail.', fr: 'L\'excellence dans chaque détail.' },
    'footer.menu': { en: 'Menu', fr: 'Menu' },
    'footer.legal': { en: 'Legal', fr: 'Légal' },
    'footer.privacy': { en: 'Privacy Policy', fr: 'Politique de Confidentialité' },
    'footer.terms': { en: 'Terms of Service', fr: 'Conditions d\'Utilisation' },
    'footer.connect': { en: 'Connect', fr: 'Connexion' },
    'footer.rights': { en: 'All rights reserved.', fr: 'Tous droits réservés.' },
    'mobile.menu': { en: 'MENU', fr: 'MENU' },
    'mobile.call': { en: 'CALL', fr: 'APPELER' },
    'mobile.location': { en: 'LOCATION', fr: 'ITINÉRAIRE' },
    'mobile.callToday': { en: 'Call Us Today', fr: 'Appelez-nous Aujourd\'hui' }
};

let currentLang = localStorage.getItem('lang') || 'en';

window.setLanguage = function (lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    // Update toggle button states immediately
    document.querySelectorAll('.lang-opt').forEach(btn => {
        const btnLang = btn.textContent.toLowerCase();
        if (btnLang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    renderTranslations();
}

function renderTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        // Handle elements where the original attribute logic failed because of innerHTML overriding
        if (TRANSLATIONS[key] && TRANSLATIONS[key][currentLang]) {
            el.innerHTML = TRANSLATIONS[key][currentLang];
        }
    });
}

function toggleBio(btn) {
    const p = btn.closest('p');
    p.classList.add('expanded');
    btn.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
});
