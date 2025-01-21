import { ContactBox } from "@/components/common/ContactBox";
import { cn, Divider } from "@nextui-org/react";

export function ContactContent() {
  //
  return (
    <div className="relative flex justify-center h-full">
      <div className="grid grid-cols-12 relative z-10 h-full w-full">
        <div className="col-span-11 xl:col-span-8">
          <div className="flex flex-col p-10 text-white">
            <h1 className="text-primary text-[30px]">
              CONTACT <span className="text-white">ME</span>
            </h1>
            <Divider className="bg-white mb-5" />

            <div
              className={cn(
                "absolute mt-[50px] transition-all duration-200 ease-in-out",
              )}
            >
              <ContactBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
