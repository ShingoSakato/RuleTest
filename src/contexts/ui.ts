import React from 'react';

export enum Status {
  INITIAL = 'Initial',
  STUDY = 'Study',
  MOCK_EXAM = 'MockExam',
  MINI_TEST = 'MiniTest',
}

export function createApplicationInitialState(): Status {
  return Status.INITIAL;
}

export const Context = React.createContext({
  applicationState: createApplicationInitialState(),
  setApplicationState: (_: Status) => {},
});
