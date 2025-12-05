import Drawer from "@/components/ui/drawer";

import AddInternshipForm from "./add-internship-form";

const RegisterInternshipDrawer = ({
  isOpen,
  toggleDrawer,
}: {
  isOpen: boolean;
  toggleDrawer: () => void;
}) => {
  return (
    <Drawer
      isOpen={isOpen}
      toggleDrawer={toggleDrawer}
      className="!max-w-[800px] gap-10"
    >
      <AddInternshipForm toggleDrawer={toggleDrawer} />
    </Drawer>
  );
};

export default RegisterInternshipDrawer;
