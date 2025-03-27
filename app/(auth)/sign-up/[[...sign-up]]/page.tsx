import BgGradient from "@/components/common/bgGradient";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <section className="flex justify-center items-center lg:min-h-[40vh]">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        <BgGradient className="from-rose-600 via-rose-500 to-orange-400"/>
        <SignUp />
      </div>
    </section>
  );
}
