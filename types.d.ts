declare namespace App {
  interface Locals {
    title: string;
    foo: string;
  }
}

interface ImportMetaEnv {
  readonly GOOGLE_GENAI_API_KEY: string;
}
