
export interface Member {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  email?: string;
  linkedin?: string;
}

export interface AgendaItem {
  id: string;
  time: string;
  description: string;
  rolePlayer: string;
}

export interface WordOfTheDay {
  word: string;
  type: string;
  meaning: string;
  examples: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  photo: string;
  quote: string;
  roleInClub?: string;
}

export interface ContestResult {
  contestName: string;
  first: string;
  second: string;
  third: string;
}

export interface MeetingMinute {
  id: string;
  meetingNumber: string;
  date: string;
  theme: string;
  wordOfTheDay: string;
  tme: string;
  summary: string;
  bestSpeaker?: string;
  bestEvaluator?: string;
  bestTableTopic?: string;
  bestRolePlayer?: string;
  bestAuxiliary?: string;
  contestWinners?: ContestResult[];
  agendaSummary?: string[];
}
