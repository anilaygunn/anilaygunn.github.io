import { useEffect, useState } from 'react'

const GITHUB_USER = 'anilaygunn'

const FEATURED_PROJECTS = [
  {
    name: 'Farm Track',
    url: 'https://apps.apple.com/tr/app/farm-track-tarla-takibi/id6781450090',
    icon: 'fa-solid fa-arrow-up-right-from-square',
    description:
      'Native iOS app for farmers to manage irrigation, fertilization and harvest. SwiftUI + Clean Architecture, SwiftData/CloudKit sync, and on-device Apple Intelligence for crop recommendations. Published on the App Store.',
    tags: ['SwiftUI', 'SwiftData', 'CloudKit', 'Apple Intelligence'],
  },
  {
    name: 'BopSpot',
    url: null,
    icon: null,
    description:
      'Location-based social app for music lovers to discover and connect with nearby users. Real-time messaging and live feed via WebSocket, CoreLocation-based discovery, Spotify API integration.',
    tags: ['SwiftUI', 'MVVM', 'WebSocket', 'CoreLocation'],
  },
]

function ProjectCard({ name, url, icon, description, tags }) {
  const Tag = url ? 'a' : 'div'
  return (
    <Tag
      {...(url ? { href: url, target: '_blank', rel: 'noopener' } : {})}
      className="group p-5 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all bg-white"
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-slate-900">{name}</h3>
        {icon && <i className={`${icon} text-slate-300 group-hover:text-slate-500 text-xs`}></i>}
      </div>
      <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
      {tags?.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {tags.map((t) => (
            <span key={t} className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600">
              {t}
            </span>
          ))}
        </div>
      )}
    </Tag>
  )
}

function useGithubRepos() {
  const [repos, setRepos] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`)
      .then((r) => r.json())
      .then((data) => {
        if (!Array.isArray(data)) throw new Error('unexpected response')
        setRepos(
          data.filter((r) => !r.fork && r.name !== `${GITHUB_USER}.github.io`)
        )
        setStatus('done')
      })
      .catch(() => setStatus('error'))
  }, [])

  return { repos, status }
}

export default function App() {
  const { repos, status } = useGithubRepos()

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-[#fafaf9]/80 backdrop-blur border-b border-slate-200">
        <nav className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-slate-900">Anıl Aygün</a>
          <div className="hidden sm:flex items-center gap-8 text-sm text-slate-500">
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#experience" className="hover:text-slate-900 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <a href="https://github.com/anilaygunn" target="_blank" rel="noopener" className="hover:text-slate-900 transition-colors"><i className="fab fa-github text-lg"></i></a>
            <a href="https://www.linkedin.com/in/an%C4%B1l-ayg%C3%BCn-50a6b9219/" target="_blank" rel="noopener" className="hover:text-slate-900 transition-colors"><i className="fab fa-linkedin text-lg"></i></a>
          </div>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">

        <section className="fade-up">
          <div className="flex items-center gap-5 mb-8">
            <img src="/Anıl Aygün 5x5.JPG" alt="Anıl Aygün" className="w-16 h-16 rounded-full object-cover ring-1 ring-slate-200" />
            <div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Anıl Aygün</h1>
              <p className="text-slate-500">iOS & Cross-Platform Mobile Engineer</p>
            </div>
          </div>
          <p className="text-lg leading-relaxed text-slate-600">
            I build native iOS and cross-platform mobile apps with Swift, SwiftUI, React Native and Flutter —
            from architecture and API integrations to App Store releases. Currently a Mobile Engineer at{' '}
            <span className="text-slate-900 font-medium">Apprel.ai</span> in Luxembourg.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a href="mailto:anlaygun1@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-700 transition-colors">
              <i className="fa-regular fa-envelope"></i> Get in touch
            </a>
            <a href="https://github.com/anilaygunn" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 text-sm font-medium text-slate-700 hover:border-slate-400 transition-colors">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/an%C4%B1l-ayg%C3%BCn-50a6b9219/" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 text-sm font-medium text-slate-700 hover:border-slate-400 transition-colors">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </section>

        <section id="about" className="mt-24 scroll-mt-24">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">About</h2>
          <p className="text-slate-600 leading-relaxed">
            Computer Engineering graduate with professional experience in native iOS and cross-platform mobile
            development. Hands-on with mobile architecture, REST API integrations, Firebase and App Store
            deployments, having built and published production-ready apps in international startup
            environments. A Work and Travel program in the US sharpened my communication and adaptability,
            working across industries with people from different backgrounds. I'm passionate about scalable
            mobile products and continuously expanding into backend technologies and cloud infrastructure.
          </p>
        </section>

        <section id="experience" className="mt-20 scroll-mt-24">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">Experience</h2>
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
              <div>
                <h3 className="font-semibold text-slate-900">Apprel.ai</h3>
                <p className="text-slate-500 text-sm">Jnr. Mobile Engineer (iOS & Cross-Platform) · Luxembourg</p>
              </div>
              <span className="text-sm text-slate-400 whitespace-nowrap">Feb 2026 – Present</span>
            </div>
            <ul className="list-disc list-outside ml-5 text-slate-600 text-sm space-y-1.5 leading-relaxed">
              <li>Develop native iOS features using Swift and SwiftUI, building and maintaining core app screens and components.</li>
              <li>Contribute to the migration of the existing iOS application to React Native, ensuring functional parity and cross-platform compatibility.</li>
              <li>Integrate REST APIs, Firebase Authentication and Firestore across the mobile application.</li>
              <li>Collaborate closely with product and design teams to deliver new mobile features on schedule.</li>
            </ul>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 pt-4">
              <div>
                <h3 className="font-semibold text-slate-900">Mavidna</h3>
                <p className="text-slate-500 text-sm">Jnr. Mobile Engineer (Cross-Platform) · Istanbul, Türkiye</p>
              </div>
              <span className="text-sm text-slate-400 whitespace-nowrap">Mar 2025 – Nov 2025</span>
            </div>
            <ul className="list-disc list-outside ml-5 text-slate-600 text-sm space-y-1.5 leading-relaxed">
              <li>Built a production-ready field operations app for agricultural businesses across Turkey, using Flutter (Dart) with MVVM and MobX.</li>
              <li>Integrated Google Maps with reverse geocoding for real-time location tracking and dynamic field assignment.</li>
              <li>Implemented RESTful API integration with cascaded region-selection dropdowns and native iOS/Android permission modules.</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="mt-20 scroll-mt-24">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">Projects</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {FEATURED_PROJECTS.map((p) => (
              <ProjectCard key={p.name} {...p} />
            ))}
            {status === 'error' && (
              <p className="text-sm text-slate-400 sm:col-span-2">Couldn't load GitHub repos right now.</p>
            )}
            {repos.map((r) => (
              <ProjectCard
                key={r.id}
                name={r.name}
                url={r.homepage || r.html_url}
                icon="fab fa-github"
                description={r.description || 'No description provided.'}
                tags={[r.language, r.stargazers_count > 0 ? `★ ${r.stargazers_count}` : null].filter(Boolean)}
              />
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">Skills</h2>
          <div className="space-y-3 text-sm">
            <div className="flex flex-col sm:flex-row sm:gap-3">
              <span className="text-slate-400 sm:w-32 shrink-0">Languages</span>
              <span className="text-slate-700">Swift, TypeScript, JavaScript, Dart, Python, Go</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3">
              <span className="text-slate-400 sm:w-32 shrink-0">Mobile</span>
              <span className="text-slate-700">SwiftUI, UIKit, React Native, Flutter</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3">
              <span className="text-slate-400 sm:w-32 shrink-0">Architecture</span>
              <span className="text-slate-700">MVVM, MVC, Clean Architecture, MobX</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3">
              <span className="text-slate-400 sm:w-32 shrink-0">Backend & Cloud</span>
              <span className="text-slate-700">Node.js, REST APIs, OAuth 2.0, WebSocket, AWS, Terraform, Kafka</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3">
              <span className="text-slate-400 sm:w-32 shrink-0">Data</span>
              <span className="text-slate-700">Firebase, CloudKit, SwiftData, PostgreSQL, Supabase</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-3">
              <span className="text-slate-400 sm:w-32 shrink-0">Tools</span>
              <span className="text-slate-700">Xcode, Git, Google Maps SDK, App Store Connect, ElevenLabs API</span>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">Education</h2>
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
              <div>
                <h3 className="font-semibold text-slate-900">Ege University</h3>
                <p className="text-slate-500 text-sm">Computer Engineering · Izmir, Türkiye · GPA 3.58/4.00</p>
              </div>
              <span className="text-sm text-slate-400 whitespace-nowrap">2021 – 2026</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
              <div>
                <h3 className="font-semibold text-slate-900">Ulviye Matli Science High School</h3>
                <p className="text-slate-500 text-sm">Science Field · Bursa, Türkiye</p>
              </div>
              <span className="text-sm text-slate-400 whitespace-nowrap">2017 – 2021</span>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-24 scroll-mt-24 text-center border-t border-slate-200 pt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Let's work together</h2>
          <p className="text-slate-500 mb-6">Open to mobile engineering opportunities and interesting projects.</p>
          <a href="mailto:anlaygun1@gmail.com" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-700 transition-colors">
            <i className="fa-regular fa-envelope"></i> anlaygun1@gmail.com
          </a>
          <div className="flex justify-center gap-6 mt-8 text-slate-400">
            <a href="https://github.com/anilaygunn" target="_blank" rel="noopener" className="hover:text-slate-900 transition-colors"><i className="fab fa-github text-xl"></i></a>
            <a href="https://www.linkedin.com/in/an%C4%B1l-ayg%C3%BCn-50a6b9219/" target="_blank" rel="noopener" className="hover:text-slate-900 transition-colors"><i className="fab fa-linkedin text-xl"></i></a>
          </div>
        </section>

        <footer className="text-center text-xs text-slate-400 mt-20">
          © 2026 Anıl Aygün
        </footer>
      </main>
    </>
  )
}
