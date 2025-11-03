interface InternshipCardProps {
  title: string;
  image: string;
  datePosted: string;
  type: "Remote" | "On-site" | "Hybrid";
  skillLevel: "Beginner" | "Intermediate" | "Advanced";
  payment: "Paid" | "Unpaid";
  company: string;
}

export const internships: InternshipCardProps[] = [
  {
    title: "Ethical Hacking Internship",
    image: "/ethical-hacking.jpg",
    datePosted: "Nov 2, 2025",
    type: "Remote",
    skillLevel: "Intermediate",
    payment: "Paid",
    company: "Smart tech",
  },
  {
    title: "Network Security Analyst Internship",
    image: "/network-security.jpg",
    datePosted: "Oct 25, 2025",
    type: "Hybrid",
    skillLevel: "Advanced",
    payment: "Unpaid",
    company: "Cyber Safe",
  },
  {
    title: "Cyber Threat Intelligence Internship",
    image: "/cyber-threat.png",
    datePosted: "Nov 1, 2025",
    type: "On-site",
    skillLevel: "Beginner",
    payment: "Paid",
    company: "Spark cyber",
  },
  {
    title: "Penetration Testing Internship",
    image: "/penetration-testing.jpeg",
    datePosted: "Oct 30, 2025",
    type: "Remote",
    skillLevel: "Advanced",
    payment: "Paid",
    company: "ABC",
  },
  {
    title: "Digital Forensics Internship",
    image: "/forensic.jpg",
    datePosted: "Oct 27, 2025",
    type: "On-site",
    skillLevel: "Intermediate",
    payment: "Unpaid",
    company: "ABC",
  },
  {
    title: "Cloud Security Internship",
    image: "/csi.jpeg",
    datePosted: "Oct 28, 2025",
    type: "Hybrid",
    skillLevel: "Beginner",
    payment: "Paid",
    company: "ABC",
  },
  {
    title: "SOC (Security Operations Center) Internship",
    image: "/soc.jpg",
    datePosted: "Nov 3, 2025",
    type: "On-site",
    skillLevel: "Intermediate",
    payment: "Paid",
    company: "ABC",
  },
  {
    title: "Incident Response Internship",
    image: "/is.jpg",
    datePosted: "Oct 26, 2025",
    type: "Remote",
    skillLevel: "Advanced",
    payment: "Unpaid",
    company: "ABC",
  },
  {
    title: "Vulnerability Assessment Internship",
    image: "/va.jpg",
    datePosted: "Oct 29, 2025",
    type: "Hybrid",
    skillLevel: "Beginner",
    payment: "Paid",
    company: "ABC",
  },
];
