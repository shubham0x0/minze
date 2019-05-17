import {
  UPDATE_USER,
  UPDATE_DATA,
  UPDATE_SUMMARY,
  UPDATE_SETTINGS,
  UPDATE_LOGINSTATUS,
  UPDATE_LOCATION
} from './types';

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

export const updateLocation = (update: {}) => ({
  type: UPDATE_LOCATION,
  payload: update
});

export const updateloginStatus = (update: Record<string, any>) => ({
  type: UPDATE_LOGINSTATUS,
  payload: update
});
