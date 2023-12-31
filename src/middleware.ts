import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  if (request.url.split("=")[1] == "") {
    return NextResponse.redirect(new URL("/error", request.url));
  }
}

export const config = {
  matcher: ["/user/:username*"],
};
