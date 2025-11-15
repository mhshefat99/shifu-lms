import { ReactNode } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative container mx-auto">
      <Link
        href="/"
        className={buttonVariants({
          variant: "outline",
          className: "fixed top-4 left-4",
        })}
      >
        <ArrowLeft />
        Go Back
      </Link>
      {children}
    </main>
  );
}

export default AuthLayout;
