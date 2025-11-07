import Footer from "@/features/landing/footer";
import Navbar from "@/features/landing/navbar";
import InternshipDetail from "@/components/explore/internship-detail";

const InternshipDetailStudentPage = () => {
  return (
    <>
      <Navbar />
      <InternshipDetail
        className="container mx-auto px-4 py-10"
        applySection={true}
      />
      <Footer />
    </>
  );
};

export default InternshipDetailStudentPage;
