'use client'

import { useRef, useState, useEffect } from 'react'
import {
  Archive,
  Award,
  BriefcaseBusiness,
  ChevronRight,
  Code,
  Database,
  Download,
  FileText,
  Folder,
  FolderOpen,
  GitBranch,
  Laptop,
  LineChart,
  Mail,
  MapPin,
  Mic,
  Minus,
  Monitor,
  MousePointer2,
  NotebookPen,
  PanelTop,
  PieChart,
  Scale,
  Settings,
  Sparkles,
  Star,
  Sun,
  Moon,
  Trophy,
  UserRound,
  Terminal,
  X,
} from 'lucide-react'

function Linkedin(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

type WindowId = 'profile' | 'resume' | 'experience' | 'achievements' | 'contact' | 'projects' | 'terminal' | 'certifications'

type WindowState = {
  id: WindowId
  title: string
  icon: typeof UserRound
  x: number
  y: number
  width?: number
  height?: number
  minimized: boolean
  z: number
}

const windowContent: Record<WindowId, { eyebrow: string; title: string; body: string }> = {
  profile: { eyebrow: 'USER PROFILE', title: 'Priyanshu Bhatt', body: 'Product-minded engineer building useful, considered digital experiences.' },
  resume: { eyebrow: 'DOCUMENT', title: 'Download Resume', body: 'A concise snapshot of my experience, selected work, and ways of thinking.' },
  experience: { eyebrow: 'DIRECTORY', title: 'Experience', body: 'My professional experience and internships.' },
  achievements: { eyebrow: 'DIRECTORY', title: 'Achievements', body: 'A collection of technical milestones, hackathons, and extracurricular wins.' },
  contact: { eyebrow: 'DIRECTORY', title: 'Contact Me', body: 'Open to thoughtful collaborations, product conversations, and ambitious side quests.' },
  terminal: { eyebrow: 'SYSTEM', title: 'Terminal', body: 'Command line interface for PB OS.' },
  projects: { eyebrow: 'DIRECTORY', title: 'Projects', body: 'A small collection of systems, interfaces, and visual experiments.' },
  certifications: { eyebrow: 'DIRECTORY', title: 'Certifications', body: 'CERTIFICATIONS & PROFESSIONAL LEARNING' },
}

const experienceItems = [
  { name: 'Data Analytics Intern', detail: 'IBM SkillsBuild · Aug - Sept 2026', icon: BriefcaseBusiness, description: `Completed a six-week IBM SkillsBuild Data Analytics with AI Internship through BharatCares, in collaboration with IBM and in association with AICTE. Applied data analytics concepts through an AI-powered customer sales analytics project, working with SQL and MySQL for database analytics and integrating Gemini AI for natural-language root-cause analysis and business strategy generation.`, image: '/internship.jpeg' },
]
const achievementItems = [
  { name: 'Problem Solving & DSA', detail: 'LeetCode · 250+ Questions Solved', icon: Code, description: 'Consistently practiced data structures and algorithms, solving over 250 problems to sharpen logic and optimization skills.', link: 'https://leetcode.com/u/priyanshu_bhatt01/' },
  { name: 'Python Proficiency', detail: 'HackerRank · Gold Star Badge', icon: Star, description: 'Achieved the Gold Star badge for Python, demonstrating strong foundational knowledge and advanced problem-solving in the language.', link: 'https://www.hackerrank.com/profile/bhattpriyansh001' },
  { name: 'Software Hackathons', detail: 'College Level · 2x Participant', icon: Laptop, description: 'Collaborated with teams in high-pressure environments to build innovative software prototypes and solutions.', image: '/hackathon.jpg' },
  { name: 'Public Speaking', detail: 'College Club · Speech Competition', icon: Mic, description: 'Participated in a speech competition, developing strong communication and presentation skills in front of an audience.', image: '/speech.jpg' },
  { name: 'Athletics & Teamwork', detail: 'Cricket · 3x Tournament Winner', icon: Trophy, description: 'Secured victories in 3 cricket tournaments, showcasing dedication, teamwork, and strategic sportsmanship.', image: '/cricket.jpg' },
]
const projectItems = [
  { name: 'DataPulse AI', detail: 'Data Intelligence Platform', icon: Database, description: 'Developed an enterprise-grade data intelligence platform to centralize and analyze business datasets. Built real-time data ingestion pipelines, AI-powered analytics, and role-based workspace management.', tech: 'Java, Spring Boot, PostgreSQL, Next.js, Docker, Spring AI, Kafka', link: 'https://github.com/priyanshuu00/DataPulse-Ai' },
  { name: 'LegalMitra', detail: 'AI Legal Aid Platform', icon: Scale, description: 'AI-powered legal assistance platform that converts user complaints into structured legal documents aligned with 20+ relevant IPC sections. Built a rule-based IPC mapping engine and automated PDF generation.', tech: 'Java, Spring Boot, FastAPI, MySQL', link: 'https://github.com/LuckySinghRawat/LegalMitra-AI' },
  { name: 'SafeLang', detail: 'Mini Language Compiler', icon: Code, description: 'Built a Java-based mini programming language compiler implementing all 4 compilation phases, including lexical analysis, syntax parsing, semantic analysis, and intermediate code generation.', tech: 'Java', link: 'https://github.com/LuckySinghRawat/Safe-Lang' },
  { name: 'Customer Intelligence & Sales Analytics', detail: 'End-to-End Analytics Platform', icon: LineChart, description: 'Developed an end-to-end customer analytics platform with automated ETL pipelines, advanced SQL analytics, interactive dashboards, and AI-generated business insights on 10K+ e-commerce records.', tech: 'Python, MySQL, Spark, Streamlit, Gemini AI', link: 'https://github.com/priyanshuu00/AI-Powered-Customer-Sales-Analytics-Platform' },
  { name: 'Churn & Retention Intelligence', detail: 'Decision-Support Tool', icon: PieChart, description: 'Owned end-to-end product lifecycle for an AI-powered churn decision-support tool. Developed a Gemini-powered Next-Best-Action engine that converts customer-specific churn drivers into retention recommendations.', tech: 'MySQL, Python, Tableau, Scikit-Learn, Gemini API', link: 'https://github.com/priyanshuu00/churn-prediction' },
]

const certificationsItems = [
  { title: 'JPMorgan Chase & Co.', subtitle: 'Software Engineering Job Simulation', issuer: 'Forage', date: 'July 2026', description: 'Completed a software engineering job simulation focused on practical engineering tasks, problem-solving, and applying software development concepts to industry-style challenges.', skills: 'Software Engineering, Problem Solving, Software Development', icon: Award, link: '/jp-morgan.pdf' },
  { title: 'Deloitte', subtitle: 'Data Analytics Job Simulation', issuer: 'Forage', date: '2026', description: 'Completed a data analytics job simulation focused on analytical problem-solving, interpreting data, and applying data-driven approaches to business challenges.', skills: 'Data Analytics, Data Interpretation, Analytical Thinking', icon: Award, link: '/deloitte.pdf' },
  { title: 'SQL (Advanced) Skill Certification', subtitle: '', issuer: 'HackerRank', date: 'July 2026', description: 'Earned an advanced SQL skill certification demonstrating proficiency in querying relational databases and solving SQL problems.', skills: 'SQL, Relational Databases, Querying', icon: Award, image: '/sql-advanced.png' },
  { title: 'Python (Basic) Skill Certification', subtitle: '', issuer: 'HackerRank', date: '2026', description: 'Earned a basic Python skill certification demonstrating foundational knowledge and problem-solving in the language.', skills: 'Python, Problem Solving', icon: Award, image: '/python-basic.jpg' },
  { title: 'Practical GitHub Actions', subtitle: '', issuer: 'LinkedIn Learning', date: 'October 8, 2026', description: 'Completed hands-on training in GitHub Actions, learning the fundamentals of workflow automation and CI/CD concepts for software development.', skills: 'GitHub Actions, Workflow Automation, CI/CD Fundamentals', icon: Award, image: '/linkdin.jpg' },
]

const desktopItems: { id: WindowId; label: string; icon: any; group: string; large?: boolean }[] = [
  { id: 'profile' as WindowId, label: 'Priyanshu Bhatt', icon: UserRound, group: 'left-top' },
  { id: 'resume' as WindowId, label: 'Download Resume', icon: Download, group: 'left-top' },
  { id: 'experience' as WindowId, label: 'Experience', icon: BriefcaseBusiness, group: 'left-top' },
  { id: 'achievements' as WindowId, label: 'Achievements', icon: Trophy, group: 'left-top' },
  { id: 'terminal' as WindowId, label: 'Terminal', icon: Terminal as any, group: 'right-top' },
  { id: 'projects' as WindowId, label: 'Projects', icon: FolderOpen, group: 'right-top' },
  { id: 'certifications' as WindowId, label: 'Certifications', icon: Award, group: 'right-top' },
  { id: 'contact' as WindowId, label: 'Contact Me', icon: Mail, group: 'right-top' },
]

function DesktopIcon({ item, onOpen }: { item: (typeof desktopItems)[number]; onOpen: (id: WindowId) => void }) {
  const Icon = item.icon
  return (
    <button className={`desktop-icon ${item.large ? 'desktop-icon-large' : ''}`} onClick={() => onOpen(item.id)} aria-label={`Open ${item.label}`}>
      <span className="icon-tile"><Icon strokeWidth={1.5} /></span>
      <span>{item.label}</span>
    </button>
  )
}



function TerminalApp({ openWindow }: { openWindow: (id: WindowId) => void }) {
  const [history, setHistory] = useState<{ command?: string; output: React.ReactNode }[]>([
    { output: 'Welcome to PBOS Terminal.\nType "help" to see available commands.' }
  ])
  const [input, setInput] = useState('')
  const [cmdHistory, setCmdHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const historyRef = useRef<HTMLDivElement>(null)

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim()
    if (!trimmed) {
      setHistory(prev => [...prev, { command: '', output: '' }])
      return
    }
    
    setCmdHistory(prev => [...prev, trimmed])
    setHistoryIndex(-1)
    
    const args = trimmed.split(' ')
    const baseCmd = args[0].toLowerCase()
    
    let output: React.ReactNode = ''
    switch(baseCmd) {
      case 'help':
        output = `Available commands:
  about         About Priyanshu
  whoami        Display user information
  skills        Technical skills
  projects      List projects
  experience    Work experience
  certifications Professional certifications
  education     Education
  achievements  Achievements
  resume        Open/download resume
  contact       Contact information
  github        Open GitHub
  linkedin      Open LinkedIn
  neofetch      Display system information
  clear         Clear terminal
  pwd           Show current directory
  ls            List files
  date          Display current date
  echo          Print text
  open          Open a desktop application`
        break
      case 'about':
      case 'whoami':
        output = 'Priyanshu Bhatt - Product-minded engineer building useful, considered digital experiences.'
        break
      case 'skills':
        output = 'Java, Python, C, C++, Data Structures & Algorithms, MySQL, MongoDB, Spring Boot, FastAPI, NumPy, Pandas, Docker'
        break
      case 'projects':
        output = projectItems.map(p => `- ${p.name}: ${p.detail}`).join('\n')
        break
      case 'experience':
        output = experienceItems.map(e => `- ${e.name} (${e.detail})`).join('\n')
        break
      case 'certifications':
        if (args[1] === '--help') {
          output = 'certifications - Display professional certifications and training.\nUsage: certifications'
        } else {
          output = `PB OS CERTIFICATIONS\n====================\n\n` + certificationsItems.map((c, i) => {
            const num = (i + 1).toString().padStart(2, '0')
            let res = `[${num}] ${c.title}\n`
            if (c.subtitle) res += `     ${c.subtitle}\n`
            res += `     Issuer: ${c.issuer}\n     Date: ${c.date}\n     Focus: ${c.skills}`
            return res
          }).join('\n\n')
        }
        break
      case 'open':
        if (args[1]) {
          const app = args.slice(1).join(' ').toLowerCase()
          const matched = desktopItems.find(d => d.id === app || d.label.toLowerCase() === app)
          if (matched) {
            openWindow(matched.id)
            output = `Opening ${matched.label}...`
          } else {
            output = `Application not found: ${app}`
          }
        } else {
          output = `Usage: open [app_name]\nExample: open certifications`
        }
        break
      case 'education':
        output = 'Graphic Era Hill University | Dehradun\nBachelor of Technology in Computer Science Engineering (Artificial Intelligence & Data Science)\n\nKendriya Vidyalaya, Indian Military Academy | Dehradun\nHigher Secondary (PCM)\n\nKendriya Vidyalaya, Indian Military Academy | Dehradun\nSecondary'
        break
      case 'achievements':
        output = achievementItems.map(a => `- ${a.name}: ${a.detail}`).join('\n')
        break
      case 'resume':
        openWindow('resume')
        output = 'Opening resume window...'
        break
      case 'contact':
        output = 'Email: bhattpriyansh0090@gmail.com\nLinkedIn: linkedin.com/in/priyanshu-bhatt-1b00b6321/\nGitHub: github.com/priyanshuu00'
        break
      case 'github':
        window.open('https://github.com/priyanshuu00', '_blank')
        output = 'Opening GitHub...'
        break
      case 'linkedin':
        window.open('https://linkedin.com/in/priyanshu-bhatt-1b00b6321/', '_blank')
        output = 'Opening LinkedIn...'
        break
      case 'clear':
        setHistory([])
        setInput('')
        return
      case 'pwd':
        output = '/home/pb/desktop'
        break
      case 'ls':
        output = desktopItems.map(i => i.label.toLowerCase().replace(/ /g, '_')).join('  ')
        break
      case 'date':
        output = new Date().toString()
        break
      case 'echo':
        output = args.slice(1).join(' ')
        break
      case 'neofetch':
        output = `       ██████╗ ██████╗
       PB OS

USER       Priyanshu Bhatt
SYSTEM     PB Portfolio OS
ROLE       Software / Data / AI
SHELL      pb-shell
PROJECTS   ${projectItems.length}
STATUS     ONLINE`
        break
      default:
        output = `Command not found: ${baseCmd}\nType 'help' to see available commands.`
    }
    
    setHistory(prev => [...prev, { command: trimmed, output }])
    setInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (cmdHistory.length > 0) {
        const nextIndex = historyIndex < cmdHistory.length - 1 ? historyIndex + 1 : historyIndex
        setHistoryIndex(nextIndex)
        setInput(cmdHistory[cmdHistory.length - 1 - nextIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1
        setHistoryIndex(nextIndex)
        setInput(cmdHistory[cmdHistory.length - 1 - nextIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput('')
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault()
      setHistory([])
    }
  }

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight
    }
  }, [history])

  return (
    <div className="terminal-app" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-history" ref={historyRef}>
        {history.map((h, i) => (
          <div key={i} className="terminal-entry">
            {h.command !== undefined && <div className="terminal-cmd"><span className="terminal-prompt">PB@portfolio:~$</span> <span className="terminal-cmd-text">{h.command}</span></div>}
            <div className="terminal-out">{h.output}</div>
          </div>
        ))}
      </div>
      <div className="terminal-input-row">
        <span className="terminal-prompt">PB@portfolio:~$</span>
        <input 
          ref={inputRef} 
          type="text" 
          value={input} 
          onChange={e => setInput(e.target.value)} 
          onKeyDown={handleKeyDown} 
          autoFocus 
          spellCheck={false}
          autoComplete="off"
        />
      </div>
    </div>
  )
}

function Clock() {
  const [time, setTime] = useState<Date | null>(null)
  useEffect(() => {
    setTime(new Date())
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])
  if (!time) return <span>--:--</span>
  return <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
}

function StartMenu({ isOpen, onClose, onOpenApp }: { isOpen: boolean; onClose: () => void; onOpenApp: (id: WindowId) => void }) {
  if (!isOpen) return null
  return (
    <>
      <div className="start-menu-backdrop" onClick={onClose} />
      <div className="start-menu">
        <div className="start-menu-header"><Monitor size={18} /> PB OS</div>
        <div className="start-menu-items">
          {desktopItems.map(item => {
            const Icon = item.icon
            return (
              <button key={item.id} onClick={() => { onOpenApp(item.id); onClose() }}>
                <Icon size={16} /> {item.label}
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}

function Taskbar({ windows, activeWindowId, openWindow, minimizeWindow, restoreWindow }: { windows: WindowState[]; activeWindowId: WindowId | null; openWindow: (id: WindowId) => void; minimizeWindow: (id: WindowId) => void; restoreWindow: (id: WindowId) => void }) {
  const [startOpen, setStartOpen] = useState(false)
  return (
    <div className="os-taskbar">
      <div className="taskbar-left">
        <button className="start-button" onClick={() => setStartOpen(!startOpen)}>
          <span className="start-icon">◉</span> PB OS
        </button>
        <StartMenu isOpen={startOpen} onClose={() => setStartOpen(false)} onOpenApp={openWindow} />
      </div>
      <div className="taskbar-center">
        {windows.map(w => {
          const isActive = activeWindowId === w.id && !w.minimized
          return (
            <button 
              key={w.id} 
              className={`taskbar-app ${isActive ? 'active' : ''} ${w.minimized ? 'minimized' : ''}`}
              onClick={() => {
                if (w.minimized) restoreWindow(w.id)
                else if (isActive) minimizeWindow(w.id)
                else restoreWindow(w.id)
              }}
            >
              <w.icon size={14} /> <span className="taskbar-app-title">{w.title}</span>
            </button>
          )
        })}
      </div>
      <div className="taskbar-right">
        <span className="taskbar-status">
          <span className="status-dot"></span> ONLINE
        </span>
        <span className="taskbar-clock"><Clock /></span>
      </div>
    </div>
  )
}

function WindowBody({ id, openWindow }: { id: WindowId; openWindow: (id: WindowId) => void }) {

  const content = windowContent[id]
  if (id === 'terminal') return <TerminalApp openWindow={openWindow} />
  if (id === 'profile') return <div className="window-body profile-body"><div className="profile-mark"><img src="/profile.jpg" alt="Profile Photo" onError={(e) => { e.currentTarget.style.display='none'; e.currentTarget.parentElement!.innerHTML = '<span style="font-size: 10px; text-align: center; color: #71827c; line-height: 1.3;">Drop profile.jpg<br/>in public/</span>'; }} /></div><div><p className="window-eyebrow">{content.eyebrow}</p><h2>{content.title}</h2><p>{content.body}</p></div><div className="meta-grid"><span>LOCATION <strong>Dehradun, Uttarakhand</strong></span><span>FOCUS <strong>Data Analytics and Software Development</strong></span></div></div>
  if (id === 'resume') return <div className="window-body"><p className="window-eyebrow">{content.eyebrow}</p><h2>{content.title}</h2><p>{content.body}</p><div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '16px 0' }}><a className="download-link" href="/resume-sde.pdf" download><Download /> Resume for SDE role <ChevronRight /></a><a className="download-link" href="/resume-data-analyst.pdf" download><Download /> Resume for Data Analyst role <ChevronRight /></a></div><p className="muted-caption">PDF · Updated Jan 2025</p></div>
  if (id === 'experience') return <div className="window-body"><p className="window-eyebrow">{content.eyebrow}</p><h2>{content.title}</h2><p>{content.body}</p><div className="project-list">{experienceItems.map((exp) => { const Icon = exp.icon; return <div key={exp.name} style={{ borderBottom: '1px solid #626563' }}><details style={{ cursor: 'pointer' }}><summary className="project-row" style={{ borderBottom: 'none', listStyle: 'none' }}><Icon /><span><strong>{exp.name}</strong><small>{exp.detail}</small></span><ChevronRight /></summary><div style={{ padding: '0 0 16px 30px', fontSize: '14px', color: '#a8aba6', lineHeight: 1.5 }}><p style={{ marginBottom: '12px' }}>{exp.description}</p>{exp.image && <a href={exp.image} target="_blank" rel="noopener noreferrer" style={{ width: '100%', height: 'auto', background: 'rgba(255,255,255,0.02)', borderRadius: '6px', overflow: 'hidden', display: 'block', border: '1px dashed #626563', marginBottom: '8px', cursor: 'pointer' }}><img src={exp.image} alt={exp.name} style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block' }} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span style="color: #626563; font-size: 12px; font-family: monospace;">Drop ' + exp.image + ' in public/ folder</span>'; }} /></a>}</div></details></div> })}</div></div>
  if (id === 'achievements') return <div className="window-body"><p className="window-eyebrow">{content.eyebrow}</p><h2>{content.title}</h2><p>{content.body}</p><div className="project-list">{achievementItems.map((achieve) => { const Icon = achieve.icon; return <div key={achieve.name} style={{ borderBottom: '1px solid #626563' }}><details style={{ cursor: 'pointer' }}><summary className="project-row" style={{ borderBottom: 'none', listStyle: 'none' }}><Icon /><span><strong>{achieve.name}</strong><small>{achieve.detail}</small></span><ChevronRight /></summary><div style={{ padding: '0 0 16px 30px', fontSize: '14px', color: '#a8aba6', lineHeight: 1.5 }}><p style={{ marginBottom: '12px' }}>{achieve.description}</p>{achieve.image && <div style={{ width: '100%', height: '180px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #626563', marginBottom: '8px' }}><img src={achieve.image} alt={achieve.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span style="color: #626563; font-size: 12px; font-family: monospace;">Drop ' + achieve.image + ' in public/ folder</span>'; }} /></div>}{achieve.link && <a href={achieve.link} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: 'rgba(255,255,255,0.1)', border: '1px solid #626563', color: '#eeeae0', borderRadius: '4px', textDecoration: 'none', fontSize: '13px' }}>View Profile <ChevronRight size={14} /></a>}</div></details></div> })}</div></div>
  if (id === 'projects') return <div className="window-body"><p className="window-eyebrow">{content.eyebrow}</p><h2>{content.title}</h2><p>{content.body}</p><div className="project-list">{projectItems.map((project) => { const Icon = project.icon; return <div key={project.name} style={{ borderBottom: '1px solid #626563' }}><details style={{ cursor: 'pointer' }}><summary className="project-row" style={{ borderBottom: 'none', listStyle: 'none' }}><Icon /><span><strong>{project.name}</strong><small>{project.detail}</small></span><ChevronRight /></summary><div style={{ padding: '0 0 16px 30px', fontSize: '14px', color: '#a8aba6', lineHeight: 1.5 }}><p style={{ marginBottom: '8px' }}>{project.description}</p><p style={{ fontSize: '12px', color: '#e1b12c', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '12px' }}>{project.tech}</p>{project.link && <a href={project.link} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: 'rgba(255,255,255,0.1)', border: '1px solid #626563', color: '#eeeae0', borderRadius: '4px', textDecoration: 'none', fontSize: '13px' }}><GitBranch size={14} /> View Source Code</a>}</div></details></div> })}</div></div>
  if (id === 'certifications') return <div className="window-body"><p className="window-eyebrow">{content.eyebrow}</p><h2>{content.title}</h2><p>{content.body}</p><div className="project-list">{certificationsItems.map((cert, idx) => { const Icon = cert.icon; return <div key={idx} style={{ borderBottom: '1px solid #626563' }}><details style={{ cursor: 'pointer' }}><summary className="project-row" style={{ borderBottom: 'none', listStyle: 'none' }}><Icon /><span><strong>{cert.title}{cert.subtitle ? ` - ${cert.subtitle}` : ''}</strong><small>{cert.issuer} · {cert.date}</small></span><ChevronRight /></summary><div style={{ padding: '0 0 16px 30px', fontSize: '14px', color: '#a8aba6', lineHeight: 1.5 }}><p style={{ marginBottom: '8px' }}>{cert.description}</p><p style={{ fontSize: '12px', color: '#e1b12c', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '12px' }}>{cert.skills}</p>{(cert as any).image && <a href={(cert as any).image} target="_blank" rel="noopener noreferrer" style={{ width: '100%', height: 'auto', background: 'rgba(255,255,255,0.02)', borderRadius: '6px', overflow: 'hidden', display: 'block', border: '1px dashed #626563', marginBottom: '8px', cursor: 'pointer' }}><img src={(cert as any).image} alt={cert.title} style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block' }} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span style="color: #626563; font-size: 12px; font-family: monospace;">Drop ' + (cert as any).image + ' in public/ folder</span>'; }} /></a>}{(cert as any).link && <a href={(cert as any).link} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: 'rgba(255,255,255,0.1)', border: '1px solid #626563', color: '#eeeae0', borderRadius: '4px', textDecoration: 'none', fontSize: '13px' }}>View Certificate <ChevronRight size={14} /></a>}</div></details></div> })}</div></div>
  if (id === 'contact') return <div className="window-body"><p className="window-eyebrow">{content.eyebrow}</p><h2>{content.title}</h2><p>{content.body}</p><div className="contact-list"><a href="mailto:bhattpriyansh0090@gmail.com"><Mail /> bhattpriyansh0090@gmail.com</a><a href="https://docs.google.com/forms/d/e/1FAIpQLSc2Zjftl_6mujGnTnteNE28tAIHNOpg_o0yLfE_Fc2zjEIE-g/viewform?usp=publish-editor" target="_blank" rel="noreferrer"><FileText /> Suggestions & Queries</a><a href="https://github.com/priyanshuu00" target="_blank" rel="noreferrer"><GitBranch /> github.com/priyanshuu00</a><a href="https://www.linkedin.com/in/priyanshu-bhatt-1b00b6321/" target="_blank" rel="noreferrer"><Linkedin /> linkedin.com/in/priyanshu-bhatt</a></div></div>
  return <div className="window-body"><p className="window-eyebrow">{content.eyebrow}</p><h2>{content.title}</h2><p>{content.body}</p><div className="generic-lines"><span /><span /><span /></div></div>
}

function DesktopWindow({ window, onClose, onMinimize, onFocus, onDrag, onResize, openWindow }: { window: WindowState; onClose: () => void; onMinimize: () => void; onFocus: () => void; onDrag: (x: number, y: number) => void; onResize: (x: number, y: number, w: number, h: number) => void; openWindow: (id: WindowId) => void }) {
  const dragStart = useRef<{ x: number; y: number; left: number; top: number } | null>(null)
  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => { onFocus(); dragStart.current = { x: event.clientX, y: event.clientY, left: window.x, top: window.y }; event.currentTarget.setPointerCapture(event.pointerId) }
  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragStart.current) return;
    let newX = dragStart.current.left + event.clientX - dragStart.current.x;
    let newY = dragStart.current.top + event.clientY - dragStart.current.y;
    if (typeof globalThis !== 'undefined' && globalThis.innerWidth) {
      const desktopWidth = globalThis.innerWidth;
      const desktopHeight = globalThis.innerHeight;
      const taskbarHeight = 44;
      const minVisibleWidth = 100;
      const titleBarHeight = 34;
      const w = window.width || 600;
      newX = Math.max(-(w - minVisibleWidth), Math.min(newX, desktopWidth - minVisibleWidth));
      newY = Math.max(0, Math.min(newY, desktopHeight - taskbarHeight - titleBarHeight));
    }
    onDrag(newX, newY);
  }
  const stopDrag = () => { dragStart.current = null }

  const resizeStart = useRef<{ x: number; y: number; startX: number; startY: number; startW: number; startH: number; dir: string } | null>(null)
  const handleResizePointerDown = (event: React.PointerEvent<HTMLDivElement>, dir: string) => {
    event.stopPropagation();
    onFocus();
    resizeStart.current = { x: event.clientX, y: event.clientY, startX: window.x, startY: window.y, startW: window.width || 600, startH: window.height || 400, dir };
    event.currentTarget.setPointerCapture(event.pointerId);
  }
  const handleResizePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!resizeStart.current) return;
    const { x, y, startX, startY, startW, startH, dir } = resizeStart.current;
    const dx = event.clientX - x;
    const dy = event.clientY - y;
    let newX = startX, newY = startY, newW = startW, newH = startH;
    
    if (dir.includes('right')) newW = Math.max(320, startW + dx);
    if (dir.includes('left')) {
      newW = Math.max(320, startW - dx);
      if (newW > 320 || dx > 0) newX = startX + (startW - newW);
    }
    if (dir.includes('bottom')) newH = Math.max(200, startH + dy);
    if (dir.includes('top')) {
      newH = Math.max(200, startH - dy);
      if (newH > 200 || dy > 0) newY = startY + (startH - newH);
    }

    if (typeof globalThis !== 'undefined' && globalThis.innerWidth) {
      const desktopWidth = globalThis.innerWidth;
      const desktopHeight = globalThis.innerHeight;
      const taskbarHeight = 44;
      
      if (newX < 0) {
        newW += newX;
        newX = 0;
      }
      if (newY < 0) {
        newH += newY;
        newY = 0;
      }
      
      if (newX + newW > desktopWidth) newW = desktopWidth - newX;
      if (newY + newH > desktopHeight - taskbarHeight) newH = desktopHeight - taskbarHeight - newY;
      
      newW = Math.max(320, newW);
      newH = Math.max(200, newH);
      
      if (newX + newW > desktopWidth) newX = Math.max(0, desktopWidth - newW);
      if (newY + newH > desktopHeight - taskbarHeight) newY = Math.max(0, desktopHeight - taskbarHeight - newH);
    }
    
    onResize(newX, newY, newW, newH);
  }
  const stopResize = () => { resizeStart.current = null }

  return <section className={`os-window ${window.minimized ? 'is-minimized' : ''}`} style={{ left: window.x, top: window.y, width: window.minimized ? undefined : (window.width || 600), height: window.minimized ? undefined : (window.height || 400), zIndex: window.z }} onMouseDown={onFocus} aria-label={`${window.title} window`}>
    {!window.minimized && (
      <>
        <div className="resize-handle top" onPointerDown={(e) => handleResizePointerDown(e, 'top')} onPointerMove={handleResizePointerMove} onPointerUp={stopResize} onPointerCancel={stopResize} />
        <div className="resize-handle bottom" onPointerDown={(e) => handleResizePointerDown(e, 'bottom')} onPointerMove={handleResizePointerMove} onPointerUp={stopResize} onPointerCancel={stopResize} />
        <div className="resize-handle left" onPointerDown={(e) => handleResizePointerDown(e, 'left')} onPointerMove={handleResizePointerMove} onPointerUp={stopResize} onPointerCancel={stopResize} />
        <div className="resize-handle right" onPointerDown={(e) => handleResizePointerDown(e, 'right')} onPointerMove={handleResizePointerMove} onPointerUp={stopResize} onPointerCancel={stopResize} />
        <div className="resize-handle top-left" onPointerDown={(e) => handleResizePointerDown(e, 'top-left')} onPointerMove={handleResizePointerMove} onPointerUp={stopResize} onPointerCancel={stopResize} />
        <div className="resize-handle top-right" onPointerDown={(e) => handleResizePointerDown(e, 'top-right')} onPointerMove={handleResizePointerMove} onPointerUp={stopResize} onPointerCancel={stopResize} />
        <div className="resize-handle bottom-left" onPointerDown={(e) => handleResizePointerDown(e, 'bottom-left')} onPointerMove={handleResizePointerMove} onPointerUp={stopResize} onPointerCancel={stopResize} />
        <div className="resize-handle bottom-right" onPointerDown={(e) => handleResizePointerDown(e, 'bottom-right')} onPointerMove={handleResizePointerMove} onPointerUp={stopResize} onPointerCancel={stopResize} />
      </>
    )}
    <div className="window-bar" onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={stopDrag} onPointerCancel={stopDrag}><span className="window-bar-title"><window.icon /> {window.title}</span><span className="window-controls"><button onPointerDown={(e) => e.stopPropagation()} onClick={onMinimize} aria-label={`Minimize ${window.title}`}><Minus /></button><button onPointerDown={(e) => e.stopPropagation()} onClick={onClose} aria-label={`Close ${window.title}`}><X /></button></span></div>
    {!window.minimized && <WindowBody id={window.id} openWindow={openWindow} />}
  </section>
}
const ENABLE_BOOT_SEQUENCE = true;

function BootScreen({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onComplete();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onComplete]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timings = prefersReducedMotion 
      ? [0, 100, 200, 300, 400, 500, 600, 700, 1000]
      : [0, 200, 400, 700, 1000, 1300, 1600, 1900, 2300];
      
    const timers = timings.map((time, index) => 
      setTimeout(() => {
        setStep(index);
        if (index === timings.length - 1) {
          onComplete();
        }
      }, time)
    );
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const progress = Math.min(100, Math.floor((step / 7) * 100));
  const bars = Math.floor(progress / 5);

  return (
    <div style={{ position: 'fixed', inset: 0, backgroundColor: '#0a0a0a', color: '#e8e8e8', fontFamily: 'monospace', fontSize: '14px', zIndex: 999999, padding: '24px', display: 'flex', flexDirection: 'column' }}>
      <button onClick={onComplete} style={{ position: 'absolute', bottom: '24px', right: '24px', background: 'transparent', border: '1px solid #333', color: '#888', padding: '6px 12px', cursor: 'pointer', fontSize: '12px', fontFamily: 'monospace' }}>[ SKIP ]</button>
      
      <div style={{ maxWidth: '600px', margin: '40px auto 0', width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {step >= 0 && <div>
          <div style={{ color: '#e1b12c', fontWeight: 'bold', fontSize: '16px' }}>PB OS</div>
          <div style={{ color: '#666' }}>────────────────────────────────</div>
        </div>}
        
        {step >= 1 && <div>INITIALIZING SYSTEM...</div>}
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {step >= 2 && <div>[✓] Loading kernel</div>}
          {step >= 3 && <div>[✓] Loading user profile</div>}
          {step >= 4 && <div>[✓] Mounting projects</div>}
          {step >= 5 && <div>[✓] Initializing applications</div>}
          {step >= 6 && <div>[✓] Starting desktop environment</div>}
        </div>

        {step >= 2 && <div style={{ color: '#b6d1ad', whiteSpace: 'pre' }}>{`[${'█'.repeat(bars)}${' '.repeat(20 - bars)}] ${progress}%`}</div>}

        {step >= 7 && (
          <div style={{ marginTop: '16px' }}>
            <div style={{ color: '#666', marginBottom: '16px' }}>────────────────────────────────</div>
            <div>USER: PRIYANSHU BHATT</div>
            <div>STATUS: ONLINE</div>
            <br/>
            <div>PB OS v1.0</div>
            <div style={{ color: '#b6d1ad' }}>SYSTEM READY</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Page() {
  const [windows, setWindows] = useState<WindowState[]>([])
  
  const activeWindowId = windows.length > 0 ? [...windows].sort((a,b) => b.z - a.z).find(w => !w.minimized)?.id || null : null

  const openWindow = (id: WindowId) => {
    setWindows((current) => {
      const nextZ = Math.max(...current.map(w => w.z), 10) + 1;
      const existing = current.find((item) => item.id === id);
      if (existing) return current.map((item) => item.id === id ? { ...item, minimized: false, z: nextZ } : item);
      const item = desktopItems.find((entry) => entry.id === id)!;
      let initialX = id === 'projects' ? 420 : 260 + current.length * 24;
      let initialY = id === 'projects' ? 90 : 150 + current.length * 18;
      if (typeof globalThis !== 'undefined' && globalThis.innerWidth) {
        const desktopWidth = globalThis.innerWidth;
        const desktopHeight = globalThis.innerHeight;
        const taskbarHeight = 44;
        if (initialX + 600 > desktopWidth) initialX = Math.max(0, desktopWidth - 620);
        if (initialY + 400 > desktopHeight - taskbarHeight) initialY = Math.max(0, desktopHeight - taskbarHeight - 420);
      }
      return [...current, { id, title: item.label, icon: item.icon, x: initialX, y: initialY, width: 600, height: 400, minimized: false, z: nextZ }]
    })
  }
  const focusWindow = (id: WindowId) => { setWindows((current) => { const nextZ = Math.max(...current.map(w => w.z), 10) + 1; return current.map((item) => item.id === id ? { ...item, z: nextZ, minimized: false } : item); }) }
  const minimizeWindow = (id: WindowId) => { setWindows((current) => current.map((item) => item.id === id ? { ...item, minimized: true } : item)) }

  const [booted, setBooted] = useState(false);
  const [showBoot, setShowBoot] = useState(true);

  useEffect(() => {
    if (!ENABLE_BOOT_SEQUENCE || sessionStorage.getItem('pbos-booted')) {
      const initScreen = document.getElementById('initial-boot-screen');
      if (initScreen) initScreen.style.display = 'none';
      setShowBoot(false);
      setBooted(true);
    }
  }, []);

  const handleBootComplete = () => {
    sessionStorage.setItem('pbos-booted', 'true');
    const initScreen = document.getElementById('initial-boot-screen');
    if (initScreen) initScreen.style.display = 'none';
    setBooted(true);
    setTimeout(() => setShowBoot(false), 300);
  };

  return (
    <>
      {showBoot && (
        <div className={booted ? "react-boot-screen" : "react-boot-screen-initial"} style={{ opacity: booted ? 0 : 1, transition: 'opacity 0.3s ease', position: 'fixed', inset: 0, zIndex: 9999998 }}>
          <BootScreen onComplete={handleBootComplete} />
        </div>
      )}
      <main className="os-desktop"><video autoPlay loop muted playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}><source src="/background-video.mp4" type="video/mp4" /></video><div className="desktop-grid" aria-label="Desktop applications"><div className="icon-group left-top">{desktopItems.filter((item) => item.group === 'left-top').map((item) => <DesktopIcon key={item.id} item={item} onOpen={openWindow} />)}</div><div className="icon-group left-middle">{desktopItems.filter((item) => item.group === 'left-middle').map((item) => <DesktopIcon key={item.id} item={item} onOpen={openWindow} />)}</div><div className="icon-group right-top">{desktopItems.filter((item) => item.group === 'right-top').map((item) => <DesktopIcon key={item.id} item={item} onOpen={openWindow} />)}</div><div className="icon-group right-bottom">{desktopItems.filter((item) => item.group === 'right-bottom').map((item) => <DesktopIcon key={item.id} item={item} onOpen={openWindow} />)}</div></div>{windows.filter(window => !window.minimized).map((window) => <DesktopWindow key={window.id} window={window} onClose={() => setWindows((current) => current.filter((item) => item.id !== window.id))} onMinimize={() => minimizeWindow(window.id)} onFocus={() => focusWindow(window.id)} onDrag={(x, y) => setWindows((current) => current.map((item) => item.id === window.id ? { ...item, x, y } : item))} onResize={(x, y, width, height) => setWindows((current) => current.map((item) => item.id === window.id ? { ...item, x, y, width, height } : item))} openWindow={openWindow} />)}<Taskbar windows={windows} activeWindowId={activeWindowId} openWindow={openWindow} minimizeWindow={minimizeWindow} restoreWindow={focusWindow} /></main>
    </>
  )
}
