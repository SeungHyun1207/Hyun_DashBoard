/**
 *  내용 : 공통 Model
 */

export enum jwtKey {
  SSO_ACCESS = 'sso_jwt',
  SSO_REFRESH = 'sso_refresh',
  ACCESS = 'accessToken',
  REFRESH = 'refreshToken',
}

export enum viteMode {
  LOCAL = 'local',
  LOCAL_DEV = 'local_dev',
  DEV = 'development',
  PROD = 'production',
}

export enum ssoUrl {
  DEV = 'http://testsso.hyun.com',
  PROD = 'http://sso.hyun.com',
}

export enum SnackbarTypes {
  DEFAULT = 'default',
  WARNING = 'warning',
}

// API REQUEST
export interface CommonRequest {
  url: string;
  params?: URLSearchParams;
  headers?: Record<string, string>;
  requestBody?: Record<string, any>;
  requestFormData?: FormData;
}

export interface ChartData {
  name: string;
  y: number;
  color?: string;
}
