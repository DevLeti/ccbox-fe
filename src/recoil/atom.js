// recoil 페이지
import { atom } from 'recoil';

// for survey
export const surveyDialogState = atom({
  key: 'surveyOpen',
  default: false,
});