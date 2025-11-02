* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-blue: #2563eb;
    --secondary-blue: #3b82f6;
    --accent-blue: #9bbcff;
    --dark-bg: #1a1f2e;
    --darker-bg: #0f1218;
    --glass-bg: rgba(25, 30, 45, 0.6);
    --glass-border: rgba(45, 55, 80, 0.6);
    --glass-bg-light: rgba(30, 35, 50, 0.7);
    --text-light: #f0f4ff;
    --text-gray: #b3c9ff;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: #0f1218;
    background:
        radial-gradient(1200px 500px at 15% 10%, rgba(255, 255, 255, 0.12), rgba(0, 0, 0, 0) 45%),
        radial-gradient(1000px 420px at 20% -10%, rgba(59, 130, 246, 0.3), rgba(0, 0, 0, 0) 42%),
        radial-gradient(1000px 450px at 85% 15%, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0) 40%),
        radial-gradient(820px 340px at 80% -12%, rgba(37, 99, 235, 0.28), rgba(0, 0, 0, 0) 40%),
        radial-gradient(700px 350px at 50% 50%, rgba(255, 255, 255, 0.08), rgba(0, 0, 0, 0) 50%),
        radial-gradient(620px 280px at 50% 110%, rgba(56, 189, 248, 0.25), rgba(0, 0, 0, 0) 48%),
        linear-gradient(180deg, #1a1f2e 0%, #0f1218 60%, #1a1f2e 100%);
    background-attachment: fixed;
    color: var(--text-light);
    line-height: 1.6;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
}

/* Subtle animated background particles with white effects */
body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
        radial-gradient(2px 2px at 20% 30%, rgba(255, 255, 255, 0.5), transparent),
        radial-gradient(2px 2px at 60% 70%, rgba(155, 188, 255, 0.4), transparent),
        radial-gradient(1px 1px at 50% 50%, rgba(255, 255, 255, 0.4), transparent),
        radial-gradient(1px 1px at 80% 10%, rgba(255, 255, 255, 0.45), transparent),
        radial-gradient(2px 2px at 90% 60%, rgba(37, 99, 235, 0.3), transparent),
        radial-gradient(1px 1px at 33% 80%, rgba(255, 255, 255, 0.4), transparent),
        radial-gradient(3px 3px at 70% 40%, rgba(255, 255, 255, 0.35), transparent),
        radial-gradient(2px 2px at 40% 80%, rgba(255, 255, 255, 0.4), transparent);
    background-size: 200% 200%;
    background-position: 0% 0%;
    animation: float-up 20s linear infinite;
    pointer-events: none;
    z-index: 0;
    opacity: 0.6;
}

/* Animation keyframes */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
}

@keyframes shimmer {
    0% {
        background-position: -1000px 0;
    }
    100% {
        background-position: 1000px 0;
    }
}

@keyframes gradient-shift {
    0%, 100% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
}

@keyframes glow-pulse {
    0%, 100% {
        box-shadow: 0 0 20px rgba(37, 99, 235, 0.3), 0 0 40px rgba(37, 99, 235, 0.2);
    }
    50% {
        box-shadow: 0 0 30px rgba(37, 99, 235, 0.5), 0 0 60px rgba(37, 99, 235, 0.3);
    }
}

@keyframes float-up {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-20px);
    }
}

@keyframes scale-in {
    from {
        transform: scale(0.9);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
}

/* Glassmorphism utility */
.glass {
    background: rgba(30, 58, 138, 0.15);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}

header {
    background: rgba(25, 30, 45, 0.7);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(45, 55, 80, 0.6);
    padding: 1.2rem 4%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    position: sticky;
    top: 0;
    z-index: 1000;
    transition: all 0.3s ease;
}

header.scrolled {
    padding: 0.8rem 4%;
    background: rgba(25, 30, 45, 0.85);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
}

.logo {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-weight: 700;
    font-size: 1.3rem;
    color: var(--text-light);
    cursor: pointer;
    transition: transform 0.3s ease;
}

.logo:hover {
    transform: scale(1.05);
}

.logo-icon {
    font-size: 1.6rem;
}

.logo-text {
    color: #9bbcff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
}

nav {
    display: flex;
    gap: 2.5rem;
    align-items: center;
}

nav a {
    text-decoration: none;
    color: var(--text-light);
    font-weight: 500;
    font-size: 1rem;
    position: relative;
    padding: 0.5rem 0;
    transition: all 0.3s ease;
}

nav a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #2563eb;
    transition: width 0.3s ease;
}

nav a:hover {
    color: var(--accent-blue);
}

nav a:hover::after {
    width: 100%;
}

nav a.active {
    color: var(--accent-blue);
    font-weight: 600;
}

nav a.active::after {
    width: 100%;
}

.menu-toggle {
    display: none;
    background: rgba(15, 18, 32, 0.8);
    border: 1px solid rgba(31, 42, 68, 0.8);
    border-radius: 8px;
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--text-light);
    padding: 0.5rem 0.8rem;
    transition: all 0.3s ease;
    z-index: 1001;
    backdrop-filter: blur(10px);
}

.menu-toggle:hover {
    color: var(--accent-blue);
    transform: scale(1.1);
    background: rgba(37, 99, 235, 0.3);
    border-color: rgba(37, 99, 235, 0.5);
    box-shadow: 0 0 20px rgba(37, 99, 235, 0.4);
}

.menu-toggle.active {
    color: var(--accent-blue);
}

.container {
    display: flex;
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
    position: relative;
    z-index: 1;
    justify-content: center;
}

main {
    flex-grow: 1;
    padding: 0 4%;
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
}

.side-nav {
    display: none;
}

.side-nav::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.5), transparent);
    border-radius: 20px 20px 0 0;
}

.side-nav::-webkit-scrollbar {
    width: 6px;
}

.side-nav::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
}

.side-nav::-webkit-scrollbar-thumb {
    background: rgba(37, 99, 235, 0.4);
    border-radius: 10px;
}

.side-nav::-webkit-scrollbar-thumb:hover {
    background: rgba(37, 99, 235, 0.6);
}

.side-nav h3 {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    color: var(--text-light);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    padding-bottom: 1.2rem;
    border-bottom: 2px solid rgba(37, 99, 235, 0.4);
}

.side-nav ul {
    list-style: none;
}

.side-nav li {
    margin-bottom: 0.8rem;
}

.side-nav a {
    text-decoration: none;
    color: var(--text-gray);
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.3s ease;
    display: block;
    padding: 1rem 1.2rem;
    border-radius: 12px;
    position: relative;
}

.side-nav a::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;
    background: #2563eb;
    transform: scaleY(0);
    transition: transform 0.3s ease;
    border-radius: 0 4px 4px 0;
}

.side-nav a:hover {
    color: var(--text-light);
    background: rgba(37, 99, 235, 0.2);
}

.side-nav a:hover::before {
    transform: scaleY(1);
}

.side-nav a.active {
    color: var(--text-light);
    font-weight: 600;
    background: rgba(37, 99, 235, 0.3);
    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
}

.side-nav a.active::before {
    transform: scaleY(1);
}

.hero {
    text-align: center;
    padding: 5rem 2rem;
    position: relative;
    z-index: 1;
    animation: fadeInUp 0.8s ease-out;
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(50, 50, 60, 0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(155, 100, 255, 0.4);
    padding: 0.7rem 1.8rem;
    border-radius: 25px;
    margin-bottom: 2rem;
    box-shadow: 0 10px 30px rgba(155, 100, 255, 0.25), 0 0 20px rgba(155, 100, 255, 0.15);
    font-size: 0.85rem;
    font-weight: 500;
    color: #ffffff;
    animation: fadeInUp 0.8s ease-out;
    transition: all 0.3s ease;
}

.hero-badge:hover {
    transform: scale(1.05);
    border-color: rgba(155, 100, 255, 0.5);
    box-shadow: 0 15px 40px rgba(155, 100, 255, 0.3);
}

.badge-icon {
    font-size: 1.2rem;
    color: #b794f6;
    filter: drop-shadow(0 2px 8px rgba(155, 100, 255, 0.5));
}

.hero h1 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 0;
    color: #ffffff;
    position: relative;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
}

.hero h1::after {
    content: '';
    display: block;
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #87ceeb, transparent);
    margin: 1.5rem auto 1.5rem;
    border-radius: 2px;
}

.hero .highlight {
    color: #60a5fa;
    position: relative;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
}

.subtitle {
    font-size: 1.2rem;
    color: var(--text-gray);
    margin-bottom: 0.5rem;
}

.location {
    font-size: 1rem;
    color: var(--text-gray);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.location::before {
    content: '📍';
    font-size: 1.2rem;
    filter: hue-rotate(0deg) saturate(1.5);
}

/* Section Headers */
.section-header {
    text-align: center;
    margin-bottom: 3rem;
    animation: fadeInUp 0.8s ease-out;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #e6f0ff 0%, #9bbcff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
    display: inline-block;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #2563eb, transparent);
    border-radius: 2px;
}

.section-subtitle {
    font-size: 1.1rem;
    color: var(--text-gray);
    margin-top: 1.5rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.features {
    padding: 4rem 0;
    position: relative;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

.feature-card {
    background: rgba(25, 30, 45, 0.5);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(45, 55, 80, 0.5);
    padding: 2.5rem 2rem;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    text-align: center;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
}

.feature-card::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.4s ease;
}

.feature-card.animate {
    opacity: 1;
    animation: scale-in 0.5s ease-out;
}

.feature-card:hover {
    transform: translateY(-10px) scale(1.02);
    background: rgba(30, 35, 50, 0.7);
    border-color: rgba(37, 99, 235, 0.6);
    box-shadow: 0 20px 50px rgba(37, 99, 235, 0.3);
}

.feature-card:hover::before {
    opacity: 1;
}

.feature-icon {
    width: 80px;
    height: 80px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    font-size: 2.5rem;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    z-index: 1;
}

.feature-icon::after {
    content: '';
    position: absolute;
    inset: -5px;
    border-radius: 25px;
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.3), rgba(155, 188, 255, 0.3));
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
    filter: blur(10px);
}

.feature-card:hover .feature-icon {
    transform: scale(1.1) rotate(5deg);
}

.feature-card:hover .feature-icon::after {
    opacity: 1;
}

.feature-icon.blue {
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.3), rgba(59, 130, 246, 0.3));
    border: 1px solid rgba(37, 99, 235, 0.5);
    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.3);
}

.feature-icon.green {
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.3), rgba(59, 130, 246, 0.3));
    border: 1px solid rgba(56, 189, 248, 0.5);
    box-shadow: 0 8px 24px rgba(56, 189, 248, 0.3);
}

.feature-icon.purple {
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.3), rgba(59, 130, 246, 0.3));
    border: 1px solid rgba(155, 188, 255, 0.5);
    box-shadow: 0 8px 24px rgba(155, 188, 255, 0.3);
}

.feature-card h3 {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
    color: var(--text-light);
}

.feature-card p {
    color: var(--text-gray);
    font-size: 0.95rem;
    line-height: 1.7;
}

.about {
    padding: 4rem 0;
    position: relative;
}

.stats-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-bottom: 2rem;
}

.stat-card {
    background: rgba(25, 30, 45, 0.5);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(45, 55, 80, 0.5);
    padding: 3rem 2rem;
    border-radius: 20px;
    text-align: center;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    position: relative;
    overflow: hidden;
}

.stat-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.1), transparent);
    transition: left 0.5s ease;
}

.stat-card.animate {
    opacity: 1;
    animation: scale-in 0.5s ease-out;
}

.stat-card:hover {
    transform: translateY(-8px) scale(1.03);
    background: rgba(30, 35, 50, 0.7);
    border-color: rgba(37, 99, 235, 0.6);
    box-shadow: 0 20px 50px rgba(37, 99, 235, 0.3);
}

.stat-card:hover::before {
    left: 100%;
}

.stat-icon {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, #2563eb, #3b82f6);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    font-size: 1.8rem;
    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.4);
    transition: all 0.4s ease;
    position: relative;
}

.stat-icon::after {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: 20px;
    background: linear-gradient(135deg, #2563eb, #3b82f6);
    opacity: 0.3;
    filter: blur(8px);
    z-index: -1;
    transition: all 0.4s ease;
}

.stat-card:hover .stat-icon {
    transform: scale(1.1) rotate(5deg);
}

.stat-card:hover .stat-icon::after {
    opacity: 0.6;
    filter: blur(12px);
}

.stat-card h2 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    color: var(--text-light);
    background: linear-gradient(135deg, #9bbcff, #60a5fa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.stat-card p {
    color: var(--text-gray);
    font-weight: 500;
}

.mission-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}

.info-card {
    background: rgba(25, 30, 45, 0.5);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(45, 55, 80, 0.5);
    padding: 2.5rem;
    border-radius: 20px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    position: relative;
    overflow: hidden;
}

.info-card::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(37, 99, 235, 0.2) 0%, transparent 70%);
    border-radius: 50%;
    transform: translate(30%, -30%);
    transition: transform 0.4s ease;
}

.info-card.animate {
    opacity: 1;
    animation: scale-in 0.5s ease-out;
}

.info-card:hover {
    transform: translateY(-8px);
    background: rgba(30, 35, 50, 0.7);
    border-color: rgba(37, 99, 235, 0.6);
    box-shadow: 0 20px 50px rgba(37, 99, 235, 0.3);
}

.info-card:hover::after {
    transform: translate(20%, -20%) scale(1.5);
}

.info-icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #2563eb, #3b82f6);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.4);
}

.info-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text-light);
}

.info-card p {
    color: var(--text-gray);
    margin-bottom: 1.5rem;
    line-height: 1.7;
}

.btn-primary {
    background: linear-gradient(135deg, #2563eb, #3b82f6);
    color: #e6f0ff;
    border: none;
    padding: 0.9rem 2.2rem;
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    margin-right: 1rem;
    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.4);
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.btn-primary::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.btn-primary:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 25px rgba(37, 99, 235, 0.6);
    background: linear-gradient(135deg, #1d4ed8, #2563eb);
}

.btn-primary:hover::before {
    width: 300px;
    height: 300px;
}

.btn-primary:active {
    transform: translateY(-1px) scale(1.02);
}

/* Ripple effect */
.ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
    pointer-events: none;
}

@keyframes ripple-animation {
    to {
        transform: scale(4);
        opacity: 0;
    }
}

.btn-primary.large {
    padding: 1rem 3rem;
    font-size: 1.1rem;
}

.btn-secondary {
    background: transparent;
    color: #9bbcff;
    border: 2px solid #9bbcff;
    padding: 0.9rem 2.2rem;
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    backdrop-filter: blur(10px);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    position: relative;
    overflow: hidden;
}

.btn-secondary::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.2), transparent);
    transition: left 0.5s ease;
}

.btn-secondary:hover {
    background: rgba(37, 99, 235, 0.2);
    color: #e6f0ff;
    transform: translateY(-3px) scale(1.05);
    border-color: #2563eb;
    box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3);
}

.btn-secondary:hover::before {
    left: 100%;
}

.btn-secondary:active {
    transform: translateY(-1px) scale(1.02);
}

.cta-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
    flex-wrap: wrap;
}

.cta-buttons .btn-primary,
.cta-buttons .btn-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    flex: 1;
    min-width: 150px;
}

.cta-buttons .btn-primary svg,
.cta-buttons .btn-secondary svg {
    transition: transform 0.3s ease;
}

.cta-buttons .btn-primary:hover svg,
.cta-buttons .btn-secondary:hover svg {
    transform: scale(1.2) rotate(5deg);
}

.events {
    padding: 4rem 0;
    position: relative;
}


.events-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
}

.event-card {
    background: rgba(25, 30, 45, 0.5);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(45, 55, 80, 0.5);
    padding: 2.5rem;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
}

.event-card::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #2563eb, #9bbcff);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
}

.event-card.animate {
    opacity: 1;
    animation: scale-in 0.5s ease-out;
}

.event-card:hover {
    transform: translateY(-10px) scale(1.02);
    background: rgba(30, 35, 50, 0.7);
    border-color: rgba(37, 99, 235, 0.6);
    box-shadow: 0 20px 50px rgba(37, 99, 235, 0.3);
}

.event-card:hover::before {
    transform: scaleX(1);
}

.event-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.event-badge {
    padding: 0.3rem 1rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 600;
    backdrop-filter: blur(10px);
}

.event-badge.upcoming {
    background: rgba(34, 197, 94, 0.2);
    color: #4ADE80;
    border: 1px solid rgba(34, 197, 94, 0.3);
}

.event-badge.past {
    background: rgba(156, 163, 175, 0.2);
    color: #9CA3AF;
    border: 1px solid rgba(156, 163, 175, 0.3);
}

.event-date {
    color: var(--text-gray);
    font-size: 0.9rem;
}

.event-card h3 {
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
    color: var(--text-light);
}

.event-card p {
    color: var(--text-gray);
    margin-bottom: 1rem;
    line-height: 1.6;
}

.event-link {
    color: #9bbcff;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.4s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    padding: 0.5rem 0;
}

.event-link::after {
    content: '→';
    transition: transform 0.4s ease;
    display: inline-block;
}

.event-link:hover {
    color: #e6f0ff;
    transform: translateX(5px);
}

.event-link:hover::after {
    transform: translateX(5px);
}

.join-cta {
    background: rgba(25, 30, 45, 0.5);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(45, 55, 80, 0.5);
    padding: 5rem 3rem;
    text-align: center;
    border-radius: 25px;
    margin: 4rem 0;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
}

.join-cta::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%);
    animation: float-up 6s ease-in-out infinite;
}

.join-cta.animate {
    opacity: 1;
    animation: scale-in 0.6s ease-out;
}

.join-cta:hover {
    background: rgba(30, 35, 50, 0.7);
    border-color: rgba(37, 99, 235, 0.5);
    box-shadow: 0 20px 60px rgba(37, 99, 235, 0.4);
    transform: translateY(-5px);
}

.join-cta h2 {
    font-size: 2.8rem;
    margin-bottom: 1.5rem;
    color: var(--text-light);
    background: linear-gradient(135deg, #e6f0ff, #9bbcff, #2563eb);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradient-shift 3s ease infinite;
    position: relative;
    z-index: 1;
}

.join-cta p {
    color: var(--text-gray);
    font-size: 1.1rem;
    margin-bottom: 2rem;
}

footer {
    background: rgba(25, 30, 45, 0.8);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-top: 1px solid rgba(45, 55, 80, 0.6);
    color: var(--text-light);
    padding: 3rem 2rem 2rem;
    margin-top: 3rem;
}

.footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 3rem;
}

.footer-logo {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 1rem;
}

.footer-logo h4 {
    font-size: 1.2rem;
    background: linear-gradient(135deg, #9bbcff, #e6f0ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.footer-tagline {
    font-size: 0.85rem;
    color: var(--text-gray);
}

.footer-col p {
    color: var(--text-gray);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
}

.footer-desc {
    margin-top: 1rem;
    line-height: 1.6;
}

.footer-col h4 {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    color: var(--text-light);
}

.footer-col ul {
    list-style: none;
}

.footer-col li {
    margin-bottom: 0.6rem;
}

.footer-col a {
    color: var(--text-gray);
    text-decoration: none;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    display: inline-block;
}

.footer-col a:hover {
    color: #9bbcff;
    transform: translateX(5px);
}

.social-icons {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
}

.social-icon {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: var(--text-light);
    transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
    background: rgba(25, 30, 45, 0.6);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(45, 55, 80, 0.6);
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    will-change: transform;
    transform: translateZ(0);
    backface-visibility: hidden;
}

.social-icon::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    transform: translate(-50%, -50%);
    transition: width 0.3s ease, height 0.3s ease;
    pointer-events: none;
}

.social-icon svg {
    width: 22px;
    height: 22px;
    position: relative;
    z-index: 1;
    transition: transform 0.25s ease;
    will-change: transform;
}

.social-icon:hover {
    transform: translateY(-3px) scale(1.05) translateZ(0);
    border-width: 2px;
}

.social-icon:hover::before {
    width: 80px;
    height: 80px;
}

.social-icon:hover svg {
    transform: scale(1.1) translateZ(0);
}

.social-icon.github {
    background: rgba(25, 30, 45, 0.6);
    border-color: rgba(45, 55, 80, 0.6);
}

.social-icon.github:hover {
    background: rgba(36, 41, 47, 0.9);
    border-color: rgba(107, 114, 128, 0.8);
    box-shadow: 0 6px 20px rgba(107, 114, 128, 0.3);
    color: #ffffff;
}

.social-icon.instagram {
    background: rgba(25, 30, 45, 0.6);
    border-color: rgba(45, 55, 80, 0.6);
}

.social-icon.instagram:hover {
    background: rgba(225, 48, 108, 0.25);
    border-color: rgba(225, 48, 108, 0.6);
    box-shadow: 0 6px 20px rgba(225, 48, 108, 0.4);
    color: #ffffff;
}

.social-icon.twitter {
    background: rgba(25, 30, 45, 0.6);
    border-color: rgba(45, 55, 80, 0.6);
}

.social-icon.twitter:hover {
    background: rgba(0, 0, 0, 0.9);
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 6px 20px rgba(255, 255, 255, 0.15);
    color: #ffffff;
}

.social-icon.linkedin {
    background: rgba(25, 30, 45, 0.6);
    border-color: rgba(45, 55, 80, 0.6);
}

.social-icon.linkedin:hover {
    background: rgba(10, 102, 194, 0.3);
    border-color: rgba(10, 102, 194, 0.6);
    box-shadow: 0 6px 20px rgba(10, 102, 194, 0.4);
    color: #0a66c2;
}

.social-icon.discord {
    background: rgba(25, 30, 45, 0.6);
    border-color: rgba(45, 55, 80, 0.6);
}

.social-icon.discord:hover {
    background: rgba(88, 101, 242, 0.3);
    border-color: rgba(88, 101, 242, 0.6);
    box-shadow: 0 6px 20px rgba(88, 101, 242, 0.4);
    color: #5865f2;
}

.social-text {
    margin-bottom: 1.2rem;
    font-size: 0.95rem;
    line-height: 1.6;
}

.footer-highlight {
    background: rgba(37, 99, 235, 0.15);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(37, 99, 235, 0.4);
    padding: 1.2rem;
    border-radius: 12px;
    margin-bottom: 1.2rem;
    transition: all 0.3s ease;
}

.footer-highlight:hover {
    background: rgba(37, 99, 235, 0.25);
    border-color: rgba(37, 99, 235, 0.6);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
}

.footer-highlight p {
    color: var(--text-light);
    margin-bottom: 0.3rem;
    font-weight: 500;
}

.event-time {
    font-size: 0.85rem;
    color: #60a5fa;
}

.footer-contact {
    background: rgba(25, 30, 45, 0.4);
    padding: 1rem;
    border-radius: 10px;
    border: 1px solid rgba(45, 55, 80, 0.5);
}

.footer-contact p {
    color: var(--text-gray);
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.footer-contact p:last-child {
    margin-bottom: 0;
}

/* Tablet and below */
@media (max-width: 1400px) {
    .side-nav {
        width: 280px;
        padding: 2rem 1.5rem;
    }
}

@media (max-width: 1200px) {
    .side-nav {
        display: none;
    }
    
    .container {
        flex-direction: column;
    }
    
    main {
        padding: 0 4%;
    }
    
    .features-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }
    
    .footer-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }
}

@media (max-width: 900px) {
    header {
        padding: 1rem 4%;
    }
    
    nav {
        position: fixed;
        top: 0;
        right: -100%;
        background: rgba(15, 18, 32, 0.95);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-left: 1px solid rgba(31, 42, 68, 0.8);
        flex-direction: column;
        width: 280px;
        padding: 5rem 2rem 2rem;
        box-shadow: -4px 0 40px rgba(0, 0, 0, 0.7);
        transition: right 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        height: 100vh;
        gap: 0;
        align-items: flex-start;
        overflow-y: auto;
    }
    
    nav.active {
        right: 0;
    }
    
    nav a {
        width: 100%;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        margin-bottom: 0.5rem;
        font-size: 1.1rem;
        transition: all 0.3s ease;
    }
    
    nav a:hover {
        background: rgba(37, 99, 235, 0.2);
        transform: translateX(5px);
    }
    
    nav a::after {
        display: none;
    }
    
    nav a.active {
        background: rgba(37, 99, 235, 0.3);
        border-left: 4px solid #2563eb;
    }
    
    .menu-toggle {
        display: block;
    }
    
    /* Overlay for mobile menu */
    body::after {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        backdrop-filter: blur(5px);
    }
    
    body.menu-open::after {
        opacity: 1;
        visibility: visible;
    }
    
    body.menu-open {
        overflow: hidden;
    }
    
    .stats-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }
    
    .mission-container {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .events-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .hero h1 {
        font-size: 3rem;
    }
}

/* Mobile devices */
@media (max-width: 640px) {
    header {
        padding: 0.8rem 4%;
    }
    
    .logo {
        font-size: 1rem;
    }
    
    .logo-icon {
        font-size: 1.2rem;
    }
    
    main {
        padding: 0 5%;
    }
    
    .hero {
        padding: 2rem 1rem;
    }
    
    .hero-badge {
        font-size: 0.75rem;
        padding: 0.4rem 1rem;
    }
    
    .badge-icon {
        font-size: 1rem;
    }
    
    .hero h1 {
        font-size: 2.2rem;
        margin-bottom: 0.8rem;
    }
    
    .subtitle {
        font-size: 1rem;
    }
    
    .location {
        font-size: 0.9rem;
    }
    
    .features {
        padding: 2rem 0;
    }
    
    .features-grid {
        grid-template-columns: 1fr;
        gap: 1.2rem;
    }
    
    .feature-card {
        padding: 1.5rem;
    }
    
    .feature-icon {
        width: 50px;
        height: 50px;
        font-size: 1.5rem;
    }
    
    .feature-card h3 {
        font-size: 1.1rem;
    }
    
    .feature-card p {
        font-size: 0.9rem;
    }
    
    .about {
        padding: 2rem 0;
    }
    
    .stats-container {
        grid-template-columns: 1fr;
        gap: 1.2rem;
    }
    
    .stat-card {
        padding: 2rem 1.5rem;
    }
    
    .stat-card h2 {
        font-size: 2rem;
    }
    
    .mission-container {
        gap: 1.2rem;
    }
    
    .info-card {
        padding: 1.5rem;
    }
    
    .info-card h3 {
        font-size: 1.3rem;
    }
    
    .info-card p {
        font-size: 0.9rem;
    }
    
    .btn-primary,
    .btn-secondary {
        padding: 0.7rem 1.5rem;
        font-size: 0.9rem;
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
    }
    
    .events {
        padding: 2rem 0;
    }
    
    .events h2 {
        font-size: 1.6rem;
        margin-bottom: 1.5rem;
    }
    
    .event-card {
        padding: 1.5rem;
    }
    
    .event-card h3 {
        font-size: 1.2rem;
    }
    
    .event-card p {
        font-size: 0.9rem;
    }
    
    .join-cta {
        padding: 3rem 1.5rem;
        margin: 2rem 0;
    }
    
    .join-cta h2 {
        font-size: 1.8rem;
    }
    
    .join-cta p {
        font-size: 1rem;
    }
    
    .btn-primary.large {
        padding: 0.9rem 2rem;
        font-size: 1rem;
    }
    
    footer {
        padding: 2rem 1.5rem 1.5rem;
    }
    
    .footer-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .footer-logo {
        gap: 0.6rem;
    }
    
    .footer-logo h4 {
        font-size: 1.1rem;
    }
    
    .footer-col h4 {
        font-size: 1rem;
    }
}

/* Extra small devices */
@media (max-width: 400px) {
    .hero h1 {
        font-size: 1.8rem;
    }
    
    .subtitle {
        font-size: 0.9rem;
    }
    
    .btn-primary,
    .btn-secondary {
        display: block;
        width: 100%;
        margin-right: 0;
        margin-bottom: 0.8rem;
    }
    
    .join-cta h2 {
        font-size: 1.5rem;
    }
    
    .stat-card h2 {
        font-size: 1.8rem;
    }
}
