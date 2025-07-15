import { check } from "@/assets";
import { pricing } from "@/constants";
import Button from "@/components/Button";

const PricingList = () => {
  return (
    <div className="flex gap-8 max-lg:flex-wrap justify-center px-4">
      {pricing.map((item) => (
        <div
          key={item.id}
          className={`w-[340px] max-lg:w-full bg-n-8/80 border border-n-6 rounded-2xl overflow-hidden shadow-lg backdrop-blur-sm transition-all duration-300 flex flex-col group ${
            item.popular ? "ring-2 ring-purple-500/50" : ""
          }`}
        >
          {item.popular && (
            <div className="absolute top-0 right-6 bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-xs font-bold px-4 py-1 transform translate-y-[-50%] rounded-md shadow-lg z-10">
              POPULAR
            </div>
          )}

          <div className="p-8 flex-1 flex flex-col">
            <div className="mb-4">
              <h4 className="text-2xl font-bold text-white mb-2">
                {item.title}
              </h4>
              <p className="text-n-4 text-sm min-h-[40px]">
                {item.description}
              </p>
            </div>

            <div className="mb-8">
              {item.price ? (
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white">
                    ₹{item.price}
                  </span>
                  <span className="text-sm text-n-4 ml-1">/month</span>
                </div>
              ) : (
                <div className="text-3xl font-bold text-white">Contact us</div>
              )}
            </div>

            <Button
              className={`w-full mb-6 ${
                item.popular
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "bg-n-7 hover:bg-n-9"
              } text-white rounded-lg py-3 font-semibold transition-colors duration-300`}
              href={item.price ? "/pricing" : "mailto:contact@example.com"}
            >
              {item.price ? "Get Started" : "Contact Us"}
            </Button>

            <div className="border-t border-n-6 pt-6 flex-1">
              <ul className="space-y-3">
                {item.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <img
                      src={check.src}
                      width={18}
                      height={18}
                      alt="Check"
                      className="mr-3 mt-1"
                    />
                    <p className="text-n-3 text-sm leading-snug">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingList;

