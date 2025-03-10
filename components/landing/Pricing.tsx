import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";
import { SectionTitle } from "@/components/reusable/SectionTitle"


export function Pricing() {
  const plans = [
    { 
      name: "Free Trial", 
      price: "€0", 
      features: ["25 notes", "Text notes", "Basic exporting", ""] 
    },
    { 
      name: "Pro", 
      price: "€9,99/month", 
      discountedPrice: "€7,99/month", 
      features: ["75 notes / day", "Text & Speech notes", "Document exporting"] 
    },
    { 
      name: "Business", 
      price: "€19,99/month", 
      discountedPrice: "€16,99/month", 
      features: ["Unlimited notes", "Text & Speech notes", "Document exporting"] 
    }
  ];


  return (
    <section id="pricing" className="py-20 px-6 text-center w-full md:px-0 mx-auto md:max-w-5xl">
      <SectionTitle>
        Choose <span className="opacity-25 dark:opacity-50">your plan</span>
      </SectionTitle>
      <div className="mt-6 flex flex-col md:flex-row justify-center gap-6">
        {plans.map((plan, index) => (
          <Card key={index} className="w-full p-6 flex flex-col justify-start rounded-lg">
            <CardHeader className="text-center text-semibold">
              <CardTitle className="text-xl mt-4">{plan.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-left mb-2 h-1/2">
              <div className="text-center flex flex-col gap-2">
                  {plan.discountedPrice ? (
                    <div>
                    <p className="line-through opacity-50">{plan.price}</p>
                    <p className="text-2xl font-bold">{plan.discountedPrice}</p>
                    </div>
                  ) : (
                    <p className="text-2xl font-bold">{plan.price}</p>
                  )}
              </div>
              <Separator className="my-4" />
              <ul className="text-sm text-gray-600 dark:text-gray-300 flex flex-col items-start gap-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex flex-row gap-2 items-center">{feature && <Check color="#93C572" size={20}/>} {feature}</li>
                ))}
              </ul>
            </CardContent>
            <div className="mb-2 px-6 mt-4">
              <Button disabled className="w-full">Choose</Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
