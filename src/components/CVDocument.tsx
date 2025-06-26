import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";

// Register your font (JetBrains Mono or fallback)
Font.register({
  family: "JetBrains Mono",
  src: "/fonts/JetBrainsMono-Regular.ttf",
  fontWeight: "normal",
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#f7fafc",
    fontFamily: "Helvetica",
    fontSize: 12,
    lineHeight: 1.5,
    position: "relative",
  },
  // Main column
  main: {
    width: "65%",
    paddingLeft: 32,
    paddingRight: 18,
    paddingTop: 32,
    paddingBottom: 0,
    backgroundColor: "#FAFAFA",
    zIndex: 3,
  },
  // Sidebar column
  sidebar: {
    width: "35%",
    padding: 28,
    backgroundColor: "#23272f",
    color: "#f1f1f1",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    zIndex: 1,
  },
  // Header & profile
  header: {
    marginBottom: 18,
  },
  name: {
    fontSize: 28,
    fontWeight: 700,
    color: "#2D2A2E",
    fontFamily: "JetBrains Mono",
    marginBottom: 2,
  },
  role: {
    fontSize: 15,
    color: "#00b8db",
    fontWeight: 500,
    marginTop: 20,
    marginBottom: 10,
  },
  blueBannerWrap: {
    position: "absolute",
    top: 140,
    left: 0,
    minHeight: 110,
    width: "100%",
    zIndex: 2,
  },
  blueBanner: {
    backgroundColor: "#00b8db",
    minHeight: 100,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center",
  },
  // ...rest as before
  blueBannerTextWrap: {
    width: "65%",
  },
  blueBannerTitle: {
    color: "#fff",
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: 2,
    textTransform: "uppercase",
    position: "absolute",
    top: -15,
    left: 32,
    zIndex: 3,
  },
  blueBannerAngle: {
    width: 150,
    height: 30,
    position: "absolute",
    backgroundColor: "#00b8db",
    transform: "skewX(45deg)",
    top: -25,
    left: -10,
    zIndex: 4,
  },
  greenBannerAngle: {
    width: "100%",
    height: 15,
    position: "absolute",
    backgroundColor: "#00bc7d",
    transform: "skewX(45deg)",
    top: -25,
    left: 150,
    zIndex: 4,
  },
  blueBannerText: {
    color: "#fff",
    fontSize: 11,
    lineHeight: 1.5,
    paddingLeft: 12,
    paddingRight: 12,
  },
  // Bump main content below the banner
  mainAfterBanner: {
    paddingTop: 170, // must match blueBannerWrap height + top offset
  },
  // Work Experience
  sectionTitle: {
    color: "#00bc7d",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 8,
  },
  jobTime: {
    position: "absolute",
    backgroundColor: "#00b8db",
    transform: "skewY(45deg)",
    width: 5,
    height: "100%",
  },
  jobStart: {
    marginTop: -5,
    width: 5,
    height: 20,
    backgroundColor: "#00bc7d",
    borderTop: "5px solid #f7fafc",
    borderBottom: "5px solid #f7fafc",
    transform: "skewY(45deg)",
  },
  experienceItem: {
    marginBottom: 16,
    paddingBottom: 10,
    alignItems: "flex-start",
  },
  timelineDates: {
    justifyContent: "flex-start",
    marginLeft: 5,
    marginRight: 10,
  },
  jobMain: {
    marginTop: -12,
    marginLeft: 20,
  },
  jobDate: {
    fontSize: 8,
    fontFamily: "JetBrains Mono",
    color: "#888",
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: 700,
    color: "#2D2A2E",
  },
  jobCompany: {
    fontSize: 12,
    fontWeight: 500,
    color: "#00b8db",
    marginBottom: 2,
  },
  jobDesc: {
    fontSize: 11,
    color: "#333",
    marginTop: 2,
  },
  jobBullets: {
    marginTop: 3,
    marginLeft: 7,
  },
  bullet: {
    fontSize: 10,
    color: "#555",
    marginBottom: 1,
  },
  // Sidebar: Logo
  logo: {
    width: 70,
    height: 70,
    marginBottom: 22,
    objectFit: "contain",
  },
  // Sidebar: Contacts
  contacts: {
    marginBottom: 25,
    width: "100%",
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
    minHeight: 11,
  },
  contactIcon: {
    width: 11,
    height: 11,
    marginRight: 7,
  },
  contactText: {
    color: "#f1f1f1",
    fontSize: 8,
    fontFamily: "JetBrains Mono",
    marginTop: 7,
  },
  // Sidebar: Skills
  skillSection: {
    marginBottom: 20,
  },
  skillSectionTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: "#00b8db",
    marginBottom: 4,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 3,
  },
  tag: {
    backgroundColor: "#3b3b4f",
    color: "#e1e1e1",
    borderRadius: 3,
    padding: 5,
    fontSize: 8,
    lineHeight: 1.3,
    fontFamily: "JetBrains Mono",
    marginRight: 4,
    marginBottom: 3,
  },
});

const logoSrc = "/logo.png";

const contactDetails = [
  {
    icon: "/email.png",
    text: "ferguson_bryce@yahoo.com",
  },
  {
    icon: "web.png",
    text: "https://byteofcode.dev",
  },
  {
    icon: "/location.png",
    text: "Cape Town, South Africa",
  },
  {
    icon: "/github.png",
    text: "github.com/bryce-dev101",
  },
  {
    icon: "/linked-in.png",
    text: "linkedin.com/in/bryce-ferguson-36566156/",
  },
];

const experiences = [
  {
    company: "PayFast",
    location: "Cape Town, South Africa",
    title: "Senior Developer",
    date: "June 2024 - Present",
    companyDesc:
      "South Africa's leading online payment gateway, enabling secure, scalable e-commerce payments.",
    bullets: [
      "Modernized legacy architecture and integrated Laravel in a fast-paced agile environment.",
      "Streamlined dev workflows by integrating Laravel into legacy systems.",
      "Improved developer experience with enhanced local environments and UI layers.",
    ]
  },
  {
    company: "JD Sports",
    location: "Cape Town, South Africa",
    title: "Platform Engineer",
    date: "Nov 2022 - June 2024",
    companyDesc:
      "A global leader in sports fashion retail and e-commerce solutions.",
    bullets: [
      "Engineered scalable e-commerce tracking systems and DevOps pipelines.",
      "Built data pipelines for platforms like GA4, Facebook, and Klarna.",
      "Worked across AWS, Kubernetes, Jenkins, and Grafana.",
    ]
  },
  {
    company: "2U",
    location: "Cape Town, South Africa",
    title: "Senior Developer",
    date: "Sept 2021 - Nov 2022",
    companyDesc:
      "Education technology platform supporting online learning for leading universities.",
    bullets: [
      "Delivered backend improvements for education platforms.",
      "Led deployments using Buildkite in agile sprint cycles.",
      "Wrote internal documentation and mentored junior developers.",
    ]
  },
  {
    company: "Spinning Your Web",
    location: "Cape Town, South Africa",
    title: "Senior Developer",
    date: "Aug 2020 - Aug 2021",
    companyDesc: "Custom software and fintech consulting for banks and SMEs.",
    bullets: [
      "Refactored banking software and managed technical debt.",
      "Improved system performance and stability.",
      "Mentored junior engineers and streamlined QA workflows.",
    ]
  },
  {
    company: "Digitas Liquorice",
    location: "Cape Town, South Africa",
    title: "Senior Developer",
    date: "Oct 2018 - Aug 2019",
    companyDesc:
      "Leading digital marketing agency specializing in integrated creative, technology, and data-driven solutions for major brands across Africa.",
    bullets: [
      "Built performant CMS and API-driven systems for high-profile agency clients.",
      "Created headless CMS solutions and RESTful APIs.",
      "Delivered client work under high pressure and strict security protocols.",
      "Contributed to award-winning web projects.",
    ]
  },
  {
    company: "Creative Spark",
    location: "Cape Town, South Africa",
    title: "Senior Developer / 2IC",
    date: "June 2018 - Oct 2018",
    companyDesc:
      "South African digital agency delivering content, marketing, and technology solutions for publishers, brands, and businesses, with a focus on innovation and digital transformation.",
    bullets: [
      "Consulted on internal process improvements and team upskilling.",
      "Designed internal KPIs, risk assessments, and training material.",
      "Helped stabilize the release cycle and enforce better planning practices.",
    ]
  },
  {
    company: "Virtual Designs",
    location: "Cape Town, South Africa",
    title: "Senior PHP Developer",
    date: "Aug 2017 - June 2018",
    companyDesc:
      "A company specializing in advertising with a strong focus on SEO.",
    bullets: [
      "Improved legacy projects and led internal development operations.",
      "Built white-label products using Laravel and OctoberCMS.",
      "Introduced time/task tracking and project management processes.",
      "Improved team structure and led junior developers.",
    ]
  },
  {
    company: "Elemental",
    location: "Cape Town, South Africa",
    title: "PHP Developer",
    date: "Nov 2016 - Aug 2017",
    companyDesc:
      "A software development company offering client management solutions.",
    bullets: [
      "Delivered projects rapidly with high code quality.",
      "Gained experience in CodeIgniter and legacy PHP practices.",
      "Pushed best practices and process improvements.",
    ]
  },
  {
    company: "ChatFind",
    location: "Cape Town, South Africa",
    title: "DevOps Manager",
    date: "Nov 2015 – Feb 2016",
    companyDesc:
      "A company that aimed to assist businesses with communicating with their clients through their app.",
    bullets: [
      "Managed app releases and introduced structured testing.",
      "Streamlined app testing and bug tracking workflows.",
      "Led a distributed team through fast release cycles.",
    ]
  },
  {
    company: "Liquid Edge Solutions",
    location: "Cape Town, South Africa",
    title: "Full-stack Developer",
    date: "2012 – 2015",
    companyDesc:
      "An agency known for its fast pace and high quality standards.",
    bullets: [
      "Grew from a front-end developer to a full-stack role in a fast-paced agency.",
      "Introduced WordPress development standards and tools.",
      "Worked across QA, front-end, and back-end teams.",
      "Strengthened PHP OOP skills through custom frameworks.",
    ]
  },
  {
    company: "Sozo Web Design",
    location: "Cape Town, South Africa",
    title: "Head Developer",
    date: "2009 – 2012",
    companyDesc:
      "A small agency focused on WordPress sites and rapid development.",
    bullets: [
      "Started as a junior and grew into lead developer through hard work and self-study.",
      "Built custom WordPress themes and plugins.",
      "Learned MVC/OOP, CakePHP, and full project lifecycles.",
      "Handled both design and development independently.",
    ]
  },
];

const skills = {
  Backend: [
    "PHP",
    "Laravel",
    "CakePHP",
    "CodeIgniter",
    "REST APIs",
    "MySQL",
    "Docker",
    "NGINX",
    "Jenkins",
    "CI/CD",
    "AWS",
    "Kubernetes",
    "Moodle",
    "MiniKube",
  ],
  Frontend: [
    "HTML5",
    "CSS3",
    "Bootstrap",
    "JavaScript",
    "jQuery",
    "Ajax",
    "Responsive Design",
    "October CMS",
    "WordPress",
  ],
  Other: [
    "Grafana",
    "Buildkite",
    "Code Climate",
    "Asana",
    "Agile/Scrum",
    "Jira",
  ],
};

export const CVDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* About Section*/}
      <View style={styles.blueBannerWrap}>
        <View style={styles.blueBannerAngle} />
        <View style={styles.greenBannerAngle} />
        <Text style={styles.blueBannerTitle}>About Me</Text>
        <View style={styles.blueBanner}>
          <View style={styles.blueBannerTextWrap}>
            <Text style={styles.blueBannerText}>
              Engineering professional with 15+ years of experience delivering
              scalable, secure back-end systems using PHP, Laravel, and modern
              DevOps practices. Proven success leading Laravel integrations,
              CI/CD pipelines, and infrastructure improvements in high-stakes
              environments. Strong communicator and mentor with a deep
              understanding of agile workflows, technical debt reduction, and
              legacy system refactoring.
            </Text>
          </View>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.name}>Bryce Ferguson</Text>
          <Text style={styles.role}>Senior Developer</Text>
        </View>
        <View style={styles.mainAfterBanner}></View>
        {/* Work Experience */}
        <Text style={styles.sectionTitle}>Work Experience</Text>
        <View>
          <View style={styles.jobTime} />)
          {experiences.map((job) => (
            <View
              style={styles.experienceItem}
              key={job.company + job.from + job.to}
            >
              <View style={styles.jobStart} />
              <View style={styles.jobMain}>
                <Text style={styles.jobDate}>{job.date}</Text>
                <Text style={styles.jobTitle}>{job.title}</Text>
                <Text style={styles.jobCompany}>{job.company}</Text>
                <Text style={styles.jobDesc}>{job.companyDesc}</Text>
                <View style={styles.jobBullets}>
                  {job.bullets.map((b) => (
                    <Text style={styles.bullet} key={b}>
                      • {b}
                    </Text>
                  ))}
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Sidebar */}
      <View style={styles.sidebar}>
        {/* Logo at top */}
        <Image src={logoSrc} style={styles.logo} />
        {/* Contacts */}
        <View style={styles.contacts}>
          {contactDetails.map((c, idx) => (
            <View style={styles.contactRow} key={idx}>
              <Image src={c.icon} style={styles.contactIcon} />
              <Text style={styles.contactText}>{c.text}</Text>
            </View>
          ))}
        </View>
        {/* Skills */}
        {Object.entries(skills).map(([section, tags]) => (
          <View style={styles.skillSection} key={section}>
            <Text style={styles.skillSectionTitle}>{section}</Text>
            <View style={styles.tagContainer}>
              {tags.map((tag) => (
                <Text style={styles.tag} key={tag}>
                  {tag}
                </Text>
              ))}
            </View>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);
