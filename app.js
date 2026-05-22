const courses = [
  {
    id: "hotel-management",
    category: "Hospitality",
    title: "Hotel Management",
    level: "Beginner",
    duration: "1 day",
    lessons: 6,
    summary: "Run smooth guest journeys across rooms, teams, service standards, and daily operations.",
    modules: [
      ["The Hotel Flow", "Hotels work when departments move as one system: front office, housekeeping, food service, maintenance, and guest relations. Your job is to keep the guest experience consistent even when the back office is busy."],
      ["Guest Moments", "Every stay has moments that matter: arrival, first room impression, issue handling, dining, payment, and checkout. A professional notices friction early and solves it before the guest has to repeat themselves."],
      ["Daily Controls", "Use checklists for occupancy, VIP arrivals, room readiness, maintenance flags, shift handover, and complaint logs. Small checks protect revenue and reputation."],
      ["Service Recovery", "A complaint is handled in four steps: listen, acknowledge, solve, and follow up. Speed matters, but respect matters more."],
      ["Professional Conduct", "Clear grooming, calm voice, accurate information, and ownership make guests trust the property."],
    ],
    quiz: {
      question: "What is the strongest service recovery sequence?",
      options: ["Listen, acknowledge, solve, follow up", "Argue, discount, close", "Ignore, escalate, wait"],
      answer: 0,
    },
  },
  {
    id: "front-office-executive",
    category: "Hospitality",
    title: "Front Office Executive",
    level: "Job-ready",
    duration: "1 day",
    lessons: 5,
    summary: "Master check-ins, guest communication, room coordination, billing, and shift handovers.",
    modules: [
      ["First Impression", "Front office is the property's control center. The guest forms an opinion from your greeting, confidence, speed, and clarity."],
      ["Check-In Standard", "Confirm identity, reservation, payment status, room preference, special requests, and local rules. Keep the guest informed while systems load."],
      ["Coordination", "Front office depends on housekeeping, reservations, concierge, and accounts. Good notes prevent repeated calls and guest frustration."],
      ["Billing Basics", "Explain charges clearly, verify taxes and inclusions, and resolve disputes with calm records."],
    ],
    quiz: {
      question: "What should be verified during check-in?",
      options: ["Only the guest name", "Identity, reservation, payment, room needs", "Restaurant menu"],
      answer: 1,
    },
  },
  {
    id: "customer-service",
    category: "Business",
    title: "Customer Service Professional",
    level: "Beginner",
    duration: "1 day",
    lessons: 5,
    summary: "Build confident support habits for calls, chats, complaints, and customer retention.",
    modules: [
      ["Service Mindset", "Customers remember whether they felt understood. Good service combines empathy, ownership, and accurate next steps."],
      ["The 3-Part Reply", "Use acknowledgement, solution, and timeline. This structure works in calls, email, and chat."],
      ["Difficult Customers", "Stay calm, avoid blame, and move toward facts. Repeat the issue in your words so the customer knows you understood."],
      ["Retention", "A solved complaint can make a customer more loyal than a perfect first experience."],
    ],
    quiz: {
      question: "What makes a support reply feel professional?",
      options: ["Acknowledge, solve, give timeline", "Use complex words", "Reply only after escalation"],
      answer: 0,
    },
  },
  {
    id: "restaurant-operations",
    category: "Hospitality",
    title: "Restaurant Operations Management",
    level: "Job-ready",
    duration: "2 days",
    lessons: 6,
    summary: "Learn table flow, staff briefing, kitchen coordination, hygiene, and guest satisfaction.",
    modules: [
      ["Shift Briefing", "A strong shift starts with reservations, specials, stock issues, staff sections, and service targets."],
      ["Table Flow", "Track seating, ordering, kitchen timing, billing, and reset speed. Operations improve when delays are visible."],
      ["Hygiene Standards", "Clean stations, food-safe handling, and visible discipline protect trust and compliance."],
      ["Guest Experience", "Managers watch the room, not just the reports. Notice empty glasses, waiting guests, and confused staff."],
    ],
    quiz: {
      question: "What should a restaurant manager watch during service?",
      options: ["Only sales total", "Table flow and guest signals", "Only kitchen staff"],
      answer: 1,
    },
  },
  {
    id: "business-development",
    category: "Business",
    title: "Business Development Executive",
    level: "Career",
    duration: "2 days",
    lessons: 6,
    summary: "Prospecting, outreach, lead qualification, follow-ups, and closing basics for new BDEs.",
    modules: [
      ["BDE Role", "Business development creates qualified opportunities. It is not random calling; it is a disciplined pipeline habit."],
      ["Prospecting", "Define the customer, find buying signals, and record useful context before outreach."],
      ["Outreach", "Short messages work best: relevant reason, clear value, simple next step."],
      ["Follow-Up", "Most deals need multiple touchpoints. Professional follow-up adds new value, not pressure."],
    ],
    quiz: {
      question: "What is the main job of a BDE?",
      options: ["Create qualified opportunities", "Only design posters", "Only manage payroll"],
      answer: 0,
    },
  },
  {
    id: "project-management",
    category: "Corporate",
    title: "Project Management Fundamentals",
    level: "Beginner",
    duration: "2 days",
    lessons: 6,
    summary: "Understand scope, timelines, stakeholders, risks, and delivery routines.",
    modules: [
      ["Project Basics", "A project has a goal, owner, timeline, constraints, and measurable outcome."],
      ["Scope", "Write what is included, what is excluded, and what success looks like."],
      ["Risks", "Risks are possible future problems. Good teams name them early and assign actions."],
      ["Cadence", "Weekly updates should cover progress, blockers, decisions, and next steps."],
    ],
    quiz: {
      question: "What protects a project from confusion?",
      options: ["Clear scope and success criteria", "More meetings only", "No documentation"],
      answer: 0,
    },
  },
  {
    id: "digital-marketing",
    category: "Digital",
    title: "Digital Marketing Expert",
    level: "Career",
    duration: "3 days",
    lessons: 7,
    summary: "Learn funnels, content, paid ads, landing pages, analytics, and campaign basics.",
    modules: [
      ["Marketing Funnel", "Awareness, interest, trust, conversion, and retention guide every digital campaign."],
      ["Content", "Good content speaks to one audience, one problem, and one next action."],
      ["Paid Ads", "Ads need audience targeting, offer clarity, creative testing, and tracking."],
      ["Analytics", "Track cost, conversion rate, acquisition source, and retention quality."],
    ],
    quiz: {
      question: "What does a marketing funnel organize?",
      options: ["Customer journey to conversion", "Office seating", "Payroll dates"],
      answer: 0,
    },
  },
  {
    id: "sales-communication",
    category: "Business",
    title: "Sales & Communication Skills",
    level: "Job-ready",
    duration: "1 day",
    lessons: 5,
    summary: "Improve listening, pitch structure, objection handling, and confident closing.",
    modules: [
      ["Sales Mindset", "Selling is helping the right buyer make a clear decision."],
      ["Discovery", "Ask about goals, pain, budget, timeline, and decision process before pitching."],
      ["Pitch", "Connect the feature to the buyer's problem. Keep it short and specific."],
      ["Objections", "Clarify the concern, answer directly, and confirm whether anything else blocks the decision."],
    ],
    quiz: {
      question: "What should happen before a sales pitch?",
      options: ["Discovery questions", "Immediate discount", "End the call"],
      answer: 0,
    },
  },
  {
    id: "ai-productivity",
    category: "Digital",
    title: "AI Productivity for Beginners",
    level: "Beginner",
    duration: "1 day",
    lessons: 5,
    summary: "Use AI for writing, planning, research, spreadsheets, and everyday work acceleration.",
    modules: [
      ["AI Basics", "AI helps with drafts, ideas, summaries, plans, and pattern work. You still review facts and final decisions."],
      ["Prompting", "Give context, role, task, constraints, and output format. Better instructions create better results."],
      ["Workflows", "Use AI to turn notes into emails, plans, checklists, scripts, and reports."],
      ["Safety", "Do not paste private customer data or confidential company material into tools without permission."],
    ],
    quiz: {
      question: "What makes a prompt stronger?",
      options: ["Context and desired format", "Only one word", "No task description"],
      answer: 0,
    },
  },
  {
    id: "linkedin-branding",
    category: "Corporate",
    title: "LinkedIn & Professional Branding",
    level: "Career",
    duration: "1 day",
    lessons: 5,
    summary: "Build a credible profile, headline, about section, posts, and networking routine.",
    modules: [
      ["Profile Positioning", "Your profile should quickly explain what you do, who you help, and what proof you have."],
      ["Headline", "Use role, skill area, and outcome. Avoid vague motivational lines."],
      ["About Section", "Write in clear paragraphs: background, strengths, proof, and contact direction."],
      ["Networking", "Send specific connection notes and follow up with value before asking for help."],
    ],
    quiz: {
      question: "What should a LinkedIn headline communicate?",
      options: ["Role, skill area, outcome", "Only emojis", "A random quote"],
      answer: 0,
    },
  },
];

const brandConfig = {
  platformName: "LearnIndians",
  tagline: "Learn Fast. Get Certified.",
  initials: "LI",
  companyName: "LearnIndians Academy",
  issuerName: "LearnIndians Academy",
  certificationBoard: "LearnIndians Academy",
  signatureName: "Founder & Director",
  supportEmail: "info@hirenix.co",
  Domain: "learnindians.online",
  paymentGateway: "Manual UPI",
  paymentLink: "",
  upiId: "6006538459@axl",
  businessName: "LearnIndians",
  coursePrice: 49,
  subscriptionPrice: 199,
  currency: "INR",
};

const state = {
  view: location.hash.replace("#", "") || "home",
  selectedCourse: null,
  activeModule: 0,
  quizAnswered: null,
  modal: null,
  toast: "",
  filter: "All",
  authMode: "login",
  authReady: false,
  isAdmin: false,
  publicVerifications: {},
  adminStats: null,
  paymentRequests: {},
  adminPaymentRequests: [],
  theme: localStorage.getItem("learnindians-theme") || localStorage.getItem("swiftcert-theme") || "light",
  user: JSON.parse(localStorage.getItem("learnindians-user") || localStorage.getItem("swiftcert-user") || "null"),
  progress: JSON.parse(localStorage.getItem("learnindians-progress") || localStorage.getItem("swiftcert-progress") || "{}"),
  certificates: JSON.parse(localStorage.getItem("learnindians-certificates") || localStorage.getItem("swiftcert-certificates") || "{}"),
};

const app = document.querySelector("#app");
const liConfig = window.LI_CONFIG || {};
const hasSupabaseConfig =
  Boolean(liConfig.supabaseUrl) &&
  Boolean(liConfig.supabaseAnonKey) &&
  !liConfig.supabaseUrl.includes("PASTE_") &&
  !liConfig.supabaseAnonKey.includes("PASTE_");
const supabaseClient =
  hasSupabaseConfig && window.supabase
    ? window.supabase.createClient(liConfig.supabaseUrl, liConfig.supabaseAnonKey)
    : null;

function isCloudReady() {
  return Boolean(supabaseClient);
}

function save() {
  localStorage.setItem("learnindians-user", JSON.stringify(state.user));
  localStorage.setItem("learnindians-progress", JSON.stringify(state.progress));
  localStorage.setItem("learnindians-certificates", JSON.stringify(state.certificates));
  localStorage.setItem("learnindians-theme", state.theme);
}

async function initAuth() {
  if (!isCloudReady()) {
    state.authReady = true;
    render();
    return;
  }

  const { data } = await supabaseClient.auth.getSession();
  const sessionUser = data.session?.user;
  if (sessionUser) {
    await hydrateCloudUser(sessionUser);
  }
  state.authReady = true;
  render();

  supabaseClient.auth.onAuthStateChange(async (_event, session) => {
    if (session?.user) {
      await hydrateCloudUser(session.user);
    } else {
      state.user = null;
      state.isAdmin = false;
      state.progress = {};
      state.certificates = {};
      save();
    }
    render();
  });
}

async function hydrateCloudUser(authUser, preferredName = "") {
  const email = authUser.email || "";
  const fallbackName = preferredName || authUser.user_metadata?.full_name || email.split("@")[0] || "Learner";
  const { data: existingProfile } = await supabaseClient
    .from("profiles")
    .select("full_name,email,role")
    .eq("id", authUser.id)
    .maybeSingle();

  if (!existingProfile) {
    await supabaseClient.from("profiles").insert({
      id: authUser.id,
      full_name: fallbackName,
      email,
      role: liConfig.adminEmails?.includes(email) ? "admin" : "student",
    });
  }

  const { data: profile } = await supabaseClient
    .from("profiles")
    .select("full_name,email,role")
    .eq("id", authUser.id)
    .maybeSingle();

  state.user = {
    id: authUser.id,
    name: profile?.full_name || fallbackName,
    email: profile?.email || email,
  };
  state.isAdmin = profile?.role === "admin" || liConfig.adminEmails?.includes(email);
  await loadCloudData();
  save();
}

async function loadCloudData() {
  if (!isCloudReady() || !state.user?.id) return;
  const [{ data: enrollments }, { data: certificates }, { data: paymentRequests }] = await Promise.all([
    supabaseClient.from("enrollments").select("*").eq("user_id", state.user.id),
    supabaseClient.from("certificates").select("*").eq("user_id", state.user.id),
    supabaseClient.from("payment_requests").select("*").eq("user_id", state.user.id),
  ]);

  state.progress = {};
  (enrollments || []).forEach((row) => {
    state.progress[row.course_id] = {
      paid: row.paid,
      completedModules: row.completed_modules || [],
      quizPassed: row.quiz_passed,
    };
  });

  state.certificates = {};
  (certificates || []).forEach((row) => {
    state.certificates[row.course_id] = {
      id: row.id,
      name: row.student_name,
      course: row.course_title,
      date: new Date(row.completed_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }),
      url: row.verification_url,
      issuer: row.issuer,
      board: row.board,
    };
  });

  state.paymentRequests = {};
  (paymentRequests || []).forEach((row) => {
    state.paymentRequests[row.course_id] = row;
    if (row.status === "approved") {
      state.progress[row.course_id] = {
        ...getProgress(row.course_id),
        paid: true,
      };
    }
  });
}

async function syncProgress(courseId) {
  if (!isCloudReady() || !state.user?.id) return;
  const progress = getProgress(courseId);
  await supabaseClient.from("enrollments").upsert({
    user_id: state.user.id,
    course_id: courseId,
    paid: progress.paid,
    completed_modules: progress.completedModules,
    quiz_passed: progress.quizPassed,
    updated_at: new Date().toISOString(),
  });
}

async function syncCertificate(courseId, cert) {
  if (!isCloudReady() || !state.user?.id) return;
  await supabaseClient.from("certificates").upsert({
    id: cert.id,
    user_id: state.user.id,
    course_id: courseId,
    student_name: cert.name,
    course_title: cert.course,
    completed_at: new Date().toISOString(),
    verification_url: cert.url,
    issuer: brandConfig.issuerName,
    board: brandConfig.certificationBoard,
  });
}

async function createPaymentRequest(courseId, utr) {
  const course = courses.find((item) => item.id === courseId);

  const cleanUtr = String(utr).trim();

  if (!cleanUtr || cleanUtr.length < 6) {
    showToast("Enter a valid UTR/reference number.");
    return false;
  }

  const request = {
    id: crypto.randomUUID(),
    user_id: state.user?.id || crypto.randomUUID(),
    student_name: state.user?.name || "Learner",
    user_email: state.user?.email || "",
    course_id: courseId,
    course_title: course.title,
    amount: brandConfig.coursePrice,
    upi_id: brandConfig.upiId,
    utr: cleanUtr,
    status: "pending",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  if (isCloudReady() && state.user?.id) {
    const { data, error } = await supabaseClient
      .from("payment_requests")
      .insert(request)
      .select()
      .single();

    if (error) {
      console.error(error);
      showToast("Payment request failed.");
      return false;
    }

    state.paymentRequests[courseId] = data;
  } else {
    state.paymentRequests[courseId] = request;
  }

  save();
  showToast("Payment submitted successfully.");
  return true;
}

async function loadPublicCertificate(id) {
  if (!isCloudReady() || state.publicVerifications[id]) return;
  const { data } = await supabaseClient
    .from("certificates")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (data) {
    state.publicVerifications[id] = {
      id: data.id,
      name: data.student_name,
      course: data.course_title,
      date: new Date(data.completed_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }),
      url: data.verification_url,
      issuer: data.issuer,
      board: data.board,
    };
    render();
  }
}

async function loadAdminStats() {
 if (!isCloudReady() || !state.isAdmin) return;
  const [{ data: profiles }, { data: enrollments }, { data: certificates }, { data: requests }] = await Promise.all([
    supabaseClient.from("profiles").select("id,email,full_name,role"),
    supabaseClient.from("enrollments").select("course_id,paid,quiz_passed"),
    supabaseClient.from("certificates").select("id,course_id"),
    supabaseClient.from("payment_requests").select("*").order("created_at", { ascending: false }),
  ]);

  state.adminStats = {
    users: profiles?.length || 0,
    enrollments: enrollments?.filter((item) => item.paid).length || 0,
    completions: enrollments?.filter((item) => item.quiz_passed).length || 0,
    certificates: certificates?.length || 0,
    pendingPayments: requests?.filter((item) => item.status === "pending").length || 0,
  };
  state.adminPaymentRequests = requests || [];
  render();
}

function navigate(view, courseId) {
  state.view = view;
  state.selectedCourse = courseId || state.selectedCourse;
  state.activeModule = 0;
  state.quizAnswered = null;
  location.hash = view;
  render();
}

function showToast(message) {
  state.toast = message;
  render();
  window.setTimeout(() => {
    state.toast = "";
    render();
  }, 2600);
}
function showSuccessAnimation(title, message) {

  const div = document.createElement("div");

  div.className = "success-popup";

  div.innerHTML = `
    <div class="success-card">
      <div class="success-icon">✓</div>
      <h2>${title}</h2>
      <p>${message}</p>
    </div>
  `;

  document.body.appendChild(div);

  setTimeout(() => {
    div.classList.add("show");
  }, 50);

  setTimeout(() => {
    div.classList.remove("show");

    setTimeout(() => {
      div.remove();
    }, 400);

  }, 2600);
}
function requireUser(next) {
  if (state.user) {
    next();
    return;
  }
  state.modal = { type: "login", next };
  render();
}

function getProgress(courseId) {
  return state.progress[courseId] || { paid: false, completedModules: [], quizPassed: false };
}

function getPaymentRequest(courseId) {
  return state.paymentRequests[courseId] || null;
}

function setProgress(courseId, patch) {
  state.progress[courseId] = { ...getProgress(courseId), ...patch };
  save();
  syncProgress(courseId);
}

function percent(course) {
  const progress = getProgress(course.id);
  const moduleScore = (progress.completedModules.length / course.modules.length) * 80;
  return Math.min(100, Math.round(moduleScore + (progress.quizPassed ? 20 : 0)));
}

function certificateId(courseId) {
  const userSeed = state.user?.email?.split("@")[0]?.toUpperCase().replace(/[^A-Z0-9]/g, "") || "GUEST";
  return `LI-${courseId.slice(0, 3).toUpperCase()}-${userSeed.slice(0, 5)}-${new Date().getFullYear()}`;
}

function certificateFor(course) {
  const existing = state.certificates[course.id];
  if (existing) return existing;
  const cert = {
    id: certificateId(course.id),
    name: state.user?.name || "Demo Learner",
    course: course.title,
    date: new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }),
    url: `${location.origin}${location.pathname}#verify:${certificateId(course.id)}`,
    issuer: brandConfig.issuerName,
    board: brandConfig.certificationBoard,
  };
  state.certificates[course.id] = cert;
  save();
  syncCertificate(course.id, cert);
  return cert;
}

function icon(name) {
  const icons = {
    bolt: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 10-13h-7l0-7Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    moon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z" stroke="currentColor" stroke-width="2"/></svg>',
    sun: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/><path d="M12 2v3M12 19v3M4.9 4.9 7 7M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    play: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
    award: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="8" r="5" stroke="currentColor" stroke-width="2"/><path d="m8.5 12.5-1.5 8 5-3 5 3-1.5-8" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    user: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="2"/><path d="M4 21a8 8 0 0 1 16 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    admin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5h16M4 12h16M4 19h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  };
  return icons[name] || "";
}

function render() {
  document.documentElement.dataset.theme = state.theme;
  const verifyId = state.view.startsWith("verify:") ? state.view.split(":")[1] : null;
  app.innerHTML = `
    <div class="shell">
      ${topbar()}
      <main class="main">${verifyId ? verificationView(verifyId) : route()}</main>
      ${footer()}
      ${bottomNav()}
      ${state.modal ? modal() : ""}
      ${state.toast ? `<div class="toast">${state.toast}</div>` : ""}
    </div>
  `;
}

function topbar() {
  return `
    <header class="topbar">
      <button class="brand" onclick="navigate('home')" aria-label="Go home">
        <span class="mark li-mark"><span>${brandConfig.initials}</span></span>
        <span>${brandConfig.platformName}</span>
      </button>

      <div class="nav-actions">
        <button class="ghost-btn" onclick="navigate('courses')">Courses</button>
        <button class="ghost-btn" onclick="navigate('dashboard')">Dashboard</button>
        <button class="ghost-btn" onclick="navigate('about')">About</button>

        ${
          state.isAdmin
            ? `<button class="ghost-btn" onclick="navigate('admin')">Admin</button>`
            : ""
        }

        <button class="icon-btn" onclick="toggleTheme()" aria-label="Toggle theme">
          ${state.theme === "dark" ? icon("sun") : icon("moon")}
        </button>

        <button class="secondary-btn" onclick="openLogin()">
          ${state.user ? state.user.name.split(" ")[0] : "Login"}
        </button>
      </div>
    </header>
  `;
}

function route() {
  if (state.view === "courses") return coursesView();
  if (state.view === "dashboard") return dashboardView();
  if (state.view === "learn") return learnView();
  if (state.view === "certificate") return certificateView();
  if (state.view === "admin") return adminView();
  if (state.view === "about") return aboutView();
  if (state.view === "contact") return contactView();
  if (state.view === "terms") return legalView("terms");
  if (state.view === "privacy") return legalView("privacy");
  if (state.view === "refund") return legalView("refund");
  return homeView();
}

function homeView() {
  return `
    <section class="hero">
      <div>
        <p class="eyebrow">${icon("award")} Fast Career Certifications</p>
        <h1>${brandConfig.tagline}</h1>
        <p class="hero-copy">Short skill courses built for job seekers, freshers, hospitality workers, and ambitious professionals who want career value in days, not months.</p>
        <div class="hero-actions">
          <button class="primary-btn" onclick="navigate('courses')">${icon("play")} Start in 2 minutes</button>
          <button class="secondary-btn" onclick="navigate('dashboard')">${icon("award")} View demo certificate</button>
        </div>
        <div class="metric-row">
          <div class="metric"><strong>₹${brandConfig.coursePrice}</strong><span>Individual course</span></div>
          <div class="metric"><strong>₹${brandConfig.subscriptionPrice}</strong><span>Monthly access</span></div>
          <div class="metric"><strong>1-3 days</strong><span>Completion window</span></div>
        </div>
      </div>
      <div class="phone" aria-label="Mobile learning preview">
        <div class="phone-screen">
          <div class="phone-head"><strong>Today</strong><span class="pill">68% done</span></div>
          <div class="phone-course">
            <span class="badge">AI Productivity</span>
            <h3>Prompting for Work</h3>
            <p>Give context, task, constraints, and exact output format.</p>
            <div class="phone-progress"><span></span></div>
          </div>
          <div class="lesson-card"><strong>2 min lesson</strong><p class="muted">Turn rough notes into a clean workplace email.</p></div>
          <div class="lesson-card"><strong>Quick quiz</strong><p class="muted">One question. Instant unlock. No drag.</p></div>
          <div class="lesson-card"><strong>Certificate ready</strong><p class="muted">Share a verified professional credential.</p></div>
          <div class="lesson-card"><strong>${brandConfig.platformName}</strong><p class="muted">${brandConfig.tagline}</p></div>
        </div>
      </div>
    </section>
    ${coursesSection()}
    ${trustSection()}
  `;
}

function trustSection() {
  return `
    <section class="trust-band">
      <div>
        <p class="eyebrow">Payment-ready structure</p>
        <h2>Ready for a clean payment review path.</h2>
        <p class="muted">The public app includes business details, support contact, pricing, terms, privacy policy, refund policy, and certificate verification. We can deploy first on Vercel and connect a custom domain later.</p>
      </div>
      <div class="trust-grid">
        <div><strong>${brandConfig.companyName}</strong><span>Business identity</span></div>
        <div><strong>${brandConfig.supportEmail}</strong><span>Support email</span></div>
        <div><strong>${brandConfig.temporaryDomain}</strong><span>Temporary live URL direction</span></div>
      </div>
    </section>
  `;
}

function coursesSection() {
  return `
    <section>
      <div class="section-head">
        <div>
          <p class="eyebrow">Launch catalog</p>
          <h2>Career skills that fit into real life.</h2>
        </div>
        <button class="secondary-btn" onclick="navigate('courses')">Browse all</button>
      </div>
      <div class="course-grid">${courses.slice(0, 6).map(courseCard).join("")}</div>
    </section>
  `;
}

function coursesView() {
  const categories = ["All", ...new Set(courses.map((course) => course.category))];
  const visible = state.filter === "All" ? courses : courses.filter((course) => course.category === state.filter);
  return `
    <section>
      <div class="section-head">
        <div>
          <p class="eyebrow">Micro-learning catalog</p>
          <h2>Pick a certificate and start instantly.</h2>
          <p>Courses are designed for short sessions, fast quizzes, and immediate verified certificate unlocks.</p>
        </div>
      </div>
      <div class="toolbar">
        ${categories.map((category) => `<button class="chip ${state.filter === category ? "active" : ""}" onclick="setFilter('${category}')">${category}</button>`).join("")}
      </div>
      <div class="course-grid">${visible.map(courseCard).join("")}</div>
    </section>
  `;
}

function courseCard(course) {
  const progress = getProgress(course.id);
  const request = getPaymentRequest(course.id);
  const cta = progress.paid ? "Continue" : request?.status === "pending" ? "Payment pending" : "Enroll now";
  return `
    <article class="course-card">
      <div>
        <div class="course-top">
          <span class="badge">${course.category}</span>
          <span class="price">₹${brandConfig.coursePrice}</span>
        </div>
        <h3>${course.title}</h3>
        <p>${course.summary}</p>
        <div class="course-meta">
          <span class="pill">${course.level}</span>
          <span class="pill">${course.duration}</span>
          <span class="pill">${course.lessons} bites</span>
        </div>
        <div class="bar"><span style="width:${percent(course)}%"></span></div>
      </div>
      <button class="primary-btn" onclick="startCourse('${course.id}')">${cta}</button>
    </article>
  `;
}

function dashboardView() {
  if (!state.user) {
    return emptyState("Your career dashboard is waiting.", "Login to track progress, continue courses, and collect certificates.", "Login", "openLogin()");
  }
  const active = courses.filter((course) => getProgress(course.id).paid);
  return `
    <section class="dashboard">
      <aside class="panel sidebar">
        <div class="profile-box">
          <div class="avatar">${state.user.name.slice(0, 1).toUpperCase()}</div>
          <div>
            <h3>${state.user.name}</h3>
            <p class="muted">${state.user.email}</p>
          </div>
          <button class="secondary-btn" onclick="logout()">Logout</button>
        </div>
        <div class="progress-list">
          <div class="progress-item"><strong>Subscription</strong><p class="muted">₹${brandConfig.subscriptionPrice} monthly unlimited access</p></div>
          <div class="progress-item"><strong>${Object.keys(state.certificates).length}</strong><p class="muted">Certificates earned</p></div>
          <div class="progress-item"><strong>${isCloudReady() ? "Live" : "Demo"}</strong><p class="muted">${isCloudReady() ? "Data saved in Supabase" : "Add Supabase keys for real storage"}</p></div>
          <div class="progress-item"><strong>${Object.values(state.paymentRequests).filter((item) => item.status === "pending").length}</strong><p class="muted">Pending payment checks</p></div>
        </div>
      </aside>
      <div class="panel content-panel">
        <div class="section-head">
          <div>
            <p class="eyebrow">Dashboard</p>
            <h2>Your active certifications</h2>
          </div>
          <button class="primary-btn" onclick="navigate('courses')">Add course</button>
        </div>
        ${active.length ? active.map(progressRow).join("") : emptyInline("No enrollments yet. Pick a course and the learning path appears here.")}
      </div>
    </section>
  `;
}

function progressRow(course) {
  const done = percent(course);
  const request = getPaymentRequest(course.id);
  return `
    <div class="table-row">
      <div>
        <strong>${course.title}</strong>
        ${request?.status === "pending" ? `<p class="muted">Payment submitted. Waiting for admin verification.</p>` : ""}
        <div class="bar" style="margin-top:10px"><span style="width:${done}%"></span></div>
      </div>
      <span class="pill">${request?.status === "pending" ? "Pending" : `${done}%`}</span>
      <button class="${done === 100 ? "secondary-btn" : "primary-btn"}" onclick="${done === 100 ? `openCertificate('${course.id}')` : `startCourse('${course.id}')`}">${done === 100 ? "Certificate" : request?.status === "pending" ? "Check status" : "Continue"}</button>
    </div>
  `;
}

function learnView() {
  const course = courses.find((item) => item.id === state.selectedCourse) || courses[0];
  const progress = getProgress(course.id);
  if (!progress.paid) return emptyState("Enrollment required", `Complete the quick ${brandConfig.paymentGateway} checkout to unlock this course.`, "Enroll now", `startCourse('${course.id}')`);
  const isQuiz = state.activeModule >= course.modules.length;
  return `
    <section>
      <div class="section-head">
        <div>
          <p class="eyebrow">${course.category} certification</p>
          <h2>${course.title}</h2>
          <p>${percent(course)}% complete. Finish all lessons and pass the quick quiz to unlock your certificate.</p>
        </div>
      </div>
      <div class="lesson-view">
        <div class="lesson-stage">
          ${isQuiz ? quizBlock(course) : lessonBlock(course)}
        </div>
        <aside class="panel sidebar">
          <h3>Course bites</h3>
          <div class="module-list">
            ${course.modules.map((module, index) => `
              <button class="module-btn ${state.activeModule === index ? "active" : ""}" onclick="setModule(${index})">
                <strong>${index + 1}. ${module[0]}</strong>
                <p class="muted">${progress.completedModules.includes(index) ? "Completed" : "2-5 min"}</p>
              </button>
            `).join("")}
            <button class="module-btn ${isQuiz ? "active" : ""}" onclick="setModule(${course.modules.length})">
              <strong>Final quiz</strong>
              <p class="muted">${progress.quizPassed ? "Passed" : "Unlock certificate"}</p>
            </button>
          </div>
        </aside>
      </div>
    </section>
  `;
}

function lessonBlock(course) {
  const module = course.modules[state.activeModule];
  return `
    <span class="badge">Lesson ${state.activeModule + 1} of ${course.modules.length}</span>
    <h2>${module[0]}</h2>
    <p class="lesson-body">${module[1]}</p>
    <div class="lesson-actions">
      <button class="primary-btn" onclick="completeModule('${course.id}', ${state.activeModule})">Mark complete</button>
      <button class="secondary-btn" onclick="nextModule('${course.id}')">Next</button>
    </div>
  `;
}

function quizBlock(course) {
  const progress = getProgress(course.id);
  return `
    <span class="badge">Final quiz</span>
    <h2>${course.quiz.question}</h2>
    <div class="quiz-options">
      ${course.quiz.options.map((option, index) => {
        const answered = state.quizAnswered !== null;
        const klass = answered && index === course.quiz.answer ? "correct" : answered && index === state.quizAnswered ? "wrong" : "";
        return `<button class="quiz-option ${klass}" onclick="answerQuiz('${course.id}', ${index})">${option}</button>`;
      }).join("")}
    </div>
    <div class="lesson-actions">
      <button class="primary-btn" ${progress.quizPassed ? "" : "disabled"} onclick="openCertificate('${course.id}')">Unlock certificate</button>
      <button class="secondary-btn" onclick="setModule(0)">Review lessons</button>
    </div>
  `;
}

function certificateView() {
  const course = courses.find((item) => item.id === state.selectedCourse) || courses[0];
  const progress = getProgress(course.id);
  if (!progress.quizPassed) return emptyState("Certificate locked", "Complete every lesson and pass the final quiz first.", "Continue learning", `startCourse('${course.id}')`);
  const cert = certificateFor(course);
  return `
    <section class="certificate-wrap">
      ${certificateMarkup(cert)}
      <aside class="panel sidebar">
        <h3>Share-ready credential</h3>
        <p class="muted">This certificate includes a public verification URL, certificate ID, QR-style code, completion date, seal, issuer details, and a professional corporate layout.</p>
        <div class="field">
          <label>Verification URL</label>
          <input value="${cert.url}" readonly />
        </div>
        <button class="primary-btn" onclick="downloadCertificate('${cert.id}')">
  Download Certificate
</button>
        <button class="secondary-btn" onclick="navigate('verify:${cert.id}')">Open verification</button>
      </aside>
    </section>
  `;
}

function certificateMarkup(cert) {
  return `
    <article class="certificate" id="certificate-${cert.id}">
      <div class="cert-watermark"></div>
      <div class="cert-border"></div>

      <div class="cert-topline">
        <div class="brand">
          <span class="mark li-mark">
            <span>${brandConfig.initials}</span>
          </span>

          <span>${brandConfig.platformName}</span>
        </div>

        <div class="cert-issuer">
          ${brandConfig.certificationBoard}
        </div>
      </div>

      <div class="cert-title">
        Professional Certificate
      </div>

      <p class="cert-subtitle">
        This certificate officially verifies that
      </p>

      <div class="cert-name">
        ${cert.name}
      </div>

      <div class="cert-course">
        has successfully completed the certified professional program in
        <br>
        <strong>${cert.course}</strong>
      </div>

      <div class="cert-meta">
        <div>
          <span>Certificate ID</span>
          <strong>${cert.id}</strong>
        </div>

        <div>
          <span>Completion Date</span>
          <strong>${cert.date}</strong>
        </div>

        <div>
          <span>Issued By</span>
          <strong>${brandConfig.issuerName}</strong>
        </div>
      </div>

      <div class="cert-foot">

        <div class="signature">
          <span class="signature-name">
            ${brandConfig.signatureName}
          </span>

          <div class="signature-line"></div>

          Authorized Signatory
          <br>

          ${brandConfig.companyName}
        </div>

        <div class="seal">
          VERIFIED
        </div>

        <div class="qr-block">

          <img
            src=\"https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(cert.url)}\"
            alt=\"QR Code\"
          />

          <p class="muted cert-verify-text">
            Scan to verify
        
          </p>
          
        </div>
      </div>
    </article>
  `;
}

function verificationView(id) {
  loadPublicCertificate(id);
  const cert = Object.values(state.certificates).find((item) => item.id === id) || state.publicVerifications[id] || {
    id,
    name: "Verified Learner",
    course: "Professional Certification",
    date: new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }),
  };
  return `
    <section class="panel verification">
      <div class="verify-check">✓</div>
      <p class="eyebrow" style="margin-top:20px">Verification status</p>
      <h2>Certificate verified</h2>
      <p class="muted">Issued by ${brandConfig.issuerName}. For support, contact ${brandConfig.supportEmail}.</p>
      <div class="table-row"><strong>Student name</strong><span>${cert.name}</span></div>
      <div class="table-row"><strong>Course completed</strong><span>${cert.course}</span></div>
      <div class="table-row"><strong>Certificate ID</strong><span>${cert.id}</span></div>
      <div class="table-row"><strong>Completion date</strong><span>${cert.date}</span></div>
      <div class="table-row"><strong>Verification status</strong><span>Valid and active</span></div>
      <button class="primary-btn" onclick="navigate('courses')">Explore certifications</button>
    </section>
  `;
}

function adminView() {
  if (!state.user) {
    return emptyState("Admin login required", "Login with the admin email to view the operating dashboard.", "Admin login", "openLogin('login')");
  }
  if (!state.isAdmin) {
    return emptyState("Admin access only", "This dashboard is restricted to approved LearnIndians admin accounts.", "Go to dashboard", "navigate('dashboard')");
  }
  loadAdminStats();
  const paid = Object.values(state.progress).filter((item) => item.paid).length;
  const completed = Object.values(state.progress).filter((item) => item.quizPassed).length;
  const stats = state.adminStats || {
    users: isCloudReady() ? "..." : 1,
    enrollments: paid,
    completions: completed,
    certificates: Object.keys(state.certificates).length,
  };
  return `
    <section>
      <div class="section-head">
        <div>
          <p class="eyebrow">Admin preview</p>
          <h2>Operating dashboard</h2>
          <p>Track enrollments, completion, revenue, and certification activity from one clean workspace.</p>
        </div>
      </div>
      <div class="admin-grid">
        <div class="admin-card"><strong>${stats.users}</strong><span class="muted">Users</span></div>
        <div class="admin-card"><strong>${stats.enrollments}</strong><span class="muted">Paid enrollments</span></div>
        <div class="admin-card"><strong>${stats.completions}</strong><span class="muted">Completions</span></div>
        <div class="admin-card"><strong>${stats.pendingPayments || 0}</strong><span class="muted">Pending payments</span></div>
      </div>
      <div class="panel content-panel" style="margin-bottom:16px">
        <h3>Manual UPI payment verification</h3>
        ${paymentRequestsTable()}
      </div>
      <div class="panel content-panel">
        <h3>Course performance</h3>
        ${courses.map((course) => `
          <div class="table-row">
            <div><strong>${course.title}</strong><p class="muted">${course.category} · ${course.duration}</p></div>
            <span class="pill">₹${brandConfig.coursePrice}</span>
            <span class="pill">${percent(course)}%</span>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function paymentRequestsTable() {
  const requests = state.adminPaymentRequests.length ? state.adminPaymentRequests : Object.values(state.paymentRequests);
  if (!requests.length) {
    return emptyInline("No manual UPI payment requests yet.");
  }

  return requests.map((request) => `
    <div class="table-row">
      <div>
        <strong>${request.student_name || request.user_email || "Learner"}</strong>
        <p class="muted">${request.course_title} · ₹${request.amount} · UTR: ${request.utr}</p>
      </div>
      <span class="pill">${request.status}</span>
      ${request.status === "pending" ? `<button class="primary-btn" onclick="approvePaymentRequest('${request.id || ""}', '${request.user_id || ""}', '${request.course_id}')">Approve</button>` : `<span class="pill">Done</span>`}
    </div>
  `).join("");
}

function aboutView() {
  return `
    <section class="info-page">
      <div class="section-head">
        <div>
          <p class="eyebrow">About ${brandConfig.platformName}</p>
          <h2>Fast career certifications for India's job-ready generation.</h2>
          <p>${brandConfig.platformName} is a micro-learning platform by ${brandConfig.companyName}, built for students, freshers, hospitality workers, job seekers, and professionals who want practical skills and verified certificates quickly.</p>
        </div>
      </div>
      <div class="info-grid">
        <div class="panel info-card"><h3>What we offer</h3><p>Short career-focused lessons, quick quizzes, progress tracking, and instantly verifiable professional certificates.</p></div>
        <div class="panel info-card"><h3>Our promise</h3><p>Users should discover a course, pay securely, and start learning within 2-3 minutes.</p></div>
        <div class="panel info-card"><h3>Issuer</h3><p>${brandConfig.issuerName}<br>${brandConfig.certificationBoard}</p></div>
      </div>
    </section>
  `;
}

function contactView() {
  return `
    <section class="info-page">
      <div class="panel verification">
        <p class="eyebrow">Contact</p>
        <h2>Support and business information</h2>
        <div class="table-row"><strong>Platform</strong><span>${brandConfig.platformName}</span></div>
        <div class="table-row"><strong>Company</strong><span>${brandConfig.companyName}</span></div>
        <div class="table-row"><strong>Support email</strong><span>${brandConfig.supportEmail}</span></div>
        <div class="table-row"><strong>Payment gateway</strong><span>${brandConfig.paymentGateway}</span></div>
        <div class="table-row"><strong>Temporary website URL</strong><span>${brandConfig.temporaryDomain}</span></div>
        <p class="muted">A full business address, phone number, and GST details can be added here before final payment gateway submission.</p>
      </div>
    </section>
  `;
}


function legalView(type) {
  const pages = {
    terms: {
      title: "Terms & Conditions",
      intro: `These terms govern use of ${brandConfig.platformName}, a fast career certification platform operated by ${brandConfig.companyName}.`,
      points: [
        "Users must provide accurate login and certificate information.",
        `Course access is provided after successful payment through ${brandConfig.paymentGateway} or approved free/demo access.`,
        "Certificates are issued after course completion and quiz/pass requirements are met.",
        "Certificates verify completion of platform learning content and do not guarantee employment.",
        "Misuse, fake identity, scraping, copying course material, or fraudulent payment activity may lead to account restriction.",
      ],
    },
    privacy: {
      title: "Privacy Policy",
      intro: `${brandConfig.platformName} collects only the information needed to provide learning, payment, certificate, and support services.`,
      points: [
        "We may collect name, email, mobile number, course progress, payment status, and certificate records.",
        "Payment information is processed by the payment gateway. We do not store card or bank details in this app.",
        "Certificate verification pages may publicly show student name, course name, certificate ID, completion date, and verification status.",
        "Support requests may be handled through the support email listed on this website.",
        "Hindi and additional language support may be added later, but the MVP is English only.",
      ],
    },
    refund: {
      title: "Refund & Cancellation Policy",
      intro: `This policy explains refunds for ${brandConfig.platformName} certification purchases.`,
      points: [
        "For individual courses, refund requests should be sent to support before course completion or certificate generation.",
        "Once a certificate is generated, the course is considered consumed and may not be eligible for refund except in duplicate payment or technical failure cases.",
        "For monthly access, cancellation stops future access renewal. Used subscription periods may not be refunded.",
        "Duplicate payments, failed unlocks after successful payment, or gateway-related issues will be reviewed and resolved through support.",
        `Support email: ${brandConfig.supportEmail}`,
      ],
    },
  };
  const page = pages[type];
  return `
    <section class="info-page">
      <div class="panel legal-card">
        <p class="eyebrow">LearnIndians policy</p>
        <h2>${page.title}</h2>
        <p class="muted">${page.intro}</p>
        <div class="legal-list">${page.points.map((point) => `<p>${point}</p>`).join("")}</div>
        <p class="muted">Last updated: 20 May 2026</p>
      </div>
    </section>
  `;
}

function footer() {
  return `
    <footer class="site-footer">
      <div>
        <div class="brand"><span class="mark li-mark"><span>${brandConfig.initials}</span></span><span>${brandConfig.platformName}</span></div>
        <p class="muted">${brandConfig.tagline} Operated by ${brandConfig.companyName}.</p>
      </div>
      <div class="footer-links">
        <button onclick="navigate('about')">About</button>
        <button onclick="navigate('contact')">Contact</button>
        <button onclick="navigate('terms')">Terms</button>
        <button onclick="navigate('privacy')">Privacy</button>
        <button onclick="navigate('refund')">Refund Policy</button>
      </div>
    </footer>
  `;
}

function bottomNav() {
  const items = [
    ["home", "Home"],
    ["courses", "Courses"],
    ["dashboard", "Progress"],
    ["contact", "Contact"],
  ];
  return `<nav class="bottom-nav">${items.map(([view, label]) => `<button class="${state.view === view ? "active" : ""}" onclick="navigate('${view}')">${label}</button>`).join("")}</nav>`;
}

function modal() {
  if (state.modal.type === "pay") {
    const course = courses.find((item) => item.id === state.modal.courseId);
    const upiLink = buildUpiLink(course);
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(upiLink)}`;
    const request = getPaymentRequest(course.id);
    return `
      <div class="modal-backdrop">
        <div class="panel modal payment-modal">
          <p class="eyebrow">Manual UPI verification</p>
          <h2>Enroll in ${course.title}</h2>
          <p class="muted">Pay ₹${brandConfig.coursePrice} to ${brandConfig.businessName}, then enter the UTR/reference number. Admin approval unlocks the course.</p>
          <div class="upi-box">
            <img src="${qrUrl}" alt="UPI payment QR for ${brandConfig.businessName}" />
            <div>
              <span class="badge">UPI ID</span>
              <h3>${brandConfig.upiId}</h3>
              <p class="muted">Amount: ₹${brandConfig.coursePrice}</p>
              <a class="primary-btn pay-link" href="${upiLink}">Open UPI App</a>
            </div>
          </div>
          <div class="payment-steps">
            <div><strong>1</strong><span>Scan QR or open UPI app</span></div>
            <div><strong>2</strong><span>Pay exactly ₹${brandConfig.coursePrice}</span></div>
            <div><strong>3</strong><span>Submit UTR for admin verification</span></div>
          </div>
          ${request?.status === "pending" ? `<div class="status-box"><strong>Payment request submitted</strong><p class="muted">UTR ${request.utr} is waiting for admin approval.</p></div>` : `
            <div class="field"><label>UTR / Transaction Reference Number</label><input id="utr" placeholder="Enter UPI UTR after payment" /></div>
            <button class="primary-btn" onclick="submitManualPayment('${course.id}')">Submit payment for verification</button>
          `}
          <p class="muted" style="font-size:12px">Payment taken 5 to 10 mintues to verify please refersh after payment done.</p>
          <button class="ghost-btn" onclick="closeModal()">Cancel</button>
        </div>
      </div>
    `;
  }
  return `
    <div class="modal-backdrop">
      <div class="panel modal">
        <p class="eyebrow">${isCloudReady() ? "Secure email login" : "Demo login"}</p>
        <h2>${state.authMode === "signup" ? "Create your account" : "Login to LearnIndians"}</h2>
        <p class="muted">${isCloudReady() ? "Use email and password. Your progress and certificates will be stored securely." : "Supabase keys are not added yet, so this uses demo login on this browser."}</p>
        <div class="segmented">
          <button class="${state.authMode === "login" ? "active" : ""}" onclick="setAuthMode('login')">Login</button>
          <button class="${state.authMode === "signup" ? "active" : ""}" onclick="setAuthMode('signup')">Create account</button>
        </div>
        <div class="field ${state.authMode === "login" ? "hide" : ""}"><label>Full name</label><input id="name" autocomplete="name" placeholder="Enter your full name" /></div>
        <div class="field"><label>Email</label><input id="email" type="email" autocomplete="email" placeholder="you@example.com" /></div>
        <div class="field"><label>Password</label><input id="password" type="password" autocomplete="${state.authMode === "signup" ? "new-password" : "current-password"}" placeholder="Enter password" /></div>
        <button class="primary-btn" onclick="completeLogin()">${state.authMode === "signup" ? "Create account" : "Login"}</button>
        <button class="ghost-btn" onclick="closeModal()">Cancel</button>
      </div>
    </div>
  `;
}

function emptyState(title, copy, button, action) {
  return `
    <section class="panel verification">
      <p class="eyebrow">${brandConfig.platformName}</p>
      <h2>${title}</h2>
      <p class="muted">${copy}</p>
      <button class="primary-btn" onclick="${action}">${button}</button>
    </section>
  `;
}

function emptyInline(copy) {
  return `<div class="admin-card"><p class="muted">${copy}</p></div>`;
}

function qrMarkup(seed) {
  let bits = "";
  for (let index = 0; index < 81; index += 1) {
    const code = seed.charCodeAt(index % seed.length);
    bits += (code + index * 7) % 3 === 0 || index < 3 || index > 77 ? "<i></i>" : "<span></span>";
  }
  return `<div class="qr" aria-label="QR verification code">${bits}</div>`;
}

function buildUpiLink(course) {
  const params = new URLSearchParams({
    pa: brandConfig.upiId,
    pn: brandConfig.businessName,
    am: String(brandConfig.coursePrice),
    cu: "INR",
    tn: `${brandConfig.platformName} - ${course.title}`,
  });
  return `upi://pay?${params.toString()}`;
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  save();
  render();
}

function setFilter(category) {
  state.filter = category;
  render();
}

function startCourse(courseId) {
  requireUser(() => {
    if (getProgress(courseId).paid) {
      state.selectedCourse = courseId;
      navigate("learn", courseId);
    } else {
      state.modal = { type: "pay", courseId };
      render();
    }
  });
}

async function submitManualPayment(courseId) {

  const button = event.target;

  const utr = document.querySelector("#utr")?.value.trim();

  if (!utr || utr.length < 6) {
    showToast("Enter a valid UTR or transaction reference number.");
    return;
  }

  button.disabled = true;

  button.innerHTML = `
    <span class="loader"></span>
    Verifying Payment...
  `;


  const created = await createPaymentRequest(courseId, utr);

  if (!created) {
    button.disabled = false;
    button.innerHTML = "Submit payment for verification";
    return;
  }

  state.modal = null;

  render();

  showSuccessAnimation(
    "Payment Submitted",
    "Your payment was submitted successfully and is waiting for admin approval."
  );

  state.adminStats = null;
  state.adminPaymentRequests = [];

  await loadAdminStats();

  navigate("dashboard");
}

async function approvePaymentRequest(requestId, userId, courseId) {

  if (!state.isAdmin) return;

  const button = event.target;

  button.disabled = true;

  button.innerHTML = `
    <span class="loader"></span>
    Approving...
  `;

  if (!isCloudReady()) {
    setProgress(courseId, { paid: true });

    showSuccessAnimation(
      "Course Unlocked",
      "Payment approved successfully."
    );

    render();
    return;
  }

  const { error: requestError } = await supabaseClient
    .from("payment_requests")
    .update({
      status: "approved",
      approved_by: state.user.id,
      approved_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq("id", requestId);

  if (requestError) {
    showToast(requestError.message);
    return;
  }

  const { error: enrollmentError } = await supabaseClient
    .from("enrollments")
    .upsert({
      user_id: userId,
      course_id: courseId,
      paid: true,
      completed_modules: [],
      quiz_passed: false,
      updated_at: new Date().toISOString(),
    });

  if (enrollmentError) {
    showToast(enrollmentError.message);
    return;
  }

  state.adminStats = null;
  state.adminPaymentRequests = [];

  await loadAdminStats();

  showSuccessAnimation(
    "Course Approved",
    "The learner now has access to the course."
  );

  render();
}
function completeModule(courseId, moduleIndex) {
  const progress = getProgress(courseId);
  const completedModules = [...new Set([...progress.completedModules, moduleIndex])];
  setProgress(courseId, { completedModules });
  showToast("Lesson completed.");
}

function nextModule(courseId) {
  const course = courses.find((item) => item.id === courseId);
  completeModule(courseId, state.activeModule);
  state.activeModule = Math.min(course.modules.length, state.activeModule + 1);
  render();
}

function setModule(index) {
  state.activeModule = index;
  state.quizAnswered = null;
  render();
}

function answerQuiz(courseId, index) {
  const course = courses.find((item) => item.id === courseId);
  state.quizAnswered = index;
  if (index === course.quiz.answer) {
    setProgress(courseId, { quizPassed: true, completedModules: course.modules.map((_, moduleIndex) => moduleIndex) });
    showToast("Quiz passed. Certificate unlocked.");
  } else {
    showToast("Almost. Try the correct answer and unlock your certificate.");
  }
  render();
}

function openCertificate(courseId) {
  state.selectedCourse = courseId;
  navigate("certificate", courseId);
}

function openLogin(mode = "login") {
  state.authMode = mode;
  state.modal = { type: "login" };
  render();
}

function setAuthMode(mode) {
  state.authMode = mode;
  render();
}

async function completeLogin() {
  const name = document.querySelector("#name")?.value.trim() || "Demo Learner";
  const email = document.querySelector("#email").value.trim() || "learner@example.com";
  const password = document.querySelector("#password")?.value || "learn1234";
  const next = state.modal.next;

  if (isCloudReady()) {
    if (!email || !password || (state.authMode === "signup" && !name)) {
      showToast("Please enter all required details.");
      return;
    }

    const authCall =
      state.authMode === "signup"
        ? supabaseClient.auth.signUp({
            email,
            password,
            options: { data: { full_name: name } },
          })
        : supabaseClient.auth.signInWithPassword({ email, password });

    const { data, error } = await authCall;
    if (error) {
      const message = error.message.toLowerCase().includes("rate")
        ? "Supabase email limit reached. Disable email confirmation for MVP or wait a few minutes."
        : error.message;
      showToast(message);
      return;
    }

    if (state.authMode === "signup" && data.user && !data.session) {
      state.modal = null;
      showToast("Account created. Check your email to confirm, then login.");
      render();
      return;
    }

    if (data.user) {
      await hydrateCloudUser(data.user, name);

      await loadAdminStats();
    }
  } else {
    state.user = { name, email };
    state.isAdmin = liConfig.adminEmails?.includes(email);
  }

  state.modal = null;
  save();
  showToast(`Logged in. Welcome to ${brandConfig.platformName}.`);
  if (next) next();
  render();
}

async function logout() {
  if (isCloudReady()) {
    await supabaseClient.auth.signOut();
  }
  state.user = null;
  state.isAdmin = false;
  save();
  render();
}

function closeModal() {
  state.modal = null;
  render();
}

window.addEventListener("hashchange", () => {
  state.view = location.hash.replace("#", "") || "home";
  render();
});

render();
initAuth();
function downloadCertificate(certId) {

  const certificate = document.getElementById(`certificate-${certId}`);

  if (!certificate) {
    showToast("Certificate not found.");
    return;
  }

  const printWindow = window.open("", "_blank");

  printWindow.document.write(`
    <html>
      <head>
        <title>Certificate</title>

        <link rel="stylesheet" href="styles.css">

        <style>
          body {
            margin: 0;
            background: white;
          }
        </style>
      </head>

      <body>
        ${certificate.outerHTML}
      </body>
    </html>
  `);

  printWindow.document.close();

  setTimeout(() => {
    printWindow.print();
  }, 700);
}
