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
      ["The Hotel Flow", "A hotel works when every department moves as one connected system. The front office handles guest arrivals, check-ins, and checkout. Housekeeping ensures rooms are clean and ready. Food and beverage manages dining, room service, and banquet events. Maintenance keeps the property in working condition.\n\nWhen one department fails, guests feel it immediately. A delayed room cleaning means a guest waits at reception. The general manager ensures all departments communicate and meet daily targets.\n\nKey habits for smooth hotel flow: daily briefings between department heads, shared occupancy reports, clear escalation paths for complaints, and a single log for all guest requests. Always read the day's briefing sheet before your shift. Know the full house percentage, VIP list, and pending maintenance issues."],
      ["Guest Moments", "Every guest stay has critical moments that permanently shape their perception of your hotel. The first impression begins at the entrance — the greeting, the lobby atmosphere, and the speed of check-in. A warm, confident welcome can recover from a difficult journey and set a positive tone for the entire stay.\n\nThe second critical moment is the room reveal. When a guest enters their room for the first time, cleanliness, temperature, lighting, and smell all register within seconds. A well-prepared room requires no explanation.\n\nThe checkout is the final impression. Guests who leave with a smooth, fast checkout and a genuine farewell are more likely to return and recommend the property.\n\nService recovery is the most powerful moment of all. When something goes wrong and your team fixes it quickly and professionally, that guest often becomes more loyal than one who never had a problem. Always acknowledge, apologize, act, and follow up."],
      ["Daily Controls", "Hotel operations run on checklists and shift reports. Every department head must complete opening and closing checklists to ensure nothing is missed. The front office morning checklist includes: review of arrivals and departures, VIP alerts, room status from housekeeping, and outstanding payments.\n\nOccupancy tracking is the core metric. Know your hotel's occupancy percentage, average daily rate (ADR), and revenue per available room (RevPAR) every single day.\n\nStaff briefings should happen at the start of every shift. Cover the day's occupancy, special guests, ongoing complaints, and any operational issues.\n\nMaintenance requests must be logged and followed up within defined timeframes. Guest-facing issues like faulty air conditioning must be resolved within 2 hours."],
      ["Rooms Division", "The rooms division includes front office and housekeeping — the two departments that directly determine guest satisfaction. Housekeeping is the largest department in most hotels. Room attendants clean and prepare rooms to a defined standard. Supervisors inspect rooms before they are marked clean and available.\n\nFront office is the face of the hotel. Receptionists handle check-in, check-out, guest queries, complaints, and billing. The front office manager ensures adequate staffing during peak hours and accurate room allocation.\n\nRoom status codes coordinate between both teams: Occupied, Vacant Clean, Vacant Dirty, Out of Order, Do Not Disturb. Every front office team member must understand these codes to avoid assigning an unprepared room to a guest."],
      ["Food and Beverage Basics", "Food and beverage is both a revenue generator and a major driver of guest satisfaction. Most hotels operate at least one restaurant, a bar, room service, and banquet facilities. Each has different service standards and operational requirements.\n\nThe F&B manager is responsible for menu planning, staff scheduling, cost control, hygiene compliance, and guest satisfaction scores.\n\nService quality depends heavily on product knowledge. Every server must know the menu, including ingredients, allergens, preparation methods, and recommended pairings.\n\nFood safety is non-negotiable. Proper temperature storage, FIFO stock rotation, clean preparation surfaces, and personal hygiene are mandatory. A single food safety incident can permanently damage a hotel's reputation."],
      ["Revenue and Reporting", "A hotel manager who does not understand numbers cannot make good decisions. Key reports every manager must review daily include: occupancy report, revenue report, accounts receivable aging, and guest feedback summary.\n\nRevenue management means selling the right room to the right guest at the right price at the right time. Rates change based on demand, season, competitor pricing, and booking window.\n\nCost control is the other side of revenue. The main costs in a hotel are labor (typically 30-35% of revenue), cost of goods sold in F&B (28-35% of F&B revenue), energy, and maintenance.\n\nGuest satisfaction scores directly affect future bookings. Review feedback daily, identify patterns, and brief your team on recurring issues every week."]
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
      ["First Impression", "The front office is the control center of the entire hotel. Every guest's journey begins and ends here. The way you greet a guest — your posture, eye contact, tone, and speed — forms their first and most lasting impression of the property.\n\nStand upright behind the desk. Make eye contact as the guest approaches, not after they speak. Smile before they reach you. Say the guest's name as soon as you have it — people respond instantly to hearing their own name used correctly.\n\nConfidence matters. If you are unsure about something, do not show uncertainty to the guest. Say 'Let me confirm that for you right now' and check immediately. Never say 'I don't know' without following it with an action.\n\nSpeed is a service quality indicator. A check-in that takes more than 4 minutes for a standard arrival signals operational inefficiency. Prepare for expected arrivals in advance — pull up reservations, pre-assign rooms, and pre-authorize payment methods during quiet periods so peak-hour check-ins are fast and smooth."],
      ["Check-In Standard", "A complete check-in involves six steps: identity verification, reservation confirmation, payment authorization, room assignment, key issuance, and property orientation. Skipping or rushing any step creates problems later in the stay.\n\nIdentity verification requires a government-issued photo ID for every adult guest. This is both a legal requirement and a security measure.\n\nConfirm the reservation details aloud with the guest: arrival and departure dates, room type, rate, and any special requests. If there is a discrepancy, resolve it now, not after they reach the room.\n\nSpecial requests — such as high floor, away from elevator, extra pillows, or early check-in — must be noted and communicated to housekeeping immediately. A request noted but not acted on is worse than a request never made."],
      ["Coordination", "The front office is the communication hub that connects every department. Understanding how to coordinate effectively with housekeeping, reservations, maintenance, and accounts is what separates a good front office executive from an average one.\n\nWith housekeeping: communicate room priorities for early arrivals, flag rooms with Do Not Disturb signs, and update room status the moment a room is confirmed clean. Never assign a room that has not been signed off by housekeeping supervision.\n\nWith maintenance: log every guest-reported technical issue with room number, nature of the problem, and time reported. Follow up within 30 minutes to confirm the issue has been addressed.\n\nWith accounts: ensure all billing instructions are correctly attached to each reservation before check-in. Corporate accounts, travel agent bookings, and split-billing requests must be verified and confirmed — not assumed."],
      ["Billing Basics", "The checkout experience is a guest's final interaction with your hotel. A smooth, accurate, and fast checkout creates a positive lasting impression. A disputed bill creates frustration that overrides everything good that happened during the stay.\n\nBefore presenting the folio to a guest, review every charge. Verify that the room rate matches the booked rate for each night. Remove any charges that appear incorrect before the guest sees them.\n\nExplain the bill in plain language. Guests who understand their bill rarely dispute it.\n\nWhen a guest disputes a charge, stay calm. Never argue. Say 'Let me check that for you.' Pull up the relevant record. If the charge is valid, show the evidence politely. If it is an error, remove it immediately and apologize without making excuses."],
      ["Shift Handover", "A shift handover is one of the most important operational moments in a hotel. Information that is not passed on correctly causes problems in the next shift — guests receive wrong information, pending requests are dropped, and the incoming team starts blind.\n\nEvery handover must cover: current occupancy and expected arrivals or departures in the next 4 hours, any ongoing guest complaints and their resolution status, pending maintenance issues, VIP guests in-house and special instructions, cash float count and discrepancies.\n\nThe handover should be done face to face between the outgoing and incoming supervisor, not just left as a written note. Written logs are important for records, but verbal handovers allow questions to be asked immediately.\n\nAlways read the shift log before starting work, even if you have been verbally briefed. The log is the official record. If something is not in the log, it officially did not happen."]
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
      ["Service Mindset", "Exceptional customer service begins with a mindset, not a script. Before you can deliver great service, you need to genuinely believe that every customer interaction is an opportunity — to solve a problem, to build trust, and to create a loyal relationship.\n\nCustomers remember how you made them feel far longer than they remember what you said. When a customer contacts support, they are almost always experiencing some level of frustration or urgency. Your first job is to make them feel heard and understood — before you solve anything.\n\nEmpathy is the foundation. It does not mean agreeing with everything the customer says. It means acknowledging their experience: 'I completely understand how frustrating that must have been.'\n\nOwnership is the second pillar. Do not transfer a customer's problem from person to person without resolution. If the issue lands with you, own it until it is resolved or until you have personally ensured the right person has taken it over with full context."],
      ["The 3-Part Reply", "Every professional customer service response — whether on a call, in an email, or via chat — should contain three elements: acknowledgement, solution, and timeline. This structure works in every situation.\n\nAcknowledgement means recognizing what the customer experienced. 'I understand your order has not arrived after 7 days and that is not acceptable.' You are not accepting blame — you are confirming that you heard and understood the problem.\n\nSolution means telling the customer exactly what you are going to do. Not what you might do — what you will do. 'I am going to raise an urgent investigation with our logistics team and request a replacement shipment.'\n\nTimeline means giving the customer a specific timeframe. 'You will receive an update by email within 24 hours.' A customer who knows when to expect resolution stops calling to chase."],
      ["Difficult Customers", "Every customer service professional will regularly encounter customers who are angry, rude, or unreasonable. How you handle these interactions defines your professional reputation.\n\nThe first rule is: never match the customer's energy. If a customer is shouting, your voice becomes calmer and more measured. Escalating emotionally solves nothing.\n\nLet the customer finish speaking before you respond. Do not interrupt, even if they are saying something factually incorrect. Interrupting a frustrated customer signals that you are not listening.\n\nMirror the problem back to them in your own words. This confirms your understanding and shows the customer their problem has been heard accurately.\n\nAvoid blame language in both directions. Do not blame the customer, and do not unnecessarily blame your company. Focus on facts and actions. Move forward, not backward."],
      ["Retention", "Customer retention is significantly more valuable than customer acquisition. Retaining an existing customer costs 5 to 7 times less than acquiring a new one, and loyal customers spend more and refer others.\n\nEvery service interaction is a retention moment. A complaint that is resolved quickly and generously often creates a stronger bond than a transaction that went perfectly.\n\nProactive service is the highest form of retention. Do not wait for customers to complain — anticipate issues and reach out first. Proactive communication transforms a potential complaint into a moment of trust.\n\nFollow-up is a retention tool that is almost universally neglected. After resolving a complaint, following up 48 hours later with a simple check-in creates a disproportionately powerful impression."],
      ["Phone and Chat Skills", "The channel you are on — phone, chat, or email — requires different communication adjustments, but the core principles of acknowledgement, clarity, and ownership remain the same.\n\nOn the phone, your voice is your only tool. Speak clearly, at a moderate pace, and project confidence. Smile while you speak — it genuinely changes your vocal tone. Use the customer's name 2-3 times during a call.\n\nOn chat, your typing speed and accuracy matter. Avoid overly long paragraphs — break information into short, clear segments. Use complete sentences and correct spelling.\n\nFor both channels, never put a customer on hold without explaining why and giving a timeframe.\n\nEnd every interaction with a clean close: confirm the resolution, provide any reference numbers, explain next steps, and ask 'Is there anything else I can help you with today?'"]
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
      ["Shift Briefing", "A strong shift starts before the first guest arrives. The pre-shift briefing is a 10-15 minute meeting where the manager aligns the entire front-of-house team on everything they need to know to deliver consistent, informed service.\n\nCover the day's reservation volume and any large parties or special events. Large tables require pre-set menus, extra mise en place, and often a dedicated server.\n\nCommunicate the day's specials clearly. Every server must be able to describe each special dish — including key ingredients and price — without reading from a card. Test your team by asking a random server to describe a special before opening.\n\nFlag any stock issues or 86'd items immediately. Nothing damages a guest experience faster than ordering something the kitchen cannot make and being told after a long wait."],
      ["Table Flow", "Table flow is the rhythm of a restaurant shift. From seating through ordering, cooking, serving, billing, and resetting — every step must move at a pace that keeps guests satisfied and maximizes covers served per shift.\n\nSeating should be strategic. Do not fill all sections simultaneously at open — this overwhelms the kitchen and service team at once. Stagger seatings so tables are at different stages of their meal at the same time.\n\nOrder timing is critical. Starters and mains should not arrive simultaneously unless the guest requests it. Train servers to communicate table timing to the kitchen using clear language.\n\nBilling should be anticipated. When a table is clearly winding down, the server should proactively offer the bill. Guests who are ready to leave but have to wait for the bill form a negative final impression regardless of how good the meal was."],
      ["Kitchen Coordination", "The relationship between front of house and kitchen is the most important operational relationship in a restaurant. When this relationship works well, service is seamless. When it breaks down, guests suffer.\n\nThe pass is the communication point between kitchen and floor. Every dish that leaves the kitchen must be checked at the pass for presentation, temperature, and accuracy before it goes to the table.\n\nAllergy communication is non-negotiable. When a guest declares an allergy, this information must travel from the server to the kitchen manager directly — verbally confirmed, not just printed on a ticket.\n\nDuring service, managers must monitor kitchen output pace. If one section is backing up, tables in that section will experience delays. A good manager identifies the bottleneck early and adjusts table flow accordingly."],
      ["Hygiene Standards", "Hygiene in a restaurant is not optional. It is about protecting guests, staff, and the business itself. A single serious hygiene incident can result in guest illness, regulatory shutdown, and permanent reputational damage.\n\nPersonal hygiene starts with every individual on the team. Clean uniforms daily. Hair tied back or covered. Hands washed for a minimum of 20 seconds before handling food, after touching any surface, after handling waste.\n\nStation hygiene requires cleaning and sanitizing at regular intervals throughout the shift. High-contact surfaces must be sanitized every 30 minutes during service.\n\nFood temperature management is critical. Cold food must be held below 5°C. Hot food must be held above 60°C. Food left in the danger zone between these temperatures for more than 2 hours must be discarded."],
      ["Guest Experience", "A restaurant manager's primary job during service is to be on the floor, watching. Not in the office. On the floor, reading the room, and responding in real time to what guests are experiencing.\n\nTrain yourself to see what guests see. Walk the restaurant as a guest would. Are the menus clean? Is the ambient temperature comfortable? Are tables cleared promptly?\n\nEmpty glasses are the most common and most preventable sign of inattentive service. Every server and manager on the floor should be automatically scanning for empty glasses at all times.\n\nHandling complaints on the floor requires composure and speed. The manager should go to the table personally, not send a server. Acknowledge the problem, apologize without excuses, offer a specific remedy, and follow up before the table leaves."],
      ["Cost and Waste Control", "A profitable restaurant manages its costs as carefully as it manages its guest experience. The two main cost categories that directly impact profitability are food cost and labor cost.\n\nFood cost percentage is calculated as: (Cost of food used / Food revenue) x 100. A well-run restaurant targets a food cost between 28-35% depending on the concept.\n\nPortion control is one of the simplest and most ignored tools for food cost management. Every dish should have a standardized recipe with defined portion weights.\n\nWaste tracking should be a daily discipline. Log every item that is discarded — spoilage, preparation waste, returns, spills. Review the log weekly to identify patterns and adjust ordering accordingly."]
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
      ["BDE Role", "A Business Development Executive is responsible for creating new revenue opportunities for the company. This is not a passive role. It requires daily discipline, structured thinking, and the ability to build professional relationships from scratch.\n\nThe BDE's core job is to fill the top of the sales pipeline with qualified prospects. A qualified prospect is someone who has a genuine need for your product, has the authority to make a buying decision, and has a realistic budget.\n\nMany new BDEs confuse activity with results. Making 80 calls a day to unqualified prospects is less valuable than 20 well-researched, targeted conversations with decision-makers.\n\nTrack everything. Use a CRM or well-organized spreadsheet. Every prospect interaction must be logged with a date, outcome, and next action. A BDE who relies on memory will miss follow-ups and fail to spot patterns in what is working."],
      ["Prospecting", "Prospecting is the process of identifying potential customers who are likely to benefit from your product or service. It is the foundation of all business development work.\n\nStart by building an ideal customer profile. Define the characteristics of your best potential customers: industry, company size, geographic location, job title of the decision maker, and common pain points your product addresses.\n\nUse multiple sources to find prospects. LinkedIn is the most powerful tool for B2B prospecting. Industry directories, trade association member lists, event attendee lists, and Google searches are all valid sources.\n\nLook for buying signals — indicators that a company may be actively looking for what you offer. Recent funding announcements, job postings, company expansions, or leadership changes are all signals worth noting before outreach."],
      ["Outreach", "Outreach is the first direct contact you make with a prospect. It must accomplish one thing: earn enough interest to get a conversation. You are not trying to sell the product in the first message — you are selling the meeting.\n\nShort messages perform better than long ones. A cold email or LinkedIn message should be no more than 5-6 lines. Your prospect is busy and scanning hundreds of messages.\n\nStructure every outreach message with three elements: relevance, value, and ask. Relevance means connecting to something specific about their company. Value means stating clearly what benefit you are offering. Ask means making one specific, low-commitment request — usually a 15-20 minute call.\n\nPersonalization increases response rates significantly. A message referencing something specific about their company will always outperform a generic introduction."],
      ["Follow-Up", "Most sales are not won on the first contact. The majority of conversions happen between the 5th and 8th touchpoint. Most BDEs give up after 1 or 2 attempts — this is where the discipline of professional follow-up creates a significant competitive advantage.\n\nEvery follow-up must add value. Do not send 'Just checking in' messages — they signal desperation and add nothing for the prospect. Each follow-up should bring something new: a relevant article, a case study, or a specific question that opens a conversation.\n\nSpace your follow-ups appropriately. Day 1: first outreach. Day 3: first follow-up with additional value. Day 7: second follow-up with a different angle. Day 14: final outreach before pausing.\n\nLog every follow-up in your CRM with the date, method, and content of the message. This record helps you avoid repeating yourself and track the full history of a relationship."],
      ["Lead Qualification", "Not every prospect who shows initial interest is worth pursuing equally. Lead qualification is the process of determining which prospects are most likely to convert.\n\nThe most widely used qualification framework is BANT: Budget, Authority, Need, and Timeline. Budget — does the prospect have financial capacity to purchase? Authority — are you speaking to a decision-maker? Need — is there a genuine problem your product solves? Timeline — is there urgency?\n\nQualification happens through questions, not assumptions. Ask open-ended questions: 'What does your current process look like for X?' 'What has been the biggest challenge with your existing solution?' 'Who else is typically involved in decisions like this?'\n\nBe honest in your qualification assessments. Internal pipeline reviews should reflect reality, not optimism. A pipeline filled with poorly qualified leads gives management a false picture of business health."],
      ["Closing Basics", "Closing is not a trick or a pressure tactic — it is the natural conclusion of a well-run sales process. If you have correctly identified a qualified prospect, demonstrated genuine value, and addressed their concerns, asking for the business should feel like a logical next step.\n\nAlways confirm alignment before asking for the close. Summarize the conversation and confirm the key points with the prospect before asking them to commit.\n\nThe simplest close is a direct, confident ask: 'Based on everything we've discussed, I'd recommend moving forward — can we get the paperwork started this week?' Direct asks work better than elaborate closing techniques.\n\nIf the prospect is not ready to close, agree on a specific next step with a date. A defined next step keeps momentum alive. A vague 'I'll get back to you' almost never converts."]
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
      ["Project Basics", "A project is a temporary effort with a defined goal, a start and end date, and specific resources. It is different from ongoing operations — projects end when the goal is achieved.\n\nEvery project has five essential elements: a clear objective, an owner, a timeline, constraints, and measurable outcomes.\n\nThe project manager's job is to deliver the objective within the constraints. This requires planning, communication, risk management, and the ability to make decisions under uncertainty.\n\nStart every project by writing a one-page project brief that answers: What are we doing? Why are we doing it? Who is involved? When does it need to be done? What does success look like?"],
      ["Scope Management", "Scope is the boundary of your project — what is included, what is explicitly excluded, and what the deliverables are. A well-defined scope is your most important protection against the project expanding beyond its budget and timeline.\n\nScope creep is the gradual expansion of a project's requirements beyond the original agreement. It is one of the leading causes of project failure.\n\nDocument every scope decision. Write down what is in scope and what is out of scope. When stakeholders ask for additions later, refer back to this document. If the addition is needed, create a formal change request.\n\nDefine success criteria with measurable specifics. The more specific your criteria, the less room there is for end-of-project disagreements about whether the work is complete."],
      ["Timeline Planning", "A project timeline is the sequence of tasks, their durations, their dependencies, and the critical path that determines the earliest possible completion date.\n\nBreak the project into tasks and subtasks. Each task should have a single owner, a clear deliverable, an estimated duration, and identified dependencies. A task with no owner will not be completed.\n\nIdentify the critical path — the sequence of dependent tasks that determine the total project duration. Any delay on the critical path delays the entire project.\n\nAlways add buffer to your timeline. Experienced project managers build in 15-20% contingency time. Estimates are always optimistic, dependencies are never fully predictable, and team members are never 100% available."],
      ["Stakeholder Management", "A stakeholder is anyone who is affected by or has an interest in the outcome of your project. Managing stakeholders — their expectations, their communication needs, and their involvement — is one of the most critical skills in project management.\n\nMap your stakeholders at the start of every project. Identify who they are, what their interest in the project is, how much influence they have, and how much the project impacts them.\n\nDifferent stakeholders need different communication. The project sponsor wants a high-level progress update. The technical team needs detailed task-level clarity. End users need to understand how the outcome will affect their work.\n\nManage expectations continuously. Stakeholders whose expectations are not actively managed will form their own assumptions — and those assumptions are almost always either too optimistic or too pessimistic."],
      ["Risk Management", "A risk is a future event that may or may not happen, but if it does, will have a negative impact on the project. Risk management is the discipline of identifying these events early and preparing responses before they occur.\n\nEvery project team should conduct a risk identification session at the start of the project. Ask: what could go wrong? What dependencies do we have that are outside our control? What assumptions are we making that could prove false?\n\nAssess each risk on two dimensions: probability and impact. High probability and high impact risks require immediate mitigation plans.\n\nFor each high-priority risk, define a response strategy: avoidance, mitigation, transfer, or acceptance. Review your risk log at every weekly project meeting — new risks will emerge as the project progresses."],
      ["Delivery and Closeout", "Project delivery is not complete when the work is done — it is complete when the outcome has been accepted by the stakeholders, all documentation is in order, and the project has been formally closed.\n\nConduct a structured delivery review before final sign-off. Present the deliverables against the success criteria defined at the start of the project. Obtain written sign-off from the project owner.\n\nCapture lessons learned from the project. Gather the team and answer three questions: What went well and why? What did not go well and why? What would we do differently next time?\n\nRecognize the team. Projects are delivered by people. A manager who closes a project without acknowledging the effort and contribution of team members is building a team that will be less motivated on the next project."]
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
      ["Marketing Funnel", "The marketing funnel describes a potential customer's journey from first becoming aware of your brand to making a purchase. Every digital marketing decision should be made with an understanding of which stage of the funnel you are addressing.\n\nThe five stages are: Awareness, Interest, Consideration, Conversion, and Retention. Different marketing channels and tactics work best at different funnel stages.\n\nSocial media and display advertising are awareness tools. Email nurture sequences and detailed blog content work at the consideration stage. Retargeting ads and limited-time offers drive conversion.\n\nThe most common mistake in digital marketing is focusing almost entirely on conversion tactics while neglecting awareness and retention. Sustainable growth requires feeding all stages of the funnel consistently."],
      ["Content Marketing", "Content marketing is the practice of creating and distributing valuable, relevant content to attract and engage a defined audience. The key word is valuable: content that serves the audience's needs, not just the brand's promotional agenda.\n\nEffective content starts with a clear understanding of your audience. Who are they? What problems do they face? What questions do they ask before making a purchase decision?\n\nEvery piece of content should have one primary audience, address one specific problem, and include one clear call to action. Trying to speak to everyone about everything results in content that resonates with no one.\n\nConsistency is the most undervalued element of content marketing. A brand that publishes high-quality content every week for a year will outperform a brand that publishes sporadically at higher quality."],
      ["Paid Advertising", "Paid advertising allows you to put your message in front of a specific audience immediately. Done well, it is one of the most powerful tools in digital marketing. Done poorly, it drains budget with no return.\n\nThe four elements of a successful paid ad campaign are: the right audience, a compelling offer, clear creative, and accurate tracking. If any one of these is missing, the campaign will underperform.\n\nYour ad creative must stop the scroll in under 2 seconds. The first frame of a video, the headline of a text ad, and the image in a display ad are all competing with everything else in the user's feed. Test multiple creative variations.\n\nTracking is non-negotiable. Install the Meta Pixel and Google Analytics on your website before spending a single rupee on ads. Without conversion tracking, you cannot know which ads are driving results."],
      ["SEO Basics", "Search Engine Optimization is the practice of improving your website's visibility in organic search results. Unlike paid advertising, SEO builds long-term, compounding traffic that continues to deliver value without ongoing spend.\n\nGoogle's ranking algorithm considers hundreds of factors, but the most important ones are: relevance, authority, and technical quality.\n\nKeyword research is the foundation of SEO. Before creating any content, identify the specific search terms your target audience uses. Use tools like Google Search Console to find keywords with meaningful search volume.\n\nContent quality is now Google's most important ranking factor. Long, thorough, well-researched content that genuinely answers the user's question outperforms thin content stuffed with keywords."],
      ["Email Marketing", "Email marketing consistently delivers the highest return on investment of any digital marketing channel. It works because email is a direct, personal, permission-based channel where you communicate with people who have already expressed interest in your brand.\n\nBuilding your email list is a foundational investment. Every website visitor, social media follower, and customer is a potential subscriber. Offer genuine value in exchange for an email address.\n\nEvery email should serve one purpose. Promotional emails with multiple offers and many calls to action confuse the reader and dilute the conversion. Identify the single most important action you want the reader to take.\n\nSubject lines determine whether your email is opened or ignored. Test subject lines with curiosity gaps, specific numbers, and personalization. The subject line is the most important line you will write in any email."],
      ["Analytics and Measurement", "Data without interpretation is just numbers. The skill in digital marketing analytics is knowing which metrics matter for your specific goal and how to translate insights into decisions.\n\nEvery digital marketing activity should be connected to a measurable business outcome. Not just more traffic — but traffic that converts to leads, leads that convert to customers.\n\nThe most important metrics for each stage: Awareness — reach and impressions. Acquisition — click-through rate and cost per click. Conversion — conversion rate and cost per acquisition. Retention — repeat purchase rate and customer lifetime value.\n\nTest systematically. Every improvement hypothesis should be tested with a controlled experiment — change one variable at a time, run the test long enough to achieve significance, and document the result."],
      ["Campaign Planning", "A digital marketing campaign is a coordinated set of activities designed to achieve a specific marketing objective within a defined timeframe and budget.\n\nStart every campaign with a clear objective using the SMART framework: Specific, Measurable, Achievable, Relevant, Time-bound. 'Increase brand awareness' is not a campaign objective. A specific target with a deadline is.\n\nDefine your target audience with specificity. Create a customer persona that describes your ideal customer: their demographics, challenges, where they spend time online, and what would make them take action.\n\nBuild a campaign calendar with specific dates for each deliverable. A campaign without a calendar drifts. Review campaign performance at the midpoint and make data-driven adjustments before the campaign ends."]
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
    title: "Sales and Communication Skills",
    level: "Job-ready",
    duration: "1 day",
    lessons: 5,
    summary: "Improve listening, pitch structure, objection handling, and confident closing.",
    modules: [
      ["Sales Mindset", "Sales is one of the most misunderstood professions. In reality, professional selling is the discipline of helping the right buyer make a clear, informed decision that genuinely serves their interest.\n\nThe most effective salespeople are not the most aggressive — they are the most curious. They ask better questions, listen more carefully, and understand their buyers more deeply than their competitors.\n\nRejection is part of the profession. Develop the mindset that 'no' is information — it tells you something about fit, timing, or how you presented your solution.\n\nIntegrity is the foundation of a sustainable sales career. Selling something to a customer who does not need it, or overpromising to close a deal, may win a transaction but loses a customer and damages your professional reputation."],
      ["Discovery", "Discovery is the most valuable and most skipped phase of the sales process. It is the structured conversation before any pitch where you learn enough about the buyer's situation to know whether and how your solution is genuinely relevant.\n\nThe purpose of discovery is to understand, not to sell. Buyers can sense the difference between a salesperson asking questions to genuinely understand and one asking questions to find the angle to use in their pitch.\n\nAsk about goals first: 'What are you trying to achieve in this area over the next 6 months?' Then explore pain, budget, and decision process.\n\nAt the end of discovery, summarize what you have learned and confirm it with the buyer. This confirmation creates shared understanding and sets up the pitch perfectly."],
      ["Pitching", "A pitch is not a product brochure read aloud. It is a structured, personalized presentation that connects your solution to the specific challenges and goals the buyer revealed in discovery.\n\nStart your pitch by restating the buyer's situation in their language. This opening tells the buyer you were listening and that what follows is relevant to them, not generic.\n\nStructure your pitch around outcomes, not features. Features describe what your product does. Outcomes describe what the buyer gains. Buyers make decisions based on outcomes.\n\nKeep the pitch short and specific. A 20-minute pitch is almost always more effective than a 60-minute one. Ask for reactions throughout to turn the pitch from a monologue into a conversation."],
      ["Objection Handling", "Objections are not rejections — they are questions that signal the buyer is engaged enough to care about getting the decision right. Learn to welcome objections as a sign of serious interest.\n\nThe most common objections fall into four categories: price, timing, trust, and competition. Each category has a different underlying concern that needs to be addressed.\n\nDo not respond to objections with a counter-argument. Argue with a prospect and you may win the point but lose the sale. Acknowledge the objection genuinely, then ask a clarifying question to understand the root concern.\n\nFor price objections, the real question is usually about value, not cost. If the buyer cannot see enough value to justify the price, the solution is not to discount — it is to better demonstrate ROI."],
      ["Closing and Follow-Through", "Closing is the natural conclusion of a well-run sales conversation. If discovery was thorough, the pitch was relevant, and objections were addressed genuinely, the close should feel like a mutual agreement.\n\nLook for buying signals — statements like 'This does look like it could work for us,' questions about implementation or timeline, or the buyer asking about pricing in a detailed way. When you see them, move toward the close.\n\nThe direct ask is the most effective close: 'Based on everything we've discussed, I'd recommend starting with the standard plan. Can we move forward this week?'\n\nAfter the close, follow through exactly as promised. Every commitment you make and keep builds the foundation of a long-term account relationship."]
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
      ["AI Basics", "Artificial intelligence tools like ChatGPT, Claude, and Gemini have become practical, everyday productivity tools for working professionals. You do not need to understand how they work technically to benefit from them.\n\nAI tools excel at: generating first drafts of written content, summarizing long documents, answering general knowledge questions, translating text, creating outlines and plans, writing and explaining code, and brainstorming ideas.\n\nAI tools are not reliable for: current events and recent data, precise numerical calculations, legal or medical advice, and anything requiring verified facts for official contexts. Always fact-check.\n\nThe most important mindset shift is to think of AI as a first-draft tool and a thinking partner, not a final-answer machine. The AI generates, you evaluate and refine. Your judgment and accountability remain essential."],
      ["Prompting", "Prompting is the skill of giving AI the right instructions to get the most useful output. The quality of what an AI produces is directly determined by the quality of your instructions.\n\nA strong prompt contains five elements: role, context, task, constraints, and output format. Role tells the AI what perspective to take. Context provides relevant background. Task specifies exactly what you want. Constraints narrow the output. Output format specifies how it should be structured.\n\nBe specific about your audience. A prompt with full context and details will always produce better results than a vague one-line request.\n\nIterate on your prompts. If the first output is not quite right, tell the AI what to change. Treating AI like a conversation rather than a one-shot transaction dramatically improves results."],
      ["Workflows", "The real productivity gain from AI comes from integrating it into your regular workflows — the recurring processes that take up predictable chunks of your working time every week.\n\nEmail management: Use AI to draft responses to complex or sensitive emails, summarize long email threads before you reply, and create templates for frequently sent messages.\n\nMeeting preparation and follow-up: Before important meetings, use AI to research the other party and prepare relevant questions. After meetings, paste your rough notes into an AI tool and ask it to produce a clean summary with action items.\n\nContent creation: Use AI to turn a rough outline into a full draft, convert bullet points into a coherent paragraph, or transform a long report into a concise executive summary."],
      ["Safety and Ethics", "Using AI tools responsibly is about protecting yourself, your employer, your clients, and the integrity of your work.\n\nNever input confidential or sensitive information into a public AI tool without explicit permission from your organization. This includes customer personal data, internal financial figures, proprietary product information, legal documents, and HR records.\n\nAlways disclose AI involvement where it matters. If you are submitting work that was substantially generated by AI, disclose this where required.\n\nDo not present AI-generated content as original expertise without review. If an AI writes a technical analysis and you present it as your own expert opinion without reviewing it for accuracy, you are responsible for any errors it contains."],
      ["Tools and Practice", "The AI tool landscape is evolving rapidly, but a core set of tools has become reliable and widely adopted enough to be worth investing time in learning.\n\nChatGPT by OpenAI is the most widely used AI assistant for writing, brainstorming, coding, and general productivity tasks. Claude by Anthropic is particularly strong for long documents, nuanced writing, and careful reasoning. Google Gemini integrates directly with Google Workspace.\n\nFor image creation, Canva's AI features allow non-designers to create professional visuals. For voice and meetings, tools like Otter.ai transcribe and summarize meetings automatically.\n\nBuild a daily AI practice. Pick one recurring task in your work and commit to using AI for that task every day for two weeks. By the end, you will have learned the tool's strengths and limits and developed a reliable workflow."]
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
    title: "LinkedIn and Professional Branding",
    level: "Career",
    duration: "1 day",
    lessons: 5,
    summary: "Build a credible profile, headline, about section, posts, and networking routine.",
    modules: [
      ["Profile Positioning", "Your LinkedIn profile is your professional storefront. It is often the first place a recruiter, potential employer, or client goes to evaluate you — and it works 24 hours a day whether you are actively job searching or not.\n\nThe goal of your profile is to communicate three things immediately: what you do, who you serve or what value you bring, and why someone should trust you.\n\nYour profile photo is your most important visual asset. Use a recent, professional, well-lit headshot where your face takes up at least 60% of the frame. LinkedIn profiles with professional photos receive significantly more connection requests and profile views.\n\nKeep all sections of your profile complete and up to date. LinkedIn's algorithm rewards complete profiles with significantly higher visibility in search results."],
      ["Headline", "Your headline is the most visible text element on your LinkedIn profile. It appears below your name everywhere on LinkedIn — in search results, connection requests, and comments. Most people write their job title and stop there. This is a missed opportunity.\n\nA powerful headline does three things: it clearly communicates your professional role, it signals your area of expertise, and it includes a value statement or outcome you deliver.\n\nExamples of strong headlines: 'Front Office Executive | Hospitality Operations | Delivering 5-Star Guest Experiences in Mumbai Hotels.' Or 'Business Development Executive | B2B Sales | Helping Startups Build Qualified Pipeline.'\n\nUse relevant keywords in your headline — terms that recruiters and decision-makers in your industry actually search for. Keywords in your headline significantly improve your discoverability."],
      ["About Section", "The About section is the most underused and highest-potential section on LinkedIn. It is the only place where you can speak directly to the reader in your own voice and tell your professional story.\n\nWrite in first person. Third-person About sections sound formal and distant.\n\nStructure your About section in four paragraphs. First: your professional positioning statement. Second: your background and journey. Third: specific achievements and areas of expertise with concrete examples. Fourth: a clear call to action — what you want the reader to do next.\n\nAvoid generic phrases that appear in thousands of profiles: 'results-oriented professional,' 'team player,' 'passionate about making a difference.' Replace every generic phrase with a specific claim supported by evidence."],
      ["Content and Posting", "Posting regularly on LinkedIn is one of the fastest ways to build professional visibility — but only if your content genuinely serves your audience.\n\nThe most effective LinkedIn content falls into three categories: educational (teach your audience something useful about your field), experiential (share something you learned from your professional experience), and perspective (share your informed opinion on an industry trend).\n\nStart from your own experience. The most engaging LinkedIn posts are specific and personal. 'Here are 5 things I wish I knew before my first hotel management role' will outperform 'Here are 5 tips for hotel managers.'\n\nPost consistently rather than perfectly. One post per week, every week for 6 months, will build your profile's visibility more effectively than three excellent posts in a burst followed by months of silence."],
      ["Networking", "LinkedIn networking is not about collecting connections — it is about building a professional network of genuine relationships that creates mutual long-term value.\n\nWhen sending connection requests, always include a personalized note. The default message is the professional equivalent of a handshake with no eye contact. A personalized note takes 30 seconds and dramatically increases acceptance rates.\n\nBefore asking for anything from a new connection, invest in the relationship first. Engage meaningfully with their content. Offer value before you request it.\n\nNurture your existing network, not just new connections. React to and comment on posts from people already in your network. Consistent, low-effort nurturing maintains strong professional relationships over years."]
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
  companyName: "LearnIndians Academy — An initiative of Hirenix Group Pvt Ltd",
  issuerName: "LearnIndians Academy",
  certificationBoard: "LearnIndians Academy",
  signatureName: "Founder & Director",
  supportEmail: "info@hirenix.co",
  domain: "learnindians.online",
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
  theme: localStorage.getItem("learnindians-theme") || "light",
  user: JSON.parse(localStorage.getItem("learnindians-user") || "null"),
  progress: JSON.parse(localStorage.getItem("learnindians-progress") || "{}"),
  certificates: JSON.parse(localStorage.getItem("learnindians-certificates") || "{}"),
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

function isCloudReady() { return Boolean(supabaseClient); }

function save() {
  localStorage.setItem("learnindians-user", JSON.stringify(state.user));
  localStorage.setItem("learnindians-progress", JSON.stringify(state.progress));
  localStorage.setItem("learnindians-certificates", JSON.stringify(state.certificates));
  localStorage.setItem("learnindians-theme", state.theme);
}

async function initAuth() {
  if (!isCloudReady()) { state.authReady = true; render(); return; }
  const { data } = await supabaseClient.auth.getSession();
  if (data.session?.user) await hydrateCloudUser(data.session.user);
  state.authReady = true;
  render();
  supabaseClient.auth.onAuthStateChange(async (_event, session) => {
    if (session?.user) {
      await hydrateCloudUser(session.user);
    } else {
      state.user = null; state.isAdmin = false;
      state.progress = {}; state.certificates = {};
      save();
    }
    render();
  });
}

async function hydrateCloudUser(authUser, preferredName = "") {
  const email = authUser.email || "";
  const fallbackName = preferredName || authUser.user_metadata?.full_name || email.split("@")[0] || "Learner";
  const { data: existingProfile } = await supabaseClient.from("profiles").select("full_name,email,role").eq("id", authUser.id).maybeSingle();
  if (!existingProfile) {
    await supabaseClient.from("profiles").insert({
      id: authUser.id, full_name: fallbackName, email,
      role: liConfig.adminEmails?.includes(email) ? "admin" : "student",
    });
  }
  const { data: profile } = await supabaseClient.from("profiles").select("full_name,email,role").eq("id", authUser.id).maybeSingle();
  state.user = { id: authUser.id, name: profile?.full_name || fallbackName, email: profile?.email || email };
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
    state.progress[row.course_id] = { paid: row.paid, completedModules: row.completed_modules || [], quizPassed: row.quiz_passed };
  });
  state.certificates = {};
  (certificates || []).forEach((row) => {
    state.certificates[row.course_id] = {
      id: row.id, name: row.student_name, course: row.course_title,
      date: new Date(row.completed_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }),
      url: row.verification_url, issuer: row.issuer, board: row.board,
    };
  });
  state.paymentRequests = {};
  (paymentRequests || []).forEach((row) => {
    state.paymentRequests[row.course_id] = row;
    if (row.status === "approved") {
      state.progress[row.course_id] = { ...getProgress(row.course_id), paid: true };
    }
  });
}

async function syncProgress(courseId) {
  if (!isCloudReady() || !state.user?.id) return;
  const p = getProgress(courseId);
  await supabaseClient.from("enrollments").upsert({
    user_id: state.user.id, course_id: courseId, paid: p.paid,
    completed_modules: p.completedModules, quiz_passed: p.quizPassed,
    updated_at: new Date().toISOString(),
  });
}

async function syncCertificate(courseId, cert) {
  if (!isCloudReady() || !state.user?.id) return;
  await supabaseClient.from("certificates").upsert({
    id: cert.id, user_id: state.user.id, course_id: courseId,
    student_name: cert.name, course_title: cert.course,
    completed_at: new Date().toISOString(), verification_url: cert.url,
    issuer: brandConfig.issuerName, board: brandConfig.certificationBoard,
  });
}

async function createPaymentRequest(courseId, utr) {
  const course = courses.find((c) => c.id === courseId);
  const cleanUtr = String(utr).trim();
  if (!cleanUtr || cleanUtr.length < 6) { showToast("Enter a valid UTR/reference number."); return false; }
  const request = {
    id: crypto.randomUUID(), user_id: state.user?.id || crypto.randomUUID(),
    student_name: state.user?.name || "Learner", user_email: state.user?.email || "",
    course_id: courseId, course_title: course.title, amount: brandConfig.coursePrice,
    upi_id: brandConfig.upiId, utr: cleanUtr, status: "pending",
    created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  };
  if (isCloudReady() && state.user?.id) {
    const { data, error } = await supabaseClient.from("payment_requests").insert(request).select().single();
    if (error) { console.error(error); showToast("Payment request failed."); return false; }
    state.paymentRequests[courseId] = data;
  } else {
    state.paymentRequests[courseId] = request;
  }
  save();
  return true;
}

async function loadPublicCertificate(id) {
  if (!isCloudReady() || state.publicVerifications[id]) return;
  const { data } = await supabaseClient.from("certificates").select("*").eq("id", id).maybeSingle();
  if (data) {
    state.publicVerifications[id] = {
      id: data.id, name: data.student_name, course: data.course_title,
      date: new Date(data.completed_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }),
      url: data.verification_url, issuer: data.issuer, board: data.board,
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
    enrollments: enrollments?.filter((i) => i.paid).length || 0,
    completions: enrollments?.filter((i) => i.quiz_passed).length || 0,
    certificates: certificates?.length || 0,
    pendingPayments: requests?.filter((i) => i.status === "pending").length || 0,
  };
  state.adminPaymentRequests = requests || [];
  render();
}

function navigate(view, courseId) {
  state.view = view;
  state.selectedCourse = courseId || state.selectedCourse;
  state.activeModule = 0; state.quizAnswered = null;
  location.hash = view; render();
}

function showToast(message) {
  state.toast = message; render();
  window.setTimeout(() => { state.toast = ""; render(); }, 2600);
}

function showSuccessAnimation(title, message) {
  const div = document.createElement("div");
  div.className = "success-popup";
  div.innerHTML = `<div class="success-card"><div class="success-icon">✓</div><h2>${title}</h2><p>${message}</p></div>`;
  document.body.appendChild(div);
  setTimeout(() => div.classList.add("show"), 50);
  setTimeout(() => { div.classList.remove("show"); setTimeout(() => div.remove(), 400); }, 2600);
}

function requireUser(next) {
  if (state.user) { next(); return; }
  state.modal = { type: "login", next }; render();
}

function getProgress(courseId) {
  return state.progress[courseId] || { paid: false, completedModules: [], quizPassed: false };
}

function getPaymentRequest(courseId) { return state.paymentRequests[courseId] || null; }

function setProgress(courseId, patch) {
  state.progress[courseId] = { ...getProgress(courseId), ...patch };
  save(); syncProgress(courseId);
}

function percent(course) {
  const p = getProgress(course.id);
  return Math.min(100, Math.round((p.completedModules.length / course.modules.length) * 80 + (p.quizPassed ? 20 : 0)));
}

function certificateId(courseId) {
  const userSeed = state.user?.email?.split("@")[0]?.toUpperCase().replace(/[^A-Z0-9]/g, "") || "GUEST";
  return `LI-${courseId.slice(0, 3).toUpperCase()}-${userSeed.slice(0, 5)}-${new Date().getFullYear()}`;
}

function certificateFor(course) {
  const existing = state.certificates[course.id];
  if (existing) return existing;
  const cert = {
    id: certificateId(course.id), name: state.user?.name || "Demo Learner",
    course: course.title,
    date: new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }),
    url: `${location.origin}${location.pathname}#verify:${certificateId(course.id)}`,
    issuer: brandConfig.issuerName, board: brandConfig.certificationBoard,
  };
  state.certificates[course.id] = cert;
  save(); syncCertificate(course.id, cert);
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
        ${state.isAdmin ? `<button class="ghost-btn" onclick="navigate('admin')">Admin</button>` : ""}
        <button class="icon-btn" onclick="toggleTheme()" aria-label="Toggle theme">
          ${state.theme === "dark" ? icon("sun") : icon("moon")}
        </button>
        ${state.user
          ? `<button class="secondary-btn" onclick="navigate('dashboard')">${state.user.name.split(" ")[0]}</button>`
          : `<button class="secondary-btn" onclick="openLogin()">Login</button>`
        }
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
          <div class="metric"><strong>&#8377;${brandConfig.coursePrice}</strong><span>Individual course</span></div>
          <div class="metric"><strong>&#8377;${brandConfig.subscriptionPrice}</strong><span>Monthly access</span></div>
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
        <p class="muted">The public app includes business details, support contact, pricing, terms, privacy policy, refund policy, and certificate verification.</p>
      </div>
      <div class="trust-grid">
        <div><strong>${brandConfig.companyName}</strong><span>Business identity</span></div>
        <div><strong>${brandConfig.supportEmail}</strong><span>Support email</span></div>
        <div><strong>${brandConfig.domain}</strong><span>Live website</span></div>
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
  const categories = ["All", ...new Set(courses.map((c) => c.category))];
  const visible = state.filter === "All" ? courses : courses.filter((c) => c.category === state.filter);
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
        ${categories.map((cat) => `<button class="chip ${state.filter === cat ? "active" : ""}" onclick="setFilter('${cat}')">${cat}</button>`).join("")}
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
          <span class="price">&#8377;${brandConfig.coursePrice}</span>
        </div>
        <h3>${course.title}</h3>
        <p>${course.summary}</p>
        <div class="course-meta">
          <span class="pill">${course.level}</span>
          <span class="pill">${course.duration}</span>
          <span class="pill">${course.lessons} lessons</span>
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
  const active = courses.filter((c) => getProgress(c.id).paid);
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
          <div class="progress-item"><strong>Subscription</strong><p class="muted">&#8377;${brandConfig.subscriptionPrice} monthly unlimited access</p></div>
          <div class="progress-item"><strong>${Object.keys(state.certificates).length}</strong><p class="muted">Certificates earned</p></div>
          <div class="progress-item"><strong>${isCloudReady() ? "Live" : "Demo"}</strong><p class="muted">${isCloudReady() ? "Data saved in Supabase" : "Add Supabase keys for real storage"}</p></div>
          <div class="progress-item"><strong>${Object.values(state.paymentRequests).filter((r) => r.status === "pending").length}</strong><p class="muted">Pending payment checks</p></div>
        </div>
      </aside>
      <div class="panel content-panel">
        <div class="section-head">
          <div><p class="eyebrow">Dashboard</p><h2>Your active certifications</h2></div>
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
      <span class="pill">${request?.status === "pending" ? "Pending" : done + "%"}</span>
      <button class="${done === 100 ? "secondary-btn" : "primary-btn"}" onclick="${done === 100 ? `openCertificate('${course.id}')` : `startCourse('${course.id}')`}">
        ${done === 100 ? "Certificate" : request?.status === "pending" ? "Check status" : "Continue"}
      </button>
    </div>
  `;
}

function learnView() {
  const course = courses.find((c) => c.id === state.selectedCourse) || courses[0];
  const progress = getProgress(course.id);
  if (!progress.paid) return emptyState("Enrollment required", "Complete the quick " + brandConfig.paymentGateway + " checkout to unlock this course.", "Enroll now", "startCourse('" + course.id + "')");
  const isQuiz = state.activeModule >= course.modules.length;
  return `
    <section>
      <div class="section-head">
        <div>
          <p class="eyebrow">${course.category} certification</p>
          <h2>${course.title}</h2>
          <p>${percent(course)}% complete. Finish all lessons and pass the quiz to unlock your certificate.</p>
        </div>
      </div>
      <div class="lesson-view">
        <div class="lesson-stage">
          ${isQuiz ? quizBlock(course) : lessonBlock(course)}
        </div>
        <aside class="panel sidebar">
          <h3>Course lessons</h3>
          <div class="module-list">
            ${course.modules.map((mod, index) => {
              const title = Array.isArray(mod) ? mod[0] : mod.title;
              return `
                <button class="module-btn ${state.activeModule === index ? "active" : ""}" onclick="setModule(${index})">
                  <strong>${index + 1}. ${title}</strong>
                  <p class="muted">${progress.completedModules.includes(index) ? "Completed" : "Read and complete"}</p>
                </button>
              `;
            }).join("")}
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
  const mod = course.modules[state.activeModule];
  const title = Array.isArray(mod) ? mod[0] : mod.title;
  const body = Array.isArray(mod) ? mod[1] : mod.content;
  const paragraphs = body.split("\n\n").map((p) => "<p class=\"lesson-body\">" + p.trim() + "</p>").join("");
  return `
    <span class="badge">Lesson ${state.activeModule + 1} of ${course.modules.length}</span>
    <h2>${title}</h2>
    <div class="lesson-content">${paragraphs}</div>
    <div class="lesson-actions">
      <button class="primary-btn" onclick="completeAndNext('${course.id}', ${state.activeModule})">Mark complete and continue</button>
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
        return `<button class="quiz-option ${klass}" onclick="answerQuiz('${course.id}', ${index})" ${answered ? "disabled" : ""}>${option}</button>`;
      }).join("")}
    </div>
    <div class="lesson-actions">
      <button class="primary-btn" ${progress.quizPassed ? "" : "disabled"} onclick="openCertificate('${course.id}')">
        ${progress.quizPassed ? "Unlock Certificate" : "Answer correctly to unlock"}
      </button>
      <button class="secondary-btn" onclick="setModule(0)">Review lessons</button>
    </div>
  `;
}

function certificateView() {
  const course = courses.find((c) => c.id === state.selectedCourse) || courses[0];
  const progress = getProgress(course.id);
  if (!progress.quizPassed) return emptyState("Certificate locked", "Complete every lesson and pass the final quiz first.", "Continue learning", "startCourse('" + course.id + "')");
  const cert = certificateFor(course);
  return `
    <section class="certificate-wrap">
      ${certificateMarkup(cert)}
      <aside class="panel sidebar">
        <h3>Share-ready credential</h3>
        <p class="muted">This certificate includes a public verification URL, certificate ID, QR code, completion date, seal, and issuer details.</p>
        <div class="field">
          <label>Verification URL</label>
          <input value="${cert.url}" readonly />
        </div>
        <button class="primary-btn" onclick="downloadCertificate('${cert.id}')">Download Certificate</button>
        <button class="secondary-btn" onclick="navigate('verify:${cert.id}')">Open verification page</button>
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
          <span class="mark li-mark"><span>${brandConfig.initials}</span></span>
          <span>${brandConfig.platformName}</span>
        </div>
        <div class="cert-issuer">${brandConfig.certificationBoard}</div>
      </div>
      <div class="cert-title">Professional Certificate</div>
      <p class="cert-subtitle">This certificate officially verifies that</p>
      <div class="cert-name">${cert.name}</div>
      <div class="cert-course">
        has successfully completed the certified professional program in<br>
        <strong>${cert.course}</strong>
      </div>
      <div class="cert-meta">
        <div><span>Certificate ID</span><strong>${cert.id}</strong></div>
        <div><span>Completion Date</span><strong>${cert.date}</strong></div>
        <div><span>Issued By</span><strong>${brandConfig.issuerName}</strong></div>
      </div>
      <div class="cert-foot">
        <div class="signature">
          <span class="signature-name">${brandConfig.signatureName}</span>
          <div class="signature-line"></div>
          Authorized Signatory<br>${brandConfig.companyName}
        </div>
        <div class="seal">VERIFIED</div>
        <div class="qr-block">
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(cert.url)}" alt="QR Code" />
          <p class="muted cert-verify-text">Verified at ${brandConfig.domain}</p>
        </div>
      </div>
    </article>
  `;
}

function verificationView(id) {
  loadPublicCertificate(id);
  const cert = Object.values(state.certificates).find((c) => c.id === id) || state.publicVerifications[id] || {
    id, name: "Verified Learner", course: "Professional Certification",
    date: new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }),
  };
  return `
    <section class="panel verification">
      <div class="verify-check">&#10003;</div>
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
  if (!state.user) return emptyState("Admin login required", "Login with the admin email to view the operating dashboard.", "Admin login", "openLogin('login')");
  if (!state.isAdmin) return emptyState("Admin access only", "This dashboard is restricted to approved LearnIndians admin accounts.", "Go to dashboard", "navigate('dashboard')");
  loadAdminStats();
  const paid = Object.values(state.progress).filter((p) => p.paid).length;
  const completed = Object.values(state.progress).filter((p) => p.quizPassed).length;
  const stats = state.adminStats || { users: isCloudReady() ? "..." : 1, enrollments: paid, completions: completed, certificates: Object.keys(state.certificates).length, pendingPayments: 0 };
  return `
    <section>
      <div class="section-head">
        <div>
          <p class="eyebrow">Admin panel</p>
          <h2>Operating dashboard</h2>
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
            <div><strong>${course.title}</strong><p class="muted">${course.category} - ${course.duration}</p></div>
            <span class="pill">&#8377;${brandConfig.coursePrice}</span>
            <span class="pill">${percent(course)}%</span>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function paymentRequestsTable() {
  const requests = state.adminPaymentRequests.length ? state.adminPaymentRequests : Object.values(state.paymentRequests);
  if (!requests.length) return emptyInline("No manual UPI payment requests yet.");
  return requests.map((request) => `
    <div class="table-row">
      <div>
        <strong>${request.student_name || request.user_email || "Learner"}</strong>
        <p class="muted">${request.course_title} - &#8377;${request.amount} - UTR: ${request.utr}</p>
      </div>
      ${request.status === "pending"
        ? `<div class="admin-actions">
            <button class="primary-btn" onclick="approvePaymentRequest('${request.id || ""}', '${request.user_id || ""}', '${request.course_id}')">Approve</button>
            <button class="danger-btn" onclick="declinePaymentRequest('${request.id || ""}', '${request.course_id}')">Decline</button>
          </div>`
        : `<span class="pill">${request.status === "approved" ? "Approved" : "Declined"}</span>`
      }
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
        <div class="table-row"><strong>Website</strong><span>${brandConfig.domain}</span></div>
        <p class="muted" style="margin-top:16px">For enrollment issues, payment verification, or certificate queries, email us at ${brandConfig.supportEmail}.</p>
      </div>
    </section>
  `;
}

function legalView(type) {
  const pages = {
    terms: {
      title: "Terms and Conditions",
      intro: "These terms govern use of " + brandConfig.platformName + ", a fast career certification platform operated by " + brandConfig.companyName + ".",
      points: [
        "Users must provide accurate login and certificate information.",
        "Course access is provided after successful payment through " + brandConfig.paymentGateway + " or approved free access.",
        "Certificates are issued after course completion and quiz requirements are met.",
        "Certificates verify completion of platform learning content and do not guarantee employment.",
        "Misuse, fake identity, scraping, copying course material, or fraudulent payment activity may lead to account restriction.",
      ],
    },
    privacy: {
      title: "Privacy Policy",
      intro: brandConfig.platformName + " collects only the information needed to provide learning, payment, certificate, and support services.",
      points: [
        "We may collect name, email, mobile number, course progress, payment status, and certificate records.",
        "Payment information is processed by the payment gateway. We do not store card or bank details in this app.",
        "Certificate verification pages may publicly show student name, course name, certificate ID, completion date, and verification status.",
        "Support requests may be handled through the support email listed on this website.",
      ],
    },
    refund: {
      title: "Refund and Cancellation Policy",
      intro: "This policy explains refunds for " + brandConfig.platformName + " certification purchases.",
      points: [
        "For individual courses, refund requests should be sent to support before course completion or certificate generation.",
        "Once a certificate is generated, the course is considered consumed and is not eligible for refund except in duplicate payment or technical failure cases.",
        "For monthly access, cancellation stops future access renewal. Used subscription periods are not refunded.",
        "Duplicate payments or failed unlocks after successful payment will be reviewed and resolved through support.",
        "Support email: " + brandConfig.supportEmail,
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
        <div class="legal-list">${page.points.map((point) => "<p>" + point + "</p>").join("")}</div>
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
  const items = [["home", "Home"], ["courses", "Courses"], ["dashboard", "Progress"], ["contact", "Contact"]];
  return "<nav class=\"bottom-nav\">" + items.map(([view, label]) => "<button class=\"" + (state.view === view ? "active" : "") + "\" onclick=\"navigate('" + view + "')\">" + label + "</button>").join("") + "</nav>";
}

function modal() {
  if (state.modal.type === "pay") {
    const course = courses.find((c) => c.id === state.modal.courseId);
    const upiLink = buildUpiLink(course);
    const qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=" + encodeURIComponent(upiLink);
    const request = getPaymentRequest(course.id);
    return `
      <div class="modal-backdrop">
        <div class="panel modal payment-modal">
          <p class="eyebrow">Manual UPI verification</p>
          <h2>Enroll in ${course.title}</h2>
          <p class="muted">Pay &#8377;${brandConfig.coursePrice} to ${brandConfig.businessName}, then enter the UTR/reference number. Admin approval unlocks the course.</p>
          <div class="upi-box mobile-stack">
            <img src="${qrUrl}" alt="UPI payment QR" />
            <div>
              <span class="badge">UPI ID</span>
              <h3>${brandConfig.upiId}</h3>
              <p class="muted">Amount: &#8377;${brandConfig.coursePrice}</p>
              <a class="primary-btn pay-link" href="${upiLink}">Open UPI App</a>
            </div>
          </div>
          <div class="payment-steps">
            <div><strong>1</strong><span>Scan QR or open UPI app</span></div>
            <div><strong>2</strong><span>Pay exactly &#8377;${brandConfig.coursePrice}</span></div>
            <div><strong>3</strong><span>Submit UTR for admin verification</span></div>
          </div>
          ${request?.status === "pending"
            ? `<div class="status-box"><strong>Payment submitted</strong><p class="muted">UTR ${request.utr} is waiting for admin approval.</p></div>`
            : `<div class="field"><label>UTR / Transaction Reference Number</label><input id="utr" placeholder="Enter UPI UTR after payment" /></div>
               <button class="primary-btn" onclick="submitManualPayment('${course.id}')">Submit payment for verification</button>`
          }
          <p class="muted" style="font-size:12px">Payment takes 5 to 10 minutes to verify. Please refresh after payment.</p>
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
        <p class="muted">${isCloudReady() ? "Use email and password. Your progress and certificates will be stored securely." : "Demo mode — data saved in this browser only."}</p>
        <div class="segmented">
          <button class="auth-btn login-btn ${state.authMode === "login" ? "active" : ""}" onclick="setAuthMode('login')">Login</button>
          <button class="auth-btn signup-btn ${state.authMode === "signup" ? "active" : ""}" onclick="setAuthMode('signup')">Create account</button>
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
  return "<div class=\"admin-card\"><p class=\"muted\">" + copy + "</p></div>";
}

function buildUpiLink(course) {
  const params = new URLSearchParams({
    pa: brandConfig.upiId, pn: brandConfig.businessName,
    am: String(brandConfig.coursePrice), cu: "INR",
    tn: brandConfig.platformName + " - " + course.title,
  });
  return "upi://pay?" + params.toString();
}

function toggleTheme() { state.theme = state.theme === "dark" ? "light" : "dark"; save(); render(); }
function setFilter(category) { state.filter = category; render(); }

function startCourse(courseId) {
  requireUser(() => {
    if (getProgress(courseId).paid) { state.selectedCourse = courseId; navigate("learn", courseId); }
    else { state.modal = { type: "pay", courseId }; render(); }
  });
}

async function submitManualPayment(courseId) {
  const button = event.target;
  const utr = document.querySelector("#utr")?.value.trim();
  if (!utr || utr.length < 6) { showToast("Enter a valid UTR or transaction reference number."); return; }
  button.disabled = true;
  button.innerHTML = "<span class=\"loader\"></span> Verifying...";
  const created = await createPaymentRequest(courseId, utr);
  if (!created) { button.disabled = false; button.innerHTML = "Submit payment for verification"; return; }
  state.modal = null; render();
  showSuccessAnimation("Payment Submitted", "Your payment was submitted and is waiting for admin approval.");
  state.adminStats = null; state.adminPaymentRequests = [];
  await loadAdminStats();
  navigate("dashboard");
}

async function approvePaymentRequest(requestId, userId, courseId) {
  if (!state.isAdmin) return;
  const button = event.target;
  button.disabled = true;
  button.innerHTML = "<span class=\"loader\"></span> Approving...";
  if (!isCloudReady()) {
    setProgress(courseId, { paid: true });
    showSuccessAnimation("Course Unlocked", "Payment approved successfully.");
    render(); return;
  }
  const { error: requestError } = await supabaseClient.from("payment_requests").update({
    status: "approved", approved_by: state.user.id,
    approved_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  }).eq("id", requestId);
  if (requestError) { showToast(requestError.message); button.disabled = false; button.innerHTML = "Approve"; return; }
  const { error: enrollmentError } = await supabaseClient.from("enrollments").upsert({
    user_id: userId, course_id: courseId, paid: true,
    completed_modules: [], quiz_passed: false, updated_at: new Date().toISOString(),
  });
  if (enrollmentError) { showToast(enrollmentError.message); return; }
  state.adminStats = null; state.adminPaymentRequests = [];
  await loadAdminStats();
  showSuccessAnimation("Course Approved", "The learner now has access to the course.");
  render();
}

async function declinePaymentRequest(requestId, courseId) {
  if (!state.isAdmin) return;
  const button = event.target;
  button.disabled = true;
  button.innerHTML = "<span class=\"loader\"></span> Declining...";
  if (!isCloudReady()) {
    if (courseId && state.paymentRequests[courseId]) delete state.paymentRequests[courseId];
    showToast("Payment request declined.");
    state.adminStats = null; state.adminPaymentRequests = [];
    render(); return;
  }
  const { error } = await supabaseClient.from("payment_requests").update({
    status: "declined", updated_at: new Date().toISOString(),
  }).eq("id", requestId);
  if (error) { showToast(error.message); button.disabled = false; button.innerHTML = "Decline"; return; }
  state.adminStats = null; state.adminPaymentRequests = [];
  await loadAdminStats();
  showToast("Payment request declined.");
  render();
}

function completeModule(courseId, moduleIndex) {
  const progress = getProgress(courseId);
  const completedModules = [...new Set([...progress.completedModules, moduleIndex])];
  setProgress(courseId, { completedModules });
}

function completeAndNext(courseId, moduleIndex) {
  const course = courses.find((c) => c.id === courseId);
  completeModule(courseId, moduleIndex);
  state.activeModule = Math.min(course.modules.length, moduleIndex + 1);
  showToast("Lesson completed!");
  render();
}

function nextModule(courseId) {
  const course = courses.find((c) => c.id === courseId);
  completeModule(courseId, state.activeModule);
  state.activeModule = Math.min(course.modules.length, state.activeModule + 1);
  render();
}

function setModule(index) { state.activeModule = index; state.quizAnswered = null; render(); }

function answerQuiz(courseId, index) {
  const course = courses.find((c) => c.id === courseId);
  state.quizAnswered = index;
  if (index === course.quiz.answer) {
    setProgress(courseId, { quizPassed: true, completedModules: course.modules.map((_, i) => i) });
    showToast("Quiz passed! Certificate unlocked.");
  } else {
    showToast("Incorrect answer. Try again.");
  }
  render();
}

function openCertificate(courseId) { state.selectedCourse = courseId; navigate("certificate", courseId); }
function openLogin(mode) { state.authMode = mode || "login"; state.modal = { type: "login" }; render(); }
function setAuthMode(mode) { state.authMode = mode; render(); }

async function completeLogin() {
  const name = document.querySelector("#name")?.value.trim() || "Demo Learner";
  const email = document.querySelector("#email").value.trim() || "learner@example.com";
  const password = document.querySelector("#password")?.value || "learn1234";
  const next = state.modal.next;
  if (isCloudReady()) {
    if (!email || !password || (state.authMode === "signup" && !name)) { showToast("Please enter all required details."); return; }
    const authCall = state.authMode === "signup"
      ? supabaseClient.auth.signUp({ email, password, options: { data: { full_name: name } } })
      : supabaseClient.auth.signInWithPassword({ email, password });
    const { data, error } = await authCall;
    if (error) {
      const message = error.message.toLowerCase().includes("rate")
        ? "Too many attempts. Please wait a few minutes and try again."
        : error.message;
      showToast(message); return;
    }
    if (state.authMode === "signup" && data.user && !data.session) {
      state.modal = null;
      showToast("Account created! Check your email to confirm, then login.");
      render(); return;
    }
    if (data.user) { await hydrateCloudUser(data.user, name); await loadAdminStats(); }
  } else {
    state.user = { name, email };
    state.isAdmin = liConfig.adminEmails?.includes(email);
  }
  state.modal = null; save();
  showToast("Welcome to " + brandConfig.platformName + "!");
  if (next) next();
  render();
}

async function logout() {
  if (isCloudReady()) await supabaseClient.auth.signOut();
  state.user = null; state.isAdmin = false;
  save(); render();
}

function closeModal() { state.modal = null; render(); }

window.addEventListener("hashchange", () => {
  state.view = location.hash.replace("#", "") || "home";
  render();
});

render();
initAuth();

function downloadCertificate(certId) {
  const certificate = document.getElementById("certificate-" + certId);
  if (!certificate) { showToast("Certificate not found."); return; }
  const printWindow = window.open("", "_blank");
  printWindow.document.write(
    "<html><head><title>Certificate - " + brandConfig.platformName + "</title>" +
    "<link rel=\"stylesheet\" href=\"styles.css\">" +
    "<style>body { margin: 0; background: white; }</style></head>" +
    "<body>" + certificate.outerHTML + "</body></html>"
  );
  printWindow.document.close();
  setTimeout(() => printWindow.print(), 700);
}
