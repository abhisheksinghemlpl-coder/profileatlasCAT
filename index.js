// Profile Atlas — single-file Cloudflare Worker + Durable Object. Deploy with wrangler.toml alongside.

// src/worker.js
import { DurableObject } from "cloudflare:workers";

// data/content.js
var content_default = {
  "PILLARS": [
    {
      "id": "G-QA",
      "sec": "QA",
      "name": "Quantitative Aptitude",
      "w": 30,
      "fam": "gate",
      "dur": false,
      "tests": "Arithmetic, algebra, geometry, number properties \u2014 done fast and clean under a section clock. Not depth of maths; speed, accuracy and knowing which question to leave.",
      "claim": "Your most honest read of where QA stands",
      "claimEg": "e.g. arithmetic is solid, geometry is shaky, I attempt 18 and get 12 right",
      "probe": [
        {
          "id": "q1",
          "q": "Which two QA topics cost you the most marks right now, and what have you actually done about them this month?",
          "ph": "Name the topics. 'Everything' is not an answer a plan can use."
        },
        {
          "id": "q2",
          "q": "In your last timed QA section, how many did you attempt, how many were right, and how many were silly errors?",
          "ph": "Attempts, accuracy, careless mistakes. If you don't know, that is the first thing to fix."
        }
      ],
      "self": "How ready is your QA for a timed section today?",
      "ev": [
        {
          "id": "a",
          "t": "I've finished the core concepts across arithmetic, algebra and geometry",
          "w": 16
        },
        {
          "id": "b",
          "t": "My mental math and calculation speed are reliable under time",
          "w": 12
        },
        {
          "id": "c",
          "t": "I keep a written error log and review it",
          "w": 14
        },
        {
          "id": "d",
          "t": "I've done topic-wise timed practice, not just untimed sums",
          "w": 14
        },
        {
          "id": "e",
          "t": "My last mock QA percentile was 85 or higher",
          "w": 16
        },
        {
          "id": "f",
          "t": "I can spot and skip a time-trap question without finishing it",
          "w": 12
        },
        {
          "id": "g",
          "t": "I've drilled the topics I'm weak at, not just the ones I enjoy",
          "w": 10
        },
        {
          "id": "h",
          "t": "My accuracy in QA is above 80% of what I attempt",
          "w": 14
        }
      ],
      "sp": [
        "Which QA topic would you refuse to attempt on exam day, and why?",
        "Walk me through how you decide, in 20 seconds, whether to attempt a question.",
        "What changed in your QA between your first mock and your last?"
      ]
    },
    {
      "id": "G-VA",
      "sec": "VARC",
      "name": "Verbal & Reading Comprehension",
      "w": 30,
      "fam": "gate",
      "dur": false,
      "tests": "Reading dense, unfamiliar prose fast and answering RC without falling for the trap option \u2014 plus para-jumbles, summary and odd-one-out. Built on a reading habit, not tricks.",
      "claim": "Where VARC actually stands for you",
      "claimEg": "e.g. I read fast but overthink RC options, verbal ability section is my strength",
      "probe": [
        {
          "id": "q1",
          "q": "How much dense non-fiction do you read a day that is not exam material, and for how long?",
          "ph": "Editorials, long-form, essays. Minutes per day, honestly."
        },
        {
          "id": "q2",
          "q": "When you get RC wrong, is it comprehension or option-elimination? How do you know?",
          "ph": "Look at your last RC set. Which stage failed?"
        }
      ],
      "self": "How ready is your VARC for a timed section today?",
      "ev": [
        {
          "id": "a",
          "t": "I read dense non-fiction most days, outside prep",
          "w": 14
        },
        {
          "id": "b",
          "t": "I can finish a long RC passage and its questions inside the time budget",
          "w": 14
        },
        {
          "id": "c",
          "t": "I have a repeatable method for eliminating RC trap options",
          "w": 16
        },
        {
          "id": "d",
          "t": "Para-jumbles, summary and odd-sentence are reliable for me",
          "w": 12
        },
        {
          "id": "e",
          "t": "My last mock VARC percentile was 85 or higher",
          "w": 16
        },
        {
          "id": "f",
          "t": "I review why each wrong option was wrong, not just the right one",
          "w": 14
        },
        {
          "id": "g",
          "t": "I can hold my accuracy without slowing to a crawl",
          "w": 10
        },
        {
          "id": "h",
          "t": "I read across unfamiliar subjects \u2014 science, philosophy, economics",
          "w": 10
        }
      ],
      "sp": [
        "Summarise the last thing you read in one sentence.",
        "When two RC options both look right, how do you choose?",
        "What kind of passage throws you, and what do you do about it?"
      ]
    },
    {
      "id": "G-DI",
      "sec": "DILR",
      "name": "Data Interpretation & Logical Reasoning",
      "w": 28,
      "fam": "gate",
      "dur": false,
      "tests": "Reading a set fast, judging in 60 seconds whether it is solvable, and cracking it cleanly. The most swingy section \u2014 set selection matters as much as ability.",
      "claim": "Where DILR stands for you",
      "claimEg": "e.g. I can solve most sets but I pick the wrong ones and run out of time",
      "probe": [
        {
          "id": "q1",
          "q": "How do you decide which set to attempt first, and how long do you give a set before abandoning it?",
          "ph": "Your actual rule. If you don't have one, that is the gap."
        },
        {
          "id": "q2",
          "q": "Which set types do you avoid, and have you deliberately practised them?",
          "ph": "Games, tournaments, networks, Venn, arrangements \u2014 name the ones that scare you."
        }
      ],
      "self": "How ready is your DILR for a timed section today?",
      "ev": [
        {
          "id": "a",
          "t": "I practise DILR sets daily or near-daily",
          "w": 14
        },
        {
          "id": "b",
          "t": "I can judge in about a minute whether a set is worth attempting",
          "w": 16
        },
        {
          "id": "c",
          "t": "I have a set-selection strategy I actually follow in mocks",
          "w": 16
        },
        {
          "id": "d",
          "t": "I've drilled the set types I find hard, not only the easy ones",
          "w": 14
        },
        {
          "id": "e",
          "t": "My last mock DILR percentile was 85 or higher",
          "w": 16
        },
        {
          "id": "f",
          "t": "I keep accuracy high on the sets I choose to attempt",
          "w": 12
        },
        {
          "id": "g",
          "t": "I don't panic and switch sets halfway through",
          "w": 12
        }
      ],
      "sp": [
        "You have four sets and time for two. How do you choose?",
        "Tell me about a set you abandoned correctly, and one you should have.",
        "Which set type have you improved most on, and how?"
      ]
    },
    {
      "id": "G-MK",
      "sec": "MOCK",
      "name": "Test Craft & Mock Analysis",
      "w": 12,
      "fam": "gate",
      "dur": true,
      "tests": "The meta-skill that turns section ability into a score: taking full proctored mocks on schedule, then spending real time dissecting each one. The single biggest score mover most people neglect.",
      "claim": "Your current mock and analysis habit, honestly",
      "claimEg": "e.g. I take a mock a week but barely analyse them, or I hoard mocks and never sit a full one",
      "probe": [
        {
          "id": "q1",
          "q": "After your last full mock, how long did you spend analysing it, and what did you write down?",
          "ph": "Minutes, and what the analysis actually produced. 'I checked the score' is not analysis."
        },
        {
          "id": "q2",
          "q": "Do you take mocks in one sitting, timed, in exam conditions \u2014 or in pieces?",
          "ph": "Be honest. A mock taken in fragments teaches you very little about your temperament."
        }
      ],
      "self": "How disciplined is your mock and analysis routine?",
      "ev": [
        {
          "id": "a",
          "t": "I take full-length proctored mocks in one timed sitting",
          "w": 16
        },
        {
          "id": "b",
          "t": "I spend at least 90 minutes analysing each mock",
          "w": 18
        },
        {
          "id": "c",
          "t": "I log every mistake by type \u2014 concept, careless, selection, time",
          "w": 16
        },
        {
          "id": "d",
          "t": "My mock frequency is rising as the exam gets closer",
          "w": 10
        },
        {
          "id": "e",
          "t": "I've stopped repeating the same category of mistake across mocks",
          "w": 14
        },
        {
          "id": "f",
          "t": "I track attempts, accuracy and time per section, not just percentile",
          "w": 12
        },
        {
          "id": "g",
          "t": "I've built a personal time-and-selection strategy from my own data",
          "w": 14
        }
      ],
      "hab": true,
      "sp": [
        "What did your last mock analysis change in how you take the next one?",
        "Which mistake type shows up again and again in your log?",
        "What is your section-by-section time plan for exam day, and where did it come from?"
      ]
    },
    {
      "id": "P-AC",
      "name": "Academic Record",
      "w": 18,
      "fam": "prof",
      "dur": false,
      "frozen": true,
      "tests": "Tenth, twelfth and your degree. Most of this is frozen \u2014 a panel reads it as it is. What is live is a degree still in progress, academic diversity, and the honest story behind any dip.",
      "claim": "The academic fact you would put forward first",
      "claimEg": "e.g. 92% in twelfth, or a 9.1 CGPA in engineering, or gold medal in my department",
      "probe": [
        {
          "id": "q1",
          "q": "Where is the weakest number in your record \u2014 tenth, twelfth or degree \u2014 and what is the honest, non-defensive reason?",
          "ph": "A dip you own reads better than one you dodge. No excuses; a reason and what you did next."
        },
        {
          "id": "q2",
          "q": "What have you done academically that isn't just marks \u2014 a paper, a project, a subject you went deep on?",
          "ph": ""
        }
      ],
      "self": "How strong is your academic record for a top-school panel?",
      "ev": [
        {
          "id": "a",
          "t": "Tenth board at 85% or above",
          "w": 12
        },
        {
          "id": "b",
          "t": "Twelfth board at 85% or above",
          "w": 12
        },
        {
          "id": "c",
          "t": "Degree CGPA strong for my course (roughly top quarter)",
          "w": 16
        },
        {
          "id": "d",
          "t": "My record is consistent \u2014 no unexplained dip or gap",
          "w": 10
        },
        {
          "id": "e",
          "t": "A quantitative or analytical degree, or strong maths background",
          "w": 10
        },
        {
          "id": "f",
          "t": "A merit rank, medal, scholarship or dean's list",
          "w": 14
        },
        {
          "id": "g",
          "t": "A real academic project, paper or thesis with a result",
          "w": 16
        },
        {
          "id": "h",
          "t": "Non-engineering background (academic diversity at many schools)",
          "w": 6
        }
      ],
      "sp": [
        "Your twelfth marks dipped. What happened, and what did you learn?",
        "Why should a management school care about your degree marks?",
        "Tell me about the one academic project you're proud of."
      ]
    },
    {
      "id": "P-WK",
      "name": "Work Experience & Internships",
      "w": 22,
      "fam": "prof",
      "dur": true,
      "tests": "Not months on a payroll \u2014 a story of responsibility and measurable impact. For a professional this is your biggest asset. For a student, a documented internship or live project is how you build it.",
      "claim": "The work or internship achievement you'd lead with",
      "claimEg": "e.g. cut process time 30% in my ops role, or ran a 40-store field survey as an intern",
      "probe": [
        {
          "id": "q1",
          "q": "State one thing you changed at work or in an internship, with a number attached \u2014 money, time, users, or scale.",
          "ph": "A number a panel can test. 'Helped the team' is invisible; '30% faster' is not."
        },
        {
          "id": "q2",
          "q": "Why do you want an MBA now instead of continuing on your current track?",
          "ph": "The single most-asked question of anyone with work experience. Have a real answer."
        }
      ],
      "self": "How strong is your professional or internship story?",
      "ev": [
        {
          "id": "a",
          "t": "I have full-time work experience, or a substantial internship",
          "w": 14
        },
        {
          "id": "b",
          "t": "I can point to a result I own, with a number attached",
          "w": 18
        },
        {
          "id": "c",
          "t": "I've led or coordinated people, or owned a workstream end to end",
          "w": 14
        },
        {
          "id": "d",
          "t": "I have a promotion, rating or written recognition on record",
          "w": 12
        },
        {
          "id": "e",
          "t": "My work connects logically to why I want an MBA",
          "w": 14
        },
        {
          "id": "f",
          "t": "I've worked with data, customers or money directly",
          "w": 12
        },
        {
          "id": "g",
          "t": "A documented live project or freelance work with an outcome",
          "w": 12
        },
        {
          "id": "h",
          "t": "I can explain what my organisation does and how it makes money",
          "w": 8
        }
      ],
      "sp": [
        "Tell me the one thing you're proudest of at work, and how you measured it.",
        "What did your last appraisal say you needed to improve?",
        "If your manager were here, what would they say you're not good at?"
      ]
    },
    {
      "id": "P-LD",
      "name": "Leadership & Responsibility",
      "w": 16,
      "fam": "prof",
      "dur": true,
      "tests": "Positions of responsibility, but read as decisions and outcomes, not titles. One thing that would not exist if you had not run it.",
      "claim": "The role or initiative you'd bring up in an interview",
      "claimEg": "e.g. placement coordinator, ran the college fest, captained a team of 20",
      "probe": [
        {
          "id": "q1",
          "q": "What was the hardest call you made in that role, who was unhappy, and how did it turn out?",
          "ph": "Panels ask this exactly. The decision, the trade-off, the consequence."
        },
        {
          "id": "q2",
          "q": "What would not have happened if you had not been there?",
          "ph": ""
        }
      ],
      "self": "How much real responsibility have you carried?",
      "ev": [
        {
          "id": "a",
          "t": "I've held a formal position \u2014 club, committee, team, society",
          "w": 12
        },
        {
          "id": "b",
          "t": "I started something that didn't exist before me",
          "w": 16
        },
        {
          "id": "c",
          "t": "I've coordinated 10+ people toward a deadline",
          "w": 14
        },
        {
          "id": "d",
          "t": "I made a decision that some people disagreed with, and stood by it",
          "w": 14
        },
        {
          "id": "e",
          "t": "There's a measurable outcome \u2014 footfall, money raised, people served",
          "w": 16
        },
        {
          "id": "f",
          "t": "I handled a conflict or a failure inside the role",
          "w": 12
        },
        {
          "id": "g",
          "t": "I held the role for a sustained period, not a one-off event",
          "w": 10
        },
        {
          "id": "h",
          "t": "Someone would vouch for what I did, by name",
          "w": 6
        }
      ],
      "sp": [
        "Tell me about a time your team pushed back on you.",
        "What did you do when the initiative was failing?",
        "Who did the actual work, and what did you do?"
      ]
    },
    {
      "id": "P-EC",
      "name": "Extracurriculars & Achievements",
      "w": 12,
      "fam": "prof",
      "dur": true,
      "tests": "Sport, arts, competitions, a sustained interest pursued to a real level. Depth in one thing beats a list of certificates that end in a PDF and nothing else.",
      "claim": "The activity or achievement you'd put on the form",
      "claimEg": "e.g. state-level chess, a published poem, a case-comp win, five years of classical dance",
      "probe": [
        {
          "id": "q1",
          "q": "What have you stuck with for years, and what did the discipline of it teach you?",
          "ph": "Longevity is the signal. A hobby of three weeks is not this."
        },
        {
          "id": "q2",
          "q": "What's the highest level you competed or performed at, and what did it cost you?",
          "ph": ""
        }
      ],
      "self": "How real is your extracurricular depth?",
      "ev": [
        {
          "id": "a",
          "t": "I've pursued one activity seriously for years",
          "w": 14
        },
        {
          "id": "b",
          "t": "I've competed or performed beyond my own campus",
          "w": 14
        },
        {
          "id": "c",
          "t": "I've won or placed at district level or above",
          "w": 16
        },
        {
          "id": "d",
          "t": "A case competition, hackathon or B-plan result",
          "w": 14
        },
        {
          "id": "e",
          "t": "An achievement with an external record \u2014 a rank, a publication, a certificate that means something",
          "w": 12
        },
        {
          "id": "f",
          "t": "A genuine interest I can talk about for ten minutes with a stranger",
          "w": 12
        },
        {
          "id": "g",
          "t": "Volunteering or social work I sustained, not a one-day drive",
          "w": 10
        },
        {
          "id": "h",
          "t": "An interest that isn't on everyone else's form",
          "w": 8
        }
      ],
      "sp": [
        "Everyone lists this. Why should I believe yours is real?",
        "What's the last thing this taught you?",
        "How do you find time for it alongside everything else?"
      ]
    },
    {
      "id": "P-AW",
      "name": "Business Awareness & Current Affairs",
      "w": 16,
      "fam": "prof",
      "dur": true,
      "tests": "The raw material of WAT, GD and PI: a news habit, one industry known properly, a working grasp of the economy, and a view of your own on the things in the headlines.",
      "claim": "The business or industry you know best",
      "claimEg": "e.g. quick commerce unit economics, the semiconductor supply chain, Indian banking",
      "probe": [
        {
          "id": "q1",
          "q": "Take one industry and explain how the money moves \u2014 where revenue comes from and where it goes.",
          "ph": "Revenue lines, main costs, what's left. Approximate numbers are fine; vagueness is not."
        },
        {
          "id": "q2",
          "q": "Pick a story in the news this week and give me your own view, not the newspaper's.",
          "ph": ""
        }
      ],
      "self": "How ready are you for WAT, GD and a current-affairs grilling?",
      "ev": [
        {
          "id": "a",
          "t": "I read business and general news most days",
          "w": 14
        },
        {
          "id": "b",
          "t": "I know one industry's top players and how each makes money",
          "w": 16
        },
        {
          "id": "c",
          "t": "I understand the unit economics of at least one business",
          "w": 14
        },
        {
          "id": "d",
          "t": "I follow the economy \u2014 inflation, rates, budget, key indicators",
          "w": 12
        },
        {
          "id": "e",
          "t": "I can hold a position in a group discussion without going quiet",
          "w": 14
        },
        {
          "id": "f",
          "t": "I've practised timed written arguments (WAT-style)",
          "w": 12
        },
        {
          "id": "g",
          "t": "I form my own view on issues rather than repeating headlines",
          "w": 12
        },
        {
          "id": "h",
          "t": "I track 15+ current topics with a note on each",
          "w": 12
        }
      ],
      "sp": [
        "Argue the opposite side of the last topic you mentioned.",
        "What's the biggest cost line for that industry?",
        "What economic number worries you most right now, and why?"
      ]
    },
    {
      "id": "P-NR",
      "name": "Narrative \u2014 Why MBA & Goals",
      "w": 16,
      "fam": "prof",
      "dur": false,
      "tests": "The spine that ties the whole profile together: why an MBA, why now, where it takes you, and a story that connects your past to that future without sounding rehearsed.",
      "claim": "Your one-line answer to why an MBA",
      "claimEg": "e.g. to move from execution to running a business, with a path through consulting",
      "probe": [
        {
          "id": "q1",
          "q": "Where do you want to be in five years, specifically \u2014 role, sector, kind of problem \u2014 and how does an MBA get you there?",
          "ph": "Specific. 'A leadership role' is what everyone says and no one believes."
        },
        {
          "id": "q2",
          "q": "What's the honest, personal reason underneath the professional one?",
          "ph": "Panels can smell a rehearsed answer. The real reason is usually more convincing."
        }
      ],
      "self": "How clear and defensible is your why-MBA story?",
      "ev": [
        {
          "id": "a",
          "t": "I can say why I want an MBA in one honest sentence",
          "w": 14
        },
        {
          "id": "b",
          "t": "I have a specific 3-to-5 year goal, not a vague one",
          "w": 16
        },
        {
          "id": "c",
          "t": "My past, present and goal connect into one story",
          "w": 16
        },
        {
          "id": "d",
          "t": "I can explain why now, rather than later",
          "w": 12
        },
        {
          "id": "e",
          "t": "I've written my answers to the standard PI questions",
          "w": 14
        },
        {
          "id": "f",
          "t": "I've done at least one mock interview and acted on the feedback",
          "w": 14
        },
        {
          "id": "g",
          "t": "I have a real answer to 'what's your biggest weakness'",
          "w": 8
        },
        {
          "id": "h",
          "t": "My reasons hold up when someone pushes back on them",
          "w": 6
        }
      ],
      "sp": [
        "Why not just keep doing what you're doing?",
        "In five years, what specifically is different because you did an MBA?",
        "Convince me you won't change your mind about all this in six months."
      ]
    }
  ],
  "ACTIONS": [
    {
      "id": "QA-B1",
      "p": "G-QA",
      "l": "B",
      "t": "Rebuild the arithmetic core",
      "why": "Percentages, ratios, time-speed-distance and averages sit under half of QA. Fix these and a chunk of the section stops being scary.",
      "fs": "Pick percentages. Do 15 questions untimed today and write down which sub-type tripped you.",
      "wh": 3.5,
      "mw": 5,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A topic tracker with accuracy per sub-topic",
      "lev": 4,
      "pq": [
        "Which arithmetic sub-type is still shaky?",
        "How do you convert a fraction to a percentage in your head?",
        "What's your reliable method for ratio problems?"
      ]
    },
    {
      "id": "QA-B2",
      "p": "G-QA",
      "l": "B",
      "t": "Daily mental-math drill",
      "why": "Speed is trainable. Tables, squares, cubes and fraction-percent conversions done daily free up seconds you spend elsewhere.",
      "fs": "Learn squares to 30 and fraction-to-percent for 1/n up to 12. Test yourself in 20 minutes.",
      "wh": 2,
      "mw": 6,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A speed log of timed 20-question sets",
      "lev": 3,
      "hab": true,
      "pq": [
        "What's 1/7 as a percentage, fast?",
        "How much has your calculation speed improved this month?",
        "Where do you still reach for a calculator you shouldn't?"
      ]
    },
    {
      "id": "QA-I1",
      "p": "G-QA",
      "l": "I",
      "t": "Topic-wise timed practice with an error log",
      "why": "Untimed practice hides the real problem. Timed sets plus a written error log is where QA scores actually move.",
      "fs": "Do one 20-minute timed topic set today, then log every wrong answer as concept / careless / time.",
      "wh": 4,
      "mw": 6,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "An error log sorted by mistake type",
      "lev": 5,
      "pq": [
        "What's the most common mistake type in your log?",
        "Which topic has the worst accuracy-to-time ratio?",
        "What did last week's log change this week?"
      ]
    },
    {
      "id": "QA-I2",
      "p": "G-QA",
      "l": "I",
      "t": "Attack your two weakest topics",
      "why": "Most people practise what they enjoy. The score is trapped in the two topics you avoid.",
      "fs": "Name your two worst QA topics right now. Book both into this week's sessions before anything you're already good at.",
      "wh": 3,
      "mw": 5,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "Before/after accuracy on the two weak topics",
      "lev": 4,
      "pq": [
        "Which two topics did you avoid, and why?",
        "How much did accuracy move after deliberate practice?",
        "What's the next weakest topic after these two?"
      ]
    },
    {
      "id": "QA-A1",
      "p": "G-QA",
      "l": "A",
      "t": "High-difficulty sets and timed QA sections",
      "why": "Once fundamentals hold, difficulty and pace are the last mile to a 95+ section. Timed full sections build the stamina.",
      "fs": "Sit one full timed QA section today at exam length and note where your accuracy fell off a cliff.",
      "wh": 4,
      "mw": 6,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "Section-level attempt/accuracy/time data",
      "lev": 4,
      "pq": [
        "At what point in a section does your accuracy drop?",
        "Which hard topic can you now attempt that you couldn't?",
        "What's your target attempt-count for the QA section?"
      ]
    },
    {
      "id": "QA-P1",
      "p": "G-QA",
      "l": "I",
      "t": "A structured QA question bank or test series",
      "why": "A good paid bank gives graded difficulty and solutions you'd otherwise spend hours assembling. Useful, never required.",
      "fs": "If you take one, do a single graded set and check the solution quality before committing time.",
      "wh": 4,
      "mw": 6,
      "per": "X",
      "cost": "paid",
      "tier": 1,
      "art": "Graded practice history",
      "lev": 3,
      "pq": [
        "Is the paid bank actually better than free sets you've tried?",
        "Which difficulty tier are you stuck at?",
        "Are you using the solutions to learn or just to check?"
      ]
    },
    {
      "id": "VA-B1",
      "p": "G-VA",
      "l": "B",
      "t": "A daily dense-reading habit",
      "why": "VARC is a reading test wearing an exam costume. Thirty minutes a day of hard non-fiction does more than any RC 'trick'.",
      "fs": "Read one long editorial or essay today and write its argument in one sentence.",
      "wh": 3.5,
      "mw": 8,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A reading log with one-line summaries",
      "lev": 5,
      "hab": true,
      "pq": [
        "What did you read today, and what was its core claim?",
        "How has your reading speed changed?",
        "What subject do you now read that you used to avoid?"
      ]
    },
    {
      "id": "VA-B2",
      "p": "G-VA",
      "l": "B",
      "t": "Build a repeatable RC method",
      "why": "Random RC accuracy comes from a random approach. A fixed method \u2014 map the structure, then answer \u2014 makes it consistent.",
      "fs": "Take one RC passage, mark the shift in each paragraph, then answer. Notice if mapping first helped.",
      "wh": 3,
      "mw": 5,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A written RC approach you actually follow",
      "lev": 4,
      "pq": [
        "What's your step-by-step RC method?",
        "Where does your method still break down?",
        "How do you handle a passage on a subject you dislike?"
      ]
    },
    {
      "id": "VA-I1",
      "p": "G-VA",
      "l": "I",
      "t": "Timed RC with a wrong-option post-mortem",
      "why": "Reviewing why the wrong option was wrong \u2014 not just why the right one was right \u2014 is where RC accuracy is won.",
      "fs": "Do two timed RC sets, then for each miss write one line on what made the trap option tempting.",
      "wh": 4,
      "mw": 6,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A trap-option log",
      "lev": 5,
      "pq": [
        "What kind of trap option catches you most?",
        "Is your problem comprehension or elimination?",
        "How do you decide between two plausible options?"
      ]
    },
    {
      "id": "VA-I2",
      "p": "G-VA",
      "l": "I",
      "t": "Drill para-jumbles, summary and odd-one-out",
      "why": "The non-RC verbal questions are pure marks if you make them reliable, and pure risk if you don't.",
      "fs": "Do 10 para-jumbles today and note the logic you used to fix the opening sentence.",
      "wh": 2.5,
      "mw": 4,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "Accuracy record on each question type",
      "lev": 3,
      "pq": [
        "What's your method for finding the opening sentence?",
        "Which of these three types is weakest for you?",
        "How reliable are you on summary questions now?"
      ]
    },
    {
      "id": "VA-A1",
      "p": "G-VA",
      "l": "A",
      "t": "Read wide, then sit full timed VARC sections",
      "why": "A 95+ VARC comes from comfort with unfamiliar, abstract prose plus section-length stamina. Both are trainable.",
      "fs": "Read one philosophy or hard-science essay today, then plan a full timed VARC section this week.",
      "wh": 4,
      "mw": 6,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "Full-section VARC performance data",
      "lev": 4,
      "pq": [
        "What kind of passage still throws you?",
        "How do you keep accuracy across a full section?",
        "What's your target VARC attempt count?"
      ]
    },
    {
      "id": "DI-B1",
      "p": "G-DI",
      "l": "B",
      "t": "Two DILR sets a day, every day",
      "why": "DILR is a pattern-recognition muscle. Daily reps are the only thing that reliably builds it.",
      "fs": "Solve two sets today, untimed, and write what type each was.",
      "wh": 3.5,
      "mw": 8,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A set-type log with solve times",
      "lev": 5,
      "hab": true,
      "pq": [
        "Which set types have you seen most this week?",
        "What's your solve time trending toward?",
        "Which type still feels unfamiliar?"
      ]
    },
    {
      "id": "DI-B2",
      "p": "G-DI",
      "l": "B",
      "t": "Learn to judge a set in 60 seconds",
      "why": "Half of DILR is choosing right. Reading a set and deciding fast whether it's solvable saves the section.",
      "fs": "Look at three sets today and, before solving, rate each easy/medium/skip. Then check if you were right.",
      "wh": 2.5,
      "mw": 4,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A judgement-accuracy record",
      "lev": 4,
      "pq": [
        "How do you tell a solvable set from a trap fast?",
        "When were you wrong about a set's difficulty?",
        "What signals make you skip a set now?"
      ]
    },
    {
      "id": "DI-I1",
      "p": "G-DI",
      "l": "I",
      "t": "Build a set-selection strategy and follow it",
      "why": "Ability without selection strategy still scores badly. A rule you follow under pressure is the fix.",
      "fs": "Write your rule: how many sets you scan, how long before you abandon one. Test it in the next mock.",
      "wh": 3.5,
      "mw": 6,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A written, tested selection rule",
      "lev": 5,
      "pq": [
        "What's your set-selection rule, exactly?",
        "How long do you give a set before abandoning it?",
        "When did the rule save you, and when did it fail?"
      ]
    },
    {
      "id": "DI-I2",
      "p": "G-DI",
      "l": "I",
      "t": "Drill the set types you avoid",
      "why": "The scary types \u2014 games, tournaments, networks \u2014 show up in mocks precisely because people skip practising them.",
      "fs": "Pick the type you dread most and do three of them today, slowly, until the structure clicks.",
      "wh": 3,
      "mw": 5,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "Before/after solve rate on hard types",
      "lev": 4,
      "pq": [
        "Which set type did you avoid, and can you do it now?",
        "What made it click?",
        "What's the next type to attack?"
      ]
    },
    {
      "id": "DI-A1",
      "p": "G-DI",
      "l": "A",
      "t": "Novel set types and timed DILR sections",
      "why": "CAT's DILR rewards adaptability to sets you've never seen. Exposure plus timed sections builds nerve.",
      "fs": "Find an unusual set format today, solve it without help, and time yourself on a full section this week.",
      "wh": 4,
      "mw": 6,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "Full-section DILR data across set types",
      "lev": 4,
      "pq": [
        "How do you approach a set format you've never seen?",
        "What's your accuracy on the sets you choose?",
        "What's your target: how many sets, how many questions?"
      ]
    },
    {
      "id": "MK-B1",
      "p": "G-MK",
      "l": "B",
      "t": "Sit your first full mock, one timed sitting",
      "why": "Until you take a full mock in exam conditions, you're guessing at your own stamina and temperament.",
      "fs": "Block three hours this week, phone away, and take one full proctored mock start to finish.",
      "wh": 3,
      "mw": 2,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "Your first honest baseline percentile",
      "lev": 4,
      "pq": [
        "What surprised you about taking a full mock?",
        "Where did your energy or focus drop?",
        "What's your baseline, and how do you feel about it?"
      ]
    },
    {
      "id": "MK-I1",
      "p": "G-MK",
      "l": "I",
      "t": "The 90-minute analysis ritual",
      "why": "This is the single biggest score mover most people skip. The mock isn't the lesson \u2014 the analysis is.",
      "fs": "Take your last mock and spend 90 minutes today logging every mistake by type: concept, careless, selection, time.",
      "wh": 3,
      "mw": 6,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A per-mock error log by mistake type",
      "lev": 5,
      "hab": true,
      "pq": [
        "What does your error log say you keep getting wrong?",
        "Which mistake type is most fixable fastest?",
        "What did analysis change in your next attempt?"
      ]
    },
    {
      "id": "MK-I2",
      "p": "G-MK",
      "l": "I",
      "t": "Ramp mock frequency toward the exam",
      "why": "One mock a fortnight early, two or three a week near the end. The ramp builds exam-day endurance.",
      "fs": "Put your mock dates on a calendar now, increasing as the exam nears, and protect them like appointments.",
      "wh": 4,
      "mw": 6,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A mock calendar with a rising curve",
      "lev": 4,
      "pq": [
        "What's your mock schedule for the final eight weeks?",
        "Are you analysing each one before taking the next?",
        "How's your stamina holding across back-to-back mocks?"
      ]
    },
    {
      "id": "MK-A1",
      "p": "G-MK",
      "l": "A",
      "t": "Build your personal exam-day strategy from your data",
      "why": "The best time-and-selection plan is the one your own mocks prove works for you \u2014 not a generic one.",
      "fs": "From your last five mocks, write your section order, time splits and skip rules. Test them next mock.",
      "wh": 2.5,
      "mw": 5,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A one-page personal exam-day playbook",
      "lev": 5,
      "pq": [
        "What's your section order and why?",
        "Where does your data say you leave marks on the table?",
        "What's your rule when a section starts going badly?"
      ]
    },
    {
      "id": "MK-P1",
      "p": "G-MK",
      "l": "I",
      "t": "A quality mock test series",
      "why": "If you buy one paid thing, a good mock series is usually it \u2014 realistic difficulty and percentile calibration. Still optional.",
      "fs": "Take one mock from any series and check whether its difficulty and analytics feel exam-realistic.",
      "wh": 4,
      "mw": 6,
      "per": "X",
      "cost": "paid",
      "tier": 1,
      "art": "A calibrated percentile trend across mocks",
      "lev": 4,
      "pq": [
        "Does the series' difficulty match the real exam?",
        "Are the analytics telling you something free mocks didn't?",
        "Is your percentile trend rising across the series?"
      ]
    },
    {
      "id": "AC-B1",
      "p": "P-AC",
      "l": "B",
      "t": "Protect and lift your degree CGPA",
      "why": "If you're still studying, the one academic number you can still move is your degree CGPA. Don't let prep tank it.",
      "fs": "Check your current CGPA and the marks you need this semester to hold or lift it. Write the target down.",
      "wh": 2,
      "mw": 8,
      "per": "S",
      "cost": "free",
      "tier": 1,
      "art": "A rising or protected CGPA",
      "lev": 3,
      "pq": [
        "What's your CGPA target this semester, and is it realistic?",
        "How are you balancing coursework with prep?",
        "Which subject is the risk to your CGPA?"
      ]
    },
    {
      "id": "AC-I1",
      "p": "P-AC",
      "l": "I",
      "t": "Prepare the honest answer for your weakest number",
      "why": "You can't change a past mark, but you can decide how it's read. A calm, owned explanation defuses it.",
      "fs": "Write, in four sentences, what happened around your weakest academic number and what you did afterwards.",
      "wh": 1,
      "mw": 2,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A rehearsed, non-defensive explanation",
      "lev": 4,
      "pq": [
        "Why did that number dip?",
        "What did you change afterwards?",
        "Why should that not worry a panel about you now?"
      ]
    },
    {
      "id": "AC-A1",
      "p": "P-AC",
      "l": "A",
      "t": "Do a real academic project with a result",
      "why": "A paper, thesis or serious project is academic evidence that isn't a mark \u2014 and it's something to actually talk about.",
      "fs": "Pick a question in your field you find genuinely interesting and draft a one-paragraph project scope today.",
      "wh": 3,
      "mw": 10,
      "per": "S",
      "cost": "free",
      "tier": 1,
      "art": "A completed project, paper or documented result",
      "lev": 3,
      "pq": [
        "What question did your project answer?",
        "What was hard about it, and what did you find?",
        "What would you do differently with more time?"
      ]
    },
    {
      "id": "WK-B1",
      "p": "P-WK",
      "l": "B",
      "t": "Land a documented internship or live project",
      "why": "For a student, one real internship with an outcome is worth more than a page of coursework. It becomes your work story.",
      "fs": "List five organisations you could realistically intern with and draft one outreach message today.",
      "wh": 3,
      "mw": 8,
      "per": "S",
      "cost": "free",
      "tier": 1,
      "art": "An internship with a written outcome and a reference",
      "lev": 5,
      "pq": [
        "What did you actually do, and what changed because of it?",
        "What did the work teach you about the field?",
        "Would they take you back? Why?"
      ]
    },
    {
      "id": "WK-I1",
      "p": "P-WK",
      "l": "I",
      "t": "Turn a job responsibility into a quantified win",
      "why": "Working professionals already have the raw material. The gap is usually a result with a number a panel can test.",
      "fs": "Pick one thing you own at work and find the number \u2014 money, time, users, or scale \u2014 that proves your impact.",
      "wh": 2,
      "mw": 6,
      "per": "W",
      "cost": "free",
      "tier": 1,
      "art": "An achievement statement with a hard metric",
      "lev": 5,
      "pq": [
        "What did you change, and by how much?",
        "How did you measure it?",
        "What would your manager add or dispute?"
      ]
    },
    {
      "id": "WK-I2",
      "p": "P-WK",
      "l": "I",
      "t": "Rewrite your work as results, not duties",
      "why": "'Responsible for X' says nothing. 'Cut X by 20%' says everything. This is the resume and the PI answer both.",
      "fs": "Take your three main responsibilities and rewrite each as an outcome with a number, even if approximate.",
      "wh": 1.5,
      "mw": 3,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "Result-first bullet points for every role",
      "lev": 4,
      "pq": [
        "Which of your bullets has the strongest number?",
        "Where are you still describing duties, not results?",
        "What's the one achievement you'd lead with?"
      ]
    },
    {
      "id": "WK-A1",
      "p": "P-WK",
      "l": "A",
      "t": "Own a visible cross-functional project",
      "why": "A project that crosses teams shows leadership and scope \u2014 the profile a panel remembers from a working candidate.",
      "fs": "Identify one initiative at work you could volunteer to drive, and note who you'd need to bring along.",
      "wh": 3,
      "mw": 10,
      "per": "W",
      "cost": "free",
      "tier": 1,
      "art": "A delivered cross-team project with a result",
      "lev": 4,
      "pq": [
        "Who did you have to influence without authority?",
        "What nearly derailed it?",
        "What was the measurable outcome?"
      ]
    },
    {
      "id": "WK-A2",
      "p": "P-WK",
      "l": "A",
      "t": "Take on freelance or consulting work with an outcome",
      "why": "No internship on offer? A real problem solved for a real client is work experience you created yourself.",
      "fs": "Offer to solve one concrete problem for a small business or NGO this week, for free if needed, and scope it.",
      "wh": 3,
      "mw": 10,
      "per": "S",
      "cost": "free",
      "tier": 1,
      "art": "A delivered engagement with a client outcome",
      "lev": 3,
      "pq": [
        "What problem did you solve, and for whom?",
        "How did you price or scope it?",
        "What did the client get that they didn't have before?"
      ]
    },
    {
      "id": "LD-B1",
      "p": "P-LD",
      "l": "B",
      "t": "Take a real position of responsibility",
      "why": "A committee, club, team or society role is the standard leadership signal \u2014 provided you actually do something in it.",
      "fs": "Find one group on campus or at work looking for organisers and put your name down this week.",
      "wh": 2.5,
      "mw": 8,
      "per": "S",
      "cost": "free",
      "tier": 1,
      "art": "A titled role with a track record",
      "lev": 4,
      "pq": [
        "What was your actual responsibility, not your title?",
        "What did you change in the role?",
        "What was the hardest part of it?"
      ]
    },
    {
      "id": "LD-B2",
      "p": "P-LD",
      "l": "B",
      "t": "Own one thing end to end",
      "why": "Leadership isn't a badge \u2014 it's being the person accountable when something ships. Volunteer to be that person once.",
      "fs": "Pick one small event or task nobody owns, and claim it start to finish. Define what 'done' means today.",
      "wh": 2,
      "mw": 6,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "One thing that happened because you ran it",
      "lev": 3,
      "pq": [
        "What would not have happened without you?",
        "Who did you have to coordinate?",
        "What went wrong, and what did you do?"
      ]
    },
    {
      "id": "LD-I1",
      "p": "P-LD",
      "l": "I",
      "t": "Run an initiative with a measurable outcome",
      "why": "'I organised an event' is weak. 'I ran a drive that raised X / reached Y people' is a story with a spine.",
      "fs": "Take an initiative you're near, and define the one number that will prove it worked. Then go get that number.",
      "wh": 3,
      "mw": 8,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "An initiative with a hard, quotable result",
      "lev": 5,
      "pq": [
        "What was the number, and how did you hit it?",
        "Who was unhappy along the way?",
        "What did you learn about running people?"
      ]
    },
    {
      "id": "LD-A1",
      "p": "P-LD",
      "l": "A",
      "t": "Start something that didn't exist",
      "why": "Founding a club, a project or a small venture \u2014 and getting a real outcome \u2014 is the strongest leadership evidence there is.",
      "fs": "Write one paragraph on a thing your campus or workplace lacks that you could start, and the first three steps.",
      "wh": 3.5,
      "mw": 12,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A founded initiative with sustained results",
      "lev": 4,
      "pq": [
        "Why did it need to exist?",
        "How did you get the first people to join?",
        "What's it become since you started it?"
      ]
    },
    {
      "id": "EC-B1",
      "p": "P-EC",
      "l": "B",
      "t": "Commit to one interest, seriously",
      "why": "Depth beats breadth. One activity pursued for real reads better than ten certificates that led nowhere.",
      "fs": "Choose the one interest you'd defend to a stranger and schedule two hours for it this week, then keep it.",
      "wh": 2,
      "mw": 8,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A sustained record in one pursuit",
      "lev": 3,
      "hab": true,
      "pq": [
        "Why this one, out of everything?",
        "What has sticking with it taught you?",
        "Where has it taken you so far?"
      ]
    },
    {
      "id": "EC-I1",
      "p": "P-EC",
      "l": "I",
      "t": "Enter a case competition or hackathon",
      "why": "A case comp is management practice with a scoreboard \u2014 and a genuinely useful line whether you place or not.",
      "fs": "Find one open case competition or hackathon this quarter and register today, solo or with a team.",
      "wh": 3,
      "mw": 5,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A competition entry, ideally a placement",
      "lev": 4,
      "pq": [
        "What was your approach to the case?",
        "What did the judges or results teach you?",
        "What would you do differently next time?"
      ]
    },
    {
      "id": "EC-I2",
      "p": "P-EC",
      "l": "I",
      "t": "Document the achievements you already have",
      "why": "Many people have real achievements they can't prove or describe well. Fixing that is fast, high-return work.",
      "fs": "List everything you've genuinely done, and for each note the proof \u2014 a rank, a link, a name, a certificate that means something.",
      "wh": 1.5,
      "mw": 3,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "An evidenced achievement list",
      "lev": 3,
      "pq": [
        "What's your strongest achievement, and can you prove it?",
        "Which of these is real depth versus a one-off?",
        "What can you actually talk about for ten minutes?"
      ]
    },
    {
      "id": "EC-A1",
      "p": "P-EC",
      "l": "A",
      "t": "Take one pursuit to a competitive or published level",
      "why": "Reaching a level others recognise \u2014 a competition, a publication, a performance \u2014 turns a hobby into evidence.",
      "fs": "Pick the one interest closest to a real milestone and define what reaching that level would take, starting now.",
      "wh": 3,
      "mw": 12,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "An external recognition \u2014 rank, publication, performance",
      "lev": 3,
      "pq": [
        "What level did you reach, and how hard was it?",
        "What did competing at that level cost you?",
        "What's next for it?"
      ]
    },
    {
      "id": "AW-B1",
      "p": "P-AW",
      "l": "B",
      "t": "A daily business-news habit",
      "why": "WAT, GD and PI all run on this. Twenty minutes a day compounds into a candidate who can hold any table.",
      "fs": "Read the business section today and write one line on the story that mattered most and why.",
      "wh": 2,
      "mw": 8,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A dated news journal with your own takes",
      "lev": 5,
      "hab": true,
      "pq": [
        "What's the biggest business story this week?",
        "What's your own view on it?",
        "How has your grasp of the economy changed?"
      ]
    },
    {
      "id": "AW-B2",
      "p": "P-AW",
      "l": "B",
      "t": "Learn one industry properly",
      "why": "Panels reward one industry known deeply over ten known shallowly. Pick the one you'd enjoy and go deep.",
      "fs": "Choose an industry today and write down its top three players and one line on how each makes money.",
      "wh": 2.5,
      "mw": 6,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A one-page teardown of one industry",
      "lev": 4,
      "pq": [
        "How does the biggest player in that industry make money?",
        "What's its main cost line?",
        "What threatens it in the next five years?"
      ]
    },
    {
      "id": "AW-I1",
      "p": "P-AW",
      "l": "I",
      "t": "Keep a current-affairs journal with your own views",
      "why": "A summary is forgettable. A position is what wins a GD. Practise having one on everything you read.",
      "fs": "Start a running note today: 15 topics, and for each, two lines \u2014 what happened, and what you think.",
      "wh": 2,
      "mw": 8,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A journal of 15+ topics with defended positions",
      "lev": 4,
      "pq": [
        "Pick a topic \u2014 argue your side, then the opposite.",
        "Which of your views has changed as you read more?",
        "What issue are you most confident discussing?"
      ]
    },
    {
      "id": "AW-I2",
      "p": "P-AW",
      "l": "I",
      "t": "Practise timed written arguments (WAT)",
      "why": "WAT is a real filter at many schools and almost nobody practises it. Twenty minutes, a prompt, a structured argument.",
      "fs": "Give yourself one prompt and 20 minutes today. Write a structured argument. Read it back for holes.",
      "wh": 1.5,
      "mw": 5,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A folder of timed WAT responses",
      "lev": 4,
      "pq": [
        "How do you structure a WAT answer under time?",
        "What's the weakest part of your written argument?",
        "How do you handle a topic you know little about?"
      ]
    },
    {
      "id": "AW-A1",
      "p": "P-AW",
      "l": "A",
      "t": "Run weekly group-discussion practice",
      "why": "GD is a contact sport you can't learn alone. Regular practice with peers builds the instinct to enter and hold.",
      "fs": "Set up one GD this week with three or more people on a current topic, and get honest feedback afterwards.",
      "wh": 2,
      "mw": 6,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A GD practice log with peer feedback",
      "lev": 3,
      "pq": [
        "How do you enter a GD that's already crowded?",
        "What do you do when it turns into a shouting match?",
        "When did you change the direction of a discussion?"
      ]
    },
    {
      "id": "NR-B1",
      "p": "P-NR",
      "l": "B",
      "t": "Write your why-MBA in 200 honest words",
      "why": "If you can't write it, you can't say it. Two hundred honest words is the foundation the whole interview stands on.",
      "fs": "Write 200 words on why you want an MBA \u2014 no jargon, no 'leadership role'. Read it aloud and cut anything fake.",
      "wh": 1.5,
      "mw": 2,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A tight, honest why-MBA statement",
      "lev": 5,
      "pq": [
        "Why an MBA, in one sentence?",
        "What's the real reason underneath the professional one?",
        "Why not just keep doing what you're doing?"
      ]
    },
    {
      "id": "NR-I1",
      "p": "P-NR",
      "l": "I",
      "t": "Define a specific 3-to-5 year goal and the path",
      "why": "'A leadership role' is the answer that gets you rejected. A specific role, sector and problem is the one that lands.",
      "fs": "Write your five-year target as a specific role in a specific kind of company, and the two steps the MBA unlocks.",
      "wh": 2,
      "mw": 4,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A concrete goal with a plausible path",
      "lev": 5,
      "pq": [
        "Where exactly do you want to be in five years?",
        "How does the MBA connect your present to that?",
        "What's your backup if the first path doesn't open?"
      ]
    },
    {
      "id": "NR-I2",
      "p": "P-NR",
      "l": "I",
      "t": "Answer the eight standard PI questions in writing",
      "why": "Every interview draws from the same well. Writing your answers once means you're never caught flat.",
      "fs": "Write real answers today to: why MBA, why now, strengths, weakness, failure, a leadership story, why this school, and where in five years.",
      "wh": 2,
      "mw": 4,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "A written answer bank for the core questions",
      "lev": 4,
      "pq": [
        "What's your genuine biggest weakness?",
        "Tell me about a real failure and what it taught you.",
        "Why this school specifically?"
      ]
    },
    {
      "id": "NR-A1",
      "p": "P-NR",
      "l": "A",
      "t": "Three recorded mock interviews with post-mortems",
      "why": "Reading your answers and saying them under pressure are different skills. Recording yourself is uncomfortable and it works.",
      "fs": "Book one mock interview this week \u2014 a senior, a mentor, or a friend who'll push \u2014 and record it.",
      "wh": 2,
      "mw": 5,
      "per": "X",
      "cost": "free",
      "tier": 1,
      "art": "Three recordings, each with three written fixes",
      "lev": 5,
      "pq": [
        "What did watching yourself reveal?",
        "Which answer fell apart under pressure?",
        "What are the three fixes from your last mock?"
      ]
    },
    {
      "id": "NR-P1",
      "p": "P-NR",
      "l": "A",
      "t": "A structured GD-PI preparation program",
      "why": "A good paid program gives real panels and blunt feedback. Helpful near interview season, never necessary to clear it.",
      "fs": "Before paying, do one free mock interview and see whether your gaps really need a program or just more reps.",
      "wh": 2,
      "mw": 5,
      "per": "X",
      "cost": "paid",
      "tier": 1,
      "art": "Panel feedback across multiple mock interviews",
      "lev": 3,
      "pq": [
        "What did the panel say you do worst?",
        "Is the feedback something free practice couldn't give?",
        "Are you improving between sessions?"
      ]
    }
  ],
  "STAGES": {
    "y12": "1st / 2nd year UG",
    "prefinal": "Pre-final year UG",
    "final": "Final year UG",
    "grad": "Graduated \xB7 dedicated attempt",
    "working": "Working professional"
  },
  "DEGREES": {
    "btech": "B.Tech / B.E.",
    "bcom": "B.Com",
    "bba": "BBA / BMS",
    "bsc": "B.Sc",
    "ba": "BA / Humanities",
    "bpharm": "B.Pharm",
    "other": "Other degree"
  },
  "WORKY": {
    "y0": "Under 1 year",
    "y1": "1\u20132 years",
    "y2": "2\u20133 years",
    "y3": "3\u20135 years",
    "y5": "5+ years"
  },
  "TIERS": {
    "top": {
      "label": "IIM A / B / C, FMS, top private",
      "overall": 99,
      "gateL": 3.4,
      "profL": 3.1
    },
    "iim1": {
      "label": "Older IIMs, MDI, XLRI, SPJIMR, IIFT",
      "overall": 98,
      "gateL": 3.15,
      "profL": 2.9
    },
    "new": {
      "label": "Newer IIMs and strong private schools",
      "overall": 93,
      "gateL": 2.8,
      "profL": 2.5
    },
    "broad": {
      "label": "A solid MBA that fits your profile",
      "overall": 86,
      "gateL": 2.4,
      "profL": 2.2
    }
  },
  "SCHOOL_TIERS": [
    {
      "k": "t1",
      "nm": "IIM A / B / C, FMS, SPJIMR",
      "lo": 99,
      "hi": 100,
      "note": "99+ overall, no weak section, and academics matter for the final call."
    },
    {
      "k": "t2",
      "nm": "Older IIMs (L, K, I, S), MDI, XLRI, IIFT, NITIE",
      "lo": 96,
      "hi": 99,
      "note": "96\u201399, with sectionals holding up and a real profile behind the score."
    },
    {
      "k": "t3",
      "nm": "Newer IIMs and strong private schools",
      "lo": 90,
      "hi": 96,
      "note": "90\u201396 opens a wide, genuinely good set of schools."
    },
    {
      "k": "t4",
      "nm": "Solid private and tier-2 schools",
      "lo": 80,
      "hi": 90,
      "note": "80\u201390 still reaches respected programmes, especially with work experience."
    },
    {
      "k": "t5",
      "nm": "Broader set of MBA programmes",
      "lo": 0,
      "hi": 80,
      "note": "Below 80, look wider \u2014 and consider whether a stronger score next cycle changes the whole picture."
    }
  ]
};

// src/engine.js
var PILLARS = content_default.PILLARS;
var ACTIONS = content_default.ACTIONS;
var STAGES = content_default.STAGES;
var DEGREES = content_default.DEGREES;
var WORKY = content_default.WORKY;
var TIERS = content_default.TIERS;
var SCHOOL_TIERS = content_default.SCHOOL_TIERS;
var PMAP = Object.fromEntries(PILLARS.map((p) => [p.id, p]));
var AMAP = Object.fromEntries(ACTIONS.map((a) => [a.id, a]));
var SEC_OF = { "G-QA": "qa", "G-VA": "va", "G-DI": "di" };
var SHORT = { "G-QA": "Quant", "G-VA": "Verbal", "G-DI": "DILR", "G-MK": "Mock craft", "P-AC": "Academics", "P-WK": "Work & interns", "P-LD": "Leadership", "P-EC": "Extra-curric", "P-AW": "Awareness", "P-NR": "Narrative" };
var LEVELS = [
  { k: "critical", name: "Critical", min: 0, color: "#FF5A5F" },
  { k: "gap", name: "Gap", min: 35, color: "#FF9F1C" },
  { k: "developing", name: "Developing", min: 55, color: "#3BA9FF" },
  { k: "strong", name: "Strong", min: 75, color: "#1FD1A5" }
];
var levelOf = (s) => s == null ? { k: "fog", name: "Unmapped", color: "#B8B3CC" } : [...LEVELS].reverse().find((l) => s >= l.min);
var clamp = (v, a = 0, b = 100) => Math.max(a, Math.min(b, v));
var avg = (a) => a.length ? a.reduce((x, y) => x + y, 0) / a.length : null;
var DAY = 864e5;
function daysTo(dateStr, now = Date.now()) {
  if (!dateStr) return null;
  const t = Date.parse(dateStr + "T09:00:00+05:30");
  return isNaN(t) ? null : Math.ceil((t - now) / DAY);
}
function sortedMocks(st) {
  return [...st.mocks || []].sort((a, b) => (a.date || "").localeCompare(b.date || ""));
}
function marksToScore(m) {
  if (m == null || m === "" || isNaN(+m)) return null;
  let v = +m;
  if (v <= 10) v = v * 9.5;
  return clamp((v - 51.25) / 0.4375);
}
function scorePillar(p, st) {
  const prof = st.profile || {};
  const e = prof.pillars?.[p.id] || {};
  const ev = e.ev || [];
  const mapped = e.self != null || ev.length > 0;
  const totW = p.ev.reduce((s, x) => s + x.w, 0);
  const have = p.ev.filter((x) => ev.includes(x.id));
  const evPct = 100 * have.reduce((s, x) => s + x.w, 0) / totW;
  const selfPct = e.self != null ? (e.self - 1) * 25 : null;
  let base = mapped ? selfPct == null ? evPct : 0.7 * evPct + 0.3 * selfPct : null;
  const sources = [];
  if (mapped) sources.push("self-map");
  const ms = sortedMocks(st).slice(-3);
  if (SEC_OF[p.id]) {
    const vals = ms.map((m) => +m[SEC_OF[p.id]]).filter((v) => !isNaN(v) && v > 0);
    if (vals.length) {
      const mv = avg(vals);
      base = base == null ? mv : 0.5 * base + 0.5 * mv;
      sources.push(`${vals.length} mock${vals.length > 1 ? "s" : ""}`);
    }
  }
  if (p.id === "G-MK") {
    const n = (st.mocks || []).length;
    if (n) {
      const vol = clamp(n * 9);
      const an = (st.mocks || []).filter((m) => m.analysed).length / n * 100;
      const mv = 0.6 * vol + 0.4 * an;
      base = base == null ? mv : 0.5 * base + 0.5 * mv;
      sources.push("mock volume");
    }
  }
  if (p.id === "P-AC") {
    const ms2 = [prof.x10, prof.x12, prof.ug].map(marksToScore).filter((v) => v != null);
    if (ms2.length) {
      const mv = avg(ms2);
      base = base == null ? mv : 0.5 * base + 0.5 * mv;
      sources.push("marks");
    }
  }
  if (p.id === "P-WK" && prof.stage === "working") {
    const bonus = { y0: 0, y1: 6, y2: 10, y3: 12, y5: 10 }[prof.worky] || 0;
    if (base != null) base = clamp(base + bonus);
  }
  const score = base == null ? null : Math.round(clamp(base));
  return {
    id: p.id,
    name: p.name,
    short: SHORT[p.id],
    fam: p.fam,
    w: p.w,
    score,
    level: levelOf(score),
    mapped,
    have: have.map((x) => x.t),
    missing: p.ev.filter((x) => !ev.includes(x.id)).sort((a, b) => b.w - a.w).map((x) => x.t),
    self: e.self,
    claim: e.claim || "",
    sources
  };
}
function analyse(st, cfg = {}, now = Date.now()) {
  const prof = st.profile || {};
  const pillars = PILLARS.map((p) => scorePillar(p, st));
  const wavg = (fam) => {
    const xs = pillars.filter((x) => x.fam === fam && x.score != null);
    const tw = xs.reduce((s, x) => s + x.w, 0);
    return tw ? Math.round(xs.reduce((s, x) => s + x.score * x.w, 0) / tw) : null;
  };
  const gate = wavg("gate"), profI = wavg("prof");
  const mappedN = pillars.filter((x) => x.mapped).length;
  const overall = gate == null && profI == null ? null : Math.round(gate == null ? profI : profI == null ? gate : 0.6 * gate + 0.4 * profI);
  const ms = sortedMocks(st);
  const last3 = ms.slice(-3).map((m) => +m.overall).filter((v) => !isNaN(v) && v > 0);
  let proj = null, projSrc = null;
  if (last3.length) {
    const c = avg(last3);
    const spread = last3.length > 1 ? Math.max(2, (Math.max(...last3) - Math.min(...last3)) / 2) : 4;
    proj = { lo: Math.round(clamp(c - spread, 0, 99.9) * 10) / 10, mid: Math.round(c * 10) / 10, hi: Math.round(clamp(c + spread, 0, 99.99) * 10) / 10 };
    projSrc = `average of last ${last3.length} mock${last3.length > 1 ? "s" : ""}`;
  } else if (gate != null) {
    const c = clamp(40 + gate * 0.58, 0, 99.5);
    proj = { lo: Math.round(clamp(c - 8, 0, 99)), mid: Math.round(c), hi: Math.round(clamp(c + 6, 0, 99.9)) };
    projSrc = "estimated from your self-map \u2014 log a mock to sharpen this";
  }
  const tier = TIERS[prof.target] || TIERS.new;
  const fit = proj ? SCHOOL_TIERS.find((t) => proj.mid >= t.lo && proj.mid < t.hi) || SCHOOL_TIERS[0] : null;
  const catDate = prof.catDate || cfg.catDate;
  const days = daysTo(catDate, now);
  let trend = null;
  const ov = ms.map((m) => +m.overall).filter((v) => !isNaN(v) && v > 0);
  if (ov.length >= 2) trend = Math.round((ov[ov.length - 1] - ov[ov.length - 2]) * 10) / 10;
  const gap = proj ? Math.round((tier.overall - proj.mid) * 10) / 10 : null;
  const strengths = pillars.filter((x) => x.score != null && x.score >= 75).sort((a, b) => b.score - a.score);
  const lacking = pillars.filter((x) => x.score != null && x.score < 55).sort((a, b) => a.score - b.score);
  const fog = pillars.filter((x) => x.score == null);
  return { pillars, gate, prof: profI, overall, mappedN, proj, projSrc, tier, fit, days, trend, gap, strengths, lacking, fog, catDate };
}
function xpOf(st) {
  let xp = 0;
  for (const it of st.plan || []) {
    xp += Object.values(it.steps || {}).filter(Boolean).length * 10;
    if (it.status === "done") xp += 60;
    xp += Math.min(10, (it.log || []).length) * 5;
  }
  xp += (st.mocks || []).length * 15 + (st.mocks || []).filter((m) => m.analysed).length * 10;
  xp += (st.checkins || []).length * 20;
  const an = st.profile?.pillars ? Object.keys(st.profile.pillars).length : 0;
  xp += an * 10;
  return xp;
}
function lastActivity(st) {
  const ts = [st.createdAt || 0];
  for (const it of st.plan || []) {
    ts.push(it.addedAt || 0);
    for (const l of it.log || []) ts.push(l.t || 0);
    if (it.updatedAt) ts.push(it.updatedAt);
  }
  for (const c of st.checkins || []) ts.push(c.t || 0);
  for (const m of st.mocks || []) ts.push(m.t || 0);
  if (st.profile?.updatedAt) ts.push(st.profile.updatedAt);
  return Math.max(...ts);
}
function computeAlerts(st, cfg = {}, now = Date.now(), sessions = []) {
  const an = analyse(st, cfg, now);
  const prof = st.profile || {};
  const out = [];
  const add = (key, urgency, title, detail, kind) => out.push({ key, urgency, title, detail, kind });
  const mine = sessions.filter((s) => s.bookedBy === st.id);
  const held = mine.filter((s) => s.status !== "cancelled");
  if (an.mappedN >= 8 && !held.length) add("first-review", 2, "First profile review due", `Profile mapped (${an.mappedN}/10 pillars). No mentor session yet \u2014 walk through the map and agree the first 3 quests.`, "review");
  const ms = sortedMocks(st);
  if (ms.length >= 2) {
    const a = +ms[ms.length - 2].overall, b = +ms[ms.length - 1].overall;
    if (a && b && a - b >= 8) add("mock-drop:" + (ms[ms.length - 1].id || ms.length), 3, `Mock dropped ${Math.round(a - b)} percentile points`, `${ms[ms.length - 2].name || "Previous"}: ${a} \u2192 ${ms[ms.length - 1].name || "Latest"}: ${b}. Check for burnout, strategy change or a section collapse.`, "mock");
  }
  if (an.days != null && an.days >= 0 && an.days <= 45 && an.proj && an.proj.mid < an.tier.overall - 5)
    add("exam-gap", 3, `${an.days} days to CAT, ${Math.round(an.tier.overall - an.proj.mid)} pts below target`, `Projected ${an.proj.mid} vs ${an.tier.overall} needed for ${an.tier.label}. Agree an exam-day strategy and a realistic school list.`, "exam");
  const la = lastActivity(st);
  if ((st.plan || []).some((x) => x.status !== "done") && now - la > 10 * DAY) add("stalled:" + Math.floor(la / DAY), 2, `No activity for ${Math.floor((now - la) / DAY)} days`, "Open quests but nothing logged. A short call to unblock or re-scope usually restarts momentum.", "stall");
  for (const it of st.plan || []) if (it.status === "blocked") add("blocked:" + it.aid + ":" + (it.updatedAt || 0), 2, `Blocked: ${AMAP[it.aid]?.t || it.aid}`, it.blockNote || "Student marked this quest as blocked.", "blocked");
  const ck = [...st.checkins || []].sort((a, b) => a.t - b.t);
  if (ck.length >= 2 && ck.slice(-2).every((c) => c.mood <= 2)) add("mood:" + ck[ck.length - 1].t, 3, "Low mood two check-ins running", `Latest: \u201C${(ck[ck.length - 1].note || "").slice(0, 120)}\u201D. Reach out personally \u2014 this is a wellbeing check, not a progress review.`, "mood");
  const nr = an.pillars.find((p) => p.id === "P-NR");
  if (nr.score != null && nr.score < 45 && (["final", "grad", "working"].includes(prof.stage) || an.days != null && an.days <= 60))
    add("narrative", 1, "Narrative gap before interview season", `\u201CWhy MBA\u201D story is at ${nr.score}. Start WAT/PI prep early \u2014 book a narrative session.`, "narrative");
  if (an.lacking.filter((p) => p.score < 35).length >= 3) add("critical:" + an.lacking.filter((p) => p.score < 35).map((p) => p.id).join(","), 2, `${an.lacking.filter((p) => p.score < 35).length} critical pillars`, an.lacking.filter((p) => p.score < 35).map((p) => p.short).join(", ") + " \u2014 help them prioritise; not everything can be fixed at once.", "critical");
  for (const h of st.help || []) if (!h.closed) add("help:" + h.id, 3, "Student asked for help", h.text, "help");
  const ack = st.ack || {};
  return out.filter((a) => !ack[a.key]).sort((a, b) => b.urgency - a.urgency);
}
function summary(st, cfg, now = Date.now(), sessions = []) {
  const an = analyse(st, cfg, now);
  const alerts = computeAlerts(st, cfg, now, sessions);
  const plan = st.plan || [];
  return {
    id: st.id,
    name: st.name,
    email: st.email,
    phone: st.phone,
    mentorId: st.mentorId || null,
    createdAt: st.createdAt,
    stage: st.profile?.stage,
    degree: st.profile?.degree,
    target: st.profile?.target,
    overall: an.overall,
    gate: an.gate,
    prof: an.prof,
    mappedN: an.mappedN,
    proj: an.proj,
    trend: an.trend,
    days: an.days,
    pillars: Object.fromEntries(an.pillars.map((p) => [p.id, p.score])),
    planN: plan.length,
    doneN: plan.filter((x) => x.status === "done").length,
    blockedN: plan.filter((x) => x.status === "blocked").length,
    mocks: (st.mocks || []).length,
    lastActive: lastActivity(st),
    xp: xpOf(st),
    alerts,
    mood: (st.checkins || []).length ? [...st.checkins].sort((a, b) => a.t - b.t).slice(-1)[0].mood : null
  };
}

// data/resources.js
var resources_default = [
  // ---------- CAT: official & mocks
  { id: "r-cat", cat: "CAT & mocks", name: "CAT official website", url: "https://iimcat.ac.in", desc: "Notification, dates, syllabus pattern, official mock.", free: true, pillars: ["G-MK"], actions: ["MK-B1", "MK-A1"] },
  { id: "r-2iim", cat: "CAT & mocks", name: "2IIM \u2014 free CAT resources", url: "https://www.2iim.com", desc: "Free concept videos, question banks and a free CAT mock.", free: true, pillars: ["G-QA", "G-VA", "G-DI"], actions: ["QA-B1", "QA-I2", "DI-B1"] },
  { id: "r-cracku", cat: "CAT & mocks", name: "Cracku", url: "https://cracku.in", desc: "Free past CAT papers, daily targets and free mocks.", free: true, pillars: ["G-QA", "G-VA", "G-DI", "G-MK"], actions: ["QA-A1", "DI-A1", "VA-A1", "MK-B1", "MK-I2"] },
  { id: "r-time", cat: "CAT & mocks", name: "T.I.M.E. test series", url: "https://www.time4education.com", desc: "All-India mock series (AIMCATs) with percentile benchmarking.", free: false, pillars: ["G-MK"], actions: ["MK-P1", "MK-I2", "QA-P1"] },
  { id: "r-ims", cat: "CAT & mocks", name: "IMS (SimCATs)", url: "https://www.imsindia.com", desc: "Mock test series and analytics; free diagnostic tests.", free: false, pillars: ["G-MK"], actions: ["MK-P1", "MK-I2"] },
  { id: "r-cl", cat: "CAT & mocks", name: "Career Launcher", url: "https://www.careerlauncher.com", desc: "CAT courses, mocks and GD-PI programmes.", free: false, pillars: ["G-MK", "P-NR"], actions: ["MK-P1", "NR-P1"] },
  // ---------- foundations
  { id: "r-khan", cat: "Foundations", name: "Khan Academy \u2014 maths", url: "https://www.khanacademy.org/math", desc: "Free, patient rebuild of arithmetic, algebra and geometry basics.", free: true, pillars: ["G-QA"], actions: ["QA-B1", "QA-I2"] },
  { id: "r-ncert", cat: "Foundations", name: "NCERT textbooks (free PDFs)", url: "https://ncert.nic.in/textbook.php", desc: "Class 8\u201310 maths for clean fundamentals.", free: true, pillars: ["G-QA"], actions: ["QA-B1"] },
  // ---------- reading for VARC
  { id: "r-aeon", cat: "Reading (VARC)", name: "Aeon essays", url: "https://aeon.co", desc: "Dense, CAT-style long-form on philosophy, science and society.", free: true, pillars: ["G-VA"], actions: ["VA-B1", "VA-A1"] },
  { id: "r-ald", cat: "Reading (VARC)", name: "Arts & Letters Daily", url: "https://www.aldaily.com", desc: "Daily picks of serious essays across subjects.", free: true, pillars: ["G-VA"], actions: ["VA-B1", "VA-A1"] },
  { id: "r-guardian", cat: "Reading (VARC)", name: "The Guardian \u2014 The Long Read", url: "https://www.theguardian.com/news/series/the-long-read", desc: "Long-form journalism \u2014 ideal RC stamina training.", free: true, pillars: ["G-VA"], actions: ["VA-B1"] },
  { id: "r-hindu", cat: "Reading (VARC)", name: "The Hindu \u2014 Opinion", url: "https://www.thehindu.com/opinion/", desc: "Editorials for reading + current-affairs in one habit.", free: true, pillars: ["G-VA", "P-AW"], actions: ["VA-B1", "AW-B1", "AW-I1"] },
  // ---------- business awareness
  { id: "r-finshots", cat: "Business awareness", name: "Finshots", url: "https://finshots.in", desc: "One business/finance story explained simply, every day.", free: true, pillars: ["P-AW"], actions: ["AW-B1", "AW-B2"] },
  { id: "r-mint", cat: "Business awareness", name: "Mint", url: "https://www.livemint.com", desc: "Business and economy news.", free: true, pillars: ["P-AW"], actions: ["AW-B1", "AW-I1"] },
  { id: "r-et", cat: "Business awareness", name: "The Economic Times", url: "https://economictimes.indiatimes.com", desc: "Industry, markets and company news.", free: true, pillars: ["P-AW"], actions: ["AW-B1", "AW-B2"] },
  { id: "r-bs", cat: "Business awareness", name: "Business Standard", url: "https://www.business-standard.com", desc: "Economy, policy and industry coverage.", free: true, pillars: ["P-AW"], actions: ["AW-B2", "AW-I1"] },
  { id: "r-rbi", cat: "Business awareness", name: "RBI \u2014 press releases & policy", url: "https://www.rbi.org.in", desc: "Monetary policy, rates and data straight from the source.", free: true, pillars: ["P-AW"], actions: ["AW-I1"] },
  { id: "r-budget", cat: "Business awareness", name: "Union Budget (official)", url: "https://www.indiabudget.gov.in", desc: "Budget speech and key-to-budget documents.", free: true, pillars: ["P-AW"], actions: ["AW-I1", "AW-I2"] },
  // ---------- case competitions & contests
  { id: "r-unstop", cat: "Case comps & contests", name: "Unstop \u2014 competitions", url: "https://unstop.com/competitions", desc: "Case competitions, B-plans, quizzes and hackathons across colleges and companies.", free: true, pillars: ["P-EC", "P-LD", "P-AW"], actions: ["EC-I1", "EC-A1", "AW-A1"] },
  { id: "r-kaggle", cat: "Case comps & contests", name: "Kaggle competitions", url: "https://www.kaggle.com/competitions", desc: "Data-science competitions with public leaderboards.", free: true, pillars: ["P-EC", "P-AC"], actions: ["EC-I1", "AC-A1"] },
  { id: "r-devfolio", cat: "Case comps & contests", name: "Devfolio hackathons", url: "https://devfolio.co/hackathons", desc: "Student and open hackathons across India.", free: true, pillars: ["P-EC"], actions: ["EC-I1"] },
  { id: "r-sih", cat: "Case comps & contests", name: "Smart India Hackathon", url: "https://sih.gov.in", desc: "National hackathon on real ministry and industry problems.", free: true, pillars: ["P-EC", "P-LD"], actions: ["EC-I1", "EC-A1"] },
  // ---------- internships & live projects
  { id: "r-internshala", cat: "Internships & projects", name: "Internshala", url: "https://internshala.com", desc: "Internships, including remote and part-time.", free: true, pillars: ["P-WK"], actions: ["WK-B1"] },
  { id: "r-aicte", cat: "Internships & projects", name: "AICTE Internship Portal", url: "https://internship.aicte-india.org", desc: "Government and industry internships for students.", free: true, pillars: ["P-WK"], actions: ["WK-B1"] },
  { id: "r-unstopint", cat: "Internships & projects", name: "Unstop \u2014 internships", url: "https://unstop.com/internships", desc: "Internships and live projects from companies.", free: true, pillars: ["P-WK"], actions: ["WK-B1", "WK-A2"] },
  { id: "r-linkedin", cat: "Internships & projects", name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs", desc: "Internships, roles and a profile recruiters read.", free: true, pillars: ["P-WK"], actions: ["WK-B1", "WK-I2"] },
  { id: "r-upwork", cat: "Internships & projects", name: "Upwork (freelance)", url: "https://www.upwork.com", desc: "Paid freelance work with client reviews you can show.", free: true, pillars: ["P-WK"], actions: ["WK-A2"] },
  // ---------- certifications
  { id: "r-coursera", cat: "Certifications", name: "Coursera", url: "https://www.coursera.org", desc: "University courses in finance, marketing, analytics, strategy (financial aid available).", free: true, pillars: ["P-AC", "P-AW", "P-WK"], actions: ["AW-B2", "AC-A1"] },
  { id: "r-edx", cat: "Certifications", name: "edX", url: "https://www.edx.org", desc: "Courses from global universities; audit free.", free: true, pillars: ["P-AC", "P-AW"], actions: ["AW-B2"] },
  { id: "r-nptel", cat: "Certifications", name: "NPTEL (IIT/IISc courses)", url: "https://nptel.ac.in", desc: "Free IIT courses; proctored certificate exams for a small fee.", free: true, pillars: ["P-AC"], actions: ["AC-A1", "AC-B1"] },
  { id: "r-swayam", cat: "Certifications", name: "SWAYAM", url: "https://swayam.gov.in", desc: "Government MOOCs, many with credit transfer.", free: true, pillars: ["P-AC"], actions: ["AC-B1"] },
  { id: "r-skillshop", cat: "Certifications", name: "Google Skillshop", url: "https://skillshop.withgoogle.com", desc: "Free Google Analytics / Ads certifications.", free: true, pillars: ["P-WK", "P-EC"], actions: ["WK-B1"] },
  { id: "r-hubspot", cat: "Certifications", name: "HubSpot Academy", url: "https://academy.hubspot.com", desc: "Free marketing and sales certifications.", free: true, pillars: ["P-WK"], actions: ["WK-B1"] },
  { id: "r-mslearn", cat: "Certifications", name: "Microsoft Learn \u2014 Excel & Power BI", url: "https://learn.microsoft.com/training", desc: "Free data skills paths; certification exams optional.", free: true, pillars: ["P-WK"], actions: ["WK-I1", "WK-A1"] },
  { id: "r-cfi", cat: "Certifications", name: "Corporate Finance Institute", url: "https://corporatefinanceinstitute.com", desc: "Free finance & Excel fundamentals courses.", free: true, pillars: ["P-AW", "P-WK"], actions: ["AW-B2"] },
  { id: "r-nism", cat: "Certifications", name: "NISM certifications", url: "https://www.nism.ac.in", desc: "SEBI-recognised securities-market certifications.", free: false, pillars: ["P-AW"], actions: ["AW-B2"] },
  { id: "r-kagglelearn", cat: "Certifications", name: "Kaggle Learn", url: "https://www.kaggle.com/learn", desc: "Short free courses in Python, SQL and data analysis.", free: true, pillars: ["P-WK", "P-AC"], actions: ["AC-A1"] },
  // ---------- leadership, extracurriculars, social impact
  { id: "r-toast", cat: "Leadership & speaking", name: "Toastmasters International", url: "https://www.toastmasters.org", desc: "Public speaking and leadership roles in local clubs.", free: false, pillars: ["P-LD", "P-AW", "P-NR"], actions: ["LD-B1", "AW-A1", "NR-A1"] },
  { id: "r-tedx", cat: "Leadership & speaking", name: "Organise a TEDx event", url: "https://www.ted.com/participate/organize-a-local-tedx-event", desc: "Licence and guide to run a TEDx on campus or in your city.", free: true, pillars: ["P-LD", "P-EC"], actions: ["LD-A1", "LD-I1"] },
  { id: "r-enactus", cat: "Leadership & speaking", name: "Enactus", url: "https://enactus.org", desc: "Student social-entrepreneurship projects with competitions.", free: true, pillars: ["P-LD", "P-EC"], actions: ["LD-I1", "LD-A1"] },
  { id: "r-nss", cat: "Social impact", name: "National Service Scheme (NSS)", url: "https://nss.gov.in", desc: "Sustained community service through your college.", free: true, pillars: ["P-EC", "P-LD"], actions: ["EC-B1", "LD-B1"] },
  { id: "r-ivol", cat: "Social impact", name: "iVolunteer", url: "https://www.ivolunteer.in", desc: "Volunteering opportunities with NGOs (online and on-ground).", free: true, pillars: ["P-EC"], actions: ["EC-B1"] },
  { id: "r-mad", cat: "Social impact", name: "Make A Difference", url: "https://makeadiff.in", desc: "Long-term volunteering with children in shelters.", free: true, pillars: ["P-EC", "P-LD"], actions: ["EC-B1"] },
  { id: "r-tfi", cat: "Social impact", name: "Teach For India Fellowship", url: "https://www.teachforindia.org", desc: "Two-year teaching fellowship \u2014 a strong leadership story.", free: true, pillars: ["P-LD", "P-WK"], actions: ["LD-A1"] },
  // ---------- narrative, writing & interviews
  { id: "r-insideiim", cat: "Interviews & narrative", name: "InsideIIM", url: "https://insideiim.com", desc: "Student experiences, interview transcripts and school insights.", free: true, pillars: ["P-NR"], actions: ["NR-I1", "NR-I2", "NR-A1"] },
  { id: "r-yka", cat: "Interviews & narrative", name: "Youth Ki Awaaz (publish)", url: "https://www.youthkiawaaz.com", desc: "Publish your opinion pieces \u2014 a public writing record.", free: true, pillars: ["P-AW", "P-EC"], actions: ["AW-I1", "EC-A1"] },
  { id: "r-medium", cat: "Interviews & narrative", name: "Medium (blog)", url: "https://medium.com", desc: "Start a blog on your industry or interest.", free: true, pillars: ["P-AW", "P-NR"], actions: ["AW-I1", "NR-B1"] },
  { id: "r-scholar", cat: "Academics", name: "Google Scholar", url: "https://scholar.google.com", desc: "Find papers to anchor an academic project.", free: true, pillars: ["P-AC"], actions: ["AC-A1"] }
];

// src/assets.gen.js
var HTML = '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n<title>Profile Atlas \u2014 CAT profile mapping</title>\n<meta name="theme-color" content="#6C3BFF">\n<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Ccircle cx=\'12\' cy=\'12\' r=\'10\' fill=\'%236C3BFF\' stroke=\'%2317123A\' stroke-width=\'2\'/%3E%3Cpath d=\'M12 3 L15 12 L12 21 L9 12Z\' fill=\'%23FFC93C\' stroke=\'%2317123A\' stroke-width=\'1.6\'/%3E%3C/svg%3E">\n<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">\n<style>:root{--ink:#17123A;--ink2:#4B4670;--ink3:#8A85A8;--paper:#FFF7E8;--card:#FFFFFF;--line:#17123A;--violet:#6C3BFF;--violet-l:#EDE6FF;--coral:#FF5A5F;--coral-l:#FFE3E3;--yellow:#FFC93C;--yellow-l:#FFF1C7;--mint:#1FD1A5;--mint-l:#D5F8EE;--sky:#3BA9FF;--sky-l:#DCEFFF;--orange:#FF9F1C;--orange-l:#FFE9CC;--fog:#B8B3CC;--r:18px;--sh:4px 4px 0 var(--ink);--sh-s:2px 2px 0 var(--ink);--fd:"Bricolage Grotesque",system-ui,sans-serif;--fb:"DM Sans",system-ui,sans-serif;--fm:"Space Mono",ui-monospace,monospace}*{box-sizing:border-box}html,body{margin:0;background:var(--paper);color:var(--ink);font:15px/1.5 var(--fb);-webkit-font-smoothing:antialiased}body{background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'520\' height=\'520\' viewBox=\'0 0 520 520\'%3E%3Cg fill=\'none\' stroke=\'%2317123A\' stroke-opacity=\'.06\' stroke-width=\'1.2\'%3E%3Cpath d=\'M-20 120c80-60 160 40 260-10s180-70 300 0\'/%3E%3Cpath d=\'M-20 160c90-50 170 50 270 0s170-60 290 10\'/%3E%3Cpath d=\'M-20 200c100-40 180 60 280 10s160-50 280 20\'/%3E%3Cpath d=\'M-20 360c70 40 150-50 250 0s200 60 310-10\'/%3E%3Cpath d=\'M-20 400c80 30 160-60 260-10s190 70 300 0\'/%3E%3Cellipse cx=\'400\' cy=\'280\' rx=\'60\' ry=\'34\'/%3E%3Cellipse cx=\'400\' cy=\'280\' rx=\'96\' ry=\'58\'/%3E%3Cellipse cx=\'400\' cy=\'280\' rx=\'130\' ry=\'84\'/%3E%3Cellipse cx=\'110\' cy=\'290\' rx=\'40\' ry=\'22\'/%3E%3Cellipse cx=\'110\' cy=\'290\' rx=\'72\' ry=\'44\'/%3E%3C/g%3E%3C/svg%3E")}a{color:var(--violet)}h1,h2,h3,h4{font-family:var(--fd);margin:0;letter-spacing:-.02em;line-height:1.1}h1{font-size:clamp(34px,6vw,64px);font-weight:800}h2{font-size:26px;font-weight:800}h3{font-size:19px;font-weight:700}h4{font-size:15px;font-weight:700}p{margin:.4em 0}.mono{font-family:var(--fm)}.muted{color:var(--ink2)}.faint{color:var(--ink3)}.small{font-size:13px}.tiny{font-size:11.5px}.wrap{max-width:1180px;margin:0 auto;padding:0 18px}.row{display:flex;gap:12px;align-items:center;flex-wrap:wrap}.between{justify-content:space-between}.grid{display:grid;gap:16px}.g2{grid-template-columns:repeat(2,minmax(0,1fr))}.g3{grid-template-columns:repeat(3,minmax(0,1fr))}.g4{grid-template-columns:repeat(4,minmax(0,1fr))}.span2{grid-column:span 2}@media(max-width:900px){.g3,.g4{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:640px){.g2,.g3,.g4{grid-template-columns:1fr}.span2{grid-column:auto}}.stack>*+*{margin-top:12px}.gap8{gap:8px}.grow{flex:1}.card{background:var(--card);border:2.5px solid var(--line);border-radius:var(--r);box-shadow:var(--sh);padding:18px}.card.flat{box-shadow:none}.card.tint-v{background:var(--violet-l)}.card.tint-y{background:var(--yellow-l)}.card.tint-m{background:var(--mint-l)}.card.tint-c{background:var(--coral-l)}.card.tint-s{background:var(--sky-l)}.card.dark{background:var(--ink);color:#fff}.card.dark .muted{color:#c9c4e8}.btn{appearance:none;border:2.5px solid var(--ink);background:#fff;color:var(--ink);font:700 14.5px var(--fb);padding:9px 16px;border-radius:999px;cursor:pointer;box-shadow:var(--sh-s);transition:transform .08s,box-shadow .08s;display:inline-flex;align-items:center;gap:7px;text-decoration:none;white-space:nowrap}.btn:hover{transform:translate(-1px,-1px);box-shadow:3px 3px 0 var(--ink)}.btn:active{transform:translate(2px,2px);box-shadow:0 0 0 var(--ink)}.btn.pri{background:var(--violet);color:#fff}.btn.hot{background:var(--coral);color:#fff}.btn.sun{background:var(--yellow)}.btn.go{background:var(--mint)}.btn.sky{background:var(--sky);color:#fff}.btn.ghost{background:transparent;box-shadow:none;border-color:transparent;text-decoration:underline;padding:6px 8px}.btn.sm{padding:5px 11px;font-size:13px}.btn.lg{padding:14px 24px;font-size:17px}.btn[disabled]{opacity:.45;pointer-events:none}.chip{display:inline-flex;align-items:center;gap:6px;border:2px solid var(--ink);border-radius:999px;padding:3px 10px;font-weight:700;font-size:12.5px;background:#fff;white-space:nowrap}.chip.v{background:var(--violet);color:#fff}.chip.y{background:var(--yellow)}.chip.m{background:var(--mint)}.chip.c{background:var(--coral);color:#fff}.chip.s{background:var(--sky);color:#fff}.chip.o{background:var(--orange)}.chip.g{background:#eee}.chip.soft{border-width:1.5px;font-weight:600}.dot{width:10px;height:10px;border-radius:50%;display:inline-block;border:1.5px solid var(--ink)}label.f{display:block;font-weight:700;font-size:13px;margin-bottom:4px}.inp,select.inp,textarea.inp{width:100%;border:2.5px solid var(--ink);border-radius:12px;padding:10px 12px;font:15px var(--fb);background:#fff;color:var(--ink);outline:none}.inp:focus{box-shadow:0 0 0 4px var(--violet-l);border-color:var(--violet)}textarea.inp{min-height:84px;resize:vertical}.field{margin-bottom:12px}.err{background:var(--coral-l);border:2px solid var(--coral);border-radius:12px;padding:8px 12px;font-weight:600;margin:8px 0}.ok{background:var(--mint-l);border:2px solid var(--mint);border-radius:12px;padding:8px 12px;font-weight:600;margin:8px 0}.top{position:sticky;top:0;z-index:30;background:#fff7e8eb;backdrop-filter:blur(8px);border-bottom:2.5px solid var(--ink)}.top .wrap{display:flex;align-items:center;gap:14px;height:64px}.logo{display:flex;align-items:center;gap:9px;font:800 20px var(--fd);letter-spacing:-.02em;text-decoration:none;color:var(--ink);white-space:nowrap}.logo .mk{width:36px;height:36px;border-radius:11px;background:var(--violet);border:2.5px solid var(--ink);display:grid;place-items:center;box-shadow:var(--sh-s)}.nav{display:flex;gap:4px;overflow-x:auto;scrollbar-width:none;flex:1}.nav::-webkit-scrollbar{display:none}.nav a{padding:8px 13px;border-radius:999px;font-weight:700;text-decoration:none;color:var(--ink2);white-space:nowrap;border:2px solid transparent;font-size:14.5px}.nav a:hover{color:var(--ink);background:#fff}.nav a.on{background:var(--ink);color:#fff}.nav a .b{display:inline-grid;place-items:center;min-width:19px;height:19px;border-radius:99px;background:var(--coral);color:#fff;font-size:11px;margin-left:5px;padding:0 5px}.me{display:flex;align-items:center;gap:8px}.ava{width:36px;height:36px;border-radius:50%;border:2.5px solid var(--ink);display:grid;place-items:center;font-weight:800;background:var(--yellow);font-family:var(--fd)}@media(max-width:760px){.top .wrap{height:auto;flex-wrap:wrap;padding-top:8px;padding-bottom:8px}.nav{order:3;flex-basis:100%}.logo span.t{display:none}}main{padding:22px 0 80px}.pagehead{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-bottom:18px}.pagehead .kick{font:700 12px var(--fm);letter-spacing:.12em;text-transform:uppercase;color:var(--violet)}.stat{display:flex;flex-direction:column;gap:2px}.stat .n{font:800 34px var(--fd);letter-spacing:-.03em;line-height:1}.stat .l{font-size:12.5px;font-weight:700;color:var(--ink2);text-transform:uppercase;letter-spacing:.06em}.kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:14px}.kpi{border:2.5px solid var(--ink);border-radius:16px;padding:14px;background:#fff;box-shadow:var(--sh-s)}.bar{height:12px;border:2px solid var(--ink);border-radius:99px;background:#fff;overflow:hidden}.bar>i{display:block;height:100%;background:var(--violet);border-right:2px solid var(--ink)}.bar.thin{height:8px;border-width:1.5px}.atlas{width:100%;height:auto;display:block}.atlas .hex{cursor:pointer;transition:transform .15s}.atlas .hex:hover{transform:translateY(-4px)}.atlas .hex.sel polygon.face{stroke-width:5}.legend{display:flex;gap:12px;flex-wrap:wrap;font-size:12.5px;font-weight:700}.legend span{display:inline-flex;align-items:center;gap:6px}.legend i{width:14px;height:14px;border-radius:4px;border:2px solid var(--ink);display:inline-block}.hero{padding:46px 0 26px}.hero .lead{font-size:19px;max-width:620px;color:var(--ink2)}.hl{background:linear-gradient(transparent 58%,var(--yellow) 58%);padding:0 4px}.roles{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:28px}@media(max-width:860px){.roles{grid-template-columns:1fr}}.role{position:relative;overflow:hidden}.role .big{font-size:40px}.tabs{display:flex;gap:6px;background:#fff;border:2.5px solid var(--ink);border-radius:999px;padding:4px;width:max-content;max-width:100%;overflow:auto}.tabs button{border:0;background:transparent;font:700 13.5px var(--fb);padding:7px 14px;border-radius:999px;cursor:pointer;color:var(--ink2);white-space:nowrap}.tabs button.on{background:var(--ink);color:#fff}.wz-track{display:flex;gap:6px;align-items:center;overflow-x:auto;padding:6px 2px 10px;scrollbar-width:thin}.wz-pin{flex:0 0 auto;width:38px;height:38px;border-radius:50%;border:2.5px solid var(--ink);display:grid;place-items:center;font-weight:800;background:#fff;cursor:pointer;font-size:15px;position:relative}.wz-pin.done{background:var(--mint)}.wz-pin.cur{background:var(--violet);color:#fff;transform:scale(1.12);box-shadow:var(--sh-s)}.wz-line{flex:0 0 14px;height:3px;background:var(--ink);border-radius:3px;opacity:.25}.faces{display:grid;grid-template-columns:repeat(5,1fr);gap:10px}@media(max-width:560px){.faces{grid-template-columns:repeat(5,1fr);gap:5px}.face .lb{font-size:10.5px}}.face{border:2.5px solid var(--ink);border-radius:16px;background:#fff;padding:12px 6px;text-align:center;cursor:pointer;transition:transform .1s}.face:hover{transform:translateY(-2px)}.face .em{font-size:30px;display:block;line-height:1.1}.face .lb{font-weight:700;font-size:12.5px;display:block;margin-top:4px}.face.on{background:var(--yellow);box-shadow:var(--sh-s);transform:translateY(-3px)}.evs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}@media(max-width:640px){.evs{grid-template-columns:1fr}}.ev{display:flex;gap:10px;align-items:flex-start;border:2.5px solid var(--ink);border-radius:14px;padding:11px 12px;background:#fff;cursor:pointer;font-weight:600;font-size:14.2px;line-height:1.35;user-select:none;transition:background .12s}.ev .ck{flex:0 0 22px;height:22px;border-radius:7px;border:2.5px solid var(--ink);display:grid;place-items:center;font-size:13px;background:#fff;margin-top:1px}.ev.on{background:var(--mint-l)}.ev.on .ck{background:var(--mint)}.opt-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px}.opt{border:2.5px solid var(--ink);border-radius:14px;padding:12px;background:#fff;cursor:pointer;font-weight:700;text-align:left;font:700 14px var(--fb);color:var(--ink)}.opt small{display:block;font-weight:500;color:var(--ink2);margin-top:2px}.opt.on{background:var(--violet);color:#fff}.opt.on small{color:#e4dcff}.scorepill{display:inline-flex;align-items:center;gap:8px;border:2.5px solid var(--ink);border-radius:999px;padding:4px 14px 4px 6px;background:#fff;font-weight:800;box-shadow:var(--sh-s)}.scorepill b{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;border:2px solid var(--ink);font-family:var(--fd);font-size:15px}.quest{position:relative;display:flex;flex-direction:column;gap:8px}.quest .tag{position:absolute;top:-12px;right:14px}.ql,.qstatus{display:flex;gap:6px;flex-wrap:wrap}.qstatus button{border:2px solid var(--ink);border-radius:99px;padding:5px 12px;font:700 13px var(--fb);background:#fff;cursor:pointer}.qstatus button.on.todo{background:#eee}.qstatus button.on.doing{background:var(--sky);color:#fff}.qstatus button.on.done{background:var(--mint)}.qstatus button.on.blocked{background:var(--coral);color:#fff}.steps{counter-reset:s;display:flex;flex-direction:column;gap:10px}.step{display:flex;gap:12px;border:2.5px solid var(--ink);border-radius:14px;padding:12px;background:#fff;align-items:flex-start}.step.on{background:var(--mint-l)}.step .num{flex:0 0 34px;height:34px;border-radius:50%;border:2.5px solid var(--ink);display:grid;place-items:center;font:800 15px var(--fd);background:var(--yellow);cursor:pointer}.step.on .num{background:var(--mint)}.log{border-left:3px dashed var(--ink3);margin-left:8px;padding-left:16px}.log .it{position:relative;margin-bottom:12px}.log .it:before{content:"";position:absolute;left:-23px;top:4px;width:11px;height:11px;border-radius:50%;background:var(--violet);border:2px solid var(--ink)}.kan{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}@media(max-width:980px){.kan{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:560px){.kan{grid-template-columns:1fr}}.col{background:#ffffff8c;border:2.5px dashed var(--ink3);border-radius:18px;padding:10px;min-height:120px}.col h4{display:flex;justify-content:space-between;align-items:center;margin:2px 4px 10px}.qmini{background:#fff;border:2.5px solid var(--ink);border-radius:14px;padding:11px;margin-bottom:10px;cursor:pointer;box-shadow:var(--sh-s)}.qmini:hover{transform:translate(-1px,-1px)}.scrim{position:fixed;inset:0;background:#17123a8c;z-index:60;display:flex;align-items:flex-start;justify-content:center;overflow-y:auto;padding:4vh 12px}.modal{background:var(--paper);border:3px solid var(--ink);border-radius:22px;box-shadow:8px 8px 0 var(--ink);width:min(820px,100%);padding:22px;position:relative;animation:pop .18s ease-out}.modal.sm{width:min(480px,100%)}.modal .x{position:absolute;top:12px;right:12px}@keyframes pop{0%{transform:translateY(14px) scale(.98);opacity:0}}.toast{position:fixed;bottom:22px;left:50%;transform:translate(-50%);background:var(--ink);color:#fff;border-radius:999px;padding:11px 20px;font-weight:700;z-index:90;box-shadow:4px 4px 0 var(--violet);animation:pop .2s}.tbl{width:100%;border-collapse:separate;border-spacing:0;font-size:14px}.tbl th{text-align:left;font:700 11.5px var(--fm);text-transform:uppercase;letter-spacing:.06em;color:var(--ink2);padding:8px 10px;border-bottom:2.5px solid var(--ink);white-space:nowrap;position:sticky;top:0;background:#fff}.tbl td{padding:9px 10px;border-bottom:1.5px solid #E8E4F5;vertical-align:middle}.tbl tr.click{cursor:pointer}.tbl tr.click:hover td{background:var(--violet-l)}.tscroll{overflow:auto;max-height:70vh;border:2.5px solid var(--ink);border-radius:16px;background:#fff}.heat{display:inline-grid;place-items:center;width:34px;height:26px;border-radius:7px;font:700 12px var(--fm);border:1.5px solid rgba(23,18,58,.25)}.alert{display:flex;gap:12px;align-items:flex-start;border:2.5px solid var(--ink);border-radius:16px;padding:12px 14px;background:#fff}.alert.u3{background:var(--coral-l)}.alert.u2{background:var(--yellow-l)}.alert.u1{background:var(--sky-l)}.alert .ic{flex:0 0 38px;height:38px;border-radius:12px;border:2.5px solid var(--ink);display:grid;place-items:center;font-size:19px;background:#fff}.slot{border:2.5px solid var(--ink);border-radius:12px;padding:8px 12px;background:#fff;cursor:pointer;font-weight:700;font-size:14px}.slot:hover{background:var(--yellow)}.res{display:flex;flex-direction:column;gap:6px;text-decoration:none;color:var(--ink);transition:transform .1s}.res:hover{transform:translate(-2px,-2px);box-shadow:6px 6px 0 var(--ink)}.res .dom{font:700 11.5px var(--fm);color:var(--violet)}.reslink{display:flex;gap:10px;align-items:center;border:2px solid var(--ink);border-radius:12px;padding:8px 12px;background:#fff;text-decoration:none;color:var(--ink);font-weight:700;font-size:14px}.reslink:hover{background:var(--yellow-l)}.reslink .arr{margin-left:auto;font-family:var(--fm)}.empty{text-align:center;padding:30px 16px;color:var(--ink2)}.empty .big{font-size:42px}.sec-title{display:flex;align-items:center;gap:10px;margin:26px 0 12px}.sec-title h3{font-size:21px}.sec-title .ln{flex:1;height:2.5px;background:var(--ink);opacity:.15;border-radius:2px}.check{display:flex;gap:12px;align-items:center;padding:10px 0;border-bottom:1.5px dashed #DDD8EE}.check:last-child{border-bottom:0}.check .bx{flex:0 0 28px;height:28px;border-radius:9px;border:2.5px solid var(--ink);display:grid;place-items:center;background:#fff;font-weight:800}.check.on .bx{background:var(--mint)}.check.on .t{text-decoration:line-through;color:var(--ink3)}.ring{position:relative;display:grid;place-items:center}.ring .c{position:absolute;text-align:center;line-height:1}.mood{display:flex;gap:8px}.mood button{font-size:26px;border:2.5px solid var(--ink);background:#fff;border-radius:14px;width:52px;height:52px;cursor:pointer}.mood button.on{background:var(--yellow);transform:translateY(-3px);box-shadow:var(--sh-s)}.banner{display:flex;gap:16px;align-items:center;flex-wrap:wrap}.pulse{animation:pulse 1.6s infinite}@keyframes pulse{50%{box-shadow:0 0 0 7px #ff5a5f40,var(--sh)}}.hide{display:none!important}.lv-critical{background:var(--coral);color:#fff}.lv-gap{background:var(--orange)}.lv-developing{background:var(--sky);color:#fff}.lv-strong{background:var(--mint)}.lv-fog{background:#e7e4f0;color:var(--ink2)}.pbar{display:grid;grid-template-columns:26px 120px 1fr 44px;gap:10px;align-items:center;padding:6px 0;font-weight:700;font-size:14px;cursor:pointer}.pbar .bar{height:14px}@media(max-width:520px){.pbar{grid-template-columns:24px 90px 1fr 40px;font-size:13px}}.spark{display:block}.footer{padding:30px 0;color:var(--ink3);font-size:13px;text-align:center}.kbd{font:700 12px var(--fm);border:1.5px solid var(--ink);border-radius:6px;padding:1px 6px;background:#fff}.scrollx{overflow-x:auto;-webkit-overflow-scrolling:touch}.banner .grow{min-width:220px}@media(max-width:640px){svg.atlas{min-width:600px}svg.route{min-width:640px}.pagehead h2{font-size:28px!important}}\n</style>\n</head>\n<body>\n<div id="app"><div style="display:grid;place-items:center;height:80vh;font:700 18px system-ui;color:#4B4670">Unfolding the map\u2026</div></div>\n<script>(()=>{var Q={PILLARS:[{id:"G-QA",sec:"QA",name:"Quantitative Aptitude",w:30,fam:"gate",dur:!1,tests:"Arithmetic, algebra, geometry, number properties \\u2014 done fast and clean under a section clock. Not depth of maths; speed, accuracy and knowing which question to leave.",claim:"Your most honest read of where QA stands",claimEg:"e.g. arithmetic is solid, geometry is shaky, I attempt 18 and get 12 right",probe:[{id:"q1",q:"Which two QA topics cost you the most marks right now, and what have you actually done about them this month?",ph:"Name the topics. \'Everything\' is not an answer a plan can use."},{id:"q2",q:"In your last timed QA section, how many did you attempt, how many were right, and how many were silly errors?",ph:"Attempts, accuracy, careless mistakes. If you don\'t know, that is the first thing to fix."}],self:"How ready is your QA for a timed section today?",ev:[{id:"a",t:"I\'ve finished the core concepts across arithmetic, algebra and geometry",w:16},{id:"b",t:"My mental math and calculation speed are reliable under time",w:12},{id:"c",t:"I keep a written error log and review it",w:14},{id:"d",t:"I\'ve done topic-wise timed practice, not just untimed sums",w:14},{id:"e",t:"My last mock QA percentile was 85 or higher",w:16},{id:"f",t:"I can spot and skip a time-trap question without finishing it",w:12},{id:"g",t:"I\'ve drilled the topics I\'m weak at, not just the ones I enjoy",w:10},{id:"h",t:"My accuracy in QA is above 80% of what I attempt",w:14}],sp:["Which QA topic would you refuse to attempt on exam day, and why?","Walk me through how you decide, in 20 seconds, whether to attempt a question.","What changed in your QA between your first mock and your last?"]},{id:"G-VA",sec:"VARC",name:"Verbal & Reading Comprehension",w:30,fam:"gate",dur:!1,tests:"Reading dense, unfamiliar prose fast and answering RC without falling for the trap option \\u2014 plus para-jumbles, summary and odd-one-out. Built on a reading habit, not tricks.",claim:"Where VARC actually stands for you",claimEg:"e.g. I read fast but overthink RC options, verbal ability section is my strength",probe:[{id:"q1",q:"How much dense non-fiction do you read a day that is not exam material, and for how long?",ph:"Editorials, long-form, essays. Minutes per day, honestly."},{id:"q2",q:"When you get RC wrong, is it comprehension or option-elimination? How do you know?",ph:"Look at your last RC set. Which stage failed?"}],self:"How ready is your VARC for a timed section today?",ev:[{id:"a",t:"I read dense non-fiction most days, outside prep",w:14},{id:"b",t:"I can finish a long RC passage and its questions inside the time budget",w:14},{id:"c",t:"I have a repeatable method for eliminating RC trap options",w:16},{id:"d",t:"Para-jumbles, summary and odd-sentence are reliable for me",w:12},{id:"e",t:"My last mock VARC percentile was 85 or higher",w:16},{id:"f",t:"I review why each wrong option was wrong, not just the right one",w:14},{id:"g",t:"I can hold my accuracy without slowing to a crawl",w:10},{id:"h",t:"I read across unfamiliar subjects \\u2014 science, philosophy, economics",w:10}],sp:["Summarise the last thing you read in one sentence.","When two RC options both look right, how do you choose?","What kind of passage throws you, and what do you do about it?"]},{id:"G-DI",sec:"DILR",name:"Data Interpretation & Logical Reasoning",w:28,fam:"gate",dur:!1,tests:"Reading a set fast, judging in 60 seconds whether it is solvable, and cracking it cleanly. The most swingy section \\u2014 set selection matters as much as ability.",claim:"Where DILR stands for you",claimEg:"e.g. I can solve most sets but I pick the wrong ones and run out of time",probe:[{id:"q1",q:"How do you decide which set to attempt first, and how long do you give a set before abandoning it?",ph:"Your actual rule. If you don\'t have one, that is the gap."},{id:"q2",q:"Which set types do you avoid, and have you deliberately practised them?",ph:"Games, tournaments, networks, Venn, arrangements \\u2014 name the ones that scare you."}],self:"How ready is your DILR for a timed section today?",ev:[{id:"a",t:"I practise DILR sets daily or near-daily",w:14},{id:"b",t:"I can judge in about a minute whether a set is worth attempting",w:16},{id:"c",t:"I have a set-selection strategy I actually follow in mocks",w:16},{id:"d",t:"I\'ve drilled the set types I find hard, not only the easy ones",w:14},{id:"e",t:"My last mock DILR percentile was 85 or higher",w:16},{id:"f",t:"I keep accuracy high on the sets I choose to attempt",w:12},{id:"g",t:"I don\'t panic and switch sets halfway through",w:12}],sp:["You have four sets and time for two. How do you choose?","Tell me about a set you abandoned correctly, and one you should have.","Which set type have you improved most on, and how?"]},{id:"G-MK",sec:"MOCK",name:"Test Craft & Mock Analysis",w:12,fam:"gate",dur:!0,tests:"The meta-skill that turns section ability into a score: taking full proctored mocks on schedule, then spending real time dissecting each one. The single biggest score mover most people neglect.",claim:"Your current mock and analysis habit, honestly",claimEg:"e.g. I take a mock a week but barely analyse them, or I hoard mocks and never sit a full one",probe:[{id:"q1",q:"After your last full mock, how long did you spend analysing it, and what did you write down?",ph:"Minutes, and what the analysis actually produced. \'I checked the score\' is not analysis."},{id:"q2",q:"Do you take mocks in one sitting, timed, in exam conditions \\u2014 or in pieces?",ph:"Be honest. A mock taken in fragments teaches you very little about your temperament."}],self:"How disciplined is your mock and analysis routine?",ev:[{id:"a",t:"I take full-length proctored mocks in one timed sitting",w:16},{id:"b",t:"I spend at least 90 minutes analysing each mock",w:18},{id:"c",t:"I log every mistake by type \\u2014 concept, careless, selection, time",w:16},{id:"d",t:"My mock frequency is rising as the exam gets closer",w:10},{id:"e",t:"I\'ve stopped repeating the same category of mistake across mocks",w:14},{id:"f",t:"I track attempts, accuracy and time per section, not just percentile",w:12},{id:"g",t:"I\'ve built a personal time-and-selection strategy from my own data",w:14}],hab:!0,sp:["What did your last mock analysis change in how you take the next one?","Which mistake type shows up again and again in your log?","What is your section-by-section time plan for exam day, and where did it come from?"]},{id:"P-AC",name:"Academic Record",w:18,fam:"prof",dur:!1,frozen:!0,tests:"Tenth, twelfth and your degree. Most of this is frozen \\u2014 a panel reads it as it is. What is live is a degree still in progress, academic diversity, and the honest story behind any dip.",claim:"The academic fact you would put forward first",claimEg:"e.g. 92% in twelfth, or a 9.1 CGPA in engineering, or gold medal in my department",probe:[{id:"q1",q:"Where is the weakest number in your record \\u2014 tenth, twelfth or degree \\u2014 and what is the honest, non-defensive reason?",ph:"A dip you own reads better than one you dodge. No excuses; a reason and what you did next."},{id:"q2",q:"What have you done academically that isn\'t just marks \\u2014 a paper, a project, a subject you went deep on?",ph:""}],self:"How strong is your academic record for a top-school panel?",ev:[{id:"a",t:"Tenth board at 85% or above",w:12},{id:"b",t:"Twelfth board at 85% or above",w:12},{id:"c",t:"Degree CGPA strong for my course (roughly top quarter)",w:16},{id:"d",t:"My record is consistent \\u2014 no unexplained dip or gap",w:10},{id:"e",t:"A quantitative or analytical degree, or strong maths background",w:10},{id:"f",t:"A merit rank, medal, scholarship or dean\'s list",w:14},{id:"g",t:"A real academic project, paper or thesis with a result",w:16},{id:"h",t:"Non-engineering background (academic diversity at many schools)",w:6}],sp:["Your twelfth marks dipped. What happened, and what did you learn?","Why should a management school care about your degree marks?","Tell me about the one academic project you\'re proud of."]},{id:"P-WK",name:"Work Experience & Internships",w:22,fam:"prof",dur:!0,tests:"Not months on a payroll \\u2014 a story of responsibility and measurable impact. For a professional this is your biggest asset. For a student, a documented internship or live project is how you build it.",claim:"The work or internship achievement you\'d lead with",claimEg:"e.g. cut process time 30% in my ops role, or ran a 40-store field survey as an intern",probe:[{id:"q1",q:"State one thing you changed at work or in an internship, with a number attached \\u2014 money, time, users, or scale.",ph:"A number a panel can test. \'Helped the team\' is invisible; \'30% faster\' is not."},{id:"q2",q:"Why do you want an MBA now instead of continuing on your current track?",ph:"The single most-asked question of anyone with work experience. Have a real answer."}],self:"How strong is your professional or internship story?",ev:[{id:"a",t:"I have full-time work experience, or a substantial internship",w:14},{id:"b",t:"I can point to a result I own, with a number attached",w:18},{id:"c",t:"I\'ve led or coordinated people, or owned a workstream end to end",w:14},{id:"d",t:"I have a promotion, rating or written recognition on record",w:12},{id:"e",t:"My work connects logically to why I want an MBA",w:14},{id:"f",t:"I\'ve worked with data, customers or money directly",w:12},{id:"g",t:"A documented live project or freelance work with an outcome",w:12},{id:"h",t:"I can explain what my organisation does and how it makes money",w:8}],sp:["Tell me the one thing you\'re proudest of at work, and how you measured it.","What did your last appraisal say you needed to improve?","If your manager were here, what would they say you\'re not good at?"]},{id:"P-LD",name:"Leadership & Responsibility",w:16,fam:"prof",dur:!0,tests:"Positions of responsibility, but read as decisions and outcomes, not titles. One thing that would not exist if you had not run it.",claim:"The role or initiative you\'d bring up in an interview",claimEg:"e.g. placement coordinator, ran the college fest, captained a team of 20",probe:[{id:"q1",q:"What was the hardest call you made in that role, who was unhappy, and how did it turn out?",ph:"Panels ask this exactly. The decision, the trade-off, the consequence."},{id:"q2",q:"What would not have happened if you had not been there?",ph:""}],self:"How much real responsibility have you carried?",ev:[{id:"a",t:"I\'ve held a formal position \\u2014 club, committee, team, society",w:12},{id:"b",t:"I started something that didn\'t exist before me",w:16},{id:"c",t:"I\'ve coordinated 10+ people toward a deadline",w:14},{id:"d",t:"I made a decision that some people disagreed with, and stood by it",w:14},{id:"e",t:"There\'s a measurable outcome \\u2014 footfall, money raised, people served",w:16},{id:"f",t:"I handled a conflict or a failure inside the role",w:12},{id:"g",t:"I held the role for a sustained period, not a one-off event",w:10},{id:"h",t:"Someone would vouch for what I did, by name",w:6}],sp:["Tell me about a time your team pushed back on you.","What did you do when the initiative was failing?","Who did the actual work, and what did you do?"]},{id:"P-EC",name:"Extracurriculars & Achievements",w:12,fam:"prof",dur:!0,tests:"Sport, arts, competitions, a sustained interest pursued to a real level. Depth in one thing beats a list of certificates that end in a PDF and nothing else.",claim:"The activity or achievement you\'d put on the form",claimEg:"e.g. state-level chess, a published poem, a case-comp win, five years of classical dance",probe:[{id:"q1",q:"What have you stuck with for years, and what did the discipline of it teach you?",ph:"Longevity is the signal. A hobby of three weeks is not this."},{id:"q2",q:"What\'s the highest level you competed or performed at, and what did it cost you?",ph:""}],self:"How real is your extracurricular depth?",ev:[{id:"a",t:"I\'ve pursued one activity seriously for years",w:14},{id:"b",t:"I\'ve competed or performed beyond my own campus",w:14},{id:"c",t:"I\'ve won or placed at district level or above",w:16},{id:"d",t:"A case competition, hackathon or B-plan result",w:14},{id:"e",t:"An achievement with an external record \\u2014 a rank, a publication, a certificate that means something",w:12},{id:"f",t:"A genuine interest I can talk about for ten minutes with a stranger",w:12},{id:"g",t:"Volunteering or social work I sustained, not a one-day drive",w:10},{id:"h",t:"An interest that isn\'t on everyone else\'s form",w:8}],sp:["Everyone lists this. Why should I believe yours is real?","What\'s the last thing this taught you?","How do you find time for it alongside everything else?"]},{id:"P-AW",name:"Business Awareness & Current Affairs",w:16,fam:"prof",dur:!0,tests:"The raw material of WAT, GD and PI: a news habit, one industry known properly, a working grasp of the economy, and a view of your own on the things in the headlines.",claim:"The business or industry you know best",claimEg:"e.g. quick commerce unit economics, the semiconductor supply chain, Indian banking",probe:[{id:"q1",q:"Take one industry and explain how the money moves \\u2014 where revenue comes from and where it goes.",ph:"Revenue lines, main costs, what\'s left. Approximate numbers are fine; vagueness is not."},{id:"q2",q:"Pick a story in the news this week and give me your own view, not the newspaper\'s.",ph:""}],self:"How ready are you for WAT, GD and a current-affairs grilling?",ev:[{id:"a",t:"I read business and general news most days",w:14},{id:"b",t:"I know one industry\'s top players and how each makes money",w:16},{id:"c",t:"I understand the unit economics of at least one business",w:14},{id:"d",t:"I follow the economy \\u2014 inflation, rates, budget, key indicators",w:12},{id:"e",t:"I can hold a position in a group discussion without going quiet",w:14},{id:"f",t:"I\'ve practised timed written arguments (WAT-style)",w:12},{id:"g",t:"I form my own view on issues rather than repeating headlines",w:12},{id:"h",t:"I track 15+ current topics with a note on each",w:12}],sp:["Argue the opposite side of the last topic you mentioned.","What\'s the biggest cost line for that industry?","What economic number worries you most right now, and why?"]},{id:"P-NR",name:"Narrative \\u2014 Why MBA & Goals",w:16,fam:"prof",dur:!1,tests:"The spine that ties the whole profile together: why an MBA, why now, where it takes you, and a story that connects your past to that future without sounding rehearsed.",claim:"Your one-line answer to why an MBA",claimEg:"e.g. to move from execution to running a business, with a path through consulting",probe:[{id:"q1",q:"Where do you want to be in five years, specifically \\u2014 role, sector, kind of problem \\u2014 and how does an MBA get you there?",ph:"Specific. \'A leadership role\' is what everyone says and no one believes."},{id:"q2",q:"What\'s the honest, personal reason underneath the professional one?",ph:"Panels can smell a rehearsed answer. The real reason is usually more convincing."}],self:"How clear and defensible is your why-MBA story?",ev:[{id:"a",t:"I can say why I want an MBA in one honest sentence",w:14},{id:"b",t:"I have a specific 3-to-5 year goal, not a vague one",w:16},{id:"c",t:"My past, present and goal connect into one story",w:16},{id:"d",t:"I can explain why now, rather than later",w:12},{id:"e",t:"I\'ve written my answers to the standard PI questions",w:14},{id:"f",t:"I\'ve done at least one mock interview and acted on the feedback",w:14},{id:"g",t:"I have a real answer to \'what\'s your biggest weakness\'",w:8},{id:"h",t:"My reasons hold up when someone pushes back on them",w:6}],sp:["Why not just keep doing what you\'re doing?","In five years, what specifically is different because you did an MBA?","Convince me you won\'t change your mind about all this in six months."]}],ACTIONS:[{id:"QA-B1",p:"G-QA",l:"B",t:"Rebuild the arithmetic core",why:"Percentages, ratios, time-speed-distance and averages sit under half of QA. Fix these and a chunk of the section stops being scary.",fs:"Pick percentages. Do 15 questions untimed today and write down which sub-type tripped you.",wh:3.5,mw:5,per:"X",cost:"free",tier:1,art:"A topic tracker with accuracy per sub-topic",lev:4,pq:["Which arithmetic sub-type is still shaky?","How do you convert a fraction to a percentage in your head?","What\'s your reliable method for ratio problems?"]},{id:"QA-B2",p:"G-QA",l:"B",t:"Daily mental-math drill",why:"Speed is trainable. Tables, squares, cubes and fraction-percent conversions done daily free up seconds you spend elsewhere.",fs:"Learn squares to 30 and fraction-to-percent for 1/n up to 12. Test yourself in 20 minutes.",wh:2,mw:6,per:"X",cost:"free",tier:1,art:"A speed log of timed 20-question sets",lev:3,hab:!0,pq:["What\'s 1/7 as a percentage, fast?","How much has your calculation speed improved this month?","Where do you still reach for a calculator you shouldn\'t?"]},{id:"QA-I1",p:"G-QA",l:"I",t:"Topic-wise timed practice with an error log",why:"Untimed practice hides the real problem. Timed sets plus a written error log is where QA scores actually move.",fs:"Do one 20-minute timed topic set today, then log every wrong answer as concept / careless / time.",wh:4,mw:6,per:"X",cost:"free",tier:1,art:"An error log sorted by mistake type",lev:5,pq:["What\'s the most common mistake type in your log?","Which topic has the worst accuracy-to-time ratio?","What did last week\'s log change this week?"]},{id:"QA-I2",p:"G-QA",l:"I",t:"Attack your two weakest topics",why:"Most people practise what they enjoy. The score is trapped in the two topics you avoid.",fs:"Name your two worst QA topics right now. Book both into this week\'s sessions before anything you\'re already good at.",wh:3,mw:5,per:"X",cost:"free",tier:1,art:"Before/after accuracy on the two weak topics",lev:4,pq:["Which two topics did you avoid, and why?","How much did accuracy move after deliberate practice?","What\'s the next weakest topic after these two?"]},{id:"QA-A1",p:"G-QA",l:"A",t:"High-difficulty sets and timed QA sections",why:"Once fundamentals hold, difficulty and pace are the last mile to a 95+ section. Timed full sections build the stamina.",fs:"Sit one full timed QA section today at exam length and note where your accuracy fell off a cliff.",wh:4,mw:6,per:"X",cost:"free",tier:1,art:"Section-level attempt/accuracy/time data",lev:4,pq:["At what point in a section does your accuracy drop?","Which hard topic can you now attempt that you couldn\'t?","What\'s your target attempt-count for the QA section?"]},{id:"QA-P1",p:"G-QA",l:"I",t:"A structured QA question bank or test series",why:"A good paid bank gives graded difficulty and solutions you\'d otherwise spend hours assembling. Useful, never required.",fs:"If you take one, do a single graded set and check the solution quality before committing time.",wh:4,mw:6,per:"X",cost:"paid",tier:1,art:"Graded practice history",lev:3,pq:["Is the paid bank actually better than free sets you\'ve tried?","Which difficulty tier are you stuck at?","Are you using the solutions to learn or just to check?"]},{id:"VA-B1",p:"G-VA",l:"B",t:"A daily dense-reading habit",why:"VARC is a reading test wearing an exam costume. Thirty minutes a day of hard non-fiction does more than any RC \'trick\'.",fs:"Read one long editorial or essay today and write its argument in one sentence.",wh:3.5,mw:8,per:"X",cost:"free",tier:1,art:"A reading log with one-line summaries",lev:5,hab:!0,pq:["What did you read today, and what was its core claim?","How has your reading speed changed?","What subject do you now read that you used to avoid?"]},{id:"VA-B2",p:"G-VA",l:"B",t:"Build a repeatable RC method",why:"Random RC accuracy comes from a random approach. A fixed method \\u2014 map the structure, then answer \\u2014 makes it consistent.",fs:"Take one RC passage, mark the shift in each paragraph, then answer. Notice if mapping first helped.",wh:3,mw:5,per:"X",cost:"free",tier:1,art:"A written RC approach you actually follow",lev:4,pq:["What\'s your step-by-step RC method?","Where does your method still break down?","How do you handle a passage on a subject you dislike?"]},{id:"VA-I1",p:"G-VA",l:"I",t:"Timed RC with a wrong-option post-mortem",why:"Reviewing why the wrong option was wrong \\u2014 not just why the right one was right \\u2014 is where RC accuracy is won.",fs:"Do two timed RC sets, then for each miss write one line on what made the trap option tempting.",wh:4,mw:6,per:"X",cost:"free",tier:1,art:"A trap-option log",lev:5,pq:["What kind of trap option catches you most?","Is your problem comprehension or elimination?","How do you decide between two plausible options?"]},{id:"VA-I2",p:"G-VA",l:"I",t:"Drill para-jumbles, summary and odd-one-out",why:"The non-RC verbal questions are pure marks if you make them reliable, and pure risk if you don\'t.",fs:"Do 10 para-jumbles today and note the logic you used to fix the opening sentence.",wh:2.5,mw:4,per:"X",cost:"free",tier:1,art:"Accuracy record on each question type",lev:3,pq:["What\'s your method for finding the opening sentence?","Which of these three types is weakest for you?","How reliable are you on summary questions now?"]},{id:"VA-A1",p:"G-VA",l:"A",t:"Read wide, then sit full timed VARC sections",why:"A 95+ VARC comes from comfort with unfamiliar, abstract prose plus section-length stamina. Both are trainable.",fs:"Read one philosophy or hard-science essay today, then plan a full timed VARC section this week.",wh:4,mw:6,per:"X",cost:"free",tier:1,art:"Full-section VARC performance data",lev:4,pq:["What kind of passage still throws you?","How do you keep accuracy across a full section?","What\'s your target VARC attempt count?"]},{id:"DI-B1",p:"G-DI",l:"B",t:"Two DILR sets a day, every day",why:"DILR is a pattern-recognition muscle. Daily reps are the only thing that reliably builds it.",fs:"Solve two sets today, untimed, and write what type each was.",wh:3.5,mw:8,per:"X",cost:"free",tier:1,art:"A set-type log with solve times",lev:5,hab:!0,pq:["Which set types have you seen most this week?","What\'s your solve time trending toward?","Which type still feels unfamiliar?"]},{id:"DI-B2",p:"G-DI",l:"B",t:"Learn to judge a set in 60 seconds",why:"Half of DILR is choosing right. Reading a set and deciding fast whether it\'s solvable saves the section.",fs:"Look at three sets today and, before solving, rate each easy/medium/skip. Then check if you were right.",wh:2.5,mw:4,per:"X",cost:"free",tier:1,art:"A judgement-accuracy record",lev:4,pq:["How do you tell a solvable set from a trap fast?","When were you wrong about a set\'s difficulty?","What signals make you skip a set now?"]},{id:"DI-I1",p:"G-DI",l:"I",t:"Build a set-selection strategy and follow it",why:"Ability without selection strategy still scores badly. A rule you follow under pressure is the fix.",fs:"Write your rule: how many sets you scan, how long before you abandon one. Test it in the next mock.",wh:3.5,mw:6,per:"X",cost:"free",tier:1,art:"A written, tested selection rule",lev:5,pq:["What\'s your set-selection rule, exactly?","How long do you give a set before abandoning it?","When did the rule save you, and when did it fail?"]},{id:"DI-I2",p:"G-DI",l:"I",t:"Drill the set types you avoid",why:"The scary types \\u2014 games, tournaments, networks \\u2014 show up in mocks precisely because people skip practising them.",fs:"Pick the type you dread most and do three of them today, slowly, until the structure clicks.",wh:3,mw:5,per:"X",cost:"free",tier:1,art:"Before/after solve rate on hard types",lev:4,pq:["Which set type did you avoid, and can you do it now?","What made it click?","What\'s the next type to attack?"]},{id:"DI-A1",p:"G-DI",l:"A",t:"Novel set types and timed DILR sections",why:"CAT\'s DILR rewards adaptability to sets you\'ve never seen. Exposure plus timed sections builds nerve.",fs:"Find an unusual set format today, solve it without help, and time yourself on a full section this week.",wh:4,mw:6,per:"X",cost:"free",tier:1,art:"Full-section DILR data across set types",lev:4,pq:["How do you approach a set format you\'ve never seen?","What\'s your accuracy on the sets you choose?","What\'s your target: how many sets, how many questions?"]},{id:"MK-B1",p:"G-MK",l:"B",t:"Sit your first full mock, one timed sitting",why:"Until you take a full mock in exam conditions, you\'re guessing at your own stamina and temperament.",fs:"Block three hours this week, phone away, and take one full proctored mock start to finish.",wh:3,mw:2,per:"X",cost:"free",tier:1,art:"Your first honest baseline percentile",lev:4,pq:["What surprised you about taking a full mock?","Where did your energy or focus drop?","What\'s your baseline, and how do you feel about it?"]},{id:"MK-I1",p:"G-MK",l:"I",t:"The 90-minute analysis ritual",why:"This is the single biggest score mover most people skip. The mock isn\'t the lesson \\u2014 the analysis is.",fs:"Take your last mock and spend 90 minutes today logging every mistake by type: concept, careless, selection, time.",wh:3,mw:6,per:"X",cost:"free",tier:1,art:"A per-mock error log by mistake type",lev:5,hab:!0,pq:["What does your error log say you keep getting wrong?","Which mistake type is most fixable fastest?","What did analysis change in your next attempt?"]},{id:"MK-I2",p:"G-MK",l:"I",t:"Ramp mock frequency toward the exam",why:"One mock a fortnight early, two or three a week near the end. The ramp builds exam-day endurance.",fs:"Put your mock dates on a calendar now, increasing as the exam nears, and protect them like appointments.",wh:4,mw:6,per:"X",cost:"free",tier:1,art:"A mock calendar with a rising curve",lev:4,pq:["What\'s your mock schedule for the final eight weeks?","Are you analysing each one before taking the next?","How\'s your stamina holding across back-to-back mocks?"]},{id:"MK-A1",p:"G-MK",l:"A",t:"Build your personal exam-day strategy from your data",why:"The best time-and-selection plan is the one your own mocks prove works for you \\u2014 not a generic one.",fs:"From your last five mocks, write your section order, time splits and skip rules. Test them next mock.",wh:2.5,mw:5,per:"X",cost:"free",tier:1,art:"A one-page personal exam-day playbook",lev:5,pq:["What\'s your section order and why?","Where does your data say you leave marks on the table?","What\'s your rule when a section starts going badly?"]},{id:"MK-P1",p:"G-MK",l:"I",t:"A quality mock test series",why:"If you buy one paid thing, a good mock series is usually it \\u2014 realistic difficulty and percentile calibration. Still optional.",fs:"Take one mock from any series and check whether its difficulty and analytics feel exam-realistic.",wh:4,mw:6,per:"X",cost:"paid",tier:1,art:"A calibrated percentile trend across mocks",lev:4,pq:["Does the series\' difficulty match the real exam?","Are the analytics telling you something free mocks didn\'t?","Is your percentile trend rising across the series?"]},{id:"AC-B1",p:"P-AC",l:"B",t:"Protect and lift your degree CGPA",why:"If you\'re still studying, the one academic number you can still move is your degree CGPA. Don\'t let prep tank it.",fs:"Check your current CGPA and the marks you need this semester to hold or lift it. Write the target down.",wh:2,mw:8,per:"S",cost:"free",tier:1,art:"A rising or protected CGPA",lev:3,pq:["What\'s your CGPA target this semester, and is it realistic?","How are you balancing coursework with prep?","Which subject is the risk to your CGPA?"]},{id:"AC-I1",p:"P-AC",l:"I",t:"Prepare the honest answer for your weakest number",why:"You can\'t change a past mark, but you can decide how it\'s read. A calm, owned explanation defuses it.",fs:"Write, in four sentences, what happened around your weakest academic number and what you did afterwards.",wh:1,mw:2,per:"X",cost:"free",tier:1,art:"A rehearsed, non-defensive explanation",lev:4,pq:["Why did that number dip?","What did you change afterwards?","Why should that not worry a panel about you now?"]},{id:"AC-A1",p:"P-AC",l:"A",t:"Do a real academic project with a result",why:"A paper, thesis or serious project is academic evidence that isn\'t a mark \\u2014 and it\'s something to actually talk about.",fs:"Pick a question in your field you find genuinely interesting and draft a one-paragraph project scope today.",wh:3,mw:10,per:"S",cost:"free",tier:1,art:"A completed project, paper or documented result",lev:3,pq:["What question did your project answer?","What was hard about it, and what did you find?","What would you do differently with more time?"]},{id:"WK-B1",p:"P-WK",l:"B",t:"Land a documented internship or live project",why:"For a student, one real internship with an outcome is worth more than a page of coursework. It becomes your work story.",fs:"List five organisations you could realistically intern with and draft one outreach message today.",wh:3,mw:8,per:"S",cost:"free",tier:1,art:"An internship with a written outcome and a reference",lev:5,pq:["What did you actually do, and what changed because of it?","What did the work teach you about the field?","Would they take you back? Why?"]},{id:"WK-I1",p:"P-WK",l:"I",t:"Turn a job responsibility into a quantified win",why:"Working professionals already have the raw material. The gap is usually a result with a number a panel can test.",fs:"Pick one thing you own at work and find the number \\u2014 money, time, users, or scale \\u2014 that proves your impact.",wh:2,mw:6,per:"W",cost:"free",tier:1,art:"An achievement statement with a hard metric",lev:5,pq:["What did you change, and by how much?","How did you measure it?","What would your manager add or dispute?"]},{id:"WK-I2",p:"P-WK",l:"I",t:"Rewrite your work as results, not duties",why:"\'Responsible for X\' says nothing. \'Cut X by 20%\' says everything. This is the resume and the PI answer both.",fs:"Take your three main responsibilities and rewrite each as an outcome with a number, even if approximate.",wh:1.5,mw:3,per:"X",cost:"free",tier:1,art:"Result-first bullet points for every role",lev:4,pq:["Which of your bullets has the strongest number?","Where are you still describing duties, not results?","What\'s the one achievement you\'d lead with?"]},{id:"WK-A1",p:"P-WK",l:"A",t:"Own a visible cross-functional project",why:"A project that crosses teams shows leadership and scope \\u2014 the profile a panel remembers from a working candidate.",fs:"Identify one initiative at work you could volunteer to drive, and note who you\'d need to bring along.",wh:3,mw:10,per:"W",cost:"free",tier:1,art:"A delivered cross-team project with a result",lev:4,pq:["Who did you have to influence without authority?","What nearly derailed it?","What was the measurable outcome?"]},{id:"WK-A2",p:"P-WK",l:"A",t:"Take on freelance or consulting work with an outcome",why:"No internship on offer? A real problem solved for a real client is work experience you created yourself.",fs:"Offer to solve one concrete problem for a small business or NGO this week, for free if needed, and scope it.",wh:3,mw:10,per:"S",cost:"free",tier:1,art:"A delivered engagement with a client outcome",lev:3,pq:["What problem did you solve, and for whom?","How did you price or scope it?","What did the client get that they didn\'t have before?"]},{id:"LD-B1",p:"P-LD",l:"B",t:"Take a real position of responsibility",why:"A committee, club, team or society role is the standard leadership signal \\u2014 provided you actually do something in it.",fs:"Find one group on campus or at work looking for organisers and put your name down this week.",wh:2.5,mw:8,per:"S",cost:"free",tier:1,art:"A titled role with a track record",lev:4,pq:["What was your actual responsibility, not your title?","What did you change in the role?","What was the hardest part of it?"]},{id:"LD-B2",p:"P-LD",l:"B",t:"Own one thing end to end",why:"Leadership isn\'t a badge \\u2014 it\'s being the person accountable when something ships. Volunteer to be that person once.",fs:"Pick one small event or task nobody owns, and claim it start to finish. Define what \'done\' means today.",wh:2,mw:6,per:"X",cost:"free",tier:1,art:"One thing that happened because you ran it",lev:3,pq:["What would not have happened without you?","Who did you have to coordinate?","What went wrong, and what did you do?"]},{id:"LD-I1",p:"P-LD",l:"I",t:"Run an initiative with a measurable outcome",why:"\'I organised an event\' is weak. \'I ran a drive that raised X / reached Y people\' is a story with a spine.",fs:"Take an initiative you\'re near, and define the one number that will prove it worked. Then go get that number.",wh:3,mw:8,per:"X",cost:"free",tier:1,art:"An initiative with a hard, quotable result",lev:5,pq:["What was the number, and how did you hit it?","Who was unhappy along the way?","What did you learn about running people?"]},{id:"LD-A1",p:"P-LD",l:"A",t:"Start something that didn\'t exist",why:"Founding a club, a project or a small venture \\u2014 and getting a real outcome \\u2014 is the strongest leadership evidence there is.",fs:"Write one paragraph on a thing your campus or workplace lacks that you could start, and the first three steps.",wh:3.5,mw:12,per:"X",cost:"free",tier:1,art:"A founded initiative with sustained results",lev:4,pq:["Why did it need to exist?","How did you get the first people to join?","What\'s it become since you started it?"]},{id:"EC-B1",p:"P-EC",l:"B",t:"Commit to one interest, seriously",why:"Depth beats breadth. One activity pursued for real reads better than ten certificates that led nowhere.",fs:"Choose the one interest you\'d defend to a stranger and schedule two hours for it this week, then keep it.",wh:2,mw:8,per:"X",cost:"free",tier:1,art:"A sustained record in one pursuit",lev:3,hab:!0,pq:["Why this one, out of everything?","What has sticking with it taught you?","Where has it taken you so far?"]},{id:"EC-I1",p:"P-EC",l:"I",t:"Enter a case competition or hackathon",why:"A case comp is management practice with a scoreboard \\u2014 and a genuinely useful line whether you place or not.",fs:"Find one open case competition or hackathon this quarter and register today, solo or with a team.",wh:3,mw:5,per:"X",cost:"free",tier:1,art:"A competition entry, ideally a placement",lev:4,pq:["What was your approach to the case?","What did the judges or results teach you?","What would you do differently next time?"]},{id:"EC-I2",p:"P-EC",l:"I",t:"Document the achievements you already have",why:"Many people have real achievements they can\'t prove or describe well. Fixing that is fast, high-return work.",fs:"List everything you\'ve genuinely done, and for each note the proof \\u2014 a rank, a link, a name, a certificate that means something.",wh:1.5,mw:3,per:"X",cost:"free",tier:1,art:"An evidenced achievement list",lev:3,pq:["What\'s your strongest achievement, and can you prove it?","Which of these is real depth versus a one-off?","What can you actually talk about for ten minutes?"]},{id:"EC-A1",p:"P-EC",l:"A",t:"Take one pursuit to a competitive or published level",why:"Reaching a level others recognise \\u2014 a competition, a publication, a performance \\u2014 turns a hobby into evidence.",fs:"Pick the one interest closest to a real milestone and define what reaching that level would take, starting now.",wh:3,mw:12,per:"X",cost:"free",tier:1,art:"An external recognition \\u2014 rank, publication, performance",lev:3,pq:["What level did you reach, and how hard was it?","What did competing at that level cost you?","What\'s next for it?"]},{id:"AW-B1",p:"P-AW",l:"B",t:"A daily business-news habit",why:"WAT, GD and PI all run on this. Twenty minutes a day compounds into a candidate who can hold any table.",fs:"Read the business section today and write one line on the story that mattered most and why.",wh:2,mw:8,per:"X",cost:"free",tier:1,art:"A dated news journal with your own takes",lev:5,hab:!0,pq:["What\'s the biggest business story this week?","What\'s your own view on it?","How has your grasp of the economy changed?"]},{id:"AW-B2",p:"P-AW",l:"B",t:"Learn one industry properly",why:"Panels reward one industry known deeply over ten known shallowly. Pick the one you\'d enjoy and go deep.",fs:"Choose an industry today and write down its top three players and one line on how each makes money.",wh:2.5,mw:6,per:"X",cost:"free",tier:1,art:"A one-page teardown of one industry",lev:4,pq:["How does the biggest player in that industry make money?","What\'s its main cost line?","What threatens it in the next five years?"]},{id:"AW-I1",p:"P-AW",l:"I",t:"Keep a current-affairs journal with your own views",why:"A summary is forgettable. A position is what wins a GD. Practise having one on everything you read.",fs:"Start a running note today: 15 topics, and for each, two lines \\u2014 what happened, and what you think.",wh:2,mw:8,per:"X",cost:"free",tier:1,art:"A journal of 15+ topics with defended positions",lev:4,pq:["Pick a topic \\u2014 argue your side, then the opposite.","Which of your views has changed as you read more?","What issue are you most confident discussing?"]},{id:"AW-I2",p:"P-AW",l:"I",t:"Practise timed written arguments (WAT)",why:"WAT is a real filter at many schools and almost nobody practises it. Twenty minutes, a prompt, a structured argument.",fs:"Give yourself one prompt and 20 minutes today. Write a structured argument. Read it back for holes.",wh:1.5,mw:5,per:"X",cost:"free",tier:1,art:"A folder of timed WAT responses",lev:4,pq:["How do you structure a WAT answer under time?","What\'s the weakest part of your written argument?","How do you handle a topic you know little about?"]},{id:"AW-A1",p:"P-AW",l:"A",t:"Run weekly group-discussion practice",why:"GD is a contact sport you can\'t learn alone. Regular practice with peers builds the instinct to enter and hold.",fs:"Set up one GD this week with three or more people on a current topic, and get honest feedback afterwards.",wh:2,mw:6,per:"X",cost:"free",tier:1,art:"A GD practice log with peer feedback",lev:3,pq:["How do you enter a GD that\'s already crowded?","What do you do when it turns into a shouting match?","When did you change the direction of a discussion?"]},{id:"NR-B1",p:"P-NR",l:"B",t:"Write your why-MBA in 200 honest words",why:"If you can\'t write it, you can\'t say it. Two hundred honest words is the foundation the whole interview stands on.",fs:"Write 200 words on why you want an MBA \\u2014 no jargon, no \'leadership role\'. Read it aloud and cut anything fake.",wh:1.5,mw:2,per:"X",cost:"free",tier:1,art:"A tight, honest why-MBA statement",lev:5,pq:["Why an MBA, in one sentence?","What\'s the real reason underneath the professional one?","Why not just keep doing what you\'re doing?"]},{id:"NR-I1",p:"P-NR",l:"I",t:"Define a specific 3-to-5 year goal and the path",why:"\'A leadership role\' is the answer that gets you rejected. A specific role, sector and problem is the one that lands.",fs:"Write your five-year target as a specific role in a specific kind of company, and the two steps the MBA unlocks.",wh:2,mw:4,per:"X",cost:"free",tier:1,art:"A concrete goal with a plausible path",lev:5,pq:["Where exactly do you want to be in five years?","How does the MBA connect your present to that?","What\'s your backup if the first path doesn\'t open?"]},{id:"NR-I2",p:"P-NR",l:"I",t:"Answer the eight standard PI questions in writing",why:"Every interview draws from the same well. Writing your answers once means you\'re never caught flat.",fs:"Write real answers today to: why MBA, why now, strengths, weakness, failure, a leadership story, why this school, and where in five years.",wh:2,mw:4,per:"X",cost:"free",tier:1,art:"A written answer bank for the core questions",lev:4,pq:["What\'s your genuine biggest weakness?","Tell me about a real failure and what it taught you.","Why this school specifically?"]},{id:"NR-A1",p:"P-NR",l:"A",t:"Three recorded mock interviews with post-mortems",why:"Reading your answers and saying them under pressure are different skills. Recording yourself is uncomfortable and it works.",fs:"Book one mock interview this week \\u2014 a senior, a mentor, or a friend who\'ll push \\u2014 and record it.",wh:2,mw:5,per:"X",cost:"free",tier:1,art:"Three recordings, each with three written fixes",lev:5,pq:["What did watching yourself reveal?","Which answer fell apart under pressure?","What are the three fixes from your last mock?"]},{id:"NR-P1",p:"P-NR",l:"A",t:"A structured GD-PI preparation program",why:"A good paid program gives real panels and blunt feedback. Helpful near interview season, never necessary to clear it.",fs:"Before paying, do one free mock interview and see whether your gaps really need a program or just more reps.",wh:2,mw:5,per:"X",cost:"paid",tier:1,art:"Panel feedback across multiple mock interviews",lev:3,pq:["What did the panel say you do worst?","Is the feedback something free practice couldn\'t give?","Are you improving between sessions?"]}],STAGES:{y12:"1st / 2nd year UG",prefinal:"Pre-final year UG",final:"Final year UG",grad:"Graduated \\xB7 dedicated attempt",working:"Working professional"},DEGREES:{btech:"B.Tech / B.E.",bcom:"B.Com",bba:"BBA / BMS",bsc:"B.Sc",ba:"BA / Humanities",bpharm:"B.Pharm",other:"Other degree"},WORKY:{y0:"Under 1 year",y1:"1\\u20132 years",y2:"2\\u20133 years",y3:"3\\u20135 years",y5:"5+ years"},TIERS:{top:{label:"IIM A / B / C, FMS, top private",overall:99,gateL:3.4,profL:3.1},iim1:{label:"Older IIMs, MDI, XLRI, SPJIMR, IIFT",overall:98,gateL:3.15,profL:2.9},new:{label:"Newer IIMs and strong private schools",overall:93,gateL:2.8,profL:2.5},broad:{label:"A solid MBA that fits your profile",overall:86,gateL:2.4,profL:2.2}},SCHOOL_TIERS:[{k:"t1",nm:"IIM A / B / C, FMS, SPJIMR",lo:99,hi:100,note:"99+ overall, no weak section, and academics matter for the final call."},{k:"t2",nm:"Older IIMs (L, K, I, S), MDI, XLRI, IIFT, NITIE",lo:96,hi:99,note:"96\\u201399, with sectionals holding up and a real profile behind the score."},{k:"t3",nm:"Newer IIMs and strong private schools",lo:90,hi:96,note:"90\\u201396 opens a wide, genuinely good set of schools."},{k:"t4",nm:"Solid private and tier-2 schools",lo:80,hi:90,note:"80\\u201390 still reaches respected programmes, especially with work experience."},{k:"t5",nm:"Broader set of MBA programmes",lo:0,hi:80,note:"Below 80, look wider \\u2014 and consider whether a stronger score next cycle changes the whole picture."}]};var W=Q.PILLARS,Me=Q.ACTIONS,J=Q.STAGES,Pe=Q.DEGREES,at=Q.WORKY,ie=Q.TIERS,Se=Q.SCHOOL_TIERS,R=Object.fromEntries(W.map(e=>[e.id,e])),O=Object.fromEntries(Me.map(e=>[e.id,e])),tt={"G-QA":"qa","G-VA":"va","G-DI":"di"},D={"G-QA":"Quant","G-VA":"Verbal","G-DI":"DILR","G-MK":"Mock craft","P-AC":"Academics","P-WK":"Work & interns","P-LD":"Leadership","P-EC":"Extra-curric","P-AW":"Awareness","P-NR":"Narrative"},S={"G-QA":"\\u2211","G-VA":"\\u275D","G-DI":"\\u25EB","G-MK":"\\u23F1","P-AC":"\\u{1F393}","P-WK":"\\u{1F4BC}","P-LD":"\\u{1F6A9}","P-EC":"\\u{1F3C6}","P-AW":"\\u{1F4F0}","P-NR":"\\u{1F9ED}"},Y=[{k:"critical",name:"Critical",min:0,color:"#FF5A5F"},{k:"gap",name:"Gap",min:35,color:"#FF9F1C"},{k:"developing",name:"Developing",min:55,color:"#3BA9FF"},{k:"strong",name:"Strong",min:75,color:"#1FD1A5"}],B=e=>e==null?{k:"fog",name:"Unmapped",color:"#B8B3CC"}:[...Y].reverse().find(t=>e>=t.min),H=(e,t=0,a=100)=>Math.max(t,Math.min(a,e)),Be=e=>e.length?e.reduce((t,a)=>t+a,0)/e.length:null,Ie=864e5;function Wt(e,t=Date.now()){if(!e)return null;let a=Date.parse(e+"T09:00:00+05:30");return isNaN(a)?null:Math.ceil((a-t)/Ie)}function Z(e){return[...e.mocks||[]].sort((t,a)=>(t.date||"").localeCompare(a.date||""))}function Ct(e){if(e==null||e===""||isNaN(+e))return null;let t=+e;return t<=10&&(t=t*9.5),H((t-51.25)/.4375)}function Et(e){return e?.stage==="working"?"W":"S"}function Nt(e,t){let a=t.profile||{},o=a.pillars?.[e.id]||{},r=o.ev||[],l=o.self!=null||r.length>0,s=e.ev.reduce((f,p)=>f+p.w,0),n=e.ev.filter(f=>r.includes(f.id)),v=100*n.reduce((f,p)=>f+p.w,0)/s,d=o.self!=null?(o.self-1)*25:null,u=l?d==null?v:.7*v+.3*d:null,m=[];l&&m.push("self-map");let c=Z(t).slice(-3);if(tt[e.id]){let f=c.map(p=>+p[tt[e.id]]).filter(p=>!isNaN(p)&&p>0);if(f.length){let p=Be(f);u=u==null?p:.5*u+.5*p,m.push(`${f.length} mock${f.length>1?"s":""}`)}}if(e.id==="G-MK"){let f=(t.mocks||[]).length;if(f){let p=H(f*9),k=(t.mocks||[]).filter(L=>L.analysed).length/f*100,M=.6*p+.4*k;u=u==null?M:.5*u+.5*M,m.push("mock volume")}}if(e.id==="P-AC"){let f=[a.x10,a.x12,a.ug].map(Ct).filter(p=>p!=null);if(f.length){let p=Be(f);u=u==null?p:.5*u+.5*p,m.push("marks")}}if(e.id==="P-WK"&&a.stage==="working"){let f={y0:0,y1:6,y2:10,y3:12,y5:10}[a.worky]||0;u!=null&&(u=H(u+f))}let g=u==null?null:Math.round(H(u));return{id:e.id,name:e.name,short:D[e.id],fam:e.fam,w:e.w,score:g,level:B(g),mapped:l,have:n.map(f=>f.t),missing:e.ev.filter(f=>!r.includes(f.id)).sort((f,p)=>p.w-f.w).map(f=>f.t),self:o.self,claim:o.claim||"",sources:m}}function K(e,t={},a=Date.now()){let o=e.profile||{},r=W.map(A=>Nt(A,e)),l=A=>{let G=r.filter(ne=>ne.fam===A&&ne.score!=null),et=G.reduce((ne,Ae)=>ne+Ae.w,0);return et?Math.round(G.reduce((ne,Ae)=>ne+Ae.score*Ae.w,0)/et):null},s=l("gate"),n=l("prof"),v=r.filter(A=>A.mapped).length,d=s==null&&n==null?null:Math.round(s==null?n:n==null?s:.6*s+.4*n),u=Z(e),m=u.slice(-3).map(A=>+A.overall).filter(A=>!isNaN(A)&&A>0),c=null,g=null;if(m.length){let A=Be(m),G=m.length>1?Math.max(2,(Math.max(...m)-Math.min(...m))/2):4;c={lo:Math.round(H(A-G,0,99.9)*10)/10,mid:Math.round(A*10)/10,hi:Math.round(H(A+G,0,99.99)*10)/10},g=`average of last ${m.length} mock${m.length>1?"s":""}`}else if(s!=null){let A=H(40+s*.58,0,99.5);c={lo:Math.round(H(A-8,0,99)),mid:Math.round(A),hi:Math.round(H(A+6,0,99.9))},g="estimated from your self-map \\u2014 log a mock to sharpen this"}let f=ie[o.target]||ie.new,p=c?Se.find(A=>c.mid>=A.lo&&c.mid<A.hi)||Se[0]:null,k=o.catDate||t.catDate,M=Wt(k,a),L=null,P=u.map(A=>+A.overall).filter(A=>!isNaN(A)&&A>0);P.length>=2&&(L=Math.round((P[P.length-1]-P[P.length-2])*10)/10);let Re=c?Math.round((f.overall-c.mid)*10)/10:null,Tt=r.filter(A=>A.score!=null&&A.score>=75).sort((A,G)=>G.score-A.score),qt=r.filter(A=>A.score!=null&&A.score<55).sort((A,G)=>A.score-G.score),Dt=r.filter(A=>A.score==null);return{pillars:r,gate:s,prof:n,overall:d,mappedN:v,proj:c,projSrc:g,tier:f,fit:p,days:M,trend:L,gap:Re,strengths:Tt,lacking:qt,fog:Dt,catDate:k}}function ee(e,t,a={}){let o=e.profile||{},r=Et(o),l=o.budget||"free",s=new Set((e.plan||[]).map(c=>c.aid)),n=t.days!=null&&t.days<=60,v=[];for(let c of Me){if(c.per!=="X"&&c.per!==r||c.cost==="paid"&&l==="free")continue;let g=t.pillars.find(P=>P.id===c.p),f=g.score==null?30:g.score,p=c.l==="B"?f<45?1:f<60?.6:.2:c.l==="I"?f>=30&&f<78?1:.45:f>=60?1:f>=45?.4:.12,k=1;n&&(k=g.fam==="gate"?1.6:c.per==="S"||R[c.p].dur?.45:.9),t.days!=null&&t.days<0&&c.p==="P-NR"&&(k=1.8);let M=g.score==null?1.15:1,L=R[c.p].w*(100-f)/100*c.lev*p*k*M;v.push({a:c,value:L,pillar:g,inPlan:s.has(c.id),reason:jt(c,g,n)})}v.sort((c,g)=>g.value-c.value);let d=[],u=[],m={};for(let c of v)(m[c.a.p]||0)<2&&d.length<9?(d.push(c),m[c.a.p]=(m[c.a.p]||0)+1):u.push(c);return[...d,...u]}function jt(e,t,a){let o=t.score==null?"is still unmapped":`is at ${t.score} (${t.level.name.toLowerCase()})`;return`${t.short} ${o}${a&&t.fam==="gate"?" and CAT is close":""}.`}function me(e){let t=Math.max(1,Math.ceil(e.mw/2));return[{k:"start",t:"Do the first step today",d:e.fs},{k:"rhythm",t:`Block ${Lt(e.wh)} a week in your calendar for ${e.mw} weeks`,d:e.hab?"This is a habit \\u2014 small and daily beats big and rare. Put it at the same time every day.":"Pick fixed slots now; a quest without calendar time quietly dies."},{k:"mid",t:`Week ${t} checkpoint \\u2014 review what\'s working`,d:"Write two lines in the update log: what moved, what didn\'t. Flag your mentor if you are stuck."},{k:"proof",t:`Build the proof: ${e.art}`,d:"Paste a link (Drive, LinkedIn, certificate, GitHub, doc) in an update \\u2014 this is what you will show a panel."},{k:"pi",t:"Make it interview-ready",d:"Answer the three questions a panel will ask about this, below."}]}function Lt(e){return e<1?`${Math.round(e*60)} min`:`${e} hr${e===1?"":"s"}`}function ve(e){let t=O[e.aid];if(!t)return 0;let a=me(t),o=a.filter(r=>e.steps?.[r.k]).length;return e.status==="done"?100:Math.round(100*o/a.length)}function Te(e){let t=0;for(let o of e.plan||[])t+=Object.values(o.steps||{}).filter(Boolean).length*10,o.status==="done"&&(t+=60),t+=Math.min(10,(o.log||[]).length)*5;t+=(e.mocks||[]).length*15+(e.mocks||[]).filter(o=>o.analysed).length*10,t+=(e.checkins||[]).length*20;let a=e.profile?.pillars?Object.keys(e.profile.pillars).length:0;return t+=a*10,t}var ue=[{min:0,name:"Explorer"},{min:150,name:"Scout"},{min:400,name:"Navigator"},{min:800,name:"Pathfinder"},{min:1400,name:"Cartographer"},{min:2200,name:"Trailblazer"}];function Oe(e){let t=ue[0],a=null;for(let o=0;o<ue.length;o++)e>=ue[o].min&&(t=ue[o],a=ue[o+1]||null);return{...t,next:a}}function Rt(e){let t=[e.createdAt||0];for(let a of e.plan||[]){t.push(a.addedAt||0);for(let o of a.log||[])t.push(o.t||0);a.updatedAt&&t.push(a.updatedAt)}for(let a of e.checkins||[])t.push(a.t||0);for(let a of e.mocks||[])t.push(a.t||0);return e.profile?.updatedAt&&t.push(e.profile.updatedAt),Math.max(...t)}function st(e,t={},a=Date.now(),o=[]){let r=K(e,t,a),l=e.profile||{},s=[],n=(p,k,M,L,P)=>s.push({key:p,urgency:k,title:M,detail:L,kind:P}),d=o.filter(p=>p.bookedBy===e.id).filter(p=>p.status!=="cancelled");r.mappedN>=8&&!d.length&&n("first-review",2,"First profile review due",`Profile mapped (${r.mappedN}/10 pillars). No mentor session yet \\u2014 walk through the map and agree the first 3 quests.`,"review");let u=Z(e);if(u.length>=2){let p=+u[u.length-2].overall,k=+u[u.length-1].overall;p&&k&&p-k>=8&&n("mock-drop:"+(u[u.length-1].id||u.length),3,`Mock dropped ${Math.round(p-k)} percentile points`,`${u[u.length-2].name||"Previous"}: ${p} \\u2192 ${u[u.length-1].name||"Latest"}: ${k}. Check for burnout, strategy change or a section collapse.`,"mock")}r.days!=null&&r.days>=0&&r.days<=45&&r.proj&&r.proj.mid<r.tier.overall-5&&n("exam-gap",3,`${r.days} days to CAT, ${Math.round(r.tier.overall-r.proj.mid)} pts below target`,`Projected ${r.proj.mid} vs ${r.tier.overall} needed for ${r.tier.label}. Agree an exam-day strategy and a realistic school list.`,"exam");let m=Rt(e);(e.plan||[]).some(p=>p.status!=="done")&&a-m>10*Ie&&n("stalled:"+Math.floor(m/Ie),2,`No activity for ${Math.floor((a-m)/Ie)} days`,"Open quests but nothing logged. A short call to unblock or re-scope usually restarts momentum.","stall");for(let p of e.plan||[])p.status==="blocked"&&n("blocked:"+p.aid+":"+(p.updatedAt||0),2,`Blocked: ${O[p.aid]?.t||p.aid}`,p.blockNote||"Student marked this quest as blocked.","blocked");let c=[...e.checkins||[]].sort((p,k)=>p.t-k.t);c.length>=2&&c.slice(-2).every(p=>p.mood<=2)&&n("mood:"+c[c.length-1].t,3,"Low mood two check-ins running",`Latest: \\u201C${(c[c.length-1].note||"").slice(0,120)}\\u201D. Reach out personally \\u2014 this is a wellbeing check, not a progress review.`,"mood");let g=r.pillars.find(p=>p.id==="P-NR");g.score!=null&&g.score<45&&(["final","grad","working"].includes(l.stage)||r.days!=null&&r.days<=60)&&n("narrative",1,"Narrative gap before interview season",`\\u201CWhy MBA\\u201D story is at ${g.score}. Start WAT/PI prep early \\u2014 book a narrative session.`,"narrative"),r.lacking.filter(p=>p.score<35).length>=3&&n("critical:"+r.lacking.filter(p=>p.score<35).map(p=>p.id).join(","),2,`${r.lacking.filter(p=>p.score<35).length} critical pillars`,r.lacking.filter(p=>p.score<35).map(p=>p.short).join(", ")+" \\u2014 help them prioritise; not everything can be fixed at once.","critical");for(let p of e.help||[])p.closed||n("help:"+p.id,3,"Student asked for help",p.text,"help");let f=e.ack||{};return s.filter(p=>!f[p.key]).sort((p,k)=>k.urgency-p.urgency)}var y=(e,t=document)=>t.querySelector(e),i=e=>String(e??"").replace(/[&<>"\']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",\'"\':"&quot;","\'":"&#39;"})[t]),C={get(e){try{return localStorage.getItem(e)}catch{return null}},set(e,t){try{t==null?localStorage.removeItem(e):localStorage.setItem(e,t)}catch{}}};async function $(e,t="GET",a){let o=C.get("atlas.tok"),r=await fetch("/api"+e,{method:t,headers:{"content-type":"application/json",...o?{authorization:"Bearer "+o}:{}},body:a?JSON.stringify(a):void 0}),s=(r.headers.get("content-type")||"").includes("json")?await r.json():await r.text();if(r.status===401&&o&&!e.startsWith("/login")&&(C.set("atlas.tok",null),C.set("atlas.role",null),location.hash="",location.reload()),!r.ok)throw new Error(s.error||"Something went wrong");return s}var ot;function w(e){document.querySelectorAll(".toast").forEach(a=>a.remove());let t=document.createElement("div");t.className="toast",t.textContent=e,document.body.appendChild(t),clearTimeout(ot),ot=setTimeout(()=>t.remove(),2600)}function N(e,t=""){E();let a=document.createElement("div");return a.className="scrim",a.id="scrim",a.innerHTML=`<div class="modal ${t}" role="dialog"><button class="btn sm x" data-close>\\u2715</button>${e}</div>`,a.addEventListener("mousedown",o=>{o.target===a&&E()}),a.addEventListener("click",o=>{o.target.closest("[data-close]")&&E()}),document.body.appendChild(a),document.body.style.overflow="hidden",a.firstElementChild}function E(){let e=y("#scrim");e&&e.remove(),document.body.style.overflow=""}var z=e=>String(e||"?").split(/\\s+/).map(t=>t[0]).slice(0,2).join("").toUpperCase(),V=(e,t={day:"numeric",month:"short"})=>e?new Date(e).toLocaleDateString("en-IN",t):"\\u2014",T=e=>new Date(e).toLocaleString("en-IN",{weekday:"short",day:"numeric",month:"short",hour:"numeric",minute:"2-digit"}),it=e=>new Date(e).toLocaleTimeString("en-IN",{hour:"numeric",minute:"2-digit"}),te=e=>{let t=(Date.now()-e)/6e4;return t<1?"just now":t<60?Math.round(t)+" min ago":t<1440?Math.round(t/60)+" h ago":Math.round(t/1440)+" d ago"},Bt=e=>B(e).color,le=e=>{try{return new URL(e).hostname.replace(/^www\\./,"")}catch{return e}};function we(e,t=34){return`<b class="lv-${B(e).k}" style="width:${t}px;height:${t}px">${e??"?"}</b>`}var He=56,U=Math.sqrt(3)*He,ge=1.5*He,Fe={"G-QA":[78,118],"G-VA":[78+U,118],"G-DI":[78+U/2,118+ge],"G-MK":[78+1.5*U,118+ge],"P-AC":[372,118],"P-WK":[372+U,118],"P-LD":[372+2*U,118],"P-EC":[372+U/2,118+ge],"P-AW":[372+1.5*U,118+ge],"P-NR":[372+2.5*U,118+ge]},nt=(e,t,a=He-3)=>Array.from({length:6},(o,r)=>{let l=Math.PI/180*(60*r-30);return`${(e+a*Math.cos(l)).toFixed(1)},${(t+a*Math.sin(l)).toFixed(1)}`}).join(" ");function ae(e,{sel:t=null,pin:a=null,compact:o=!1}={}){let r=e.pillars.map(s=>{let[n,v]=Fe[s.id],d=s.level,u=s.score==null;return`<g class="hex ${t===s.id?"sel":""}" data-hex="${s.id}" tabindex="0" role="button" aria-label="${i(s.name)} ${u?"unmapped":s.score}">\n      <polygon points="${nt(n+4,v+5)}" fill="#17123A"/>\n      <polygon class="face" points="${nt(n,v)}" fill="${u?"url(#fog)":d.color}" stroke="#17123A" stroke-width="3" stroke-linejoin="round"/>\n      <text x="${n}" y="${v-20}" text-anchor="middle" font-size="17">${S[s.id]}</text>\n      <text x="${n}" y="${v+9}" text-anchor="middle" font-family="Bricolage Grotesque,sans-serif" font-weight="800" font-size="${u?20:27}" fill="${u?"#4B4670":d.k==="critical"||d.k==="developing"?"#fff":"#17123A"}">${u?"???":s.score}</text>\n      <text x="${n}" y="${v+29}" text-anchor="middle" font-family="DM Sans,sans-serif" font-weight="700" font-size="11.5" fill="${!u&&(d.k==="critical"||d.k==="developing")?"#fff":"#17123A"}">${i(D[s.id])}</text>\n    </g>`}).join(""),l="";if(a&&Fe[a]){let[s,n]=Fe[a];l=`<g pointer-events="none"><g transform="translate(${s+30},${n-66})"><path d="M0 0 C-16 0 -22 14 -14 26 L0 46 L14 26 C22 14 16 0 0 0Z" fill="#FF5A5F" stroke="#17123A" stroke-width="3"/><circle cx="0" cy="15" r="6" fill="#fff" stroke="#17123A" stroke-width="2.5"/></g>\n      <g transform="translate(${s+48},${n-78})"><rect width="96" height="24" rx="12" fill="#17123A"/><text x="48" y="16.5" fill="#fff" font-family="Space Mono,monospace" font-size="11" font-weight="700" text-anchor="middle">START HERE</text></g></g>`}return`<div class="scrollx"><svg class="atlas" viewBox="0 0 760 ${o?300:320}" xmlns="http://www.w3.org/2000/svg">\n    <defs><pattern id="fog" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="10" height="10" fill="#EAE7F2"/><line x1="0" y1="0" x2="0" y2="10" stroke="#C9C4DC" stroke-width="5"/></pattern>\n    <radialGradient id="isl" cx="50%" cy="50%" r="60%"><stop offset="0" stop-color="#FFE9B8"/><stop offset="1" stop-color="#FFF7E8" stop-opacity="0"/></radialGradient></defs>\n    <g fill="none" stroke="#3BA9FF" stroke-opacity=".28" stroke-width="1.6">\n      <path d="M0 290 C120 270 200 310 330 290 S560 270 760 292"/><path d="M0 306 C140 290 230 322 360 306 S590 290 760 308"/>\n      <path d="M316 40 C300 120 340 200 318 300" stroke-dasharray="5 7"/>\n    </g>\n    <ellipse cx="174" cy="160" rx="170" ry="128" fill="url(#isl)"/><ellipse cx="530" cy="160" rx="250" ry="132" fill="url(#isl)"/>\n    <text x="40" y="34" font-family="Space Mono,monospace" font-size="12" font-weight="700" fill="#6C3BFF" letter-spacing="2">THE GATE RANGE</text>\n    <text x="40" y="52" font-family="DM Sans,sans-serif" font-size="12" fill="#4B4670">clears the cut-off</text>\n    <text x="334" y="34" font-family="Space Mono,monospace" font-size="12" font-weight="700" fill="#6C3BFF" letter-spacing="2">THE PROFILE PLAINS</text>\n    <text x="334" y="52" font-family="DM Sans,sans-serif" font-size="12" fill="#4B4670">wins the interview call</text>\n    <g transform="translate(712,40)"><circle r="20" fill="#fff" stroke="#17123A" stroke-width="2.5"/><path d="M0 -15 L5 0 L0 15 L-5 0Z" fill="#FF5A5F" stroke="#17123A" stroke-width="1.5"/><text y="-23" text-anchor="middle" font-size="10" font-weight="800" font-family="Space Mono,monospace">N</text></g>\n    ${r}${l}\n  </svg></div>`}function qe(){return`<div class="legend">${Y.map(e=>`<span><i style="background:${e.color}"></i>${e.name} ${e.min?"\\u2265"+e.min:"<35"}</span>`).join("")}<span><i style="background:repeating-linear-gradient(45deg,#EAE7F2 0 4px,#C9C4DC 4px 8px)"></i>Unmapped</span></div>`}var Ot={t1:"IIM A/B/C \\xB7 FMS",t2:"Older IIMs \\xB7 XLRI \\xB7 MDI",t3:"Newer IIMs \\xB7 top privates",t4:"Tier-2 privates",t5:"Broader MBAs"},fe=[50,80,90,96,99,100],Ge=[0,.3,.52,.72,.88,1];function Ft(e){e=Math.max(50,Math.min(100,e));for(let t=1;t<fe.length;t++)if(e<=fe[t])return Ge[t-1]+(e-fe[t-1])/(fe[t]-fe[t-1])*(Ge[t]-Ge[t-1]);return 1}function lt(e){let r=c=>30+Ft(c)*940,l=[...Se].reverse(),s=["#EAE7F2","#D5F8EE","#DCEFFF","#FFF1C7","#FFE3E3"],n=l.map((c,g)=>{let f=r(Math.max(50,c.lo)),p=r(Math.min(100,c.hi));return`<rect x="${f}" y="52" width="${p-f}" height="34" fill="${s[g]}" stroke="#17123A" stroke-width="2"/><text x="${(f+p)/2}" y="108" text-anchor="middle" font-family="DM Sans,sans-serif" font-weight="700" font-size="12.5" fill="#4B4670">${i(Ot[c.k]||c.nm)}</text>`}).join(""),v=[50,70,80,85,90,93,96,98,99,100].map(c=>`<text x="${r(c)}" y="44" text-anchor="middle" font-family="Space Mono,monospace" font-size="11" fill="#8A85A8">${c}</text>`).join(""),d="",u="",m=e.tier.overall;if(u=`<g transform="translate(${r(m)},52)"><line y1="0" y2="34" stroke="#17123A" stroke-width="3"/><path d="M0 -30 L0 0" stroke="#17123A" stroke-width="3"/><path d="M0 -30 L22 -23 L0 -15Z" fill="#6C3BFF" stroke="#17123A" stroke-width="2.5"/><text x="26" y="-17" font-family="Space Mono,monospace" font-weight="700" font-size="12" fill="#6C3BFF">TARGET ${m}</text></g>`,e.proj){let c=r(e.proj.lo),g=r(e.proj.hi),f=r(e.proj.mid);d=`<rect x="${c}" y="61" width="${Math.max(6,g-c)}" height="16" rx="8" fill="#FF5A5F" fill-opacity=".35" stroke="#FF5A5F" stroke-width="2"/>\n      <g transform="translate(${f},69)"><circle r="11" fill="#FF5A5F" stroke="#17123A" stroke-width="3"/><circle r="4" fill="#fff"/></g>\n      <g transform="translate(${Math.min(f,880)},140)"><rect x="-6" y="-16" width="128" height="24" rx="12" fill="#17123A"/><text x="58" y="0" text-anchor="middle" fill="#fff" font-family="Space Mono,monospace" font-weight="700" font-size="11.5">YOU \\xB7 ${e.proj.mid}</text></g>\n      <path d="M${f} 82 L${Math.min(f,880)+10} 124" stroke="#17123A" stroke-width="2" stroke-dasharray="3 3"/>`}return`<div class="scrollx"><svg class="route" viewBox="0 0 1000 160" style="width:100%;height:auto;display:block" xmlns="http://www.w3.org/2000/svg">${v}${n}${u}${d}</svg></div>`}function be(e,t=300){let a=t/2,o=t/2-42,r=e.pillars.length,l=(u,m)=>{let c=-Math.PI/2+u*2*Math.PI/r;return[a+Math.cos(c)*o*m/100,a+Math.sin(c)*o*m/100]},s=[25,50,75,100].map(u=>`<polygon points="${e.pillars.map((m,c)=>l(c,u).join(",")).join(" ")}" fill="none" stroke="#17123A" stroke-opacity="${u===100?.35:.12}" stroke-width="1.5"/>`).join(""),n=e.pillars.map((u,m)=>l(m,u.score??0).join(",")).join(" "),v=e.pillars.map((u,m)=>{let[c,g]=l(m,122);return`<text x="${c}" y="${g+4}" text-anchor="middle" font-family="DM Sans,sans-serif" font-weight="700" font-size="11" fill="#17123A">${i(D[u.id])}</text>`}).join(""),d=e.pillars.map((u,m)=>{let[c,g]=l(m,u.score??0);return`<circle cx="${c}" cy="${g}" r="5" fill="${Bt(u.score)}" stroke="#17123A" stroke-width="2"/>`}).join("");return`<svg viewBox="0 0 ${t} ${t}" style="width:100%;max-width:${t}px;height:auto;display:block;margin:auto">${s}<polygon points="${n}" fill="#6C3BFF" fill-opacity=".22" stroke="#6C3BFF" stroke-width="3" stroke-linejoin="round"/>${d}${v}</svg>`}function De(e,t=220){let a=[...e].sort((p,k)=>(p.date||"").localeCompare(k.date||""));if(!a.length)return"";let o=720,r=40,l=o-16,s=16,n=t-30,v=Math.max(0,Math.floor(Math.min(...a.flatMap(p=>[p.overall,p.va,p.di,p.qa].filter(k=>k>0).map(Number)))/10)*10-10),d=p=>a.length===1?(r+l)/2:r+p*(l-r)/(a.length-1),u=p=>n-(p-v)/(100-v)*(n-s),m=[["overall","#6C3BFF",4],["va","#FF5A5F",2.5],["di","#1FD1A5",2.5],["qa","#3BA9FF",2.5]],c=[v,(v+100)/2,100].map(p=>`<line x1="${r}" x2="${l}" y1="${u(p)}" y2="${u(p)}" stroke="#17123A" stroke-opacity=".1"/><text x="${r-6}" y="${u(p)+4}" text-anchor="end" font-family="Space Mono,monospace" font-size="10.5" fill="#8A85A8">${Math.round(p)}</text>`).join(""),g=m.map(([p,k,M])=>{let L=a.map((P,Re)=>+P[p]>0?[d(Re),u(+P[p])]:null).filter(Boolean);return L.length?`<polyline points="${L.map(P=>P.join(",")).join(" ")}" fill="none" stroke="${k}" stroke-width="${M}" stroke-linejoin="round" stroke-linecap="round"/>`+L.map(P=>`<circle cx="${P[0]}" cy="${P[1]}" r="${p==="overall"?5.5:3.5}" fill="${k}" stroke="#17123A" stroke-width="2"/>`).join(""):""}).join(""),f=a.map((p,k)=>`<text x="${d(k)}" y="${t-8}" text-anchor="middle" font-family="DM Sans,sans-serif" font-size="11" font-weight="700" fill="#4B4670">${i((p.name||"").slice(0,12))}</text>`).join("");return`<svg viewBox="0 0 ${o} ${t}" style="width:100%;height:auto;display:block">${c}${g}${f}</svg>\n  <div class="legend" style="margin-top:6px"><span><i style="background:#6C3BFF"></i>Overall</span><span><i style="background:#FF5A5F"></i>VARC</span><span><i style="background:#1FD1A5"></i>DILR</span><span><i style="background:#3BA9FF"></i>QA</span></div>`}function rt(e,t=120,a="#6C3BFF",o=""){let r=t/2-9,l=2*Math.PI*r,s=Math.max(0,Math.min(100,e||0));return`<div class="ring" style="width:${t}px;height:${t}px"><svg width="${t}" height="${t}"><circle cx="${t/2}" cy="${t/2}" r="${r}" fill="#fff" stroke="#17123A" stroke-width="2.5"/><circle cx="${t/2}" cy="${t/2}" r="${r-5}" fill="none" stroke="#EEE" stroke-width="9"/><circle cx="${t/2}" cy="${t/2}" r="${r-5}" fill="none" stroke="${a}" stroke-width="9" stroke-linecap="round" stroke-dasharray="${2*Math.PI*(r-5)*s/100} 999" transform="rotate(-90 ${t/2} ${t/2})"/></svg><div class="c">${o}</div></div>`}var ye=e=>new Date(e).toISOString().replace(/[-:]/g,"").replace(/\\.\\d{3}/,"");function We(e,t){let a=new Date(e.start),o=new Date(a.getTime()+e.dur*6e4);return"https://calendar.google.com/calendar/render?"+new URLSearchParams({action:"TEMPLATE",text:`Mentor session \\u2014 ${t}`,dates:`${ye(a)}/${ye(o)}`,details:`${e.topic?"Topic: "+e.topic+`\n`:""}${e.link?"Join: "+e.link+`\n`:""}Booked via Profile Atlas`,location:e.link||""}).toString()}function Ce(e,t){let a=new Date(e.start),o=new Date(a.getTime()+e.dur*6e4),r=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Profile Atlas//EN","BEGIN:VEVENT","UID:"+e.id+"@profile-atlas","DTSTAMP:"+ye(Date.now()),"DTSTART:"+ye(a),"DTEND:"+ye(o),"SUMMARY:Mentor session \\u2014 "+t,"DESCRIPTION:"+(e.topic||"").replace(/\\n/g," ")+(e.link?" Join: "+e.link:""),"LOCATION:"+(e.link||""),"BEGIN:VALARM","TRIGGER:-PT30M","ACTION:DISPLAY","DESCRIPTION:Mentor session in 30 min","END:VALARM","END:VEVENT","END:VCALENDAR"].join(`\\r\n`),l=document.createElement("a");l.href=URL.createObjectURL(new Blob([r],{type:"text/calendar"})),l.download="mentor-session.ics",l.click()}function re(e,t=90,a=26,o="#6C3BFF"){let r=e.filter(v=>v>0);if(r.length<2)return"";let l=Math.min(...r)-2,s=Math.max(...r)+2,n=r.map((v,d)=>`${(d*(t-4)/(r.length-1)+2).toFixed(1)},${(a-2-(v-l)/(s-l)*(a-4)).toFixed(1)}`).join(" ");return`<svg class="spark" width="${t}" height="${a}"><polyline points="${n}" fill="none" stroke="${o}" stroke-width="2.5" stroke-linejoin="round"/></svg>`}var se=[[1,"\\u{1F629}","Drained"],[2,"\\u{1F615}","Low"],[3,"\\u{1F610}","Okay"],[4,"\\u{1F642}","Good"],[5,"\\u{1F525}","On fire"]],dt=[[1,"\\u{1F331}","Not started"],[2,"\\u{1F62C}","Shaky"],[3,"\\u{1F642}","Getting there"],[4,"\\u{1F4AA}","Solid"],[5,"\\u{1F680}","Panel-ready"]];var h=null,de=null,Xe=null,Qe=!1,ct=null,Ne={B:"Foundation",I:"Build",A:"Stretch"},je={B:"m",I:"s",A:"v"},F=["basics","goals",...W.map(e=>e.id),"review"];async function mt(e){de=e;let t=await $("/me");h={d:t,me:t.me,base:t.now,view:"map",step:0,qtab:"mine",qf:"all",rf:{q:"",cat:"all",mine:!1}},h.me.profile=h.me.profile||{},h.me.profile.pillars=h.me.profile.pillars||{},de.addEventListener("click",ia),de.addEventListener("input",la),de.addEventListener("change",ra),document.addEventListener("click",ca),document.addEventListener("input",ut),document.addEventListener("change",ut),window.addEventListener("hashchange",pt),pt(),clearInterval(ct),ct=setInterval(Gt,45e3),h.me.profile.stage||(location.hash="#/profile")}function pt(){let e=location.hash.replace(/^#\\/?/,"").split("/")[0]||"map";h.view=["map","profile","quests","mocks","mentor","resources"].includes(e)?e:"map",I(),window.scrollTo(0,0)}function q(e=!1){clearTimeout(Xe),Xe=setTimeout(async()=>{Qe=!0;try{let t=await $("/me/data","PUT",{profile:h.me.profile,mocks:h.me.mocks,plan:h.me.plan,checkins:h.me.checkins,name:h.me.name,phone:h.me.phone,base:h.base});Ke(t),Ve("Saved \\u2713")}catch(t){Ve("\\u26A0 "+t.message)}Qe=!1},e?0:650),Ve("Saving\\u2026")}function Ve(e){let t=y("#savestate");t&&(t.textContent=e)}function Ke(e){h.base=e.now;let t=new Set(h.me.plan.map(o=>o.aid)),a=(e.me.plan||[]).filter(o=>!t.has(o.aid));a.length&&(h.me.plan.push(...a),w(`Your mentor added ${a.length} quest${a.length>1?"s":""} for you`)),Object.assign(h.d,{alerts:e.alerts,open:e.open,mine:e.mine,mentor:e.mentor,resources:e.resources,cfg:e.cfg});for(let o of["notes","nudges","ack","help","mentorId"])h.me[o]=e.me[o];a.length&&I()}async function Gt(){if(!(Qe||Xe&&document.querySelector("#savestate")?.textContent==="Saving\\u2026"||document.hidden))try{let e=await $("/me"),t=JSON.stringify([h.d.open?.length,h.d.mine?.map(o=>o.status),h.me.notes?.length,h.me.nudges?.length]);Ke(e);let a=JSON.stringify([h.d.open?.length,h.d.mine?.map(o=>o.status),h.me.notes?.length,h.me.nudges?.length]);t!==a&&!y("#scrim")&&!["profile"].includes(h.view)&&I()}catch{}}async function Ee(e,t){let a=await $(e,"POST",t||{});return Ke(a),a}function Ht(e){let t=h.an,a=Te(h.me),o=Oe(a),r=(h.d.alerts||[]).length+(h.me.nudges||[]).filter(s=>!s.seen).length,l=[["map","\\u{1F5FA}\\uFE0F Map"],["profile","\\u{1F9ED} My profile"],["quests","\\u{1F3AF} Quests"],["mocks","\\u{1F4C8} Mocks"],["mentor","\\u{1F91D} Mentor"],["resources","\\u{1F517} Resources"]];return`<header class="top"><div class="wrap">\n    <a class="logo" href="#/map"><span class="mk">${oe()}</span><span class="t">Profile Atlas</span></a>\n    <nav class="nav">${l.map(([s,n])=>`<a href="#/${s}" class="${h.view===s?"on":""}">${n}${s==="mentor"&&r?`<span class="b">${r}</span>`:""}${s==="quests"&&h.me.plan.filter(v=>v.status==="doing").length?`<span class="b" style="background:var(--sky)">${h.me.plan.filter(v=>v.status==="doing").length}</span>`:""}</a>`).join("")}</nav>\n    <div class="me">\n      ${t.days!=null&&t.days>=0?`<span class="chip y mono" title="Days to CAT">\\u23F3 ${t.days}d</span>`:""}\n      <span class="chip v" title="${a} XP">${o.name}</span>\n      <button class="ava" data-a="account" title="Account">${i(z(h.me.name))}</button>\n    </div></div></header>\n  <main><div class="wrap">${e}</div></main>\n  <div class="footer">${i(h.d.cfg.program)} \\xB7 <span id="savestate">All changes saved</span></div>`}function oe(){return\'<svg width="22" height="22" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fff" stroke="#17123A" stroke-width="2"/><path d="M12 3 L15 12 L12 21 L9 12Z" fill="#FFC93C" stroke="#17123A" stroke-width="1.6"/><path d="M12 3 L15 12 L9 12Z" fill="#FF5A5F" stroke="#17123A" stroke-width="1.6"/></svg>\'}function I(){h.an=K(h.me,h.d.cfg);let e={map:Xt,profile:Yt,quests:Zt,mocks:ea,mentor:ta,resources:sa}[h.view];de.innerHTML=Ht(e())}function Vt(){let e=h.me,t=h.an;return[{ok:t.mappedN>=8,t:"Map at least 8 of your 10 territories",go:"#/profile",n:`${t.mappedN}/10`},{ok:e.mocks.length>0,t:"Log your latest mock score",go:"#/mocks"},{ok:e.plan.length>=3,t:"Pick 3 quests for the next month",go:"#/quests",n:`${Math.min(3,e.plan.length)}/3`},{ok:e.plan.some(a=>Object.values(a.steps||{}).some(Boolean)),t:"Tick off the first step of a quest",go:"#/quests"},{ok:(h.d.mine||[]).some(a=>a.status!=="cancelled"),t:"Book your first mentor review",go:"#/mentor"},{ok:e.checkins.length>0,t:"Do your weekly check-in",a:"checkin"}]}function Xt(){let e=h.an,t=h.me,a=i((t.name||"").split(" ")[0]),o=ee(t,e).filter(p=>!p.inPlan).slice(0,3),r=o[0]?.a.p||e.lacking[0]?.id||null,l=Vt(),s=l.filter(p=>p.ok).length,n=(t.nudges||[]).filter(p=>!p.seen),v=h.d.alerts||[],d=Te(t),u=Oe(d),m=[...t.checkins].sort((p,k)=>k.t-p.t)[0],c=!m||Date.now()-m.t>6*864e5,g=`<div class="pagehead"><div><div class="kick">Your profile atlas</div><h2 style="font-size:clamp(28px,4vw,40px)">Hi ${a} \\u2014 here\'s where you stand.</h2>\n    <p class="muted">${e.mappedN<10?`${10-e.mappedN} territor${10-e.mappedN===1?"y is":"ies are"} still in the fog. `:""}${e.days!=null&&e.days>=0?`<b>${e.days} days</b> to CAT (${V(e.catDate,{day:"numeric",month:"short",year:"numeric"})}).`:e.days!=null?"CAT is done \\u2014 interview season is the focus now.":""}</p></div>\n    <div class="row"><a class="btn" href="#/profile">\\u270F\\uFE0F Update my map</a><button class="btn ${c?"sun":""}" data-a="checkin">\\u{1F4DD} Weekly check-in</button></div></div>`;for(let p of n)g+=`<div class="card tint-v banner" style="margin-bottom:14px"><div class="ava" style="background:var(--violet);color:#fff">${i(z(p.by))}</div><div class="grow"><b>${i(p.by)}</b> <span class="faint small">${te(p.t)}</span><div>${i(p.text)}</div></div>${p.book?\'<a class="btn pri" href="#/mentor">Pick a slot</a>\':""}<button class="btn sm" data-a="nudge-seen">Got it</button></div>`;v.length&&(g+=`<div class="card tint-c banner pulse" style="margin-bottom:16px"><div style="font-size:34px">\\u{1F9ED}</div><div class="grow"><b>Time to talk to your mentor.</b> <span class="muted">${i(v[0].title)}${v.length>1?` \\xB7 +${v.length-1} more reason${v.length>2?"s":""}`:""}</span></div><a class="btn hot" href="#/mentor">Book a session \\u2192</a></div>`),e.mappedN===0&&(g+=`<div class="card tint-y" style="padding:30px;margin-bottom:18px"><div class="grid g2" style="align-items:center"><div><div class="kick mono small" style="color:var(--violet)">STEP 1 OF YOUR EXPEDITION</div><h2 style="font-size:34px;margin:6px 0">Your map is all fog. Let\'s chart it.</h2><p class="muted">Ten quick territories \\u2014 tap what\'s true, rate yourself, add your best proof. Takes about 12 minutes and it saves as you go.</p><a class="btn pri lg" href="#/profile" style="margin-top:10px">Start mapping \\u2192</a></div><div>${ae(e)}</div></div></div>`),g+=`<div class="grid g3">\n    <div class="card span2"><div class="row between"><h3>The atlas</h3>${qe()}</div>${ae(e,{pin:r})}<p class="small muted" style="margin:0">Tap any territory to see what\'s there, what\'s missing and how to fix it. ${r?\'The <b style="color:var(--coral)">START HERE</b> pin marks your highest-value move.\':""}</p>\n    <div class="grid g2" style="gap:0 22px;margin-top:10px">${e.pillars.map(p=>`<div class="pbar" data-hex="${p.id}"><span>${S[p.id]}</span><span>${i(p.short)}</span>${p.score==null?\'<span class="small faint">fog</span><span></span>\':`<div class="bar"><i style="width:${p.score}%;background:${p.level.color}"></i></div><span class="mono">${p.score}</span>`}</div>`).join("")}</div></div>\n    <div class="card stack">\n      <div class="row" style="gap:16px">${rt(e.overall,118,"#6C3BFF",`<div class="mono tiny faint">READINESS</div><div style="font:800 34px var(--fd)">${e.overall??"\\u2014"}</div>`)}\n      <div class="stack grow" style="margin:0"><div><div class="row between small"><b>\\u{1F3D4} Gate index</b><b>${e.gate??"\\u2014"}</b></div><div class="bar thin"><i style="width:${e.gate||0}%;background:var(--coral)"></i></div></div>\n      <div><div class="row between small"><b>\\u{1F33E} Profile index</b><b>${e.prof??"\\u2014"}</b></div><div class="bar thin"><i style="width:${e.prof||0}%;background:var(--mint)"></i></div></div>\n      <div><div class="row between small"><b>\\u{1F5FA} Mapped</b><b>${e.mappedN}/10</b></div><div class="bar thin"><i style="width:${e.mappedN*10}%;background:var(--sky)"></i></div></div></div></div>\n      <div class="card flat tint-v" style="padding:12px"><div class="row between"><b>\\u{1F3C5} ${u.name}</b><span class="mono small">${d} XP</span></div><div class="bar thin" style="margin-top:6px"><i style="width:${u.next?Math.round((d-u.min)/(u.next.min-u.min)*100):100}%"></i></div><div class="tiny muted" style="margin-top:4px">${u.next?`${u.next.min-d} XP to ${u.next.name} \\u2014 earn it by ticking steps, logging mocks and checking in.`:"Top rank. Legendary."}</div></div>\n      <div><div class="row between"><b>Getting started</b><span class="chip ${s===l.length?"m":"y"}">${s}/${l.length}</span></div>\n      ${l.map(p=>`<div class="check ${p.ok?"on":""}"><span class="bx">${p.ok?"\\u2713":""}</span><span class="t grow small" style="font-weight:600">${p.t}</span>${p.ok?"":p.a?`<button class="btn sm" data-a="${p.a}">Go</button>`:`<a class="btn sm" href="${p.go}">Go</a>`}</div>`).join("")}</div>\n    </div></div>`,g+=`<div class="card" style="margin-top:16px"><div class="row between"><div><h3>Route to your target</h3><div class="small muted">Target: <b>${i(e.tier.label)}</b> \\u2014 needs about <b>${e.tier.overall}</b> percentile</div></div>\n    ${e.proj?`<div class="row"><span class="chip ${e.gap>0?"c":"m"}">${e.gap>0?`${e.gap} pts to go`:"On target \\u{1F3AF}"}</span>${e.trend!=null?`<span class="chip ${e.trend>=0?"m":"c"}">${e.trend>=0?"\\u25B2":"\\u25BC"} ${Math.abs(e.trend)} since last mock</span>`:""}</div>`:\'<a class="btn sm sun" href="#/mocks">Log a mock to place yourself</a>\'}</div>\n    ${lt(e)}\n    ${e.proj?`<p class="small muted" style="margin:0">Projected <b>${e.proj.lo}\\u2013${e.proj.hi}</b> (${i(e.projSrc)}). At this level: <b>${i(e.fit.nm)}</b> \\u2014 ${i(e.fit.note)}</p>`:""}</div>`;let f=(p,k)=>p.length?p.map(M=>`<div class="pbar" data-hex="${M.id}"><span>${S[M.id]}</span><span>${i(M.short)}</span>${k==="fog"?\'<span class="small faint">not mapped yet</span><span></span>\':`<div class="bar"><i style="width:${M.score}%;background:${M.level.color}"></i></div><span class="mono">${M.score}</span>`}</div>${k==="lack"&&M.missing[0]?`<div class="tiny muted" style="margin:-4px 0 8px 36px">Missing: ${i(M.missing[0])}</div>`:""}`).join(""):`<div class="small muted">${k==="strong"?"Nothing at 75+ yet \\u2014 every Cartographer starts somewhere.":k==="lack"?"No territory below 55. Nice.":"Everything is mapped. \\u{1F389}"}</div>`;return g+=`<div class="grid g3" style="margin-top:16px">\n    <div class="card tint-m"><h3>\\u{1F4AA} Strong ground</h3><p class="small muted">What a panel will already respect.</p>${f(e.strengths,"strong")}</div>\n    <div class="card tint-c"><h3>\\u{1F6A7} Where you\'re lacking</h3><p class="small muted">Below 55 \\u2014 this is where the plan goes.</p>${f(e.lacking,"lack")}</div>\n    <div class="card"><h3>\\u{1F32B} Still in the fog</h3><p class="small muted">Unmapped territories count as unknown risk.</p>${f(e.fog,"fog")}${e.fog.length?\'<a class="btn sm pri" style="margin-top:8px" href="#/profile" data-a="wz-fog">Map them \\u2192</a>\':""}</div></div>`,g+=`<div class="sec-title"><h3>\\u{1F3AF} Your next best moves</h3><span class="ln"></span><a class="btn sm" href="#/quests" data-a="qtab" data-x="sugg">See all suggestions</a></div>\n    ${o.length?`<div class="grid g3">${o.map((p,k)=>Ue(p,k===0)).join("")}</div>`:`<div class="card empty">You\'ve added every suggested quest. Go do them! \\u{1F4A5}</div>`}`,g+=`<div class="grid g2" style="margin-top:16px"><div class="card"><h3>\\u{1F4DD} Weekly check-in</h3>${m?`<p class="small muted">Last: ${te(m.t)} \\xB7 ${se[m.mood-1][1]} ${se[m.mood-1][2]} \\xB7 ${m.hours||0} hrs studied</p>${m.win?`<p>\\u{1F3C1} <b>Win:</b> ${i(m.win)}</p>`:""}${m.note&&m.note!==m.win?`<p>\\u{1F9F1} <b>Blocker:</b> ${i(m.note)}</p>`:""}`:\'<p class="muted">Two minutes, once a week. Your mentor sees the trend and steps in early if you are stuck or low.</p>\'}\n      <button class="btn ${c?"sun":""}" data-a="checkin">${c?"Check in now":"Check in again"}</button>\n      ${t.checkins.length>1?`<div style="margin-top:10px" class="row small muted">Hours trend ${re([...t.checkins].sort((p,k)=>p.t-k.t).map(p=>+p.hours||.1),120,30,"#1FD1A5")} Mood ${re([...t.checkins].sort((p,k)=>p.t-k.t).map(p=>p.mood),120,30,"#FF5A5F")}</div>`:""}</div>\n    <div class="card"><h3>\\u2696\\uFE0F Balance</h3>${be(e,300)}</div></div>`,g}function Ue(e,t){let a=e.a,o=R[a.p];return`<div class="card quest ${t?"tint-y":""}">${t?\'<span class="chip c tag">\\u2605 Top pick</span>\':""}\n    <div class="ql"><span class="chip soft">${S[a.p]} ${i(D[a.p])}</span><span class="chip ${je[a.l]}">${Ne[a.l]}</span>${a.cost==="paid"?\'<span class="chip y">\\u20B9 paid</span>\':""}</div>\n    <h3>${i(a.t)}</h3><p class="small muted" style="margin:0">${i(a.why)}</p>\n    <div class="small"><b>Why you:</b> ${i(e.reason)}</div>\n    <div class="row small faint mono">\\u23F1 ${a.wh} h/wk \\xB7 ${a.mw} wks \\xB7 impact ${"\\u25CF".repeat(a.lev)}${"\\u25CB".repeat(5-a.lev)}</div>\n    <div class="row" style="margin-top:auto">${e.inPlan?`<button class="btn sm" data-a="quest" data-x="${a.id}">Open</button><span class="chip m">In your plan</span>`:`<button class="btn sm pri" data-a="add" data-x="${a.id}">+ Add quest</button><button class="btn sm" data-a="quest" data-x="${a.id}">Details</button>`}</div></div>`}function Qt(e){let t=h.an,a=t.pillars.find(s=>s.id===e),o=R[e],r=ee(h.me,t).filter(s=>s.a.p===e).slice(0,4),l=vt({p:e}).slice(0,6);N(`<div class="row" style="gap:14px"><div style="font-size:42px">${S[e]}</div><div class="grow"><div class="kick mono tiny" style="color:var(--violet)">${o.fam==="gate"?"THE GATE RANGE":"THE PROFILE PLAINS"} \\xB7 weight ${o.w}</div><h2>${i(o.name)}</h2></div><div class="scorepill">${we(a.score,44)}${a.level.name}</div></div>\n    <p class="muted">${i(o.tests)}</p>${a.sources.length?`<p class="tiny faint mono">Based on: ${a.sources.join(" + ")}</p>`:""}\n    ${a.claim?`<div class="card flat tint-v small" style="padding:10px 14px"><b>Your best proof:</b> ${i(a.claim)}</div>`:""}\n    <div class="grid g2" style="margin-top:14px"><div><h4>\\u2705 What\'s there</h4>${a.have.length?a.have.map(s=>`<div class="small" style="padding:4px 0">\\u2713 ${i(s)}</div>`).join(""):\'<div class="small muted">Nothing ticked yet.</div>\'}</div>\n    <div><h4>\\u274C What\'s missing</h4>${a.missing.slice(0,6).map(s=>`<div class="small" style="padding:4px 0">\\u25CB ${i(s)}</div>`).join("")||\'<div class="small muted">Nothing \\u2014 fully stocked.</div>\'}</div></div>\n    <div class="sec-title"><h3>Quests for this territory</h3><span class="ln"></span></div>\n    <div class="stack">${r.map(s=>`<div class="row card flat" style="padding:10px 14px"><span class="chip ${je[s.a.l]}">${Ne[s.a.l]}</span><b class="grow">${i(s.a.t)}</b>${s.inPlan?\'<span class="chip m">In plan</span>\':`<button class="btn sm pri" data-a="add" data-x="${s.a.id}">+ Add</button>`}<button class="btn sm" data-a="quest" data-x="${s.a.id}">Details</button></div>`).join("")}</div>\n    ${l.length?`<div class="sec-title"><h3>Where to do it</h3><span class="ln"></span></div><div class="grid g2">${l.map(gt).join("")}</div>`:""}\n    <div class="row" style="margin-top:16px"><button class="btn pri" data-a="wz-go" data-x="${e}">\\u270F\\uFE0F Re-map this territory</button>${o.sp?`<button class="btn" data-a="pi-qs" data-x="${e}">\\u{1F3A4} Interview questions</button>`:""}</div>`)}function Yt(){let e=F[h.step],t=h.me.profile,a=h.an,o=(l,s)=>{let n=l==="basics"?!!t.stage:l==="goals"?!!t.target:l==="review"?a.mappedN===10:!!(t.pillars[l]&&(t.pillars[l].self!=null||(t.pillars[l].ev||[]).length)),v=l==="basics"?"\\u{1F464}":l==="goals"?"\\u{1F3AF}":l==="review"?"\\u{1F3C1}":S[l];return`${s?\'<span class="wz-line"></span>\':""}<button class="wz-pin ${s===h.step?"cur":n?"done":""}" data-a="wz" data-x="${s}" title="${l==="basics"?"About you":l==="goals"?"Goals & marks":l==="review"?"Review":R[l].name}">${v}</button>`},r="";return e==="basics"?r=Kt():e==="goals"?r=Ut():e==="review"?r=Jt():r=zt(e),`<div class="pagehead"><div><div class="kick">Mapping expedition \\xB7 step ${h.step+1} of ${F.length}</div><h2>Chart your profile</h2></div><div class="small muted">Saves automatically as you tap.</div></div>\n    <div class="card" style="padding:10px 14px;margin-bottom:16px"><div class="wz-track">${F.map(o).join("")}</div><div class="bar thin"><i style="width:${Math.round(h.step/(F.length-1)*100)}%"></i></div></div>\n    ${r}\n    <div class="row between" style="margin-top:18px"><button class="btn" data-a="wz" data-x="${h.step-1}" ${h.step===0?"disabled":""}>\\u2190 Back</button>\n    ${h.step<F.length-1?`<div class="row">${F[h.step].startsWith("G-")||F[h.step].startsWith("P-")?`<button class="btn ghost" data-a="wz" data-x="${h.step+1}">Skip for now</button>`:""}<button class="btn pri lg" data-a="wz" data-x="${h.step+1}">Next \\u2192</button></div>`:\'<a class="btn pri lg" href="#/map">See my map \\u2192</a>\'}</div>`}var ce=(e,t,a,o={})=>`<div class="opt-grid">${Object.entries(t).map(([r,l])=>`<button class="opt ${a===r?"on":""}" data-a="setp" data-k="${e}" data-x="${r}">${i(typeof l=="string"?l:l.label)}${o[r]?`<small>${i(o[r])}</small>`:""}</button>`).join("")}</div>`;function Kt(){let e=h.me.profile;return`<div class="card stack"><h2>\\u{1F464} First, who\'s on this expedition?</h2>\n    <div class="grid g2"><div class="field"><label class="f">Your name</label><input class="inp" data-bind="name" value="${i(h.me.name)}"></div><div class="field"><label class="f">Phone (optional, for your mentor)</label><input class="inp" data-bind="phone" value="${i(h.me.phone||"")}" placeholder="+91\\u2026"></div></div>\n    <div><label class="f">Where are you right now?</label>${ce("stage",J,e.stage)}</div>\n    <div><label class="f">Your degree</label>${ce("degree",Pe,e.degree)}</div>\n    ${e.stage==="working"?`<div><label class="f">Full-time work experience</label>${ce("worky",at,e.worky)}</div>`:""}\n    <div class="grid g2"><div class="field"><label class="f">College / company</label><input class="inp" data-bind="profile.org" value="${i(e.org||"")}" placeholder="e.g. NIT Trichy / Deloitte"></div><div class="field"><label class="f">City</label><input class="inp" data-bind="profile.city" value="${i(e.city||"")}"></div></div></div>`}function Ut(){let e=h.me.profile;return`<div class="card stack"><h2>\\u{1F3AF} Where are you headed?</h2>\n    <div><label class="f">Target schools</label>${ce("target",ie,e.target,Object.fromEntries(Object.entries(ie).map(([t,a])=>[t,`needs ~${a.overall} percentile`])))}</div>\n    <div class="grid g3"><div class="field"><label class="f">Your CAT date</label><input class="inp" type="date" data-bind="profile.catDate" value="${i(e.catDate||h.d.cfg.catDate||"")}"></div>\n    <div><label class="f">Hours a week you can give</label>${ce("hours",{5:"\\u22645 hrs",10:"~10 hrs",15:"~15 hrs",25:"20+ hrs"},String(e.hours||""))}</div>\n    <div><label class="f">Budget for courses</label>${ce("budget",{free:"Free resources only",paid:"Open to paid"},e.budget||"free")}</div></div>\n    <h3 style="margin-top:6px">\\u{1F393} Your marks</h3><p class="small muted" style="margin:0">IIM shortlists weigh these. Percent, or CGPA out of 10.</p>\n    <div class="grid g3"><div class="field"><label class="f">Class 10</label><input class="inp" inputmode="decimal" data-bind="profile.x10" value="${i(e.x10||"")}" placeholder="e.g. 92"></div>\n    <div class="field"><label class="f">Class 12</label><input class="inp" inputmode="decimal" data-bind="profile.x12" value="${i(e.x12||"")}" placeholder="e.g. 88"></div>\n    <div class="field"><label class="f">Graduation (so far)</label><input class="inp" inputmode="decimal" data-bind="profile.ug" value="${i(e.ug||"")}" placeholder="e.g. 7.8 or 74"></div></div>\n    <div class="field"><label class="f">In one line \\u2014 why an MBA? (rough is fine, we\'ll sharpen it)</label><textarea class="inp" data-bind="profile.why" placeholder="e.g. I want to move from writing code to deciding what gets built.">${i(e.why||"")}</textarea></div></div>`}function zt(e){let t=R[e],a=h.me.profile.pillars[e]||{},o=h.an.pillars.find(r=>r.id===e);return`<div class="card stack"><div class="row" style="gap:14px;align-items:flex-start"><div style="font-size:46px;line-height:1">${S[e]}</div><div class="grow"><div class="kick mono tiny" style="color:var(--violet)">${t.fam==="gate"?"THE GATE RANGE \\u2014 clears the cut-off":"THE PROFILE PLAINS \\u2014 wins the interview"}</div><h2>${i(t.name)}</h2><p class="muted" style="margin:4px 0 0">${i(t.tests)}</p></div><div class="scorepill" id="livescore">${we(o.score,40)}<span>${o.level.name}</span></div></div>\n    <div><h4 style="margin-bottom:8px">1 \\xB7 ${i(t.self)}</h4><div class="faces">${dt.map(([r,l,s])=>`<button class="face ${a.self===r?"on":""}" data-a="self" data-k="${e}" data-x="${r}"><span class="em">${l}</span><span class="lb">${s}</span></button>`).join("")}</div></div>\n    <div><h4 style="margin-bottom:8px">2 \\xB7 Tap everything that\'s true today <span class="faint small">(${(a.ev||[]).length}/${t.ev.length})</span></h4><div class="evs">${t.ev.map(r=>`<div class="ev ${(a.ev||[]).includes(r.id)?"on":""}" data-a="ev" data-k="${e}" data-x="${r.id}"><span class="ck">${(a.ev||[]).includes(r.id)?"\\u2713":""}</span><span>${i(r.t)}</span></div>`).join("")}</div></div>\n    <div class="field"><h4 style="margin-bottom:8px">3 \\xB7 ${i(t.claim)}</h4><textarea class="inp" data-bind="pill.${e}.claim" placeholder="${i(t.claimEg)}">${i(a.claim||"")}</textarea></div>\n    <details ${a.probe&&Object.values(a.probe).some(Boolean)?"open":""}><summary style="cursor:pointer;font-weight:700">\\u{1F50D} Go deeper (optional \\u2014 your mentor will read this)</summary><div class="stack" style="margin-top:10px">${t.probe.map(r=>`<div class="field"><label class="f">${i(r.q)}</label><textarea class="inp" data-bind="probe.${e}.${r.id}" placeholder="${i(r.ph)}">${i(a.probe?.[r.id]||"")}</textarea></div>`).join("")}</div></details>\n    ${_t[e]?\'<div class="small muted">\\u{1F4A1} Your mock sectional percentiles also feed this score \\u2014 log them in <a href="#/mocks">Mocks</a>.</div>\':""}</div>`}var _t={"G-QA":1,"G-VA":1,"G-DI":1,"G-MK":1};function Jt(){let e=h.an;return`<div class="grid g2"><div class="card"><h2>\\u{1F3C1} Your map, charted</h2><p class="muted">${e.mappedN}/10 territories mapped. ${e.fog.length?"Tap a fogged one to map it.":"Every territory has a reading. \\u{1F389}"}</p>\n    ${e.pillars.map(t=>`<div class="pbar" data-a="wz-go" data-x="${t.id}"><span>${S[t.id]}</span><span>${i(t.short)}</span>${t.score==null?\'<span class="small faint">unmapped \\u2014 tap to map</span><span></span>\':`<div class="bar"><i style="width:${t.score}%;background:${t.level.color}"></i></div><span class="mono">${t.score}</span>`}</div>`).join("")}</div>\n    <div class="card">${be(e,340)}<div class="row" style="justify-content:center;margin-top:10px"><a class="btn pri lg" href="#/map">Open my atlas \\u2192</a></div></div></div>`}function Zt(){let e=h.me.plan,t=h.an,a=e.filter(d=>d.status==="done").length,o=`<div class="pagehead"><div><div class="kick">Action plan</div><h2>Quests</h2><p class="muted" style="margin:0">Each quest is a step-by-step guide with links to where you can do it. Update it as you go \\u2014 your mentor sees it.</p></div>\n    <div class="kpis" style="min-width:min(100%,420px)"><div class="kpi stat"><span class="n">${e.filter(d=>d.status!=="done").length}</span><span class="l">Active</span></div><div class="kpi stat"><span class="n">${a}</span><span class="l">Completed</span></div><div class="kpi stat"><span class="n">${Te(h.me)}</span><span class="l">XP</span></div></div></div>\n    <div class="tabs" style="margin-bottom:16px">${[["mine",`My quests (${e.length})`],["sugg","Suggested for me"],["all","Browse all 47"]].map(([d,u])=>`<button class="${h.qtab===d?"on":""}" data-a="qtab" data-x="${d}">${u}</button>`).join("")}</div>`;if(h.qtab==="mine")return e.length?o+`<div class="kan">${[["todo","\\u{1F4CB} To do"],["doing","\\u26A1 Doing"],["blocked","\\u{1F9F1} Blocked"],["done","\\u2705 Done"]].map(([u,m])=>{let c=e.filter(g=>(g.status||"todo")===u);return`<div class="col"><h4>${m}<span class="chip soft">${c.length}</span></h4>${c.map(g=>{let f=O[g.aid],p=ve(g);return`<div class="qmini" data-a="quest" data-x="${g.aid}"><div class="row between"><span class="chip soft">${S[f.p]} ${i(D[f.p])}</span>${g.by?`<span class="chip v" title="Assigned by ${i(g.by)}">mentor</span>`:""}</div><div style="font-weight:800;margin:6px 0;font-family:var(--fd);font-size:16px;line-height:1.2">${i(f.t)}</div><div class="bar thin"><i style="width:${p}%;background:${u==="done"?"var(--mint)":u==="blocked"?"var(--coral)":"var(--violet)"}"></i></div><div class="row between tiny muted" style="margin-top:4px"><span>${p}% \\xB7 ${(g.log||[]).length} update${(g.log||[]).length===1?"":"s"}</span>${g.due?`<span>due ${V(g.due)}</span>`:""}</div></div>`}).join("")||\'<div class="tiny faint" style="padding:8px">\\u2014</div>\'}</div>`}).join("")}</div>`:o+\'<div class="card empty"><div class="big">\\u{1F3AF}</div><h3>No quests yet</h3><p>Pick 3 from your suggestions \\u2014 the ones with the biggest gap-to-effort payoff are at the top.</p><button class="btn pri" data-a="qtab" data-x="sugg">See suggestions</button></div>\';let r=ee(h.me,t),l=h.qf,s=`<div class="row gap8" style="margin-bottom:14px"><button class="chip ${l==="all"?"v":""}" data-a="qf" data-x="all">All territories</button>${W.map(d=>`<button class="chip ${l===d.id?"v":""}" data-a="qf" data-x="${d.id}">${S[d.id]} ${i(D[d.id])}</button>`).join("")}</div>`;if(h.qtab==="sugg"){let d=r.filter(u=>l==="all"||u.a.p===l).slice(0,l==="all"?12:10);return o+s+`<p class="small muted">Ranked by what moves your profile most for the effort, given your gaps, stage${t.days!=null&&t.days<=60?" and how close CAT is":""}.</p><div class="grid g3">${d.map((u,m)=>Ue(u,m===0&&l==="all")).join("")}</div>`}let n=Me.filter(d=>l==="all"||d.p===l),v=new Set(e.map(d=>d.aid));return o+s+`<div class="card" style="padding:6px 14px">${n.map(d=>`<div class="row" style="padding:10px 0;border-bottom:1.5px dashed #DDD8EE"><span style="width:26px">${S[d.p]}</span><span class="chip ${je[d.l]}">${Ne[d.l]}</span><b class="grow" style="min-width:200px">${i(d.t)}</b><span class="tiny mono faint">${d.wh}h/wk\\xB7${d.mw}w</span>${v.has(d.id)?\'<span class="chip m">In plan</span>\':`<button class="btn sm pri" data-a="add" data-x="${d.id}">+ Add</button>`}<button class="btn sm" data-a="quest" data-x="${d.id}">Details</button></div>`).join("")}</div>`}function vt({p:e,aid:t}){let a=h.d.resources||[],o=t?a.filter(l=>(l.actions||[]).includes(t)):[],r=a.filter(l=>(l.pillars||[]).includes(e)&&!o.includes(l));return[...o,...r]}var gt=e=>`<a class="reslink" href="${i(e.url)}" target="_blank" rel="noopener"><span>${e.free?"\\u{1F193}":"\\u{1F4B3}"}</span><span><span style="display:block">${i(e.name)}</span><span class="tiny muted" style="font-weight:500">${i(e.desc||le(e.url))}</span></span><span class="arr">\\u2197</span></a>`;function ke(e){let t=O[e],a=h.me.plan.find(n=>n.aid===e),o=me(t),r=vt({p:t.p,aid:e}).slice(0,6),l=a?ve(a):0,s=N(`<div class="ql"><span class="chip soft">${S[t.p]} ${i(R[t.p].name)}</span><span class="chip ${je[t.l]}">${Ne[t.l]}</span>${t.cost==="paid"?\'<span class="chip y">\\u20B9 paid</span>\':\'<span class="chip m">free</span>\'}${a?.by?`<span class="chip v">Assigned by ${i(a.by)}</span>`:""}</div>\n    <h2 style="margin:10px 0 6px;font-size:30px">${i(t.t)}</h2><p class="muted" style="margin:0">${i(t.why)}</p>\n    ${a?.mentorNote?`<div class="card flat tint-v small" style="margin-top:10px;padding:10px 14px"><b>Mentor\'s note:</b> ${i(a.mentorNote)}</div>`:""}\n    <div class="row small mono faint" style="margin:10px 0">\\u23F1 ${t.wh} h/wk \\xB7 ${t.mw} weeks \\xB7 \\u{1F4E6} proof: ${i(t.art)}</div>\n    ${a?`<div class="card flat" style="padding:12px 14px;margin-bottom:14px"><div class="row between"><div class="qstatus">${[["todo","To do"],["doing","Doing"],["blocked","Blocked"],["done","Done \\u2713"]].map(([n,v])=>`<button class="${n} ${(a.status||"todo")===n?"on":""}" data-q="status" data-x="${n}">${v}</button>`).join("")}</div><div class="row small"><label class="f" style="margin:0">Target date</label><input type="date" class="inp" style="width:auto;padding:5px 8px" data-q="due" value="${i(a.due||"")}"></div></div>\n      ${a.status==="blocked"?`<textarea class="inp" style="margin-top:10px;min-height:60px" data-q="blockNote" placeholder="What\'s blocking you? Your mentor gets an alert.">${i(a.blockNote||"")}</textarea>`:""}\n      <div class="row" style="margin-top:10px"><div class="bar grow"><i style="width:${l}%"></i></div><b class="mono">${l}%</b></div></div>`:""}\n    <h3>Step-by-step</h3><div class="steps" style="margin-top:10px">${o.map((n,v)=>`<div class="step ${a?.steps?.[n.k]?"on":""}"><button class="num" ${a?`data-q="step" data-x="${n.k}"`:"disabled"} title="Mark done">${a?.steps?.[n.k]?"\\u2713":v+1}</button><div class="grow"><b>${i(n.t)}</b><div class="small muted">${i(n.d)}</div>\n      ${n.k==="pi"?`<div class="stack" style="margin-top:8px">${t.pq.map((d,u)=>`<div><label class="f">\\u{1F3A4} ${i(d)}</label>${a?`<textarea class="inp" style="min-height:56px" data-q="ans" data-x="${u}" placeholder="Your answer, in your words">${i(a.answers?.[u]||"")}</textarea>`:""}</div>`).join("")}</div>`:""}</div></div>`).join("")}</div>\n    ${r.length?`<h3 style="margin-top:18px">\\u{1F517} Where to do it</h3><div class="grid g2" style="margin-top:10px">${r.map(gt).join("")}</div>`:""}\n    ${a?`<h3 style="margin-top:18px">\\u{1F4D3} Progress log</h3><p class="small muted" style="margin:2px 0 8px">What did you do? Paste a link as proof (certificate, Drive, LinkedIn post, GitHub, Unstop result\\u2026).</p>\n      <div class="card flat" style="padding:12px"><textarea class="inp" id="lg-t" style="min-height:60px" placeholder="e.g. Did 3 timed RC sets, accuracy 62% \\u2192 70%."></textarea><div class="row" style="margin-top:8px"><input class="inp grow" id="lg-l" placeholder="https://\\u2026 (optional)"><button class="btn pri" data-q="log">Post update</button></div></div>\n      <div class="log" style="margin-top:14px">${[...a.log||[]].reverse().map(n=>`<div class="it"><div class="tiny faint mono">${T(n.t)}</div><div>${i(n.text)}</div>${n.link?`<a class="small" href="${i(n.link)}" target="_blank" rel="noopener">\\u{1F517} ${i(le(n.link))}</a>`:""}</div>`).join("")||\'<div class="small faint">No updates yet.</div>\'}</div>\n      <div class="row between" style="margin-top:16px"><button class="btn ghost small" data-q="remove">Remove quest</button><button class="btn" data-close>Close</button></div>`:`<div class="row" style="margin-top:18px"><button class="btn pri lg" data-a2="add" data-x="${t.id}">+ Add to my quests</button></div>`}`);s.dataset.quest=e}function ft(e){if(h.me.plan.find(o=>o.aid===e))return;let t=O[e],a=new Date(Date.now()+t.mw*7*864e5).toISOString().slice(0,10);h.me.plan.push({aid:e,status:"todo",steps:{},log:[],answers:{},addedAt:Date.now(),due:a}),q(),w("Quest added \\u{1F3AF} +XP when you tick steps")}function ea(){let e=Z(h.me),t=e[e.length-1],a=e.length?Math.max(...e.map(s=>+s.overall||0)):null,o=s=>{let n=e.slice(-3).map(v=>+v[s]).filter(v=>v>0);return n.length?Math.round(n.reduce((v,d)=>v+d,0)/n.length):null},r=[["va","VARC"],["di","DILR"],["qa","QA"]].map(([s,n])=>[n,o(s)]).filter(s=>s[1]!=null).sort((s,n)=>s[1]-n[1]),l=e.filter(s=>s.analysed).length;return`<div class="pagehead"><div><div class="kick">Test craft</div><h2>Mock tracker</h2><p class="muted" style="margin:0">Every mock you log sharpens your projected percentile and feeds your Quant, Verbal, DILR and Mock-craft territories.</p></div></div>\n    <div class="kpis" style="margin-bottom:16px"><div class="kpi stat"><span class="n">${e.length}</span><span class="l">Mocks logged</span></div><div class="kpi stat"><span class="n">${t?.overall??"\\u2014"}</span><span class="l">Latest %ile</span></div><div class="kpi stat"><span class="n">${a||"\\u2014"}</span><span class="l">Best %ile</span></div><div class="kpi stat"><span class="n">${e.length?Math.round(l/e.length*100)+"%":"\\u2014"}</span><span class="l">Analysed</span></div><div class="kpi stat"><span class="n" style="font-size:24px">${r[0]?r[0][0]:"\\u2014"}</span><span class="l">Weakest (last 3)</span></div></div>\n    <div class="grid g3"><div class="card"><h3>\\u2795 Log a mock</h3><div class="stack" style="margin-top:10px">\n      <div class="grid g2"><div><label class="f">Name</label><input class="inp" id="mk-name" placeholder="AIMCAT 2611"></div><div><label class="f">Date</label><input class="inp" type="date" id="mk-date" value="${new Date().toISOString().slice(0,10)}"></div></div>\n      <div class="grid g3">${[["va","VARC %ile"],["di","DILR %ile"],["qa","QA %ile"]].map(([s,n])=>`<div><label class="f">${n}</label><input class="inp" inputmode="decimal" id="mk-${s}"></div>`).join("")}</div>\n      <div class="grid g2"><div><label class="f">Overall %ile</label><input class="inp" inputmode="decimal" id="mk-overall"></div><div><label class="f">Score (optional)</label><input class="inp" inputmode="decimal" id="mk-score"></div></div>\n      <label class="row small" style="font-weight:700"><input type="checkbox" id="mk-an" style="width:18px;height:18px"> I\'ve analysed it (90-min review)</label>\n      <input class="inp" id="mk-note" placeholder="One lesson from this mock (optional)">\n      <div id="mk-err"></div><button class="btn pri" data-a="mock-add">Add mock (+15 XP)</button></div></div>\n    <div class="card span2"><h3>\\u{1F4C8} Trend</h3>${e.length?De(e):\'<div class="empty"><div class="big">\\u{1F4C9}</div>Log your first mock to see the trend line.</div>\'}</div></div>\n    ${e.length?`<div class="card" style="margin-top:16px;padding:0"><div class="tscroll" style="border:0;max-height:none"><table class="tbl"><thead><tr><th>Date</th><th>Mock</th><th>VARC</th><th>DILR</th><th>QA</th><th>Overall</th><th>Score</th><th>Analysed</th><th>Lesson</th><th></th></tr></thead><tbody>\n      ${[...e].reverse().map(s=>`<tr><td class="mono small">${V(s.date)}</td><td><b>${i(s.name)}</b></td>${["va","di","qa","overall"].map(n=>`<td><span class="heat" style="background:${s[n]?B(+s[n]).color:"#eee"};${s[n]&&+s[n]<55||+s[n]>=55&&+s[n]<75?"color:#fff":""}">${s[n]||"\\u2014"}</span></td>`).join("")}<td class="mono">${s.score||"\\u2014"}</td><td><button class="chip ${s.analysed?"m":""}" data-a="mock-an" data-x="${s.id}">${s.analysed?"\\u2713 yes":"mark"}</button></td><td class="small muted">${i(s.note||"")}</td><td><button class="btn sm ghost" data-a="mock-del" data-x="${s.id}">\\u2715</button></td></tr>`).join("")}</tbody></table></div></div>`:""}\n    <div class="sec-title"><h3>Mock-craft quests</h3><span class="ln"></span></div><div class="grid g3">${ee(h.me,h.an).filter(s=>s.a.p==="G-MK").slice(0,3).map(s=>Ue(s)).join("")}</div>`}function ta(){let e=h.d.mentor,t=h.d.alerts||[],a=h.d.open||[],o=h.d.mine||[],r=Date.now(),l=o.filter(d=>d.status==="booked"&&Date.parse(d.start)+d.dur*6e4>r),s=o.filter(d=>!l.includes(d)),n={};for(let d of a){let u=new Date(d.start).toDateString();(n[u]=n[u]||[]).push(d)}let v=[...h.me.notes||[]].reverse();return`<div class="pagehead"><div><div class="kick">Mentor intervention</div><h2>Your mentor</h2><p class="muted" style="margin:0">The app tells you when a session is worth having \\u2014 and you book it in two taps.</p></div></div>\n  <div class="grid g3">\n    <div class="card stack">${e?`<div class="row"><div class="ava" style="width:58px;height:58px;font-size:22px;background:var(--mint)">${i(z(e.name))}</div><div><h3>${i(e.name)}</h3><a class="small" href="mailto:${i(e.email)}">${i(e.email)}</a></div></div>${e.bio?`<p class="small muted">${i(e.bio)}</p>`:""}`:`<div><h3>Mentor pool</h3><p class="small muted">You haven\'t been assigned a mentor yet \\u2014 you can book any available mentor below.</p></div>`}\n      <div class="card flat tint-y" style="padding:12px"><h4>\\u{1F64B} Need help between sessions?</h4><textarea class="inp" id="help-t" style="min-height:64px;margin-top:6px" placeholder="e.g. I can\'t find a case competition for non-tech students."></textarea><button class="btn sm sun" style="margin-top:8px" data-a="help">Send to my mentor</button>\n      ${(h.me.help||[]).filter(d=>!d.closed).length?`<div class="tiny muted" style="margin-top:6px">${(h.me.help||[]).filter(d=>!d.closed).length} request(s) waiting for your mentor.</div>`:""}</div></div>\n    <div class="card span2"><h3>\\u{1F9ED} Why a session is recommended</h3>${t.length?`<div class="stack" style="margin-top:10px">${t.map(d=>`<div class="alert u${d.urgency}"><span class="ic">${pe(d.kind)}</span><div class="grow"><b>${i(d.title)}</b><div class="small muted">${i(aa(d))}</div></div>${a.length?`<button class="btn sm pri" data-a="book-for" data-x="${i(d.key)}">Book for this</button>`:""}</div>`).join("")}</div>`:\'<div class="empty" style="padding:16px"><div class="big">\\u{1F324}</div>No triggers right now. You can still book a session any time.</div>\'}</div>\n  </div>\n  ${l.length?`<div class="sec-title"><h3>\\u{1F4C5} Upcoming</h3><span class="ln"></span></div><div class="grid g2">${l.map(d=>`<div class="card tint-m"><div class="row between"><div><div class="mono small">${T(d.start)} \\xB7 ${d.dur} min</div><h3>with ${i(d.mentorName||"mentor")}</h3>${d.topic?`<div class="small muted">Topic: ${i(d.topic)}</div>`:""}</div>${d.link?`<a class="btn go" href="${i(d.link)}" target="_blank" rel="noopener">Join \\u2197</a>`:\'<span class="chip">link soon</span>\'}</div>\n     <div class="row" style="margin-top:10px"><a class="btn sm" href="${We(d,d.mentorName||"mentor")}" target="_blank" rel="noopener">\\u{1F4C6} Google Calendar</a><button class="btn sm" data-a="ics" data-x="${d.id}">\\u2B07 .ics (Outlook/Apple)</button><button class="btn sm ghost" data-a="cancel" data-x="${d.id}">Cancel</button></div></div>`).join("")}</div>`:""}\n  <div class="sec-title"><h3>\\u{1F5D3} Book a slot</h3><span class="ln"></span></div>\n  ${Object.keys(n).length?`<div class="grid g3">${Object.entries(n).slice(0,12).map(([d,u])=>`<div class="card"><h4>${V(d,{weekday:"long",day:"numeric",month:"short"})}</h4><div class="row gap8" style="margin-top:10px">${u.map(m=>`<button class="slot" data-a="book" data-x="${m.id}">${it(m.start)}<span class="tiny faint"> \\xB7 ${m.dur}m${e?"":" \\xB7 "+i((m.mentorName||"").split(" ")[0])}</span></button>`).join("")}</div></div>`).join("")}</div>`:`<div class="card empty"><div class="big">\\u{1F570}</div>No open slots right now. Your mentor publishes slots weekly \\u2014 or send a help request above and they\'ll open one.</div>`}\n  ${v.length?`<div class="sec-title"><h3>\\u{1F5D2} Notes from your mentor</h3><span class="ln"></span></div><div class="stack">${v.map(d=>`<div class="card flat"><div class="tiny faint mono">${T(d.t)} \\xB7 ${i(d.by)}</div><div style="white-space:pre-wrap">${i(d.text)}</div></div>`).join("")}</div>`:""}\n  ${s.length?`<div class="sec-title"><h3>Past sessions</h3><span class="ln"></span></div><div class="card" style="padding:4px 14px">${s.map(d=>`<div class="row" style="padding:9px 0;border-bottom:1.5px dashed #DDD8EE"><span class="mono small">${T(d.start)}</span><span class="grow small">${i(d.topic||"")}</span><span class="chip ${d.status==="done"?"m":d.status==="cancelled"?"c":"g"}">${d.status}</span></div>`).join("")}</div>`:""}`}var pe=e=>({review:"\\u{1F5FA}",mock:"\\u{1F4C9}",exam:"\\u23F3",stall:"\\u{1F4A4}",blocked:"\\u{1F9F1}",mood:"\\u{1F49B}",narrative:"\\u{1F3A4}",critical:"\\u{1F6A8}",help:"\\u{1F64B}"})[e]||"\\u{1F514}";function aa(e){return{review:"Your map is ready. A 30-minute walkthrough turns it into an agreed plan.",mock:"A sharp drop is usually fixable \\u2014 strategy, fatigue or one section. Worth talking through.",exam:"Close to the exam, a clear strategy and school list matter more than more practice.",stall:"Nothing logged in a while. A quick call often gets things moving again.",blocked:"You flagged a blocker. Let your mentor help you get past it.",mood:"Your last check-ins were tough. Talking helps \\u2014 this is not a progress review.",narrative:\'Your "Why MBA" story needs work before interviews. Start early.\',critical:"Several territories are critical \\u2014 get help choosing what to fix first.",help:"You asked for help."}[e.kind]||e.detail}function ht(e,t){let a=(h.d.open||[]).find(l=>l.id===e)||(h.d.open||[])[0];if(!a)return w("No open slots right now");let o=h.d.alerts||[],r=o.find(l=>l.key===t);N(`<h2>Book a session</h2><p class="muted">${T(a.start)} \\xB7 ${a.dur} min \\xB7 with ${i(a.mentorName||"mentor")}</p>\n    ${t?"":`<div class="field"><label class="f">Pick a slot</label><select class="inp" id="bk-slot">${(h.d.open||[]).map(l=>`<option value="${l.id}" ${l.id===a.id?"selected":""}>${T(l.start)} \\xB7 ${l.dur}m \\xB7 ${i(l.mentorName||"")}</option>`).join("")}</select></div>`}\n    ${t?`<input type="hidden" id="bk-slot" value="${a.id}"><div class="field"><label class="f">Pick a slot</label><select class="inp" id="bk-slot2">${(h.d.open||[]).map(l=>`<option value="${l.id}">${T(l.start)} \\xB7 ${l.dur}m \\xB7 ${i(l.mentorName||"")}</option>`).join("")}</select></div>`:""}\n    <div class="field"><label class="f">What\'s it about?</label><select class="inp" id="bk-alert"><option value="">General check-in</option>${o.map(l=>`<option value="${i(l.key)}" ${l.key===t?"selected":""}>${i(l.title)}</option>`).join("")}</select></div>\n    <div class="field"><label class="f">Anything you want to cover? (optional)</label><textarea class="inp" id="bk-topic" placeholder="e.g. Which 2 quests to drop, and my DILR set selection.">${r?i(r.title):""}</textarea></div>\n    <div id="bk-err"></div><button class="btn pri lg" data-a2="book-go">Confirm booking</button>`,"sm")}function sa(){let e=h.d.resources||[],t=h.rf,a=new Set(h.an.pillars.filter(s=>s.score==null||s.score<55).map(s=>s.id)),o=[...new Set(e.map(s=>s.cat))],r=t.q.toLowerCase(),l=e.filter(s=>(t.cat==="all"||s.cat===t.cat)&&(!t.mine||(s.pillars||[]).some(n=>a.has(n)))&&(!r||(s.name+s.desc+s.cat+s.url).toLowerCase().includes(r)));return`<div class="pagehead"><div><div class="kick">Where to do it</div><h2>Resource hub</h2><p class="muted" style="margin:0">Certifications, case competitions, internships, reading, volunteering \\u2014 curated and linked to your quests.</p></div></div>\n  <div class="card" style="margin-bottom:16px"><div class="row"><input class="inp grow" id="rs-q" placeholder="\\u{1F50D} Search \\u2014 e.g. hackathon, finance, reading, internship" value="${i(t.q)}"><button class="btn ${t.mine?"hot":""}" data-a="rs-mine">${t.mine?"\\u2713 ":""}Matched to my gaps</button></div>\n  <div class="row gap8" style="margin-top:10px"><button class="chip ${t.cat==="all"?"v":""}" data-a="rs-cat" data-x="all">All (${e.length})</button>${o.map(s=>`<button class="chip ${t.cat===s?"v":""}" data-a="rs-cat" data-x="${i(s)}">${i(s)}</button>`).join("")}</div></div>\n  <div class="grid g3" id="rs-list">${yt(l,a)}</div>`}function yt(e,t){return e.map(a=>`<a class="card res" href="${i(a.url)}" target="_blank" rel="noopener"><div class="row between"><span class="dom">${i(le(a.url))}</span><span class="chip ${a.free?"m":"y"}">${a.free?"Free":"Paid"}</span></div><h3>${i(a.name)} \\u2197</h3><div class="small muted">${i(a.desc)}</div><div class="row gap8" style="margin-top:auto">${(a.pillars||[]).map(o=>`<span class="chip soft ${t.has(o)?"c":""}">${S[o]||""} ${i(D[o]||o)}</span>`).join("")}</div></a>`).join("")||\'<div class="card empty span2">Nothing matches \\u2014 try another search.</div>\'}function oa(){N(`<h2>\\u{1F4DD} Weekly check-in</h2><p class="muted">Two minutes. Honest beats impressive.</p>\n    <label class="f">How are you feeling about prep?</label><div class="mood" id="ck-mood">${se.map(([e,t,a])=>`<button data-mood="${e}" title="${a}">${t}</button>`).join("")}</div>\n    <div class="grid g2" style="margin-top:12px"><div class="field"><label class="f">Hours studied this week</label><input class="inp" id="ck-h" inputmode="decimal" placeholder="e.g. 14"></div><div class="field"><label class="f">Mocks taken</label><input class="inp" id="ck-m" inputmode="numeric" placeholder="0"></div></div>\n    <div class="field"><label class="f">\\u{1F3C1} One win this week</label><input class="inp" id="ck-w" placeholder="e.g. First 70%+ accuracy in RC"></div>\n    <div class="field"><label class="f">\\u{1F9F1} What\'s in the way?</label><input class="inp" id="ck-b" placeholder="e.g. College exams, can\'t focus after 9pm"></div>\n    <div id="ck-err"></div><button class="btn pri lg" data-a2="ck-go">Save check-in (+20 XP)</button>`,"sm")}function na(){N(`<h2>Account</h2><p class="muted">${i(h.me.name)} \\xB7 ${i(h.me.email)}</p>\n    <div class="field"><label class="f">Change PIN</label><div class="row"><input class="inp grow" id="ac-pin" type="password" placeholder="New PIN (4+ characters)"><button class="btn" data-a2="pin">Update</button></div></div>\n    <div class="row" style="margin-top:14px"><button class="btn" data-a2="export">\\u2B07 Download my data</button><button class="btn hot" data-a2="logout">Log out</button></div>`,"sm")}function ia(e){let t=e.target.closest("[data-hex]");if(t&&!e.target.closest("[data-a]"))return Qt(t.dataset.hex);let a=e.target.closest("[data-a]");a&&wt(a.dataset.a,a.dataset.x,a.dataset.k,a,e)}function wt(e,t,a,o,r){let l=h.me.profile;switch(e){case"wz":{let s=+t;if(s<0||s>=F.length)return;h.step=s,I(),window.scrollTo(0,0);return}case"wz-go":{E(),h.step=F.indexOf(t),location.hash="#/profile",h.view==="profile"&&I();return}case"wz-fog":{let s=h.an.fog[0];s&&(h.step=F.indexOf(s.id));return}case"setp":{l[a]=a==="hours"?+t:t,q(),I();return}case"self":{let s=l.pillars[a]=l.pillars[a]||{};s.self=+t,q(),I();return}case"ev":{let s=l.pillars[a]=l.pillars[a]||{};s.ev=s.ev||[],s.ev=s.ev.includes(t)?s.ev.filter(n=>n!==t):[...s.ev,t],q(),I();return}case"qtab":h.qtab=t,h.view==="quests"&&I();return;case"qf":h.qf=t,I();return;case"add":ft(t),E(),I();return;case"quest":return ke(t);case"checkin":return oa();case"account":return na();case"nudge-seen":return Ee("/me/nudge-seen").then(I);case"mock-add":return da();case"mock-an":{let s=h.me.mocks.find(n=>n.id===t);s.analysed=!s.analysed,q(),I();return}case"mock-del":{if(!Ye(o))return;h.me.mocks=h.me.mocks.filter(s=>s.id!==t),q(),I();return}case"help":{let s=y("#help-t").value.trim();return s?Ee("/me/help",{text:s}).then(()=>{w("Sent \\u2014 your mentor has been alerted"),I()}).catch(n=>w(n.message)):w("Write a line first")}case"book":return ht(t);case"book-for":return ht(null,t);case"cancel":return Ye(o)?Ee("/me/cancel/"+t).then(()=>{w("Session cancelled"),I()}).catch(s=>w(s.message)):void 0;case"ics":{let s=h.d.mine.find(n=>n.id===t);return Ce(s,s.mentorName||"mentor")}case"rs-mine":h.rf.mine=!h.rf.mine,I();return;case"rs-cat":h.rf.cat=t,I();return;case"pi-qs":{let s=R[t];N(`<h2>\\u{1F3A4} ${i(s.name)} \\u2014 what a panel may ask</h2><div class="stack" style="margin-top:12px">${s.sp.map(n=>`<div class="card flat">${i(n)}</div>`).join("")}</div><p class="small muted" style="margin-top:12px">Practise these out loud. Record yourself once \\u2014 it\'s uncomfortable and it works.</p>`);return}}}function Ye(e){if(e.dataset.sure)return!0;e.dataset.sure=1;let t=e.textContent;return e.textContent="Sure?",setTimeout(()=>{e.isConnected&&(e.textContent=t,delete e.dataset.sure)},2500),!1}function la(e){let t=e.target;if(t.id==="rs-q"){h.rf.q=t.value;let l=new Set(h.an.pillars.filter(d=>d.score==null||d.score<55).map(d=>d.id)),s=h.d.resources||[],n=h.rf,v=n.q.toLowerCase();y("#rs-list").innerHTML=yt(s.filter(d=>(n.cat==="all"||d.cat===n.cat)&&(!n.mine||(d.pillars||[]).some(u=>l.has(u)))&&(!v||(d.name+d.desc+d.cat+d.url).toLowerCase().includes(v))),l);return}let a=t.dataset.bind;if(!a)return;let o=h.me.profile,r=a.split(".");if(a==="name")h.me.name=t.value;else if(a==="phone")h.me.phone=t.value;else if(r[0]==="profile")o[r[1]]=t.value;else if(r[0]==="pill"){let l=o.pillars[r[1]]=o.pillars[r[1]]||{};l[r[2]]=t.value}else if(r[0]==="probe"){let l=o.pillars[r[1]]=o.pillars[r[1]]||{};l.probe=l.probe||{},l.probe[r[2]]=t.value}q(),["profile.x10","profile.x12","profile.ug"].includes(a)&&(h.an=K(h.me,h.d.cfg))}function ra(e){e.target.dataset.bind==="profile.catDate"&&q()}function da(){let e=o=>y("#mk-"+o).value.trim(),t=o=>o===""?null:Math.max(0,Math.min(100,+o)),a={id:"k"+Date.now().toString(36),name:e("name")||`Mock ${h.me.mocks.length+1}`,date:e("date"),va:t(e("va")),di:t(e("di")),qa:t(e("qa")),overall:t(e("overall")),score:e("score")?+e("score"):null,analysed:y("#mk-an").checked,note:e("note"),t:Date.now()};if([a.va,a.di,a.qa,a.overall].some(o=>o!=null&&isNaN(o))){y("#mk-err").innerHTML=\'<div class="err">Percentiles must be numbers between 0 and 100.</div>\';return}if(a.overall==null&&a.va==null&&a.di==null&&a.qa==null){y("#mk-err").innerHTML=\'<div class="err">Enter at least the overall percentile.</div>\';return}h.me.mocks.push(a),q(),w("Mock logged \\xB7 +15 XP"),I()}function ca(e){let t=e.target.closest("#scrim");if(!t||!h)return;let a=e.target.closest("[data-a]");if(a&&de.contains(a)===!1){let d=a.dataset.a;if(["add","quest","wz-go","pi-qs"].includes(d))return e.stopPropagation(),wt(d,a.dataset.x,a.dataset.k,a,e)}let o=e.target.closest("button[data-mood]");if(o){t.querySelectorAll("[data-mood]").forEach(d=>d.classList.toggle("on",d===o)),t.dataset.pick=o.dataset.mood;return}let r=e.target.closest("[data-a2]");if(r){let d=r.dataset.a2;if(d==="add"){ft(r.dataset.x),ke(r.dataset.x),I();return}if(d==="book-go"){let u=(y("#bk-slot2")||y("#bk-slot")).value,m=y("#bk-alert").value;return Ee("/me/book/"+u,{topic:y("#bk-topic").value,alertKey:m}).then(()=>{E(),w("Booked \\u{1F389} Add it to your calendar"),location.hash="#/mentor",I()}).catch(c=>{y("#bk-err").innerHTML=`<div class="err">${i(c.message)}</div>`})}if(d==="ck-go"){let u=+t.dataset.pick;if(!u){y("#ck-err").innerHTML=\'<div class="err">Pick a mood first.</div>\';return}let m=y("#ck-w").value.trim(),c=y("#ck-b").value.trim();h.me.checkins.push({t:Date.now(),mood:u,hours:+y("#ck-h").value||0,mocks:+y("#ck-m").value||0,win:m,blocker:c,note:c||m}),q(!0),E(),w(u<=2?"Thanks for being honest \\u{1F49B} your mentor will see this":"Checked in \\xB7 +20 XP"),I();return}if(d==="pin"){let u=y("#ac-pin").value;return $("/me/pin","POST",{pin:u}).then(()=>w("PIN updated")).catch(m=>w(m.message))}if(d==="logout"){$("/logout","POST").catch(()=>{}),localStorage.removeItem("atlas.tok"),localStorage.removeItem("atlas.role"),location.hash="",location.reload();return}if(d==="export"){let u=new Blob([JSON.stringify(h.me,null,2)],{type:"application/json"}),m=document.createElement("a");m.href=URL.createObjectURL(u),m.download="my-profile-atlas.json",m.click();return}}let l=e.target.closest("[data-q]");if(!l)return;let s=t.querySelector(".modal").dataset.quest,n=h.me.plan.find(d=>d.aid===s);if(!n)return;let v=l.dataset.q;if(v==="status"){if(n.status=l.dataset.x,n.updatedAt=Date.now(),n.status==="done"){let d=O[s];me(d).forEach(u=>{n.steps=n.steps||{},n.steps[u.k]=!0}),w("Quest complete! +60 XP \\u{1F3C6}")}n.status==="doing"&&!n.started&&(n.started=Date.now()),q(),ke(s),I()}else if(v==="step"){n.steps=n.steps||{},n.steps[l.dataset.x]=!n.steps[l.dataset.x],n.updatedAt=Date.now(),n.steps[l.dataset.x]&&n.status==="todo"&&(n.status="doing");let d=O[s];me(d).every(u=>n.steps[u.k])&&(n.status="done",w("All steps done \\u2014 quest complete! \\u{1F3C6}")),q(),ke(s),I()}else if(v==="log"){let d=y("#lg-t").value.trim(),u=y("#lg-l").value.trim();if(!d)return w("Write what you did");if(u&&!/^https?:\\/\\//.test(u))return w("Links should start with https://");n.log=n.log||[],n.log.push({t:Date.now(),text:d,link:u}),n.updatedAt=Date.now(),n.status==="todo"&&(n.status="doing"),q(),ke(s),I(),w("Update posted \\xB7 +5 XP")}else if(v==="remove"){if(!Ye(l))return;h.me.plan=h.me.plan.filter(d=>d.aid!==s),q(),E(),I()}}function ut(e){let t=e.target,a=t.closest("#scrim");if(!a||!h)return;let o=t.dataset.q;if(!o)return;let r=a.querySelector(".modal").dataset.quest,l=h.me.plan.find(s=>s.aid===r);l&&(o==="ans"&&(l.answers=l.answers||{},l.answers[t.dataset.x]=t.value,q()),o==="due"&&e.type==="change"&&(l.due=t.value,q(),I()),o==="blockNote"&&(l.blockNote=t.value,l.updatedAt=l.updatedAt||Date.now(),q()))}var x=null,Le=null,bt=null;async function xt(e){Le=e,x={view:"alerts",mineOnly:!1,q:"",sid:null,det:null},await ze(),Le.addEventListener("click",ya),Le.addEventListener("input",wa),document.addEventListener("click",$a),window.addEventListener("hashchange",kt),kt(),clearInterval(bt),bt=setInterval(async()=>{document.hidden||y("#scrim")||(await ze(),x.view==="student"&&await _e(),(!document.activeElement||!["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName))&&$e())},4e4)}async function ze(){x.d=await $("/mentor")}async function _e(){x.det=await $("/mentor/student/"+x.sid)}async function kt(){let[e,t]=location.hash.replace(/^#\\/?/,"").split("/");if(x.view=["alerts","students","student","slots","me"].includes(e)?e:"alerts",x.view==="student"){x.sid=t;try{await _e()}catch(a){w(a.message),location.hash="#/students";return}}$e(),window.scrollTo(0,0)}function pa(e){let t=x.d.students,a=t.flatMap(r=>r.alerts).length,o=[["alerts",`\\u{1F6A8} Alerts${a?`<span class="b">${a}</span>`:""}`],["students",`\\u{1F465} Students (${t.length})`],["slots","\\u{1F4C5} Sessions & slots"],["me","\\u2699\\uFE0F My profile"]];return`<header class="top"><div class="wrap"><a class="logo" href="#/alerts"><span class="mk">${oe()}</span><span class="t">Profile Atlas</span><span class="chip y" style="margin-left:4px">Mentor</span></a>\n    <nav class="nav">${o.map(([r,l])=>`<a href="#/${r}" class="${x.view===r||r==="students"&&x.view==="student"?"on":""}">${l}</a>`).join("")}</nav>\n    <div class="me"><span class="small" style="font-weight:700">${i(x.d.me.name)}</span><button class="ava" data-a="logout" title="Log out" style="background:var(--mint)">${i(z(x.d.me.name))}</button></div></div></header>\n    <main><div class="wrap">${e}</div></main>`}function $e(){let e={alerts:ha,students:ua,student:ma,slots:va,me:fa}[x.view];Le.innerHTML=pa(e())}var At=()=>x.d.students.filter(e=>!x.mineOnly||e.mine),It=()=>`<div class="tabs"><button class="${x.mineOnly?"":"on"}" data-a="mine" data-x="0">All visible</button><button class="${x.mineOnly?"on":""}" data-a="mine" data-x="1">My students</button></div>`;function ha(){let e=At(),t=e.flatMap(l=>l.alerts.map(s=>({s:l,a:s}))).sort((l,s)=>s.a.urgency-l.a.urgency||l.s.lastActive-s.s.lastActive),a=Date.now(),o=x.d.sessions.filter(l=>l.status==="booked"&&Date.parse(l.start)+l.dur*6e4>a),r=x.d.sessions.filter(l=>l.status==="booked"&&Date.parse(l.start)+l.dur*6e4<=a);return`<div class="pagehead"><div><div class="kick">Intervention queue</div><h2>Who needs you now</h2><p class="muted" style="margin:0">Triggers fire automatically from each student\'s map, mocks, quests and check-ins.</p></div>${It()}</div>\n  <div class="kpis" style="margin-bottom:16px"><div class="kpi stat"><span class="n">${e.length}</span><span class="l">Students</span></div><div class="kpi stat" style="background:var(--coral-l)"><span class="n">${t.filter(l=>l.a.urgency===3).length}</span><span class="l">Urgent</span></div><div class="kpi stat" style="background:var(--yellow-l)"><span class="n">${t.length}</span><span class="l">Open alerts</span></div><div class="kpi stat" style="background:var(--mint-l)"><span class="n">${o.length}</span><span class="l">Upcoming sessions</span></div><div class="kpi stat"><span class="n">${e.filter(l=>l.mappedN<8).length}</span><span class="l">Not mapped yet</span></div></div>\n  ${r.length?`<div class="card tint-y banner" style="margin-bottom:14px"><span style="font-size:28px">\\u{1F5D2}</span><div class="grow"><b>${r.length} session${r.length>1?"s":""} need an outcome logged.</b> <span class="muted small">Notes are shared with the student.</span></div><a class="btn sun" href="#/slots">Log outcomes</a></div>`:""}\n  ${o.length?`<div class="card tint-m" style="margin-bottom:14px"><h4>Next up</h4>${o.slice(0,3).map(l=>`<div class="row" style="padding:6px 0"><span class="mono small">${T(l.start)}</span><b class="grow"><a href="#/student/${l.bookedBy}">${i(l.studentName)}</a></b><span class="small muted">${i(l.topic||"")}</span>${l.link?`<a class="btn sm go" href="${i(l.link)}" target="_blank">Join</a>`:""}</div>`).join("")}</div>`:""}\n  <div class="stack">${t.map(({s:l,a:s})=>`<div class="alert u${s.urgency}"><span class="ic">${pe(s.kind)}</span><div class="grow"><div class="row"><b>${i(l.name)}</b><span class="chip soft">${s.urgency===3?"urgent":s.urgency===2?"soon":"when you can"}</span>${l.mine?"":l.mentorName?`<span class="tiny faint">mentor: ${i(l.mentorName)}</span>`:\'<span class="tiny faint">unassigned</span>\'}</div><div style="font-weight:700">${i(s.title)}</div><div class="small muted">${i(s.detail)}</div></div>\n     <div class="row gap8" style="flex-direction:column;align-items:stretch"><a class="btn sm" href="#/student/${l.id}">Open profile</a><button class="btn sm pri" data-a="nudge" data-x="${l.id}" data-k="${i(s.key)}">Ask to book</button><button class="btn sm ghost" data-a="ack" data-x="${l.id}" data-k="${i(s.key)}">Mark handled</button></div></div>`).join("")||\'<div class="card empty"><div class="big">\\u{1F324}</div><h3>All clear</h3>No triggers right now. Publish some slots so students can book proactively.</div>\'}</div>`}function $t(e){return`<span class="heat lv-${B(e).k}">${e??"\\xB7"}</span>`}function ua(){let e=x.q.toLowerCase(),t=At().filter(a=>!e||(a.name+a.email).toLowerCase().includes(e)).sort((a,o)=>o.alerts.length-a.alerts.length||a.name.localeCompare(o.name));return`<div class="pagehead"><div><div class="kick">Roster</div><h2>Students</h2></div><div class="row"><input class="inp" id="m-q" placeholder="\\u{1F50D} Search name or email" value="${i(x.q)}" style="width:240px">${It()}</div></div>\n  <div class="tscroll"><table class="tbl"><thead><tr><th>Student</th><th>Stage</th><th>Ready</th><th>Proj. %ile</th>${W.map(a=>`<th title="${i(a.name)}">${S[a.id]}</th>`).join("")}<th>Quests</th><th>Mood</th><th>Alerts</th><th>Active</th></tr></thead><tbody>\n  ${t.map(a=>`<tr class="click" data-a="open" data-x="${a.id}"><td><b>${i(a.name)}</b><div class="tiny faint">${i(a.email)}${a.mine?"":a.mentorName?" \\xB7 "+i(a.mentorName):" \\xB7 unassigned"}</div></td><td class="small">${i(J[a.stage]||"\\u2014")}</td><td>${$t(a.overall)}</td><td class="mono small">${a.proj?a.proj.mid:"\\u2014"}${a.trend!=null?` <span style="color:${a.trend>=0?"#0a9":"#e33"}">${a.trend>=0?"\\u25B2":"\\u25BC"}</span>`:""}</td>${W.map(o=>`<td>${$t(a.pillars[o.id])}</td>`).join("")}<td class="mono small">${a.doneN}/${a.planN}${a.blockedN?\' <span class="chip c">\'+a.blockedN+" blocked</span>":""}</td><td>${a.mood?se[a.mood-1][1]:"\\u2014"}</td><td>${a.alerts.length?`<span class="chip ${a.alerts.some(o=>o.urgency===3)?"c":"y"}">${a.alerts.length}</span>`:"\\u2014"}</td><td class="small muted">${te(a.lastActive)}</td></tr>`).join("")||\'<tr><td colspan="20" class="empty">No students yet. Share the app link and cohort code.</td></tr>\'}</tbody></table></div>`}function Je(e,t,a,o,{edit:r=!0,mine:l=!0}={}){let s=K(e,o),n=e.profile||{},v=ee(e,s).filter(c=>!c.inPlan).slice(0,12),d=Z(e),u=[...e.checkins||[]].sort((c,g)=>g.t-c.t),m=[...e.notes||[]].reverse();return`<div class="pagehead"><div><a class="small" href="#/students">\\u2190 All students</a><h2 style="font-size:34px;margin-top:4px">${i(e.name)}</h2>\n    <div class="row small muted"><span>${i(J[n.stage]||"stage not set")}</span>\\xB7<span>${i(Pe[n.degree]||"")}</span>${n.org?`\\xB7<span>${i(n.org)}</span>`:""}\\xB7<a href="mailto:${i(e.email)}">${i(e.email)}</a>${e.phone?`\\xB7<a href="tel:${i(e.phone)}">${i(e.phone)}</a>`:""}</div></div>\n    ${r?`<div class="row">${l?"":\'<button class="btn" data-a="claim">Make my student</button>\'}<button class="btn pri" data-a="nudge" data-x="${e.id}">\\u{1F4AC} Message / ask to book</button></div>`:""}</div>\n  <div class="kpis" style="margin-bottom:16px"><div class="kpi stat"><span class="n">${s.overall??"\\u2014"}</span><span class="l">Readiness</span></div><div class="kpi stat"><span class="n">${s.proj?s.proj.mid:"\\u2014"}</span><span class="l">Projected %ile</span></div><div class="kpi stat"><span class="n">${s.tier.overall}</span><span class="l">Target (${i(s.tier.label.split(",")[0])})</span></div><div class="kpi stat"><span class="n">${s.mappedN}/10</span><span class="l">Mapped</span></div><div class="kpi stat"><span class="n">${(e.plan||[]).filter(c=>c.status==="done").length}/${(e.plan||[]).length}</span><span class="l">Quests done</span></div><div class="kpi stat"><span class="n">${s.days??"\\u2014"}</span><span class="l">Days to CAT</span></div></div>\n  ${t.length?`<div class="stack" style="margin-bottom:16px">${t.map(c=>`<div class="alert u${c.urgency}"><span class="ic">${pe(c.kind)}</span><div class="grow"><b>${i(c.title)}</b><div class="small muted">${i(c.detail)}</div></div>${r?`<button class="btn sm pri" data-a="nudge" data-x="${e.id}" data-k="${i(c.key)}">Ask to book</button><button class="btn sm ghost" data-a="ack" data-x="${e.id}" data-k="${i(c.key)}">Handled</button>`:""}</div>`).join("")}</div>`:""}\n  <div class="grid g3"><div class="card span2"><div class="row between"><h3>Atlas</h3>${qe()}</div>${ae(s,{compact:!0})}</div><div class="card"><h3>Balance</h3>${be(s,280)}</div></div>\n  <div class="sec-title"><h3>\\u{1F5FA} Territory by territory</h3><span class="ln"></span></div>\n  <div class="grid g2">${s.pillars.map(c=>{let g=n.pillars?.[c.id]||{},f=R[c.id];return`<div class="card" style="padding:14px"><div class="row between"><b>${S[c.id]} ${i(f.name)}</b><span class="scorepill" style="box-shadow:none;padding:2px 10px 2px 3px">${we(c.score,30)}${c.level.name}</span></div>\n     ${g.self?`<div class="tiny muted mono" style="margin-top:4px">Self-rating ${g.self}/5 \\xB7 ${c.sources.join(" + ")||""}</div>`:""}\n     ${g.claim?`<div class="small" style="margin-top:6px"><b>Best proof:</b> ${i(g.claim)}</div>`:""}\n     ${f.probe.map(p=>g.probe?.[p.id]?`<div class="small" style="margin-top:6px"><span class="muted">${i(p.q)}</span><br>${i(g.probe[p.id])}</div>`:"").join("")}\n     ${c.missing.length&&c.score!=null?`<div class="tiny" style="margin-top:6px;color:var(--coral);font-weight:700">Missing: ${c.missing.slice(0,3).map(i).join(" \\xB7 ")}</div>`:""}</div>`}).join("")}</div>\n  ${n.why?`<div class="card tint-v" style="margin-top:16px"><b>Why MBA (their words):</b> ${i(n.why)}</div>`:""}\n  <div class="grid g2" style="margin-top:16px"><div class="card"><h3>\\u{1F4C8} Mocks (${d.length})</h3>${d.length?De(d,200):\'<p class="muted">No mocks logged.</p>\'}</div>\n  <div class="card"><h3>\\u{1F4DD} Check-ins</h3>${u.length?`<div class="row small muted" style="margin-bottom:6px">Mood ${re([...u].reverse().map(c=>c.mood),120,28,"#FF5A5F")} Hours ${re([...u].reverse().map(c=>+c.hours||.1),120,28,"#1FD1A5")}</div>`+u.slice(0,6).map(c=>`<div style="padding:7px 0;border-bottom:1.5px dashed #DDD8EE"><div class="row"><span style="font-size:20px">${se[c.mood-1][1]}</span><span class="mono small">${V(c.t)}</span><span class="small">${c.hours||0} hrs \\xB7 ${c.mocks||0} mocks</span></div>${c.win?`<div class="small">\\u{1F3C1} ${i(c.win)}</div>`:""}${c.blocker?`<div class="small">\\u{1F9F1} ${i(c.blocker)}</div>`:""}</div>`).join(""):\'<p class="muted">No check-ins yet.</p>\'}</div></div>\n  <div class="sec-title"><h3>\\u{1F3AF} Quests</h3><span class="ln"></span></div>\n  <div class="grid g2">${(e.plan||[]).map(c=>{let g=O[c.aid],f=ve(c);return`<div class="card" style="padding:14px"><div class="row between"><span class="chip soft">${S[g.p]} ${i(D[g.p])}</span><span class="chip ${c.status==="done"?"m":c.status==="blocked"?"c":c.status==="doing"?"s":"g"}">${c.status||"todo"}</span></div><h4 style="margin:6px 0">${i(g.t)}</h4><div class="row"><div class="bar thin grow"><i style="width:${f}%"></i></div><span class="mono small">${f}%</span></div>\n    ${c.blockNote&&c.status==="blocked"?`<div class="small" style="color:var(--coral);font-weight:700;margin-top:6px">Blocked: ${i(c.blockNote)}</div>`:""}\n    ${(c.log||[]).slice(-3).reverse().map(p=>`<div class="small" style="margin-top:6px"><span class="tiny faint mono">${V(p.t)}</span> ${i(p.text)} ${p.link?`<a href="${i(p.link)}" target="_blank">\\u{1F517}${i(le(p.link))}</a>`:""}</div>`).join("")}\n    ${Object.values(c.answers||{}).some(Boolean)?`<details style="margin-top:6px"><summary class="small" style="cursor:pointer;font-weight:700">Interview answers</summary>${g.pq.map((p,k)=>c.answers?.[k]?`<div class="small" style="margin-top:4px"><span class="muted">${i(p)}</span><br>${i(c.answers[k])}</div>`:"").join("")}</details>`:""}\n    <div class="tiny faint" style="margin-top:6px">${c.by?"Assigned by "+i(c.by)+" \\xB7 ":""}${c.due?"due "+V(c.due):""}</div></div>`}).join("")||\'<div class="card empty span2">No quests yet.</div>\'}</div>\n  ${r?`<div class="card tint-y" style="margin-top:16px"><h3>\\u2795 Assign a quest</h3><div class="grid g4" style="margin-top:10px;align-items:end"><div class="span2"><label class="f">Quest (ranked for this student)</label><select class="inp" id="as-aid">${v.map(c=>`<option value="${c.a.id}">${S[c.a.p]} ${i(c.a.t)} \\u2014 ${i(D[c.a.p])}</option>`).join("")}</select></div><div><label class="f">Due</label><input class="inp" type="date" id="as-due"></div><div><button class="btn pri" data-a="assign">Assign</button></div></div><input class="inp" id="as-note" style="margin-top:10px" placeholder="Note for the student (why this, what good looks like)"></div>`:""}\n  <div class="grid g2" style="margin-top:16px"><div class="card"><h3>\\u{1F5D2} Notes</h3>${r?\'<textarea class="inp" id="nt-t" placeholder="Session notes, observations, agreed next steps\\u2026"></textarea><div class="row" style="margin-top:8px"><label class="row small" style="font-weight:700"><input type="checkbox" id="nt-sh" checked style="width:18px;height:18px"> Share with student</label><button class="btn pri sm" data-a="note">Save note</button></div>\':""}\n    <div class="stack" style="margin-top:12px">${m.map(c=>`<div class="card flat" style="padding:10px 12px"><div class="tiny faint mono">${T(c.t)} \\xB7 ${i(c.by)} \\xB7 ${c.shared?"shared":"\\u{1F512} private"}</div><div class="small" style="white-space:pre-wrap">${i(c.text)}</div></div>`).join("")||\'<div class="small muted">No notes yet.</div>\'}</div></div>\n  <div class="card"><h3>\\u{1F4C5} Sessions</h3>${a.map(c=>`<div class="row" style="padding:8px 0;border-bottom:1.5px dashed #DDD8EE"><span class="mono small">${T(c.start)}</span><span class="grow small">${i(c.topic||"")}</span><span class="chip ${c.status==="done"?"m":c.status==="booked"?"s":"g"}">${c.status}</span></div>`).join("")||\'<p class="muted">No sessions yet.</p>\'}</div></div>`}function ma(){let e=x.det,t=x.d.students.find(a=>a.id===x.sid);return Je(e.st,e.alerts,e.sessions,e.cfg,{edit:!0,mine:e.st.mentorId===x.d.me.id})}function va(){let e=Date.now(),t=x.d.sessions,a=t.filter(n=>n.status==="booked"&&Date.parse(n.start)+n.dur*6e4>e),o=t.filter(n=>n.status==="booked"&&Date.parse(n.start)+n.dur*6e4<=e),r=t.filter(n=>n.status==="open"&&Date.parse(n.start)>e),l=t.filter(n=>["done","noshow","cancelled"].includes(n.status)).reverse().slice(0,20);return`<div class="pagehead"><div><div class="kick">Your calendar</div><h2>Sessions & slots</h2><p class="muted" style="margin:0">Publish slots; students book them when an alert says it\'s time. Times are in your local timezone.</p></div></div>\n  <div class="grid g3"><div class="card tint-y"><h3>\\u2795 Publish slots</h3><div class="stack" style="margin-top:10px">\n    <div class="grid g2"><div><label class="f">Date</label><input class="inp" type="date" id="sl-d" value="${new Date(Date.now()+864e5).toISOString().slice(0,10)}"></div><div><label class="f">First slot at</label><input class="inp" type="time" id="sl-t" value="18:00"></div></div>\n    <div class="grid g3"><div><label class="f">Minutes</label><select class="inp" id="sl-dur">${[20,30,45,60].map(n=>`<option ${n===30?"selected":""}>${n}</option>`).join("")}</select></div><div><label class="f">Back-to-back</label><select class="inp" id="sl-n">${[1,2,3,4,5,6,8].map(n=>`<option ${n===3?"selected":""}>${n}</option>`).join("")}</select></div><div><label class="f">Break (min)</label><select class="inp" id="sl-br">${[0,5,10,15].map(n=>`<option ${n===5?"selected":""}>${n}</option>`).join("")}</select></div></div>\n    <div class="grid g2"><div><label class="f">Repeat weekly</label><select class="inp" id="sl-w">${[1,2,3,4,6,8].map(n=>`<option value="${n}">${n===1?"Just this week":n+" weeks"}</option>`).join("")}</select></div><div><label class="f">Mode</label><select class="inp" id="sl-m"><option value="video">Video call</option><option value="phone">Phone</option><option value="in-person">In person</option></select></div></div>\n    <div><label class="f">Meeting link / location</label><input class="inp" id="sl-l" value="${i(x.d.me.meet||"")}" placeholder="https://meet.google.com/\\u2026"></div>\n    <div id="sl-err"></div><button class="btn pri" data-a="slots">Publish</button></div></div>\n  <div class="card span2"><h3>\\u{1F4CC} Booked (${a.length})</h3>${a.map(n=>ga(n,!0)).join("")||\'<p class="muted">Nothing booked yet.</p>\'}\n    ${o.length?`<h3 style="margin-top:14px">\\u{1F5D2} Log outcome (${o.length})</h3>${o.map(n=>`<div class="row" style="padding:8px 0;border-bottom:1.5px dashed #DDD8EE"><span class="mono small">${T(n.start)}</span><b class="grow"><a href="#/student/${n.bookedBy}">${i(n.studentName)}</a></b><button class="btn sm sun" data-a="done" data-x="${n.id}">Log outcome</button></div>`).join("")}`:""}\n    <h3 style="margin-top:14px">\\u{1F7E2} Open (${r.length})</h3><div class="row gap8" style="margin-top:8px">${r.map(n=>`<span class="slot" style="cursor:default">${T(n.start)} <button class="btn sm ghost" data-a="del" data-x="${n.id}" title="Remove">\\u2715</button></span>`).join("")||`<span class="muted">No open slots \\u2014 students can\'t book until you publish some.</span>`}</div></div></div>\n  ${l.length?`<div class="sec-title"><h3>History</h3><span class="ln"></span></div><div class="card" style="padding:4px 14px">${l.map(n=>`<div class="row" style="padding:8px 0;border-bottom:1.5px dashed #DDD8EE"><span class="mono small">${T(n.start)}</span><b>${i(n.studentName||"\\u2014")}</b><span class="grow small muted">${i(n.summary||n.topic||"")}</span><span class="chip ${n.status==="done"?"m":"c"}">${n.status}</span></div>`).join("")}</div>`:""}`}function ga(e){return`<div class="row" style="padding:9px 0;border-bottom:1.5px dashed #DDD8EE"><span class="mono small">${T(e.start)} \\xB7 ${e.dur}m</span><b><a href="#/student/${e.bookedBy}">${i(e.studentName)}</a></b><span class="grow small muted">${i(e.topic||"")}</span>${e.link?`<a class="btn sm go" href="${i(e.link)}" target="_blank">Join</a>`:`<button class="btn sm" data-a="link" data-x="${e.id}">Add link</button>`}<a class="btn sm" href="${We(e,e.studentName)}" target="_blank">\\u{1F4C6}</a><button class="btn sm" data-a="ics" data-x="${e.id}">.ics</button><button class="btn sm ghost" data-a="del" data-x="${e.id}">Cancel</button></div>`}function fa(){let e=x.d.me;return`<div class="pagehead"><div><div class="kick">Settings</div><h2>My mentor profile</h2></div></div><div class="card" style="max-width:640px"><div class="stack">\n    <div><label class="f">Short bio (students see this)</label><textarea class="inp" id="me-bio" placeholder="IIM-A \'19, ex-consultant. Ask me about DILR and interviews.">${i(e.bio)}</textarea></div>\n    <div><label class="f">Default meeting link</label><input class="inp" id="me-meet" value="${i(e.meet)}" placeholder="https://meet.google.com/abc-defg-hij"></div>\n    <div><label class="f">New PIN (leave blank to keep)</label><input class="inp" id="me-pin" type="password"></div>\n    <button class="btn pri" data-a="me-save">Save</button></div></div>`}async function ya(e){let t=e.target.closest("[data-a]");if(!t)return;let a=t.dataset.a,o=t.dataset.x,r=t.dataset.k;try{if(a==="mine")x.mineOnly=o==="1",$e();else if(a==="open")location.hash="#/student/"+o;else if(a==="ack")await $(`/mentor/student/${o}/ack`,"POST",{key:r}),w("Marked handled"),await _();else if(a==="nudge")ba(o,r);else if(a==="claim")await $(`/mentor/student/${x.sid}/claim`,"POST"),w("Assigned to you"),await _();else if(a==="assign")await $(`/mentor/student/${x.sid}/assign`,"POST",{aid:y("#as-aid").value,due:y("#as-due").value,note:y("#as-note").value}),w("Quest assigned \\u2014 it appears in their plan"),await _();else if(a==="note")await $(`/mentor/student/${x.sid}/note`,"POST",{text:y("#nt-t").value,shared:y("#nt-sh").checked}),w("Note saved"),await _();else if(a==="slots"){let l=y("#sl-d").value,s=y("#sl-t").value;if(!l||!s)throw new Error("Pick a date and time");let n=new Date(`${l}T${s}`);if(n<new Date)throw new Error("That time is in the past");await $("/mentor/slots","POST",{start:n.toISOString(),dur:+y("#sl-dur").value,count:+y("#sl-n").value,breakMin:+y("#sl-br").value,weeks:+y("#sl-w").value,mode:y("#sl-m").value,link:y("#sl-l").value}),w("Slots published"),await _()}else if(a==="del"){if(!t.dataset.sure){t.dataset.sure=1,t.textContent="Sure?";return}await $("/mentor/slots/"+o,"DELETE"),w("Done"),await _()}else if(a==="done")ka(o);else if(a==="link"){let l=x.d.sessions.find(s=>s.id===o);N(`<h2>Meeting link</h2><input class="inp" id="lk" value="${i(x.d.me.meet||"")}" placeholder="https://\\u2026"><button class="btn pri" style="margin-top:10px" data-m="link" data-x="${o}">Save</button>`,"sm")}else if(a==="ics"){let l=x.d.sessions.find(s=>s.id===o);Ce(l,l.studentName)}else a==="me-save"?(await $("/mentor/profile","POST",{bio:y("#me-bio").value,meet:y("#me-meet").value,pin:y("#me-pin").value}),w("Saved"),await _()):a==="logout"&&($("/logout","POST").catch(()=>{}),localStorage.removeItem("atlas.tok"),localStorage.removeItem("atlas.role"),location.hash="",location.reload())}catch(l){w(l.message);let s=y("#sl-err");s&&a==="slots"&&(s.innerHTML=`<div class="err">${i(l.message)}</div>`)}}async function _(){await ze(),x.view==="student"&&await _e(),$e()}function wa(e){if(e.target.id==="m-q"){x.q=e.target.value;let t=e.target.selectionStart;$e();let a=y("#m-q");a.focus(),a.setSelectionRange(t,t)}}function ba(e,t){let a=x.d.students.find(s=>s.id===e),o=a?.alerts.find(s=>s.key===t),r=(a?.name||"").split(" ")[0],l=o?`Hi ${r}, I noticed: ${o.title.toLowerCase()}. Let\'s talk \\u2014 pick any slot that works for you this week.`:`Hi ${r}, let\'s catch up on your plan \\u2014 pick a slot that works for you.`;N(`<h2>\\u{1F4AC} Message ${i(a?.name||"")}</h2><p class="muted small">Shows as a banner on their map. ${o?"The alert is marked handled when they book.":""}</p><textarea class="inp" id="ng-t">${i(l)}</textarea><label class="row small" style="font-weight:700;margin-top:8px"><input type="checkbox" id="ng-b" checked style="width:18px;height:18px"> Include a "Pick a slot" button</label>\n    ${x.d.sessions.filter(s=>s.status==="open"&&Date.parse(s.start)>Date.now()).length?"":\'<div class="err small">You have no open slots \\u2014 publish some so they can book.</div>\'}\n    <button class="btn pri" style="margin-top:12px" data-m="nudge" data-x="${e}" data-k="${i(t||"")}">Send</button>`,"sm")}function ka(e){let t=x.d.sessions.find(a=>a.id===e);N(`<h2>\\u{1F5D2} Session outcome</h2><p class="muted small">${i(t.studentName)} \\xB7 ${T(t.start)}</p><textarea class="inp" id="dn-t" style="min-height:120px" placeholder="What we discussed, what was agreed, next steps. Shared with the student."></textarea>\n    <div class="row" style="margin-top:12px"><button class="btn pri" data-m="done" data-x="${e}">Save & mark done</button><button class="btn" data-m="noshow" data-x="${e}">No-show</button></div>`,"sm")}async function $a(e){let t=e.target.closest("[data-m]");if(!t||!x)return;let a=t.dataset.m,o=t.dataset.x;try{a==="nudge"&&(await $(`/mentor/student/${o}/nudge`,"POST",{text:y("#ng-t").value,book:y("#ng-b").checked}),t.dataset.k&&t.dataset.k.startsWith("help:"),t.dataset.k&&t.dataset.k.startsWith("help:")&&await $(`/mentor/student/${o}/ack`,"POST",{key:t.dataset.k}),w("Message sent")),(a==="done"||a==="noshow")&&await $(`/mentor/slots/${o}/done`,"POST",{summary:y("#dn-t").value,noshow:a==="noshow"}),a==="link"&&await $(`/mentor/slots/${o}/link`,"POST",{link:y("#lk").value}),E(),await _()}catch(r){w(r.message)}}var b=null,xe=null;async function Mt(e){xe=e,b={view:"overview",q:"",sel:new Set},await X(),xe.addEventListener("click",Pa),xe.addEventListener("change",Ta),xe.addEventListener("input",qa),document.addEventListener("click",Da),window.addEventListener("hashchange",St),St()}async function X(){b.d=await $("/admin")}async function St(){let[e,t]=location.hash.replace(/^#\\/?/,"").split("/");if(b.view=["overview","students","student","mentors","resources","settings"].includes(e)?e:"overview",b.view==="student")try{b.det=(await $("/admin/students/"+t)).st}catch(a){w(a.message),location.hash="#/students";return}j(),window.scrollTo(0,0)}function j(){let e=[["overview","\\u{1F4CA} Cohort"],["students",`\\u{1F465} Students (${b.d.students.length})`],["mentors",`\\u{1F9D1}\\u200D\\u{1F3EB} Mentors (${b.d.mentors.length})`],["resources",`\\u{1F517} Resources (${b.d.resources.length})`],["settings","\\u2699\\uFE0F Settings"]],t={overview:xa,students:Aa,student:()=>Je(b.det,st(b.det,b.d.cfg),[],b.d.cfg,{edit:!1}),mentors:Ia,resources:Sa,settings:Ma}[b.view];xe.innerHTML=`<header class="top"><div class="wrap"><a class="logo" href="#/overview"><span class="mk">${oe()}</span><span class="t">Profile Atlas</span><span class="chip c" style="margin-left:4px">Admin</span></a>\n    <nav class="nav">${e.map(([a,o])=>`<a href="#/${a}" class="${b.view===a||a==="students"&&b.view==="student"?"on":""}">${o}</a>`).join("")}</nav>\n    <button class="btn sm" data-a="logout">Log out</button></div></header><main><div class="wrap">${b.d.defaultPw?`<div class="err" style="margin-bottom:14px">\\u26A0 You\'re using the default admin password. Set an <b>ADMIN_PASSWORD</b> secret in Cloudflare (Worker \\u2192 Settings \\u2192 Variables and Secrets).</div>`:""}${t()}</div></main>`}function xa(){let e=b.d.students,t=e.length||1,a=e.filter(n=>n.mappedN>=8).length,o=n=>{let v=e.map(d=>d[n]).filter(d=>d!=null);return v.length?Math.round(v.reduce((d,u)=>d+u,0)/v.length):null},r=e.flatMap(n=>n.alerts.map(v=>({s:n,a:v}))),l=W.map(n=>{let v=e.map(m=>m.pillars[n.id]),d=v.filter(m=>m!=null),u=Y.map(m=>v.filter(c=>c!=null&&B(c).k===m.k).length);return{p:n,avg:d.length?Math.round(d.reduce((m,c)=>m+c,0)/d.length):null,dist:u,fog:v.filter(m=>m==null).length}}),s=e.filter(n=>Date.now()-n.lastActive<7*864e5).length;return`<div class="pagehead"><div><div class="kick">${i(b.d.cfg.program)}</div><h2>Cohort atlas</h2><p class="muted" style="margin:0">Cohort code <span class="kbd">${i(b.d.cfg.cohortCode)}</span> \\xB7 share the app link + code with students.</p></div><button class="btn" data-a="csv">\\u2B07 Export CSV</button></div>\n  <div class="kpis" style="margin-bottom:16px"><div class="kpi stat"><span class="n">${e.length}</span><span class="l">Students</span></div><div class="kpi stat"><span class="n">${Math.round(a/t*100)}%</span><span class="l">Fully mapped</span></div><div class="kpi stat"><span class="n">${o("overall")??"\\u2014"}</span><span class="l">Avg readiness</span></div><div class="kpi stat"><span class="n">${Math.round(s/t*100)}%</span><span class="l">Active this week</span></div><div class="kpi stat" style="background:var(--coral-l)"><span class="n">${r.length}</span><span class="l">Open alerts</span></div><div class="kpi stat"><span class="n">${b.d.mentors.reduce((n,v)=>n+v.sessions,0)}</span><span class="l">Sessions held</span></div></div>\n  <div class="grid g3"><div class="card span2"><h3>Where the cohort is lacking</h3><p class="small muted">Share of students at each level, per territory. Fog = not mapped.</p>\n    ${l.map(({p:n,avg:v,dist:d,fog:u})=>`<div class="row" style="padding:7px 0"><span style="width:24px">${S[n.id]}</span><b style="width:110px" class="small">${i(D[n.id])}</b><div class="grow" style="display:flex;height:22px;border:2px solid var(--ink);border-radius:8px;overflow:hidden">${d.map((m,c)=>m?`<div title="${Y[c].name}: ${m}" style="width:${m/t*100}%;background:${Y[c].color};border-right:1.5px solid var(--ink)"></div>`:"").join("")}${u?`<div title="Unmapped: ${u}" style="width:${u/t*100}%;background:repeating-linear-gradient(45deg,#EAE7F2 0 4px,#C9C4DC 4px 8px)"></div>`:""}</div><span class="mono small" style="width:34px;text-align:right">${v??"\\u2014"}</span></div>`).join("")}\n    <div class="legend" style="margin-top:8px">${Y.map(n=>`<span><i style="background:${n.color}"></i>${n.name}</span>`).join("")}</div></div>\n  <div class="card"><h3>\\u{1F6A8} Needs attention</h3>${r.sort((n,v)=>v.a.urgency-n.a.urgency).slice(0,8).map(({s:n,a:v})=>`<div class="row" style="padding:6px 0;border-bottom:1.5px dashed #DDD8EE"><span>${pe(v.kind)}</span><div class="grow small"><a href="#/student/${n.id}"><b>${i(n.name)}</b></a><div class="muted tiny">${i(v.title)}</div></div></div>`).join("")||\'<p class="muted">All clear.</p>\'}\n    <h3 style="margin-top:16px">Mentor load</h3>${b.d.mentors.map(n=>`<div class="row small" style="padding:5px 0"><b class="grow">${i(n.name)}</b><span>${n.n} students</span><span class="chip soft">${n.upcoming} upcoming</span></div>`).join("")||\'<p class="muted small">No mentors yet \\u2014 <a href="#/mentors">add one</a>.</p>\'}</div></div>`}function Aa(){let e=b.q.toLowerCase(),t=b.d.students.filter(o=>!e||(o.name+o.email).toLowerCase().includes(e)).sort((o,r)=>o.name.localeCompare(r.name)),a=o=>\'<option value="">\\u2014 unassigned \\u2014</option>\'+b.d.mentors.map(r=>`<option value="${r.id}" ${o===r.id?"selected":""}>${i(r.name)}</option>`).join("");return`<div class="pagehead"><div><div class="kick">Roster</div><h2>Students</h2><p class="muted small" style="margin:0">Students self-register with the cohort code. New students are auto-assigned to the mentor with the fewest students.</p></div><div class="row"><input class="inp" id="a-q" placeholder="\\u{1F50D} Search" value="${i(b.q)}" style="width:220px"></div></div>\n  <div class="card tint-v row" style="margin-bottom:12px;padding:10px 14px"><b class="small">${b.sel.size} selected</b><select class="inp" id="bulk-m" style="width:auto">${a("")}</select><button class="btn sm pri" data-a="bulk" ${b.sel.size?"":"disabled"}>Assign selected</button></div>\n  <div class="tscroll"><table class="tbl"><thead><tr><th><input type="checkbox" data-a="selall"></th><th>Student</th><th>Stage</th><th>Ready</th><th>Mapped</th><th>Quests</th><th>Alerts</th><th>Mentor</th><th>Active</th><th></th></tr></thead><tbody>\n  ${t.map(o=>`<tr><td><input type="checkbox" data-sel="${o.id}" ${b.sel.has(o.id)?"checked":""}></td><td><a href="#/student/${o.id}"><b>${i(o.name)}</b></a><div class="tiny faint">${i(o.email)}</div></td><td class="small">${i(J[o.stage]||"\\u2014")}</td><td><span class="heat lv-${B(o.overall).k}">${o.overall??"\\xB7"}</span></td><td class="mono small">${o.mappedN}/10</td><td class="mono small">${o.doneN}/${o.planN}</td><td>${o.alerts.length||"\\u2014"}</td><td><select class="inp" style="padding:5px 8px;width:auto" data-assign="${o.id}">${a(o.mentorId)}</select></td><td class="small muted">${te(o.lastActive)}</td><td><button class="btn sm" data-a="spin" data-x="${o.id}">Reset PIN</button> <button class="btn sm ghost" data-a="sdel" data-x="${o.id}">Delete</button></td></tr>`).join("")||\'<tr><td colspan="10" class="empty">No students yet.</td></tr>\'}</tbody></table></div>`}function Ia(){return`<div class="pagehead"><div><div class="kick">Team</div><h2>Mentors</h2></div></div>\n  <div class="grid g3"><div class="card tint-y"><h3>\\u2795 Add a mentor</h3><div class="stack" style="margin-top:10px"><input class="inp" id="mn-name" placeholder="Full name"><input class="inp" id="mn-email" placeholder="Email (login)"><input class="inp" id="mn-pin" placeholder="PIN (4+ characters)"><input class="inp" id="mn-meet" placeholder="Default meeting link (optional)"><textarea class="inp" id="mn-bio" placeholder="Short bio (optional)"></textarea><div id="mn-err"></div><button class="btn pri" data-a="madd">Add mentor</button><p class="tiny muted">Share the email + PIN with them; they log in under \\u201CMentor\\u201D.</p></div></div>\n  <div class="span2 stack">${b.d.mentors.map(e=>`<div class="card row"><div class="ava" style="width:50px;height:50px;background:var(--mint)">${i(z(e.name))}</div><div class="grow"><h3>${i(e.name)}</h3><div class="small muted">${i(e.email)}${e.meet?" \\xB7 "+i(e.meet):""}</div></div><span class="chip soft">${e.n} students</span><span class="chip soft">${e.sessions} held</span><span class="chip soft">${e.upcoming} upcoming</span><button class="btn sm" data-a="mpin" data-x="${e.id}">Reset PIN</button><button class="btn sm ghost" data-a="mdel" data-x="${e.id}">Remove</button></div>`).join("")||\'<div class="card empty"><div class="big">\\u{1F9D1}\\u200D\\u{1F3EB}</div>No mentors yet.</div>\'}</div></div>`}function Sa(){return`<div class="pagehead"><div><div class="kick">Library</div><h2>Resources</h2><p class="muted small" style="margin:0">Links students see in quests and the resource hub. Tag territories so the right links appear against the right gaps.</p></div><div class="row"><button class="btn" data-a="radd">+ Add link</button><button class="btn pri" data-a="rsave">Save changes</button><button class="btn ghost" data-a="rreset">Reset to defaults</button></div></div>\n  <div class="tscroll"><table class="tbl"><thead><tr><th>Category</th><th>Name</th><th>URL</th><th>Description</th><th>Free</th><th>Territories</th><th></th></tr></thead><tbody id="rs-body">\n  ${b.d.resources.map((e,t)=>`<tr data-i="${t}"><td><input class="inp" style="padding:6px 8px" data-r="cat" value="${i(e.cat)}"></td><td><input class="inp" style="padding:6px 8px" data-r="name" value="${i(e.name)}"></td><td><input class="inp" style="padding:6px 8px;min-width:200px" data-r="url" value="${i(e.url)}"></td><td><input class="inp" style="padding:6px 8px;min-width:220px" data-r="desc" value="${i(e.desc)}"></td><td><input type="checkbox" data-r="free" ${e.free?"checked":""}></td><td><input class="inp" style="padding:6px 8px;min-width:160px" data-r="pillars" value="${i((e.pillars||[]).join(", "))}" title="Codes: ${W.map(a=>a.id).join(", ")}"></td><td><button class="btn sm ghost" data-a="rdel" data-x="${t}">\\u2715</button></td></tr>`).join("")}</tbody></table></div>\n  <p class="tiny muted" style="margin-top:8px">Territory codes: ${W.map(e=>`<span class="kbd">${e.id}</span> ${i(D[e.id])}`).join(" \\xB7 ")}</p>`}function Ma(){let e=b.d.cfg;return`<div class="pagehead"><div><div class="kick">Programme</div><h2>Settings</h2></div></div>\n  <div class="grid g2"><div class="card stack"><div><label class="f">Programme name</label><input class="inp" id="cf-program" value="${i(e.program)}"></div>\n    <div><label class="f">Cohort code (students need this to sign up)</label><input class="inp" id="cf-code" value="${i(e.cohortCode)}"></div>\n    <div><label class="f">Default CAT date</label><input class="inp" type="date" id="cf-cat" value="${i(e.catDate)}"></div>\n    <div><label class="f">Welcome line on the login page</label><input class="inp" id="cf-welcome" value="${i(e.welcome)}"></div>\n    <label class="row small" style="font-weight:700"><input type="checkbox" id="cf-all" ${e.mentorsSeeAll?"checked":""} style="width:18px;height:18px"> Mentors can see all students (not just their own)</label>\n    <button class="btn pri" data-a="cfg">Save settings</button></div>\n  <div class="card tint-m"><h3>How to roll this out</h3><ol class="small" style="padding-left:18px;line-height:1.8"><li>Add your mentors (Mentors tab) and share their email + PIN.</li><li>Mentors publish weekly slots (Sessions & slots).</li><li>Share this link with students: <span class="kbd">${i(location.origin)}</span> and the cohort code <span class="kbd">${i(e.cohortCode)}</span>.</li><li>Students map their profile, pick quests and check in weekly.</li><li>Alerts route students to mentors automatically; watch the Cohort tab for gaps.</li></ol></div></div>`}function Ze(){return[...document.querySelectorAll("#rs-body tr")].map(e=>{let t=o=>e.querySelector(`[data-r="${o}"]`);return{...b.d.resources[+e.dataset.i]||{},cat:t("cat").value,name:t("name").value,url:t("url").value,desc:t("desc").value,free:t("free").checked,pillars:t("pillars").value.split(/[,\\s]+/).map(o=>o.trim().toUpperCase()).filter(o=>W.some(r=>r.id===o))}})}async function Pa(e){let t=e.target.closest("[data-a]");if(!t)return;let a=t.dataset.a,o=t.dataset.x,r=()=>t.dataset.sure?!0:(t.dataset.sure=1,t.textContent="Sure?",!1);try{if(a==="logout")$("/logout","POST").catch(()=>{}),C.set("atlas.tok",null),C.set("atlas.role",null),location.hash="",location.reload();else if(a==="csv"){let s=await(await fetch("/api/admin/export",{headers:{authorization:"Bearer "+C.get("atlas.tok")}})).blob(),n=document.createElement("a");n.href=URL.createObjectURL(s),n.download="profile-atlas.csv",n.click()}else if(a==="selall"){let l=t.checked;b.d.students.forEach(s=>l?b.sel.add(s.id):b.sel.delete(s.id)),j()}else if(a==="bulk")await $("/admin/assign","POST",{ids:[...b.sel],mentorId:y("#bulk-m").value}),b.sel.clear(),w("Assigned"),await X(),j();else if(a==="spin"||a==="mpin")N(`<h2>Reset PIN</h2><input class="inp" id="np" placeholder="New PIN (4+ characters)"><button class="btn pri" style="margin-top:10px" data-m="${a}" data-x="${o}">Set PIN</button>`,"sm");else if(a==="sdel"){if(!r())return;await $("/admin/students/"+o,"DELETE"),w("Deleted"),await X(),j()}else if(a==="madd")await $("/admin/mentors","POST",{name:y("#mn-name").value,email:y("#mn-email").value,pin:y("#mn-pin").value,meet:y("#mn-meet").value,bio:y("#mn-bio").value}),w("Mentor added"),await X(),j();else if(a==="mdel"){if(!r())return;await $("/admin/mentors/"+o,"DELETE"),w("Removed"),await X(),j()}else if(a==="radd")b.d.resources=Ze(),b.d.resources.unshift({cat:"Other",name:"",url:"https://",desc:"",free:!0,pillars:[]}),j();else if(a==="rdel")b.d.resources=Ze(),b.d.resources.splice(+o,1),j();else if(a==="rsave"){let l=await $("/admin/resources","PUT",{resources:Ze()});w(`Saved ${l.n} links`),await X(),j()}else if(a==="rreset"){if(!r())return;await $("/admin/resources/reset","POST"),w("Defaults restored"),await X(),j()}else a==="cfg"&&(await $("/admin/config","PUT",{program:y("#cf-program").value,cohortCode:y("#cf-code").value,catDate:y("#cf-cat").value,welcome:y("#cf-welcome").value,mentorsSeeAll:y("#cf-all").checked}),w("Saved"),await X(),j())}catch(l){w(l.message);let s=y("#mn-err");s&&a==="madd"&&(s.innerHTML=`<div class="err">${i(l.message)}</div>`)}}async function Ta(e){let t=e.target;t.dataset.sel&&(t.checked?b.sel.add(t.dataset.sel):b.sel.delete(t.dataset.sel),j()),t.dataset.assign&&(await $("/admin/assign","POST",{id:t.dataset.assign,mentorId:t.value}).catch(a=>w(a.message)),w("Mentor updated"),await X())}function qa(e){if(e.target.id==="a-q"){b.q=e.target.value;let t=e.target.selectionStart;j();let a=y("#a-q");a.focus(),a.setSelectionRange(t,t)}}async function Da(e){let t=e.target.closest("[data-m]");if(!(!t||!b))try{t.dataset.m==="spin"&&await $(`/admin/students/${t.dataset.x}/pin`,"POST",{pin:y("#np").value}),t.dataset.m==="mpin"&&await $(`/admin/mentors/${t.dataset.x}`,"POST",{pin:y("#np").value}),E(),w("PIN updated")}catch(a){w(a.message)}}var he=document.getElementById("app");async function Wa(){let e=C.get("atlas.tok"),t=C.get("atlas.role");if(e&&t)try{if(t==="student")return await mt(he);if(t==="mentor")return await xt(he);if(t==="admin")return await Mt(he)}catch{C.set("atlas.tok",null),C.set("atlas.role",null)}Pt()}var Ca={profile:{stage:"final",target:"iim1",pillars:{"G-QA":{self:3,ev:["a","b","d"]},"G-VA":{self:4,ev:["a","b","c","d","e","f"]},"G-DI":{self:2,ev:["a"]},"G-MK":{self:3,ev:["a","b","c"]},"P-AC":{self:4,ev:["a","b","c","d","e","f"]},"P-LD":{self:2,ev:["a"]},"P-AW":{self:3,ev:["a","b","c"]}}},mocks:[]};async function Pt(){let e={program:"CAT Profile Atlas",welcome:""};try{e=await $("/public")}catch{}let t=K(Ca,{}),a=location.hash.replace("#","")||"start";he.innerHTML=`<header class="top"><div class="wrap"><a class="logo" href="#"><span class="mk">${oe()}</span><span class="t">Profile Atlas</span></a><span class="grow"></span><span class="small muted">${i(e.program)}</span></div></header>\n  <main><div class="wrap"><section class="hero grid g2" style="align-items:center">\n    <div><div class="chip y mono" style="margin-bottom:14px">FOR CAT ASPIRANTS \\xB7 MBA ADMISSIONS</div>\n      <h1>Chart your path to the <span class="hl">IIMs</span>.</h1>\n      <p class="lead">${i(e.welcome||"Map where you stand, see what is missing, and work through it with your mentor.")}</p>\n      <div class="row" style="margin-top:14px"><span class="chip soft">\\u{1F5FA} Live profile map</span><span class="chip soft">\\u{1F3AF} Step-by-step quests</span><span class="chip soft">\\u{1F517} Where to do it</span><span class="chip soft">\\u{1F91D} Mentor on cue</span></div></div>\n    <div class="card" style="transform:rotate(1.2deg)"><div class="row between"><b class="mono small">SAMPLE MAP</b><span class="chip c">3 territories in fog</span></div>${ae(t,{pin:"G-DI"})}</div></section>\n    <section class="roles">\n      <div class="card role tint-v"><div class="big">\\u{1F9ED}</div><h2>I\'m a student</h2><p class="muted small">Map your profile, get your plan, book your mentor.</p>\n        <div class="tabs" style="margin:10px 0"><button class="${a!=="login"?"on":""}" data-mode="start">New here</button><button class="${a==="login"?"on":""}" data-mode="login">Log in</button></div>\n        ${a==="login"?\'<form id="f-sl" class="stack"><input class="inp" name="email" type="email" placeholder="Email" required autocomplete="email"><input class="inp" name="pin" type="password" placeholder="PIN" required autocomplete="current-password"><div class="msg"></div><button class="btn pri lg">Open my atlas \\u2192</button></form>\':\'<form id="f-reg" class="stack"><input class="inp" name="code" placeholder="Cohort code (from your programme)" required style="text-transform:uppercase"><input class="inp" name="name" placeholder="Full name" required autocomplete="name"><input class="inp" name="email" type="email" placeholder="Email" required autocomplete="email"><input class="inp" name="pin" type="password" placeholder="Choose a PIN (4+ characters)" required minlength="4" autocomplete="new-password"><div class="msg"></div><button class="btn pri lg">Start mapping \\u2192</button></form>\'}</div>\n      <div class="card role tint-y"><div class="big">\\u{1F91D}</div><h2>I\'m a mentor</h2><p class="muted small">Your alert queue, students\' maps and your session calendar.</p>\n        <form id="f-ml" class="stack" style="margin-top:12px"><input class="inp" name="email" type="email" placeholder="Mentor email" required><input class="inp" name="pin" type="password" placeholder="PIN" required><div class="msg"></div><button class="btn sun lg">Open console \\u2192</button></form></div>\n      <div class="card role tint-m"><div class="big">\\u{1F6E0}</div><h2>Programme admin</h2><p class="muted small">Cohort heatmap, mentors, resource library, settings.</p>\n        <form id="f-al" class="stack" style="margin-top:12px"><input class="inp" name="password" type="password" placeholder="Admin password" required><div class="msg"></div><button class="btn go lg">Admin \\u2192</button></form></div>\n    </section>\n    <section class="grid g4" style="margin-top:34px">${[["1","\\u{1F5FA}","Map","Ten territories \\u2014 tap what is true, rate yourself, add proof. 12 minutes."],["2","\\u{1F50D}","See the gaps","A live atlas shows strong ground, gaps and fog \\u2014 and your route to target schools."],["3","\\u{1F3AF}","Do the quests","Ranked actions with step-by-step guides and links to courses, case comps and internships."],["4","\\u{1F91D}","Mentor on cue","Mock drops, blockers or low mood trigger a nudge to book a slot."]].map(([r,l,s,n])=>`<div class="card"><div class="row between"><span style="font-size:30px">${l}</span><span class="mono faint">0${r}</span></div><h3 style="margin-top:6px">${s}</h3><p class="small muted">${n}</p></div>`).join("")}</section>\n  </div></main><div class="footer">${i(e.program)} \\xB7 Profile Atlas</div>`,he.querySelectorAll("[data-mode]").forEach(r=>r.onclick=()=>{location.hash=r.dataset.mode==="login"?"login":"",Pt()});let o=(r,l)=>{let s=y("#"+r);s&&(s.onsubmit=async n=>{n.preventDefault();let v=Object.fromEntries(new FormData(s)),d=s.querySelector(".msg"),u=s.querySelector("button");u.disabled=!0;try{let m=await l(v);C.set("atlas.tok",m.token),C.set("atlas.role",m.role),location.hash="",location.reload()}catch(m){d.innerHTML=`<div class="err">${i(m.message)}</div>`,u.disabled=!1}})};o("f-reg",r=>$("/register","POST",r)),o("f-sl",r=>$("/login","POST",{...r,role:"student"})),o("f-ml",r=>$("/login","POST",{...r,role:"mentor"})),o("f-al",r=>$("/login","POST",{...r,role:"admin"}))}Wa().catch(e=>{he.innerHTML=`<div class="wrap"><div class="err" style="margin-top:40px">Could not load: ${i(e.message)}</div></div>`});})();\n<\/script>\n</body>\n</html>\n';

// src/worker.js
var worker_default = {
  async fetch(req, env) {
    const url = new URL(req.url);
    if (url.pathname.startsWith("/api/")) {
      const stub = env.ATLAS.get(env.ATLAS.idFromName("main"));
      return stub.fetch(req);
    }
    if (url.pathname === "/favicon.ico") return new Response(null, { status: 204 });
    return new Response(HTML, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-cache" } });
  }
};
var J = (d, s = 200) => new Response(JSON.stringify(d), { status: s, headers: { "content-type": "application/json" } });
var E = (m, s = 400) => J({ error: m }, s);
var rid = (n = 10) => {
  const a = new Uint8Array(n);
  crypto.getRandomValues(a);
  return [...a].map((b) => "abcdefghjkmnpqrstuvwxyz23456789"[b % 31]).join("");
};
async function hash(s) {
  const d = await crypto.subtle.digest("SHA-256", new TextEncoder().encode("atlas:" + s));
  return [...new Uint8Array(d)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
var clean = (s, n = 200) => String(s ?? "").trim().slice(0, n);
var emailOk = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
var DEFAULT_CFG = { program: "CAT Profile Atlas", cohortCode: "ATLAS2026", catDate: "2026-11-29", mentorsSeeAll: true, welcome: "Map where you stand, see what is missing, and work through it with your mentor." };
var AtlasDB = class extends DurableObject {
  constructor(ctx, env) {
    super(ctx, env);
    this.env = env;
    this.s = ctx.storage;
  }
  async cfg() {
    return { ...DEFAULT_CFG, ...await this.s.get("config") || {} };
  }
  async resources() {
    return await this.s.get("resources") || resources_default;
  }
  async students() {
    return [...(await this.s.list({ prefix: "student:" })).values()];
  }
  async mentors() {
    return [...(await this.s.list({ prefix: "mentor:" })).values()];
  }
  async sessions() {
    return await this.s.get("sessions") || [];
  }
  async putSessions(x) {
    await this.s.put("sessions", x);
  }
  pub(m) {
    return m && { id: m.id, name: m.name, email: m.email, bio: m.bio || "", meet: m.meet || "" };
  }
  async auth(req) {
    const t = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
    if (!t) return null;
    const sess = await this.s.get("tok:" + t);
    return sess || null;
  }
  async fetch(req) {
    try {
      return await this.route(req);
    } catch (e) {
      return E("Server error: " + e.message, 500);
    }
  }
  async route(req) {
    const url = new URL(req.url), p = url.pathname.replace(/^\/api/, ""), m = req.method;
    const body = m === "GET" || m === "DELETE" ? {} : await req.json().catch(() => ({}));
    const now = Date.now();
    if (p === "/public" && m === "GET") {
      const c = await this.cfg();
      return J({ program: c.program, welcome: c.welcome });
    }
    if (p === "/register" && m === "POST") {
      const c = await this.cfg();
      if (clean(body.code).toUpperCase() !== String(c.cohortCode).toUpperCase()) return E("That cohort code is not valid. Ask your programme team for it.");
      const email = clean(body.email, 120).toLowerCase(), name = clean(body.name, 80), pin = clean(body.pin, 20);
      if (!name) return E("Please enter your name.");
      if (!emailOk(email)) return E("Please enter a valid email.");
      if (pin.length < 4) return E("PIN must be at least 4 characters.");
      if (await this.s.get("email:s:" + email)) return E("An account with this email exists \u2014 log in instead.");
      const id = "s_" + rid(8);
      const st = { id, name, email, phone: clean(body.phone, 20), pinH: await hash(pin), createdAt: now, profile: { catDate: c.catDate }, mocks: [], plan: [], checkins: [], help: [], notes: [], ack: {}, nudges: [] };
      const ms = await this.mentors();
      if (ms.length) {
        const all = await this.students();
        const load = Object.fromEntries(ms.map((x) => [x.id, 0]));
        all.forEach((x) => {
          if (load[x.mentorId] != null) load[x.mentorId]++;
        });
        st.mentorId = ms.sort((a, b) => load[a.id] - load[b.id])[0].id;
      }
      await this.s.put("student:" + id, st);
      await this.s.put("email:s:" + email, id);
      return J({ token: await this.issue("student", id), role: "student" });
    }
    if (p === "/login" && m === "POST") {
      const role = body.role;
      if (role === "admin") {
        const pw = this.env.ADMIN_PASSWORD || "atlas-admin";
        if (clean(body.password, 100) !== pw) return E("Wrong admin password.", 401);
        return J({ token: await this.issue("admin", "admin"), role });
      }
      if (role !== "student" && role !== "mentor") return E("Bad role");
      const email = clean(body.email, 120).toLowerCase();
      const id = await this.s.get(`email:${role[0]}:` + email);
      const rec = id && await this.s.get(`${role}:` + id);
      if (!rec || rec.pinH !== await hash(clean(body.pin, 20))) return E("Email or PIN is incorrect.", 401);
      return J({ token: await this.issue(role, id), role });
    }
    const who = await this.auth(req);
    if (!who) return E("Please log in again.", 401);
    if (p === "/logout") {
      await this.s.delete("tok:" + (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, ""));
      return J({ ok: 1 });
    }
    if (who.role === "student" && p.startsWith("/me")) return this.studentApi(who.id, p, m, body, now);
    if (who.role === "mentor" && p.startsWith("/mentor")) return this.mentorApi(who.id, p, m, body, now);
    if (who.role === "admin" && p.startsWith("/admin")) return this.adminApi(p, m, body, now, url);
    return E("Not found", 404);
  }
  async issue(role, id) {
    const t = rid(24);
    await this.s.put("tok:" + t, { role, id, t: Date.now() });
    return t;
  }
  // ======================================================== STUDENT
  async studentApi(id, p, m, b, now) {
    const key = "student:" + id;
    const st = await this.s.get(key);
    if (!st) return E("Account not found", 401);
    const save = () => this.s.put(key, st);
    const view = async () => {
      const c = await this.cfg();
      const ses = await this.sessions();
      const mentors = await this.mentors();
      const mentor = this.pub(mentors.find((x) => x.id === st.mentorId));
      const pool = st.mentorId ? [st.mentorId] : mentors.map((x) => x.id);
      const open = ses.filter((s) => pool.includes(s.mentorId) && !s.bookedBy && s.status === "open" && Date.parse(s.start) > now).sort((a, b2) => a.start.localeCompare(b2.start));
      const mine = ses.filter((s) => s.bookedBy === id).sort((a, b2) => b2.start.localeCompare(a.start));
      const mName = Object.fromEntries(mentors.map((x) => [x.id, x.name]));
      const { pinH, ...safe } = st;
      safe.notes = (st.notes || []).filter((n) => n.shared);
      return J({ now, me: safe, cfg: { program: c.program, catDate: c.catDate, welcome: c.welcome }, mentor, resources: await this.resources(), open: open.map((s) => ({ ...s, mentorName: mName[s.mentorId] })), mine: mine.map((s) => ({ ...s, mentorName: mName[s.mentorId] })), alerts: computeAlerts(st, c, now, ses) });
    };
    if (p === "/me" && m === "GET") return view();
    if (p === "/me/data" && m === "PUT") {
      if (b.profile) {
        st.profile = { ...b.profile, updatedAt: now };
      }
      if (Array.isArray(b.mocks)) st.mocks = b.mocks.slice(0, 80);
      if (Array.isArray(b.plan)) {
        const incoming = b.plan.slice(0, 60).filter((x) => AMAP[x.aid]);
        const base = +b.base || 0;
        for (const x of st.plan || []) if (x.addedAt > base && !incoming.find((y) => y.aid === x.aid)) incoming.push(x);
        st.plan = incoming;
      }
      if (Array.isArray(b.checkins)) st.checkins = b.checkins.slice(-60);
      if (b.name) st.name = clean(b.name, 80);
      if (b.phone != null) st.phone = clean(b.phone, 20);
      if (JSON.stringify(st).length > 9e5) return E("Profile too large");
      await save();
      return view();
    }
    if (p === "/me/help" && m === "POST") {
      const text = clean(b.text, 600);
      if (!text) return E("Write a line about what you need.");
      st.help = st.help || [];
      st.help.push({ id: rid(6), t: now, text });
      await save();
      return view();
    }
    if (p === "/me/nudge-seen" && m === "POST") {
      (st.nudges || []).forEach((n) => n.seen = true);
      await save();
      return view();
    }
    const bk = p.match(/^\/me\/book\/([\w-]+)$/);
    if (bk && m === "POST") {
      const ses = await this.sessions();
      const s = ses.find((x) => x.id === bk[1]);
      if (!s || s.bookedBy || s.status !== "open") return E("That slot was just taken \u2014 pick another.");
      if (st.mentorId && s.mentorId !== st.mentorId) return E("That slot belongs to another mentor.");
      if (ses.filter((x) => x.bookedBy === id && x.status === "booked" && Date.parse(x.start) > now).length >= 3) return E("You already have 3 upcoming sessions.");
      s.bookedBy = id;
      s.studentName = st.name;
      s.status = "booked";
      s.topic = clean(b.topic, 300);
      s.alertKey = clean(b.alertKey, 120);
      s.bookedAt = now;
      if (s.alertKey) {
        st.ack = st.ack || {};
        st.ack[s.alertKey] = now;
      }
      await this.putSessions(ses);
      await save();
      return view();
    }
    const cx = p.match(/^\/me\/cancel\/([\w-]+)$/);
    if (cx && m === "POST") {
      const ses = await this.sessions();
      const s = ses.find((x) => x.id === cx[1] && x.bookedBy === id);
      if (!s || s.status !== "booked") return E("Cannot cancel that session.");
      if (s.alertKey && st.ack) delete st.ack[s.alertKey];
      Object.assign(s, { bookedBy: null, studentName: null, status: "open", topic: "", alertKey: "" });
      await this.putSessions(ses);
      await save();
      return view();
    }
    if (p === "/me/pin" && m === "POST") {
      if (clean(b.pin).length < 4) return E("PIN must be at least 4 characters.");
      st.pinH = await hash(clean(b.pin, 20));
      await save();
      return J({ ok: 1 });
    }
    return E("Not found", 404);
  }
  // ======================================================== MENTOR
  async mentorApi(mid, p, m, b, now) {
    const me = await this.s.get("mentor:" + mid);
    if (!me) return E("Account not found", 401);
    const c = await this.cfg();
    const mine = (st) => st.mentorId === mid || c.mentorsSeeAll && !st.mentorId;
    const canSee = (st) => mine(st) || c.mentorsSeeAll;
    if (p === "/mentor" && m === "GET") {
      const ses = await this.sessions();
      const all = (await this.students()).filter(canSee);
      const mentors = await this.mentors();
      const mName = Object.fromEntries(mentors.map((x) => [x.id, x.name]));
      return J({
        me: this.pub(me),
        cfg: { program: c.program, catDate: c.catDate, mentorsSeeAll: c.mentorsSeeAll },
        students: all.map((st) => ({ ...summary(st, c, now, ses), mine: st.mentorId === mid, mentorName: mName[st.mentorId] || null })),
        sessions: ses.filter((s) => s.mentorId === mid).sort((a, b2) => a.start.localeCompare(b2.start))
      });
    }
    const sm = p.match(/^\/mentor\/student\/(s_\w+)(\/[\w-]+)?$/);
    if (sm) {
      const key = "student:" + sm[1];
      const st = await this.s.get(key);
      if (!st || !canSee(st)) return E("Student not visible to you", 404);
      const act = sm[2] || "";
      const ses = await this.sessions();
      const out = async () => {
        const { pinH, ...safe } = st;
        return J({ st: safe, alerts: computeAlerts(st, c, now, ses), sessions: ses.filter((s) => s.bookedBy === st.id).sort((a, b2) => b2.start.localeCompare(a.start)), cfg: { catDate: c.catDate } });
      };
      if (!act && m === "GET") return out();
      if (act === "/note" && m === "POST") {
        const text = clean(b.text, 2e3);
        if (!text) return E("Empty note");
        st.notes = st.notes || [];
        st.notes.push({ id: rid(6), t: now, by: me.name, text, shared: !!b.shared });
        await this.s.put(key, st);
        return out();
      }
      if (act === "/ack" && m === "POST") {
        st.ack = st.ack || {};
        st.ack[clean(b.key, 160)] = now;
        if (String(b.key).startsWith("help:")) (st.help || []).forEach((h) => {
          if ("help:" + h.id === b.key) h.closed = now;
        });
        await this.s.put(key, st);
        return out();
      }
      if (act === "/nudge" && m === "POST") {
        const text = clean(b.text, 500);
        if (!text) return E("Write the message");
        st.nudges = st.nudges || [];
        st.nudges.push({ id: rid(6), t: now, by: me.name, text, book: !!b.book });
        await this.s.put(key, st);
        return out();
      }
      if (act === "/assign" && m === "POST") {
        const a = AMAP[b.aid];
        if (!a) return E("Unknown action");
        st.plan = st.plan || [];
        if (!st.plan.find((x) => x.aid === a.id)) st.plan.push({ aid: a.id, status: "todo", steps: {}, log: [], answers: {}, addedAt: now, by: me.name, due: clean(b.due, 10), mentorNote: clean(b.note, 400) });
        await this.s.put(key, st);
        return out();
      }
      if (act === "/claim" && m === "POST") {
        st.mentorId = mid;
        await this.s.put(key, st);
        return out();
      }
      return E("Not found", 404);
    }
    if (p === "/mentor/slots" && m === "POST") {
      const ses = await this.sessions();
      const start = Date.parse(b.start);
      if (isNaN(start)) return E("Pick a valid date & time");
      const n = Math.max(1, Math.min(12, +b.count || 1)), gap = Math.max(15, +b.dur || 30) + Math.max(0, +b.breakMin || 0);
      const weeks = Math.max(1, Math.min(8, +b.weeks || 1));
      for (let w = 0; w < weeks; w++) for (let i = 0; i < n; i++) {
        const t = start + w * 7 * 864e5 + i * gap * 6e4;
        ses.push({ id: "x" + rid(8), mentorId: mid, mentorName: me.name, start: new Date(t).toISOString(), dur: Math.max(15, +b.dur || 30), mode: clean(b.mode, 20) || "video", link: clean(b.link || me.meet, 300), status: "open", bookedBy: null, createdAt: now });
      }
      await this.putSessions(ses);
      return J({ ok: 1 });
    }
    const sl = p.match(/^\/mentor\/slots\/([\w-]+)(\/\w+)?$/);
    if (sl) {
      const ses = await this.sessions();
      const s = ses.find((x) => x.id === sl[1] && x.mentorId === mid);
      if (!s) return E("Slot not found", 404);
      if (m === "DELETE") {
        if (s.bookedBy) {
          s.status = "cancelled";
          s.cancelNote = "Cancelled by mentor";
          const st = await this.s.get("student:" + s.bookedBy);
          if (st) {
            st.nudges = st.nudges || [];
            st.nudges.push({ id: rid(6), t: now, by: me.name, text: `Your session on ${new Date(s.start).toUTCString().slice(0, 22)} UTC was cancelled \u2014 please pick another slot.`, book: true });
            if (s.alertKey && st.ack) delete st.ack[s.alertKey];
            await this.s.put("student:" + st.id, st);
          }
        } else ses.splice(ses.indexOf(s), 1);
        await this.putSessions(ses);
        return J({ ok: 1 });
      }
      if (sl[2] === "/done" && m === "POST") {
        s.status = b.noshow ? "noshow" : "done";
        s.summary = clean(b.summary, 2e3);
        s.doneAt = now;
        if (s.bookedBy && s.summary) {
          const st = await this.s.get("student:" + s.bookedBy);
          if (st) {
            st.notes = st.notes || [];
            st.notes.push({ id: rid(6), t: now, by: me.name, text: "Session notes: " + s.summary, shared: true });
            await this.s.put("student:" + st.id, st);
          }
        }
        await this.putSessions(ses);
        return J({ ok: 1 });
      }
      if (sl[2] === "/link" && m === "POST") {
        s.link = clean(b.link, 300);
        await this.putSessions(ses);
        return J({ ok: 1 });
      }
    }
    if (p === "/mentor/profile" && m === "POST") {
      me.bio = clean(b.bio, 400);
      me.meet = clean(b.meet, 300);
      if (b.pin) {
        if (clean(b.pin).length < 4) return E("PIN too short");
        me.pinH = await hash(clean(b.pin, 20));
      }
      await this.s.put("mentor:" + mid, me);
      return J({ ok: 1 });
    }
    return E("Not found", 404);
  }
  // ======================================================== ADMIN
  async adminApi(p, m, b, now, url) {
    const c = await this.cfg();
    if (p === "/admin" && m === "GET") {
      const ses = await this.sessions();
      const mentors = await this.mentors();
      const students = (await this.students()).map((st) => summary(st, c, now, ses));
      return J({ cfg: c, mentors: mentors.map((x) => ({ ...this.pub(x), n: students.filter((s) => s.mentorId === x.id).length, sessions: ses.filter((s) => s.mentorId === x.id && s.status === "done").length, upcoming: ses.filter((s) => s.mentorId === x.id && s.status === "booked" && Date.parse(s.start) > now).length })), students, resources: await this.resources(), sessions: ses.length, defaultPw: !this.env.ADMIN_PASSWORD });
    }
    if (p === "/admin/config" && m === "PUT") {
      const n = { ...c };
      if (b.program != null) n.program = clean(b.program, 80) || c.program;
      if (b.cohortCode != null) n.cohortCode = clean(b.cohortCode, 30).toUpperCase() || c.cohortCode;
      if (b.catDate != null) n.catDate = clean(b.catDate, 10);
      if (b.welcome != null) n.welcome = clean(b.welcome, 300);
      if (b.mentorsSeeAll != null) n.mentorsSeeAll = !!b.mentorsSeeAll;
      await this.s.put("config", n);
      return J({ ok: 1 });
    }
    if (p === "/admin/mentors" && m === "POST") {
      const email = clean(b.email, 120).toLowerCase(), name = clean(b.name, 80), pin = clean(b.pin, 20);
      if (!name || !emailOk(email) || pin.length < 4) return E("Name, valid email and a PIN of 4+ characters are needed.");
      if (await this.s.get("email:m:" + email)) return E("A mentor with this email exists.");
      const id = "m_" + rid(8);
      await this.s.put("mentor:" + id, { id, name, email, pinH: await hash(pin), bio: clean(b.bio, 400), meet: clean(b.meet, 300), createdAt: now });
      await this.s.put("email:m:" + email, id);
      return J({ ok: 1 });
    }
    const md = p.match(/^\/admin\/mentors\/(m_\w+)$/);
    if (md && m === "DELETE") {
      const x = await this.s.get("mentor:" + md[1]);
      if (!x) return E("Not found", 404);
      await this.s.delete("mentor:" + x.id);
      await this.s.delete("email:m:" + x.email);
      for (const st of await this.students()) if (st.mentorId === x.id) {
        st.mentorId = null;
        await this.s.put("student:" + st.id, st);
      }
      return J({ ok: 1 });
    }
    if (md && m === "POST") {
      const x = await this.s.get("mentor:" + md[1]);
      if (!x) return E("Not found", 404);
      if (b.pin) x.pinH = await hash(clean(b.pin, 20));
      await this.s.put("mentor:" + x.id, x);
      return J({ ok: 1 });
    }
    if (p === "/admin/assign" && m === "POST") {
      const ids = Array.isArray(b.ids) ? b.ids : [b.id];
      for (const id of ids) {
        const st = await this.s.get("student:" + id);
        if (st) {
          st.mentorId = b.mentorId || null;
          await this.s.put("student:" + id, st);
        }
      }
      return J({ ok: 1 });
    }
    const sd = p.match(/^\/admin\/students\/(s_\w+)(\/pin)?$/);
    if (sd) {
      const st = await this.s.get("student:" + sd[1]);
      if (!st) return E("Not found", 404);
      if (m === "DELETE") {
        await this.s.delete("student:" + st.id);
        await this.s.delete("email:s:" + st.email);
        return J({ ok: 1 });
      }
      if (sd[2] && m === "POST") {
        if (clean(b.pin).length < 4) return E("PIN too short");
        st.pinH = await hash(clean(b.pin, 20));
        await this.s.put("student:" + st.id, st);
        return J({ ok: 1 });
      }
      if (m === "GET") {
        const { pinH, ...safe } = st;
        return J({ st: safe });
      }
    }
    if (p === "/admin/resources" && m === "PUT") {
      if (!Array.isArray(b.resources)) return E("Bad list");
      const list = b.resources.slice(0, 400).map((r) => ({ id: clean(r.id, 40) || "r-" + rid(5), cat: clean(r.cat, 40) || "Other", name: clean(r.name, 100), url: clean(r.url, 400), desc: clean(r.desc, 300), free: !!r.free, pillars: (r.pillars || []).slice(0, 10), actions: (r.actions || []).slice(0, 30) })).filter((r) => r.name && /^https?:\/\//.test(r.url));
      await this.s.put("resources", list);
      return J({ ok: 1, n: list.length });
    }
    if (p === "/admin/resources/reset" && m === "POST") {
      await this.s.delete("resources");
      return J({ ok: 1 });
    }
    if (p === "/admin/export" && m === "GET") {
      const ses = await this.sessions();
      const mentors = await this.mentors();
      const mName = Object.fromEntries(mentors.map((x) => [x.id, x.name]));
      const rows = (await this.students()).map((st) => summary(st, c, now, ses));
      const pids = ["G-QA", "G-VA", "G-DI", "G-MK", "P-AC", "P-WK", "P-LD", "P-EC", "P-AW", "P-NR"];
      const head = ["name", "email", "phone", "mentor", "stage", "target", "overall", "gate_index", "profile_index", "projected_pct", ...pids, "mocks", "quests", "quests_done", "open_alerts", "last_active"];
      const q = (v) => {
        const s = v == null ? "" : String(v);
        return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
      };
      const lines = [head.join(",")].concat(rows.map((r) => [r.name, r.email, r.phone, mName[r.mentorId] || "", r.stage, r.target, r.overall, r.gate, r.prof, r.proj?.mid, ...pids.map((k) => r.pillars[k]), r.mocks, r.planN, r.doneN, r.alerts.length, new Date(r.lastActive).toISOString().slice(0, 10)].map(q).join(",")));
      return new Response(lines.join("\n"), { headers: { "content-type": "text/csv", "content-disposition": 'attachment; filename="profile-atlas.csv"' } });
    }
    return E("Not found", 404);
  }
};
export {
  AtlasDB,
  worker_default as default
};
