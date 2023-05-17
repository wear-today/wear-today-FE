export type User = {
    displayName: any | string;
    email: string;
    uid: string;
    updateProfile: Promise<void> | any;
  };
  