import {
  Facebook,
  Instagram,
  Linkedin,
  LinkedinIcon,
  LucideYoutube,
  TwitterIcon,
} from "lucide-react";

const corporateSolutions = [
  "About Us",
  "Careers",
  "Services",
  "Contact Us",
  "Terms & Conditions",
  "Policy of Use",
  "Blog",
];
const Business = [
  "Consumer Complaint",
  "HSN Code",
  "Patent Search",
  "Trademark Search",
  "Company Name Search",
];

const footerItems = [
  "📞 +91 908 908 0505",
  "✉ sales@gakgroup.in",
  <LinkedinIcon />,
  <Instagram />,
  <Facebook />,
  <TwitterIcon />,
  <LucideYoutube />,
];

export default function FooterSection() {
  return (
    <footer className="pt-[5%]  px-[2.5%]  dotted-background w-full mx-auto mt-20">
      {/* Corporate Solutions Section */}
      <div className="max-w-[90rem] mx-auto">
        <h1 className="text-white text-2xl text-start border-b py-2 mb-4 ">
          Get In Touch
        </h1>
        <ul className="text-white text-md sm:text-xl flex gap-5 sm:gap-10 flex-wrap">
          {corporateSolutions.map((solution, index) => (
            <li key={index}>{solution}</li>
          ))}
        </ul>

        {/* Finance and Investment Calculators Section */}
        <h1 className="text-white text-2xl text-start border-b py-2 mb-4 mt-10">
          Connect With Us
        </h1>
        <div className="flex flex-wrap gap-5 mx-auto">
          {footerItems.map((item, index) => (
            <span
              key={index}
              className={`text-white cursor-pointer text-start text-md`}
            >
              {item}
            </span>
          ))}
        </div>
        <h1 className="text-white  text-2xl text-start border-b py-2 mb-4 mt-10">
          Head Office Address
        </h1>
        <p className="text-white pb-4">
          309 Aparna Green, Nanakaramguda Opposite to Golfview Apartments,
          Hyderabad, Telangana 500008
        </p>
      </div>
    </footer>
  );
}
