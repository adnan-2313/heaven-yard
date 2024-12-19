const corporateSolutions = [
  "Goods and Service",
  "Taxes Company",
  "Registration",
  "Non-governmental organization (NGO)",
  "Intellectual Property (IP)",
];
const Business = [
  "Consumer Complaint",
  "HSN Code",
  "Patent Search",
  "Trademark Search",
  "Company Name Search",
];

const footerItems = [
  "PF Calculator",
  "GST Calculator",
  "PPF Calculator",
  "SIP Calculator",
  "TDS Calculator",
  "HRA Calculator",
  "Gratuity Calculator",
  "Business Setup Calculator",
  "EMI Calculator",
  "FD Calculator",
  "Home Loan EMI Calculator",
  "Income Tax Calculator",
  "Lumpsum Calculator",
  "Salary Calculator",
  "NPS Calculator",
  "RD Calculator",
  "Retirement Planning Calculator",
  "Mutual Fund Returns Calculator",
  "Simple Compound Interest Calculator",
  "Pay Commission of India",
];

export default function FooterSection() {
  return (
    <div className="py-[5%] px-[2.5%] bg-[#050a13] w-full mx-auto mt-20">
      {/* Corporate Solutions Section */}
      <h1 className="text-white text-2xl text-start border-b py-2 mb-4 mt-2.5">
        Corporate and Legal Solution
      </h1>
      <ul className="text-white text-md sm:text-xl flex gap-5 sm:gap-10 flex-wrap">
        {corporateSolutions.map((solution, index) => (
          <li key={index}>{solution}</li>
        ))}
      </ul>

      {/* Finance and Investment Calculators Section */}
      <h1 className="text-white text-2xl text-start border-b py-2 mb-4 mt-10">
        Finance and Investment Calculators
      </h1>
      <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-2 gap-x-5 sm:gap-3  mx-auto">
        {footerItems.map((item, index) => (
          <p
            key={index}
            className="text-white cursor-pointer text-start text-md"
          >
            {item}
          </p>
        ))}
      </div>
      <h1 className="text-white text-2xl text-start border-b py-2 mb-4 mt-10">
        Business and Legal Resources
      </h1>
      <ul className="text-white text-md sm:text-xl flex gap-5 sm:gap-10 md:gap-20 flex-wrap">
        {Business.map((solution, index) => (
          <li key={index}>{solution}</li>
        ))}
      </ul>
      <p className="text-center mt-16">
        By continuing past this page, you agree to our Terms of Service, Cookie
        Policy, Privacy Policy and Refund Policy © - Uber9 Business Process
        Services Private Limited. All rights reserved.
      </p>
    </div>
  );
}
