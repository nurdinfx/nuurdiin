declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      // Add other user properties here if needed
    };
  }
}
