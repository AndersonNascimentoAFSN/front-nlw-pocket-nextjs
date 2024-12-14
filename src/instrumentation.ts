// import { env } from "./env";

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs' && process.env.MOCK === 'true') {
    const { server } = await import('./mocks/server')
    server.listen()
  }

  // const isNodeJs = typeof window === "undefined";
  // if (!isNodeJs) {
  //   // && env.NEXT_PUBLIC_MOCK === "true"
  //   const { worker } = await import("./mocks/browser");
  //   await worker.start();
  // }

  // if (process.env.NEXT_RUNTIME === "nodejs" && env.MOCK === "true") {
  //   const { server } = await import("./mocks/server");
  //   server.listen();
  // }

  // if (process.env.NEXT_RUNTIME !== "nodejs" && env.MOCK === "true") {
  //   const { worker } = await import("./mocks/browser");
  //   await worker.start();
  // }
}
