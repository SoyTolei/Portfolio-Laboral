document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initNavSpy();
    initWorkHoverPreviews();
});

/* ── Nav ── */
function initNav() {
    const header = document.querySelector('.site-header');
    const toggle = document.querySelector('.nav-toggle');
    const end = document.querySelector('.header-end');

    window.addEventListener('scroll', () => {
        header?.classList.toggle('scrolled', window.scrollY > 24);
    });

    if (toggle && end) {
        toggle.addEventListener('click', () => {
            const open = end.classList.toggle('open');
            toggle.classList.toggle('open', open);
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });

        end.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', () => {
                end.classList.remove('open');
                toggle.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const id = this.getAttribute('href');
            if (!id || id === '#') return;
            e.preventDefault();
            const target = document.querySelector(id);
            if (target) window.scrollTo({ top: target.offsetTop - 64, behavior: 'smooth' });
        });
    });
}

function initNavSpy() {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const id = entry.target.id;
            links.forEach(link => {
                link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
            });
        });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

    sections.forEach(s => observer.observe(s));
}

function initWorkHoverPreviews() {
    document.querySelectorAll('.work-thumb--hover').forEach(thumb => {
        const img = thumb.querySelector('.work-thumb__preview img[data-src]');
        if (!img) return;

        const loadPreview = () => {
            if (img.dataset.loaded) return;
            img.dataset.loaded = 'true';

            const markReady = () => thumb.classList.add('work-thumb--ready');
            img.addEventListener('load', markReady, { once: true });
            img.addEventListener('error', markReady, { once: true });
            img.src = img.dataset.src;

            if (img.complete && img.naturalWidth > 0) markReady();
        };

        thumb.addEventListener('mouseenter', loadPreview);
        thumb.addEventListener('focusin', loadPreview);
    });
}

/* ── i18n ── */
const translations = {
    es: {
        logo_sub: 'leonel gallo',
        nav_about: 'Perfil',
        nav_experience: 'Trayectoria',
        nav_projects: 'Proyectos',
        nav_contact: 'Contacto',
        skip_content: 'Saltar al contenido',
        hero_name: 'Leonel Gallo',
        hero_alias: 'Tolei',
        hero_subtitle: 'Analista de soporte técnico en Thomson Reuters. Bejerman, SQL Server y herramientas internas.',
        term_cmd1: 'whoami',
        term_out1: 'leonel.gallo · buenos aires',
        term_cmd2: 'stack --brief',
        term_out2: 'soporte técnico · sql-server · t-sql · csharp · dotnet · python · powershell',
        term_cmd3: 'st2 status',
        term_out3: '3 módulos activos · web · sql · powershell',
        hero_cta_projects: 'Ver proyectos',
        hero_cta_cv: 'CV',
        chip_sql: 'SQL Server',
        chip_dotnet: '.NET',
        chip_csharp: 'C#',
        chip_batch: 'Batch',
        chip_ps: 'PowerShell',
        chip_tsql: 'T-SQL',
        chip_python: 'Python',
        about_eyebrow: '// perfil',
        about_title: 'Perfil',
        about_p1: 'Analista de soporte técnico. Criterio de trabajo: incidentes resueltos de raíz, entornos estables y casos documentados para quien retome el seguimiento.',
        about_p2: 'En <strong>Thomson Reuters</strong>, soporte técnico de <strong>Bejerman</strong> a empresas y estudios contables: instalaciones, SQL Server y operación de mesa de ayuda.',
        about_p3: '<strong>ST2</strong> (Soluciones Tecnológicas) es una suite interna en <strong>C# / .NET</strong> y PowerShell: portal web del agente, herramientas SQL de escritorio y consola de campo. Cubre planillas, blanqueo, PDFs, backups, trazas y diagnóstico de instalaciones.',
        st2_disclaimer: 'Las herramientas ST2 no representan productos ni posiciones oficiales de Thomson Reuters.',
        note_label: '// enfoque',
        note_body: 'Herramientas compartidas y procedimientos consistentes, en lugar de conocimiento que queda en una sola persona. La suite se mantiene activa y se publica por módulo en GitHub.',
        exp_eyebrow: '// carrera',
        exp_title: 'Trayectoria',
        exp_present: 'hoy',
        exp_tr_title: 'Analista de Soporte Técnico',
        exp_tr_b1: 'Soporte técnico de Bejerman a empresas y estudios contables: incidentes, instalaciones y consultas.',
        exp_tr_b2: 'SQL Server en producción: bases, backups, scripts y trazas.',
        exp_tr_b3: 'Diseño y mantenimiento de ST2, la suite que usa la mesa de ayuda día a día.',
        exp_9z_title: 'DBA & IT Support',
        exp_9z_b1: 'SQL y servidores para plataforma de gaming competitivo.',
        exp_9z_b2: 'Usuarios VIP, monitoreo y disponibilidad.',
        exp_9z_b3: 'Coordinación con operaciones en entornos de alta carga.',
        exp_gms_title: 'Data Entry Specialist',
        exp_gms_b1: 'Ingreso y validación de datos con alta precisión.',
        exp_gms_b2: 'Control de consistencia en bases operativas.',
        exp_brinks_title: 'Data Entry',
        exp_brinks_b1: 'Carga y control de documentación operativa.',
        exp_brinks_b2: 'Validación de registros y conciliación de información.',
        projects_eyebrow: '// builds',
        projects_title: 'Proyectos',
        projects_lead: 'Suite <strong>ST2</strong> para la mesa de ayuda, más un proyecto personal. Iniciativa interna; no es un producto de Thomson Reuters.',
        projects_disclaimer: 'Las herramientas ST2 no representan productos ni posiciones oficiales de Thomson Reuters.',
        group_st2: 'Suite ST2',
        group_personal: 'Personal',
        link_live: 'st2.tolei.dev ↗',
        link_web_repo: 'ST2-WEB ↗',
        link_sql_repo: 'ST2-Herramientas-SQL ↗',
        link_bat_repo: 'ST2-BAT ↗',
        link_play: 'jugar ↗',
        proj_st2web_title: 'ST2 WEB',
        proj_st2web_badge: 'Versión actual',
        proj_st2web_tag_sheets: 'Planillas',
        proj_st2web_tag_blanqueo: 'Blanqueo',
        proj_st2web_tag_portal: 'Portal',
        proj_st2web_p1: 'Portal del agente en el navegador: planillas (transferencia, referral I+D, oportunidad), blanqueo de accesos, generador de PDFs A4, Portal Cliente, THOM, AI Platform y panel de accesos por usuario. El .exe de escritorio quedó discontinuado.',
        proj_st2web_stack_prev: '· antes: WPF · WebView2 · SQLite',
        proj_st2web_prev_label: 'Antes: escritorio (.exe)',
        proj_sbbackup_badge_profiler: 'Profiler',
        proj_sbbackup_badge_schedule: 'Programado',
        proj_sbbackup_badge_ai: 'IA',
        proj_sbbackup_title: 'ST2 — Herramientas SQL',
        proj_sbbackup_p1: 'App Windows para bases Bejerman: conexión por registro, backup y restore, backups programados, editor T-SQL con scripts frecuentes, traza tipo Profiler (Extended Events) e IA que explica consultas y errores con el esquema de la base.',
        proj_st2bat_title: 'ST2 BAT — Mantenimiento Bejerman',
        proj_st2bat_p1: 'Consola de campo en PowerShell 5.1: planilla técnica, registración (DLL, Crystal, TLB, DCUBE), herramientas TEC y informe de sesión. Entregable ST2-PS.bat, sin instalar nada en el puesto.',
        proj_game_title: 'Referral Runner',
        proj_game_badge: 'Personal',
        proj_game_p1: 'Runner en el navegador inspirado en el dino de Chrome, ambientado en la oficina: pasillo, mails, tickets y reuniones. JavaScript y Canvas 2D.',
        contact_eyebrow: '// contacto',
        contact_title: 'Contacto',
        contact_subtitle: 'Consultas técnicas, herramientas de soporte u oportunidades en IT.',
        contact_email: 'Escribir por correo',
        cv_button: 'Descargar CV',
        footer_text: 'Tolei · Leonel Gallo · Buenos Aires'
    },
    en: {
        logo_sub: 'leonel gallo',
        nav_about: 'Profile',
        nav_experience: 'Career',
        nav_projects: 'Projects',
        nav_contact: 'Contact',
        skip_content: 'Skip to content',
        hero_name: 'Leonel Gallo',
        hero_alias: 'Tolei',
        hero_subtitle: 'Technical Support Analyst at Thomson Reuters. Bejerman, SQL Server and internal tooling.',
        term_cmd1: 'whoami',
        term_out1: 'leonel.gallo · buenos aires',
        term_cmd2: 'stack --brief',
        term_out2: 'technical support · sql-server · t-sql · csharp · dotnet · python · powershell',
        term_cmd3: 'st2 status',
        term_out3: '3 active modules · web · sql · powershell',
        hero_cta_projects: 'View projects',
        hero_cta_cv: 'CV',
        chip_sql: 'SQL Server',
        chip_dotnet: '.NET',
        chip_csharp: 'C#',
        chip_batch: 'Batch',
        chip_ps: 'PowerShell',
        chip_tsql: 'T-SQL',
        chip_python: 'Python',
        about_eyebrow: '// profile',
        about_title: 'Profile',
        about_p1: 'Technical support analyst. Working standard: root-cause resolution, stable environments, and documented cases for whoever picks up the incident next.',
        about_p2: 'At <strong>Thomson Reuters</strong>, technical support for <strong>Bejerman</strong> to companies and accounting firms: installs, SQL Server and help-desk operations.',
        about_p3: '<strong>ST2</strong> (Technical Solutions) is an internal suite in <strong>C# / .NET</strong> and PowerShell: agent web portal, desktop SQL tools and a field console. It covers case sheets, access wipe requests, PDFs, backups, traces and install diagnostics.',
        st2_disclaimer: 'ST2 tools do not represent official Thomson Reuters products or positions.',
        note_label: '// approach',
        note_body: 'Shared tools and consistent procedures, rather than knowledge that stays with one person. The suite is actively maintained and published per module on GitHub.',
        exp_eyebrow: '// career',
        exp_title: 'Career',
        exp_present: 'now',
        exp_tr_title: 'Technical Support Analyst',
        exp_tr_b1: 'Bejerman technical support for companies and accounting firms: incidents, installs and queries.',
        exp_tr_b2: 'SQL Server in production: databases, backups, scripts and traces.',
        exp_tr_b3: 'Design and upkeep of ST2, the suite the help desk uses every day.',
        exp_9z_title: 'DBA & IT Support',
        exp_9z_b1: 'SQL and servers for a competitive gaming platform.',
        exp_9z_b2: 'VIP users, monitoring and availability.',
        exp_9z_b3: 'Coordination with operations in high-load environments.',
        exp_gms_title: 'Data Entry Specialist',
        exp_gms_b1: 'Data entry and validation with high accuracy.',
        exp_gms_b2: 'Consistency control in operational databases.',
        exp_brinks_title: 'Data Entry',
        exp_brinks_b1: 'Loading and control of operational documentation.',
        exp_brinks_b2: 'Record validation and information reconciliation.',
        projects_eyebrow: '// builds',
        projects_title: 'Projects',
        projects_lead: '<strong>ST2</strong> suite for the help desk, plus a personal project. Internal initiative; not a Thomson Reuters product.',
        projects_disclaimer: 'ST2 tools do not represent official Thomson Reuters products or positions.',
        group_st2: 'ST2 Suite',
        group_personal: 'Personal',
        link_live: 'st2.tolei.dev ↗',
        link_web_repo: 'ST2-WEB ↗',
        link_sql_repo: 'ST2-Herramientas-SQL ↗',
        link_bat_repo: 'ST2-BAT ↗',
        link_play: 'play ↗',
        proj_st2web_title: 'ST2 WEB',
        proj_st2web_badge: 'Current version',
        proj_st2web_tag_sheets: 'Case sheets',
        proj_st2web_tag_blanqueo: 'Access wipe',
        proj_st2web_tag_portal: 'Portal',
        proj_st2web_p1: 'Agent portal in the browser: case sheets (transfers, R&D referrals, sales opportunities), access wipe requests, A4 PDF generator, Portal Cliente, THOM, AI Platform and per-user access admin. The desktop .exe was discontinued.',
        proj_st2web_stack_prev: '· previously: WPF · WebView2 · SQLite',
        proj_st2web_prev_label: 'Before: desktop (.exe)',
        proj_sbbackup_badge_profiler: 'Profiler',
        proj_sbbackup_badge_schedule: 'Scheduled',
        proj_sbbackup_badge_ai: 'AI',
        proj_sbbackup_title: 'ST2 — SQL Tools',
        proj_sbbackup_p1: 'Windows app for Bejerman databases: registry-based connection, backup and restore, scheduled backups, T-SQL editor with frequent scripts, Profiler-style Extended Events trace, and AI that explains queries and errors using the live schema.',
        proj_st2bat_title: 'ST2 BAT — Bejerman Maintenance',
        proj_st2bat_p1: 'Field console in PowerShell 5.1: technical worksheet, component registration (DLL, Crystal, TLB, DCUBE), TEC tools and session report. Shipped as ST2-PS.bat with nothing to install on the workstation.',
        proj_game_title: 'Referral Runner',
        proj_game_badge: 'Personal',
        proj_game_p1: 'Browser runner inspired by Chrome\'s dino game, set in the office: hallway, emails, tickets and meetings. JavaScript and Canvas 2D.',
        contact_eyebrow: '// contact',
        contact_title: 'Contact',
        contact_subtitle: 'Technical queries, support tooling or IT opportunities.',
        contact_email: 'Send an email',
        cv_button: 'Download CV',
        footer_text: 'Tolei · Leonel Gallo · Buenos Aires'
    }
};

let currentLang = 'es';

const CV_FILES = { es: 'CV2026.pdf', en: 'CV2026_EN.pdf' };
const LANG_KEY = 'tolei-portfolio-lang';

function updateCvLinks(lang) {
    const file = CV_FILES[lang] || CV_FILES.es;
    document.querySelectorAll('[data-cv-link]').forEach(el => {
        el.setAttribute('href', file);
        el.setAttribute('download', file);
    });
}

function applyTranslations(lang) {
    const dict = translations[lang];
    if (!dict) return;
    currentLang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem(LANG_KEY, lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const value = dict[el.getAttribute('data-i18n')];
        if (value) el.innerHTML = value;
    });

    updateCvLinks(lang);

    const themeBtn = document.querySelector('.theme-toggle');
    if (themeBtn) {
        const theme = document.documentElement.getAttribute('data-theme') || 'light';
        themeBtn.setAttribute(
            'aria-label',
            lang === 'en'
                ? (theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode')
                : (theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro')
        );
    }
}

const langToggle = document.querySelector('.lang-toggle');
if (langToggle) {
    const savedLang = localStorage.getItem(LANG_KEY) === 'en' ? 'en' : 'es';
    langToggle.addEventListener('click', () => {
        const next = currentLang === 'es' ? 'en' : 'es';
        langToggle.setAttribute('data-lang', next);
        applyTranslations(next);
    });
    langToggle.setAttribute('data-lang', savedLang);
    applyTranslations(savedLang);
}

/* ── Theme ── */
const themeToggle = document.querySelector('.theme-toggle');
const THEME_KEY = 'tolei-portfolio-theme';

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.setAttribute('content', theme === 'dark' ? '#0e0e0c' : '#f6f5f2');
    if (themeToggle) {
        themeToggle.setAttribute('data-theme', theme);
        themeToggle.setAttribute('aria-label', currentLang === 'en'
            ? (theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode')
            : (theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'));
    }
    localStorage.setItem(THEME_KEY, theme);
}

if (themeToggle) {
    const saved = localStorage.getItem(THEME_KEY);
    applyTheme(saved || 'light');

    themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        applyTheme(current === 'dark' ? 'light' : 'dark');
    });
}
