import { Icon } from "@iconify/react";
import { Divider } from "@nextui-org/react";

export function RefereesContent() {
  //
  return (
    <div className="relative flex justify-center h-full">
      <div className="grid grid-cols-12 relative z-10 h-full w-full">
        <div className="col-span-11 xl:col-span-8">
          <div className="flex flex-col p-10 text-white">
            <h1 className="text-primary text-[30px]">
              MY <span className="text-white">REFEREES</span>
            </h1>
            <Divider className="bg-white mb-5" />
            <div className="flex flex-col gap-5 ml-10">
              <div className="flex flex-col">
                <h2 className="font-bold">Khai Phan</h2>
                <span>Evolucian</span>
                {/* <div className="ml-5">
                  <div className="flex flex-row gap-5 mt-2">
                    <Icon icon="eva:email-outline" />
                    khai@financialtrainingaustralia.com
                  </div>
                  <div className="flex flex-row gap-5">
                    <Icon icon="eva:phone-outline" />
                    (+61) 478 455 557
                  </div>
                </div> */}
              </div>
              <div className="flex flex-col">
                <h2 className="font-bold">Son Dang</h2>
                <span>Financial Training Australia</span>
                {/* <div className="ml-5">
                  <div className="flex flex-row gap-5 mt-2">
                    <Icon icon="eva:email-outline" />
                    son@financialtrainingaustralia.com
                  </div>

                  <div className="flex flex-row gap-5">
                    <Icon icon="eva:phone-outline" />
                    (+61) 414 594 091
                  </div>
                </div> */}
              </div>
              <div className="flex flex-col">
                <h2 className="font-bold">Damien Free</h2>
                <span>Scene Change Tasmania</span>
                {/* <div className="ml-5">
                  <div className="flex flex-row gap-5 mt-2">
                    <Icon icon="eva:email-outline" />
                    dfree@scenechange.com.au
                  </div>

                  <div className="flex flex-row gap-5">
                    <Icon icon="eva:phone-outline" />
                    (+61) 448 566 435
                  </div>
                </div> */}
              </div>
            </div>
            <span>Please contact me for referee contact details</span>
          </div>
        </div>
      </div>
    </div>
  );
}
