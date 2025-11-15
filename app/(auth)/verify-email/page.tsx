import { Card } from "@/components/ui/card";
import { getServerSession } from "@/lib/get-session";
import { redirect } from "next/navigation";
import { ResendVerificationButton } from "./_components/resend-verification-button";

export default async function VerifyEmailPage() {
  const session = await getServerSession();
  const user = session?.user;
  // if (!user) unauthorized();
  if (!user) redirect("/sign-in");
  if (user.emailVerified) redirect("/");

  return (
    <div className="w-full min-h-screen">
      <Card className="max-w-md mx-auto mt-20 p-6 rounded-lg shadow-md text-center flex flex-col gap-6">
        <h1 className="text-2xl font-bold">Please verify your email</h1>
        <p>
          A verification link has been sent to your email address. Please check
          your inbox and click on the link to verify your email.
        </p>
        <ResendVerificationButton email={user?.email || ""} />
      </Card>
    </div>
  );
}
