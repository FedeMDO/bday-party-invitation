export type Question = {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
};

export type QuestionIds = '1' | '2' | '3' | '4' | '5';

export type InvitationInfo = {
  location: string;
  date: string;
  from: string;
  to: string;
  additionalInfo: string;
};
