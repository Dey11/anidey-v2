"use client";

import { signIn } from "next-auth/react";
// import { Button } from "../../ui/button";

export function SignIn() {
  return (
    <button onClick={() => signIn("google", { redirectTo: "/" })}>
      Sign In with Google
    </button>
  );
}
