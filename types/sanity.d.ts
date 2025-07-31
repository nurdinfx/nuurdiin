declare module 'sanity' {
  export function defineConfig(config: any): any;
}

declare module 'sanity/desk' {
  export function deskTool(): any;
}

declare module '@sanity/vision' {
  export function visionTool(): any;
}

declare module 'next-auth' {
  export function getServerSession(authOptions: any): any;
  export const authOptions: any;
}

declare module 'next/server' {
  export class NextResponse {
    constructor(body?: any, init?: any);
    static json(data: any, init?: any): NextResponse;
  }
} 