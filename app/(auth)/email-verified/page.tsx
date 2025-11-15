// import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getServerSession } from "@/lib/get-session";
import Link from "next/link";
import { redirect } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";

async function EmailVerifiedPage() {
  const session = await getServerSession();
  const user = session?.user;
  if (!user) redirect("/sign-in");
  if (!user.emailVerified) redirect("/verify-email");
  return (
    <div className="w-full min-h-screen">
      <Card className="max-w-md mx-auto mt-20 p-6 rounded-lg shadow-md text-center flex flex-col gap-6">
        <h1 className="text-2xl font-bold">Email Verified</h1>
        <p>
          Your email has been successfully verified. You can now sign in to your
          account.
        </p>
        <Link
          href="/"
          className={buttonVariants({
            variant: "default",
            className: "self-center w-fit",
          })}
        >
          Go to Dashboard
        </Link>
      </Card>
    </div>
  );
}

export default EmailVerifiedPage;
