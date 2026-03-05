const companyImages = [
  "/images/company-logo-1.png",
  "/images/company-logo-2.png",
  "/images/company-logo-3.png",
  "/images/company-logo-4.png",
  "/images/company-logo-5.png",
  "/images/company-logo-6.jpg",
  "/images/company-logo-7.png",
  "/images/company-logo-8.jpg",
  "/images/company-logo-9.png",
  "/images/company-logo-10.png",
];

export default function generateCompanyImage() {
  const idx = Math.floor(Math.random() * companyImages.length);
  return companyImages[idx];
}
