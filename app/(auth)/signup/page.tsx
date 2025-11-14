import { GalleryVerticalEnd } from "lucide-react";
import { toast } from "sonner";
import { SignupForm } from "@/components/signup-form";
import { authClient } from "@/lib/auth-client";

export default function SignupPage() {
  const signinWithGithub = async () => {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
      fetchOptions: {
        onSuccess: () => {
          toast.success("Signed in with GitHub");
        },
        onError: (err) => {
          toast.error(err.error.message);
        },
      },
    });
  };
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-4" />
          </div>
          <p>SHIFU LMS</p>
        </a>
        <SignupForm />
      </div>
    </div>
  );
}
