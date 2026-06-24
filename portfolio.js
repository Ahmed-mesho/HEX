// Portfolio page specific functionality

const portfolioProjects = [
    {
        id: 1,
        category: 'web'
    },
    { id: 2, category: 'mobile' },
    { id: 3, category: 'web' },
    { id: 4, category: 'design' },
    { id: 5, category: 'web' },
    { id: 6, category: 'mobile' }
];

// Portfolio modal details are now generated dynamically by language,
// using the same translations object from script.js.
function getProjectDetailsHtml(index, lang) {
    const t = (key) => {
        const v = (window.translations && window.translations[lang] && window.translations[lang][key])
            || (window.translations && window.translations.en && window.translations.en[key]);
        return v || '';
    };

    const trans = window.translations;
    const tt = (k) => (trans && trans[lang] && trans[lang][k]) ? trans[lang][k] : (trans && trans.en && trans.en[k]) ? trans.en[k] : '';


    const p = [
        {
            titleKey: 'project1-details-title',
            html: (tt) => `
                <div>
                    <h3>${tt('project1-details-title')}</h3>
                    <p><strong>${tt('project-details-category')}:</strong> ${tt('project1-details-category')}</p>
                    <p><strong>${tt('project-details-timeline')}:</strong> ${tt('project1-details-timeline')}</p>
                    <p><strong>${tt('project-details-team')}:</strong> ${tt('project1-details-team')}</p>
                    <p><strong>${tt('project-details-technologies')}:</strong> ${tt('project1-details-tech')}</p>
                    <p style="margin-top: 1rem; line-height: 1.6;">${tt('project1-details-body')}</p>
                    <p style="margin-top: 1rem; color: var(--success-color); font-weight: 600;">✓ ${tt('project1-details-metric')}</p>
                </div>
            `
        },
        {
            titleKey: 'project2-details-title',
            html: (tt) => `
                <div>
                    <h3>${tt('project2-details-title')}</h3>
                    <p><strong>${tt('project-details-category')}:</strong> ${tt('project2-details-category')}</p>
                    <p><strong>${tt('project-details-platforms')}:</strong> ${tt('project2-details-platforms')}</p>
                    <p><strong>${tt('project-details-users')}:</strong> ${tt('project2-details-users')}</p>
                    <p><strong>${tt('project-details-technologies')}:</strong> ${tt('project2-details-tech')}</p>
                    <p style="margin-top: 1rem; line-height: 1.6;">${tt('project2-details-body')}</p>
                    <p style="margin-top: 1rem; color: var(--success-color); font-weight: 600;">✓ ${tt('project2-details-metric')}</p>
                </div>
            `
        },
        {
            titleKey: 'project3-details-title',
            html: (tt) => `
                <div>
                    <h3>${tt('project3-details-title')}</h3>
                    <p><strong>${tt('project-details-category')}:</strong> ${tt('project3-details-category')}</p>
                    <p><strong>${tt('project-details-data-processing')}:</strong> ${tt('project3-details-data-processing')}</p>
                    <p><strong>${tt('project-details-clients')}:</strong> ${tt('project3-details-clients')}</p>
                    <p><strong>${tt('project-details-technologies')}:</strong> ${tt('project3-details-tech')}</p>
                    <p style="margin-top: 1rem; line-height: 1.6;">${tt('project3-details-body')}</p>
                    <p style="margin-top: 1rem; color: var(--success-color); font-weight: 600;">✓ ${tt('project3-details-metric')}</p>
                </div>
            `
        },
        {
            titleKey: 'project4-details-title',
            html: (tt) => `
                <div>
                    <h3>${tt('project4-details-title')}</h3>
                    <p><strong>${tt('project-details-category')}:</strong> ${tt('project4-details-category')}</p>
                    <p><strong>${tt('project-details-components')}:</strong> ${tt('project4-details-components')}</p>
                    <p><strong>${tt('project-details-products-covered')}:</strong> ${tt('project4-details-products-covered')}</p>
                    <p><strong>${tt('project-details-tools')}:</strong> ${tt('project4-details-tools')}</p>
                    <p style="margin-top: 1rem; line-height: 1.6;">${tt('project4-details-body')}</p>
                    <p style="margin-top: 1rem; color: var(--success-color); font-weight: 600;">✓ ${tt('project4-details-metric')}</p>
                </div>
            `
        },
        {
            titleKey: 'project5-details-title',
            html: (tt) => `
                <div>
                    <h3>${tt('project5-details-title')}</h3>
                    <p><strong>${tt('project-details-category')}:</strong> ${tt('project5-details-category')}</p>
                    <p><strong>${tt('project-details-products')}:</strong> ${tt('project5-details-products')}</p>
                    <p><strong>${tt('project-details-countries')}:</strong> ${tt('project5-details-countries')}</p>
                    <p><strong>${tt('project-details-technologies')}:</strong> ${tt('project5-details-tech')}</p>
                    <p style="margin-top: 1rem; line-height: 1.6;">${tt('project5-details-body')}</p>
                    <p style="margin-top: 1rem; color: var(--success-color); font-weight: 600;">✓ ${tt('project5-details-metric')}</p>
                </div>
            `
        },
        {
            titleKey: 'project6-details-title',
            html: (tt) => `
                <div>
                    <h3>${tt('project6-details-title')}</h3>
                    <p><strong>${tt('project-details-category')}:</strong> ${tt('project6-details-category')}</p>
                    <p><strong>${tt('project-details-users')}:</strong> ${tt('project6-details-users')}</p>
                    <p><strong>${tt('project-details-doctors')}:</strong> ${tt('project6-details-doctors')}</p>
                    <p><strong>${tt('project-details-technologies')}:</strong> ${tt('project6-details-tech')}</p>
                    <p style="margin-top: 1rem; line-height: 1.6;">${tt('project6-details-body')}</p>
                    <p style="margin-top: 1rem; color: var(--success-color); font-weight: 600;">✓ ${tt('project6-details-metric')}</p>
                </div>
            `
        }
    ];

    return p[index].html(tt);
}


document.addEventListener('DOMContentLoaded', () => {
    setupPortfolioListeners();
});

function setupPortfolioListeners() {
    const viewButtons = document.querySelectorAll('.view-btn');

    viewButtons.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            showProjectDetail(index);
        });
    });

    const closeBtn = document.getElementById('closeProjectModal');
    const modal = document.getElementById('projectModal');

    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
}

function showProjectDetail(index) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('projectModalBody');

    const lang = (document.documentElement.getAttribute('lang') === 'ar') ? 'ar' : 'en';
    modalBody.innerHTML = getProjectDetailsHtml(index, lang);
    modal.style.display = 'block';
}
