export const mockItems = [
  {
    id: "civ",
    name: "Côte d'Ivoire",
    category: "Country & Territory",
    region: "West Africa",
    description: "Sovereign state located on the southern coast of West Africa, renowned for its rapidly advancing Abidjan tech hub and cocoa production.",
    tags: ["Africa", "Abidjan Tech", "ECOWAS", "French-speaking"],
    code: "CI",
    testCase: "Diacritic (ô) + straight/curly apostrophe test (' / ’)"
  },
  {
    id: "isl",
    name: "Iceland",
    category: "Country & Territory",
    region: "Northern Europe",
    description: "Nordic island nation defined by geothermal green energy grids, volcanic landscapes, and high-tech software innovation in Reykjavík.",
    tags: ["Nordic", "Geothermal", "Reykjavík", "Mid-word 'land'"],
    code: "IS",
    testCase: "Mid-word substring match target for 'land'"
  },
  {
    id: "irl",
    name: "Ireland",
    category: "Country & Territory",
    region: "Western Europe",
    description: "European Silicon Docks epicenter host to premier multinational tech headquarters, research labs, and thriving developer communities.",
    tags: ["Silicon Docks", "Dublin", "European Union", "Mid-word 'land'"],
    code: "IE",
    testCase: "Mid-word substring match target for 'land'"
  },
  {
    id: "eth",
    name: "Éthiopie",
    category: "Country & Territory",
    region: "East Africa",
    description: "East African cradle of innovation and home to Addis Ababa's fast-growing Sheba Valley digital economy and tech parks.",
    tags: ["Horn of Africa", "Addis Ababa", "Sheba Valley", "Diacritics"],
    code: "ET",
    testCase: "Leading accent diacritic normalization (É -> E)"
  },
  {
    id: "oconnor",
    name: "O'Connor Tech",
    category: "Tech Ecosystem",
    region: "North America",
    description: "Enterprise cloud systems and developer infrastructure accelerator with global distributed engineering clusters.",
    tags: ["Enterprise", "Cloud", "Infrastructure", "Apostrophe"],
    code: "OCT",
    testCase: "Punctuation & apostrophe variation test (O'Connor / O’Connor / Oconnor)"
  },
  {
    id: "cuw",
    name: "Curacao",
    category: "Country & Territory",
    region: "Caribbean",
    description: "Vibrant Caribbean hub and constituent country known for digital nomad communities, subsea fiber connectivity, and maritime commerce.",
    tags: ["Caribbean", "Fiber Hub", "Willemstad", "Cedilla diacritic"],
    code: "CW",
    testCase: "Alternative spelling and cedilla diacritic (Curacao / Curaçao)"
  },
  {
    id: "curacao-cedilla",
    name: "Curaçao",
    category: "Country & Territory",
    region: "Caribbean",
    description: "Official diacritical form with 'ç' (cedilla), testing unaccented input against native Unicode orthography.",
    tags: ["Dutch Caribbean", "Willemstad", "FinTech", "Diacritics"],
    code: "CW-ALT",
    testCase: "Cedilla diacritic normalization (ç -> c)"
  },
  {
    id: "nld",
    name: "Netherlands",
    category: "Country & Territory",
    region: "Western Europe",
    description: "Pioneering semiconductor machinery and open web innovation capital centered in Amsterdam, Eindhoven, and Delft.",
    tags: ["Brainport", "Amsterdam", "Semiconductors", "Mid-word 'land'"],
    code: "NL",
    testCase: "Mid-word substring match target for 'land'"
  },
  {
    id: "nzl",
    name: "New Zealand",
    category: "Country & Territory",
    region: "Oceania",
    description: "Island nation leading agritech, game development, and aerospace innovation across Auckland, Wellington, and Christchurch.",
    tags: ["Oceania", "Wellington", "Aotearoa", "Mid-word 'land'"],
    code: "NZ",
    testCase: "Mid-word substring match target for 'land' across multi-word string"
  },
  {
    id: "ala",
    name: "Åland Islands",
    category: "Country & Territory",
    region: "Northern Europe",
    description: "Autonomous archipelago region of Finland in the Baltic Sea, renowned for clean maritime tech and high-bandwidth telecom.",
    tags: ["Baltic", "Autonomous", "Ring diacritic (Å)", "Mid-word 'land'"],
    code: "AX",
    testCase: "Ring diacritic (Å) and 'land' substring combined"
  },
  {
    id: "gdg-sv",
    name: "Silicon Valley GDG",
    category: "Community Chapter",
    region: "North America",
    description: "Premier Google Developer Group connecting thousands of AI, Android, and Web engineers across the Bay Area.",
    tags: ["GDG", "Google Cloud", "Android", "Bay Area"],
    code: "GDG-SV",
    testCase: "Standard multi-word developer community search"
  },
  {
    id: "sao-paulo",
    name: "São Paulo Labs",
    category: "Research Lab",
    region: "South America",
    description: "Latin America's largest artificial intelligence and cloud computing research collective, based in São Paulo's financial district.",
    tags: ["Tilde diacritic (ã)", "FinTech", "Brazil", "AI Research"],
    code: "SPL",
    testCase: "Tilde diacritic normalization (ã -> a)"
  },
  {
    id: "bogota-ai",
    name: "Bogotá AI",
    category: "Tech Ecosystem",
    region: "South America",
    description: "High-altitude Colombian engineering collective specializing in open-weights machine learning and NLP for Spanish dialects.",
    tags: ["Andean Tech", "Machine Learning", "Acute accent (á)", "Open Source"],
    code: "BOG-AI",
    testCase: "Acute accent diacritic normalization (á -> a)"
  },
  {
    id: "zurich-quantum",
    name: "Zürich Quantum",
    category: "Research Lab",
    region: "Western Europe",
    description: "Swiss quantum computing institute developing fault-tolerant superconducting qubits and cryogenic interconnects.",
    tags: ["Quantum", "Umlaut diacritic (ü)", "Switzerland", "ETH Alum"],
    code: "Z-QUANT",
    testCase: "Umlaut diacritic normalization (ü -> u)"
  },
  {
    id: "dusseldorf-cloud",
    name: "Düsseldorf Cloud",
    category: "Developer Hub",
    region: "Western Europe",
    description: "German high-availability cloud infrastructure and Kubernetes platform engineering collective in North Rhine-Westphalia.",
    tags: ["Cloud Native", "Kubernetes", "Umlaut diacritic (ü)", "DevOps"],
    code: "DUS-CLOUD",
    testCase: "Umlaut diacritic normalization (ü -> u)"
  },
  {
    id: "kobenhavn-sys",
    name: "København Systems",
    category: "Tech Ecosystem",
    region: "Northern Europe",
    description: "Danish distributed systems consultancy building zero-downtime microservices and green datacenter architectures.",
    tags: ["Nordic", "Distributed Systems", "Slashed O (ø)", "Copenhagen"],
    code: "CPH-SYS",
    testCase: "Slashed letter diacritic normalization (ø -> o)"
  },
  {
    id: "munchen-robotics",
    name: "München Robotics",
    category: "Research Lab",
    region: "Western Europe",
    description: "Bavarian autonomous systems, industrial IoT, and computer vision lab pushing the boundary of Industry 4.0 automation.",
    tags: ["Robotics", "Automation", "Umlaut diacritic (ü)", "Bavaria"],
    code: "MUC-ROB",
    testCase: "Umlaut diacritic normalization (ü -> u)"
  },
  {
    id: "laquila-net",
    name: "L'Aquila Networks",
    category: "Tech Ecosystem",
    region: "Southern Europe",
    description: "Italian edge computing consortium and optical sensor network initiative situated in the mountainous Abruzzo region.",
    tags: ["Edge Computing", "IoT", "Apostrophe elision (L')", "Italy"],
    code: "AQ-NET",
    testCase: "Apostrophe elision test (L'Aquila / LAquila / L’Aquila)"
  },
  {
    id: "chateau-dev",
    name: "Château-Thierry Tech",
    category: "Community Chapter",
    region: "Western Europe",
    description: "French developer collective fostering open-source software and regional high-speed connectivity initiatives.",
    tags: ["Circumflex diacritic (â)", "Hyphenation", "France", "Open Source"],
    code: "CHT-TECH",
    testCase: "Circumflex diacritic + hyphen handling (Château-Thierry)"
  },
  {
    id: "dartagnan",
    name: "D'Artagnan Systems",
    category: "Tech Ecosystem",
    region: "Western Europe",
    description: "High-performance cryptographic security cluster engineering tamper-proof zero-knowledge proof verifiers.",
    tags: ["Cryptography", "ZKP", "Apostrophe elision (D')", "Security"],
    code: "DAR-SYS",
    testCase: "Apostrophe elision test (D'Artagnan / DArtagnan / D’Artagnan)"
  },
  {
    id: "singapore",
    name: "Singapore GDG Cloud",
    category: "Community Chapter",
    region: "Southeast Asia",
    description: "Active community of cloud architects and DevOps professionals organizing code labs and architecture summits.",
    tags: ["Cloud", "DevOps", "Southeast Asia", "Google Cloud"],
    code: "SG-GDG",
    testCase: "Multi-token substring query"
  },
  {
    id: "tokyo-android",
    name: "Tokyo Android Engineers",
    category: "Community Chapter",
    region: "East Asia",
    description: "Mobile developer network pioneering Jetpack Compose and on-device machine learning in central Tokyo.",
    tags: ["Android", "Kotlin", "Japan", "Mobile"],
    code: "TYO-AND",
    testCase: "Standard keyword search matching"
  }
];

export const data = mockItems;
export const items = mockItems;
export default mockItems;
