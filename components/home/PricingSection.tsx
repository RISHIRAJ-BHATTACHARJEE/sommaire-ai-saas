import { cn } from "@/lib/utils";
import { ArrowRight, CheckIcon } from "lucide-react";
import Link from "next/link";

type PricingCardType = {
  name: string;
  price: number;
  description: string;
  items: string[];
  id: string;
  paymentLink: string;
  priceId: string;
};

const plans = [
  {
    name: "Basic",
    price: 9,
    description: "Perfect for ocassional use",
    items: [
      "5 PDF summaries per month",
      "Standard processing speed",
      "Email support",
    ],
    id: "basic",
    paymentLink: "",
    priceId: "",
  },
  {
    name: "Pro",
    price: 19,
    description: "For professionals and teams",
    items: [
      "Unlimited PDF summaries",
      "Pririty processing",
      "24/7 priority support",
      "Markdown export",
    ],
    id: "pro",
    paymentLink: "",
    priceId: "",
  },
];

const PricingSection = () => {
  return (
    <section className="relative overflow-hidden" id="pricing">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        <div className="flex items-center justify-center w-full pb-12">
          <h2 className="uppercase text-xl font-bold mb-8 text-rose-500">Pricing</h2>
        </div>
        <div className="relative flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8 lg:gap-12">
          {plans.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

const PricingCard = ({
  name,
  price,
  description,
  items,
  id,
  paymentLink,
}: PricingCardType) => {
  return (
    <div className="relative w-full max-w-lg hover:scale-105 hover:transition-all duration-300" key={id}>
      <div
        className={cn(
          "relative flex flex-col h-full gap-8 lg:gap-12 z-10 p-8 lg:p-10 rounded-2xl border-[2px] border-gray-500/20",
          id === "pro" && "border-rose-500"
        )}
      >
        <div className="flex justify-between items-start gap-4">
          <div className="space-y-2">
            <p className="text-lg lg:text-xl font-bold capitalize">{name}</p>
            <p className="text-base-content/80">{description}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <p className="text-5xl tracking-tight font-bold">${price}</p>
          <div className="flex flex-col justify-end mb-[4px]">
            <p className="text-xs uppercase font-semibold">USD</p>
            <p className="text-xs">/month</p>
          </div>
        </div>
        <div className="space-y-2 leading-relaxed text-base flex-1">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <CheckIcon size={18} className="shrink-0 text-rose-500" />
              <span>{item}</span>
            </li>
          ))}
        </div>
        <div className="pt-6 flex justify-center w-full">
          <Link
            href={paymentLink}
            className={cn(
              "w-full rounded-full flex items-center justify-center gap-2 bg-linear-to-r from-rose-800 to-rose-500 hover:from-rose-500 hover:to-rose-800 text-white py-3 lg:py-4 font-medium border-2",
              id === "pro"
                ? "border-rose-900"
                : "border-rose-100 from-rose-400 to-rose-500"
            )}
          >
            Buy Now <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};
