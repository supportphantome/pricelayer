export const NAV_LINKS = [
  {key: 'home', href: '/'},
  {key: 'about', href: '/about'},
  {key: 'blog', href: '/blog'},
  {key: 'contact', href: '/contact'},
] as const;

export const FOOTER_LINKS = {
  company: [
    {key: 'companyAbout', href: '/about'},
    {key: 'companyBlog', href: '/blog'},
    {key: 'companyContact', href: '/contact'},
  ],
  services: [
    {key: 'servicePricingArchitecture', href: '/signup'},
    {key: 'servicePackagingStrategy', href: '/signup'},
    {key: 'serviceMonetizationAudit', href: '/signup'},
  ],
  legal: [
    {key: 'legalPrivacyPolicy', href: '#'},
    {key: 'legalTermsOfService', href: '#'},
  ],
} as const;
