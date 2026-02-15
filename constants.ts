import { Member, AgendaItem, Testimonial, MeetingMinute } from './types';

export const CLUB_NAME = "Millennium Toastmasters Club";
// Permanent Meeting Venue
export const CLUB_LOCATION = "Trust Asian training center, Office 901, Bin Weidha Bldg (Same as Al Jamal), Behind Mediclinic Al Noor Hospital, Khalifa Street, Abu Dhabi, UAE";
export const MEETING_TIME = "Alternate Thursdays, 7:45 PM - 10:00 PM";
export const CONTACT_EMAIL = "millenniumtm.auh@gmail.com";
export const CONTACT_PHONE = "+971- 507 798624";
export const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Trust+Asian+Training+Center+Abu+Dhabi";

// Official TMI Logo from the corrected Drive link
// ID: 1oqO3WwVt4HaQfZ4BTpvARVVDRJUUVYPn
export const TMI_LOGO_URL = "https://lh3.googleusercontent.com/d/1oqO3WwVt4HaQfZ4BTpvARVVDRJUUVYPn=s1000";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/millennium-toastmasters-club-abudhabi/",
  facebook: "https://www.facebook.com/millennium.tmclub",
  instagram: "https://www.instagram.com/millenniumtm_auh"
};

export const TMI_LINKS = {
  howItWorks: "https://www.toastmasters.org/about/all-about-toastmasters",
  pathways: "https://www.toastmasters.org/pathways-overview",
  resources: "https://www.toastmasters.org/resources",
  faq: "https://www.toastmasters.org/faq"
};

const getDriveUrl = (id: string) => `https://lh3.googleusercontent.com/d/${id}=s1000`;

const PHOTO_IDS = {
  POORNI: "1gEyTPE_EwfcSUnnFzOXs64bYtP8Ef21t",
  KULDEEP: "1KNZhbfClunScC9YW9w_ijHYWsRAhXBsb",
  JATINDER: "10PwIUEWAi21h1oubyLYWVYgHbKodGFsd",
  SEBASTIEN: "1uUuyDsXSSl9ZwaNuPwJPSPWzSnh8WkfG",
  MAQSOOD: "1_Bbkkg3w9dpAB8H8MvavmLijVksCbLX7",
  SAIKIRAN: "1ErGwKGSpdWmUnsFUuyrveEm7dM5-J87_",
  PUSHPA: "1mkX9aMKdFvIG6M8VmZDit3z5XZmm7U02",
};

export const EXCO_MEMBERS: Member[] = [
  {
    id: '1',
    name: 'TM Kuldeep Kaushik',
    role: 'Club President',
    bio: 'Leading our club with a vision to create a world-class platform for public speaking and leadership development in Abu Dhabi.',
    photo: getDriveUrl(PHOTO_IDS.KULDEEP),
    email: 'president@millenniumtm.com'
  },
  {
    id: '2',
    name: 'TM Jatinder K Dhillon',
    role: 'VP Education',
    bio: 'Dedicated to managing our educational pathways and ensuring every member progresses through their speech goals effectively.',
    photo: getDriveUrl(PHOTO_IDS.JATINDER)
  },
  {
    id: '3',
    name: 'TM Mohammad Maqsood Ali',
    role: 'VP Membership',
    bio: 'Passionate about growing our club family and ensuring that every new guest feels at home at Millennium Toastmasters.',
    photo: getDriveUrl(PHOTO_IDS.MAQSOOD)
  },
  {
    id: '4',
    name: 'TM Sebastien Jaulent',
    role: 'VP Public Relations',
    bio: 'Driving our club presence across digital and physical platforms to showcase the amazing talent within our community.',
    photo: getDriveUrl(PHOTO_IDS.SEBASTIEN)
  },
  {
    id: '5',
    name: 'TM Pushpa Singh',
    role: 'Secretary',
    bio: 'Maintaining organizational excellence through meticulous record-keeping and efficient club administration.',
    photo: getDriveUrl(PHOTO_IDS.PUSHPA)
  },
  {
    id: '6',
    name: 'DTM Poorni Sudhakar',
    role: 'Club Treasurer',
    bio: 'Managing club finances with integrity and transparency to support our members educational journey. Also serving as Immediate Past President.',
    photo: getDriveUrl(PHOTO_IDS.POORNI)
  },
  {
    id: '7',
    name: 'TM Sai Kiran Kalvakunta',
    role: 'Sergeant At Arms',
    bio: 'Ensuring our meeting environment is professional, welcoming, and perfectly staged for every presentation.',
    photo: getDriveUrl(PHOTO_IDS.SAIKIRAN)
  }
];

export const GALLERY_IMAGES = [
  getDriveUrl("1WN9afktTJGHrflj3Gji68Vyk7IF6_tSh"),
  getDriveUrl("1lD5dHE0YC93AsD6bH6TozVoqULqBKdUf"),
  getDriveUrl("1ZWmisDCWyTr1cLOBFQXPybBaQ_Rt3GU6"),
  getDriveUrl("1guFvbTxYsUu-JNB5xE-UzuJltqCfwJwr"),
  getDriveUrl("1rYjWZhJSGnst6-E53wk8lsssWAf4bIvP"),
  getDriveUrl("1z_1EGOdgjBO--1V5pyyMLa69TMawqgqM"),
  getDriveUrl("1My4oLWSYdIz2McpRYo2fIOQQZz3RCBFA"),
  getDriveUrl("1U0L5sFP9LVpNJ26zbdzMHXK5UIw1ncwb"),
  getDriveUrl("1J10XD2-4-lFY8Bny7kDJhkob_BnEMlP8"),
];

export const MEETING_MINUTES: MeetingMinute[] = [
  {
    id: '1',
    meetingNumber: '608',
    date: '12 Feb 2026',
    theme: 'Toastmasters: A Love Story',
    wordOfTheDay: 'Effulgent',
    tme: 'TM Jatinder Kaur Dhillon',
    summary: 'A heartwarming Valentine-themed session held at Trust Asian Center. The evening celebrated growth and passion for communication with four prepared speeches and energetic evaluations.',
    bestSpeaker: 'TM Irene Nuutila',
    bestEvaluator: 'TM Arafat Sebuyria',
    bestTableTopic: 'Guest David',
    bestRolePlayer: 'TM Wilson D\'mello',
    bestAuxiliary: 'TM Sabestien Jaulent',
    agendaSummary: [
      'PWS L1.1 Icebreaker: "Who Was I - Cat or a Rat" by TM Vijay Muniraj',
      'PWS L1.2 Writing Speech with Purpose: "Connection Is a Choice" by TM Dana Fathah',
      'PWS L1.2 Writing Speech with Purpose: "Microplastics" by TM Irene Nuutila',
      'PWS L1.3 Vocal Variety: "A Near Miss" by TM Sai Kiran Kalvakunta'
    ]
  },
  {
    id: '2',
    meetingNumber: '607',
    date: '31 Jan 2026',
    theme: 'Annual Club Contests 2026',
    wordOfTheDay: 'N/A',
    tme: 'DTM Sudhakar Padmanabhan (Chief Judge: TM Riyas Ahmed)',
    summary: 'The Millennium Club Contests for 2026 were held with intense competition across four categories. TM Jatinder Kaur Dhillon achieved a remarkable "Hat-Trick" of wins, taking first place in Evaluation, Table Topics, and International Speech contests.',
    bestSpeaker: 'TM Jatinder Kaur Dhillon',
    bestEvaluator: 'TM Jatinder Kaur Dhillon',
    bestTableTopic: 'TM Jatinder Kaur Dhillon',
    contestWinners: [
      { contestName: 'Evaluation Speech', first: 'TM Jatinder Kaur Dhillon', second: 'TM Anieken Udonquak', third: 'DTM Poorni Sudhakar' },
      { contestName: 'Table Topics', first: 'TM Jatinder Kaur Dhillon', second: 'TM Martin Kasa', third: 'DTM Poorni Sudhakar' },
      { contestName: 'International Speech', first: 'TM Jatinder Kaur Dhillon', second: 'TM Arafat Sebuyria', third: 'DTM Poorni Sudhakar' },
      { contestName: 'Humorous Speech', first: 'TM Sharafudheen Changaroth', second: 'TM Martin Kasa', third: 'TM Pushpa Singh' }
    ],
    agendaSummary: [
      'Humorous Speech Contest (6 Contestants)',
      'International Speech Contest (3 Contestants)',
      'Table Topics Speech Contest (13 Contestants)',
      'Evaluation Speech Contest (5 Contestants)'
    ]
  }
];

// Meeting 609 is a Joint Meeting at a different venue
export const MOCK_AGENDA: AgendaItem[] = [];
export const MEETING_609_THEME = "Coming Soon";
export const MEETING_609_DATE = "Tuesday, 24 February 2026";
export const MEETING_609_LOCATION = "Define Training Centre, Nissan Showroom Building, Najda Street, Masaood Building, Abu Dhabi, UAE";
export const MEETING_609_WORD = {
  word: "",
  type: "",
  meaning: "",
  example: ""
};

export const PAST_WORDS_ARCHIVE = [
  { word: "Ascendancy", pronunciation: "/əˈsendənsi/", type: "noun", meaning: "Occupation of a position of dominant power or influence.", example: "The team's ascendancy in the district was a result of consistent member growth." },
  { word: "Effulgent", pronunciation: "/ɪˈfʌldʒənt/", type: "adj", meaning: "Shining brightly; radiant.", example: "The club's anniversary celebration was marked by an effulgent display of talent and camaraderie." }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'DTM Poorni Sudhakar',
    photo: getDriveUrl(PHOTO_IDS.POORNI),
    quote: 'My journey from a hesitant beginner to a Distinguished Toastmaster has been life-changing.',
    roleInClub: 'Treasurer & Past President'
  },
  {
    id: '2',
    name: 'TM Jatinder K Dhillon',
    photo: getDriveUrl(PHOTO_IDS.JATINDER),
    quote: 'Toastmasters is more than just public speaking; it is a community of like-minded individuals.',
    roleInClub: 'VP Education'
  }
];