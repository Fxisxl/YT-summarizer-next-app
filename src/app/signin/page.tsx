import { auth } from "@/auth";
import SignIn from "@/src/components/SignIn";
import { redirect } from "next/navigation";
import React from "react";

//ts-ignore
export const metadata: Metadata = {
  title: "Sign in | AI study Assistant",
};




const SignInPage = async () => {
  const session = await auth();  // getting session from auth
  // console.log(session);

  if (session?.user) {   // if user is already signed in, redirect to home page
    // redirect to home page
    redirect("/");  // this from next navigation
  }
  return (
    <div className="fixed w-full h-full bg-black/80 left-0 flex items-center justify-center">
      <SignIn />;
    </div>
  );
};

export default SignInPage;
