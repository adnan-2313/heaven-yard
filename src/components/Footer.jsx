import {
  Facebook,
  GithubIcon,
  Instagram,
  Linkedin,
  LinkedinIcon,
  LucideGithub,
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
  "📞 +91 9044674052",
  "✉ ak567845@gmail.com",
  <LinkedinIcon />,
  <Instagram />,
  <Facebook />,
  <TwitterIcon />,
  <LucideYoutube />,
];

export default function FooterSection() {
  return (
    <footer className="pt-[1%]  px-[2.5%]  dotted-background w-full mx-auto mt-20">
      {/* Corporate Solutions Section */}
      <div className="max-w-[90rem] mx-auto pb-10">
        {/* Finance and Investment Calculators Section */}
        <h1 className="text-white text-2xl text-start flex items-center gap-3 border-b py-2 mb-1 mt-10 ">
          Build By Adnan Khan with ❤️
          <a href="https://www.linkedin.com/in/adnankhan123/" target="_blank">
            <Linkedin />
          </a>
        </h1>
        <div className="flex flex-wrap gap-5 mx-auto items-center mt-3">
          <h3
            className={`text-white cursor-pointer text-start text-md flex gap-2`}
          >
            Source code available at{" "}
            <a href="https://github.com/adnan-2313/heaven-yard" target="_blank">
              <button className="rounded-full border flex  border-white p-1 text-sm">
                <LucideGithub />
              </button>
            </a>
          </h3>
        </div>
      </div>
    </footer>
  );
}
