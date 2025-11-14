import { ReactNode } from "react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative container mx-auto">
      <Link
        href="/"
        className={buttonVariants({
          variant: "outline",
          className: "absolute top-4 left-4",
        })}
      >
        <ArrowLeft />
        Go Back
      </Link>
      {children}
    </div>
  );
}

export default AuthLayout;
