import { UPDATE_USER, UPDATE_DATA, UPDATE_SUMMARY, UPDATE_SETTINGS, UPDATE_LOGINSTATUS } from './types';

// action creators
export const updateUser = (update: Record<string, any>) => ({
  type: UPDATE_USER,
  payload: update
});

export const updateData = (update: Record<string, any>) => ({
  type: UPDATE_DATA,
  payload: update
});

export const updateSummary = (update: Record<string, any>) => ({
  type: UPDATE_SUMMARY,
  payload: update
});

export const updateSettings = (update: Record<string, any>) => ({
  type: UPDATE_SETTINGS,
  payload: update
});

export const updateloginStatus = (update: boolean) => ({
  type: UPDATE_LOGINSTATUS,
  payload: update
});
