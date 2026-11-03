/*
  PROJECT DATA
  To add a project: copy one block below, change the values, and add a matching
  page in /case-studies/ (start from case-studies/_template.html).
  status: "live" | "in-development" | "concept" | "completed" | "archived"
  The order here is the order on the homepage and in the Case Studies menu.
*/
window.PROJECTS = [
  {
    slug: "ghealead",
    metrics: [["3","User Roles Served"],["8","Step Client Journey"]],
    brand: ["#2E7246", "#FABB14"],  /* card colours: primary, secondary */
    frame: "#FFFFFF",  /* optional: fixed frame colour around the card image */
    title: "GHEALEAD",
    subtitle: "Virtual Trauma Recovery Platform",
    category: "Healthtech · Web App",
    role: "Product And Operations Manager",
    status: "live",
    description: "I reframed a course into a therapy platform and owned it from requirements to release: screening, payments, therapist matching, booking and session management.",
    tags: ["Product Strategy", "Requirements", "MVP Scoping"],
    thumb: "assets/img/thumbs/ghealead.webp",
    thumbAlt: "GHEALEAD client dashboard showing the pre-assessment prompt"
  },
  {
    slug: "light-nation",
    metrics: [["~250","Visitors A Month At HQ"],["5","Branches Live"]],
    brand: ["#FF4500", "#141414"],  /* card colours: primary, secondary */
    title: "Light Nation Follow-Up System",
    subtitle: "Visitor Follow-Up Platform",
    category: "Community Engagement · Internal Tool",
    role: "Product Manager (Follow-Up System)",
    status: "live",
    description: "I replaced a shared spreadsheet that lost data with a decentralised follow-up platform. Three versions, one platform suspension, now running across five branches.",
    tags: ["Systems Design", "Access Control", "Iteration"],
    thumb: "assets/img/thumbs/light-nation.webp",
    thumbAlt: "Recreated follow-up system menu and master sheet with dummy data"
  },
  {
    slug: "tfi-fldc",
    metrics: [["4,001","Students Tracked"],["700+","Hours Saved"]],
    brand: ["#E70023", "#FFFFFF"],  /* card colours: primary, secondary */
    title: "TFI FLDC Cohort 6 Attendance And Graduation Tracker",
    subtitle: "Attendance And Graduation Tracking",
    category: "Education",
    role: "Product Owner And Builder",
    status: "completed",
    description: "I turned a graduation rule into an automated eligibility engine for 4,001 students, with bilingual reporting for every stakeholder.",
    tags: ["Business Rules", "Stakeholder Reporting", "AI-Native Build"],
    thumb: "assets/img/thumbs/tfi-fldc.webp",
    thumbAlt: "Recreated fort attendance report email with dummy data"
  },
  {
    slug: "wale-lab-r2i",
    metrics: [["164","Fellows Tracked"],["70+","Hours Saved"]],
    brand: ["#00A708", "#F7921E"],  /* card colours: primary, secondary */
    title: "Wale Lab R2I Dashboard",
    subtitle: "Fellowship Grading And Oversight",
    category: "Education",
    role: "Product Owner And Builder",
    status: "completed",
    description: "I built attendance tracking, identity matching, weighted grading and feedback routing for a 164-fellow programme, designed so one bad record could not decide who graduates.",
    tags: ["Data Integrity", "Grading Logic", "AI-Native Build"],
    thumb: "assets/img/thumbs/wale-lab-r2i.webp",
    thumbAlt: "Recreated fellowship attendance summary sheet with dummy data"
  }
];

window.STATUS_LABELS = {
  "live": "Live",
  "in-development": "In Development",
  "concept": "Concept",
  "completed": "Completed",
  "archived": "Archived"
};
