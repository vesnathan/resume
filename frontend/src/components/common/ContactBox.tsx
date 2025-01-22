import { Icon } from "@iconify/react";
import { Button, cn, Divider } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import React from "react";
import { SEND_EMAIL_ENDPOINT } from "../../../../config/apiConfig";
import validator from "validator";
import { Spinner } from "@nextui-org/react";



export function ContactBox() {
  //
  const [isSending, setIsSending] = React.useState(false);
  const [fromAddress, setFromAddress] = React.useState("");
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [sendError, setSendError] = React.useState("");
  const [emailSent, setEmailSent] = React.useState(false);

  const pathname = usePathname();

  const iconDivCss = pathname !== "/contact" ? "col-span-2" : "col-span-1";
  const textDivCss = pathname !== "/contact" ? "col-span-10" : "col-span-11";
  
  const inputClasses =
    "mb-5 w-full h-[40px] text-white bg-[#4d4d4d] border-none p-5 focus:border-primary focus:outline-none resize-none rounded-lg";
    
  const sendEmail = async () => {
    setIsSending(true);
    
    if (!fromAddress || !message || !name) {
      setSendError("Please fill in all fields");
      setIsSending(false);
      return;
    }
    
    if (!validator.isEmail(fromAddress)) {
      setSendError("Please enter a valid email address");
      setIsSending(false);
      return;
    }
    
    try {
      const response = await fetch(`${SEND_EMAIL_ENDPOINT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fromAddress, message }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        setIsSending(false);
        setSendError(data?.message || "Failed to send email");
        return;
      }
  
      if (data.success) {
        setEmailSent(true);
      } else {
        setSendError(data?.message || "Failed to send email");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setSendError(`An unexpected error occurred. ${error.message}`);
      }
    } finally {
      setIsSending(false);
    }
  };
  

  return (
    <div className="w-full  h-full p-10">
      <div
        className={cn("h-[90vh]", pathname !== "/contact" && "w-[350px]")}
        style={{
          backgroundColor: pathname !== "/contact" ? "rgba(0,0,0,0.5)" : "",
        }}
      >
        <div className="p-5">
          {pathname !== "/contact" && (
            <>
              <h2 className="text-primary ">
                CONTACT <span className="text-white">ME</span>
              </h2>
              <Divider className="bg-white mb-8" />
            </>
          )}
          <div className="grid grid-cols-12 text-white gap-2 mb-10">
            <div className={iconDivCss}>
              <Icon icon="wpf:name" />
            </div>
            <div className={textDivCss}>Nathan Loudon</div>

            <div className={iconDivCss}>
              <Icon icon="mdi:location" />
            </div>
            <div className={textDivCss}>Sydney, Brisbane, Cairns</div>

            <div className={iconDivCss}>
              <Icon icon="iconoir:phone-solid" />
            </div>
            <div className={textDivCss}>0421 569 854</div>

            <div className={iconDivCss}>
              <Icon icon="mdi:linkedin" />
            </div>
            <div className={cn(textDivCss, "flex gap-2")}>
              <Icon icon="codex:link" className="my-1" />
              <a
                href="https://www.linkedin.com/in/nathan-loudon-719b3723/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>

            <div className={iconDivCss}>
              <Icon icon="mdi:github" />
            </div>

            <div className={cn(textDivCss, "flex gap-2")}>
              <Icon icon="codex:link" className="my-1" />
              <a
                href="https://github.com/vesnathan"
                target="_blank"
                rel="noreferrer"
              >
                My GitHub
              </a>
            </div>
          </div>
          <h3 className="text-primary ">
            EMAIL <span className="text-white">ME</span>
          </h3>
          <Divider className="bg-white mb-10" />
          {!emailSent ? (
            <>
          <input placeholder="Name" className={cn(inputClasses)} onChange={(e)=>{setName(e.target.value)}}/>
          <input placeholder="Email" className={cn(inputClasses)} onChange={(e)=>{setFromAddress(e.target.value)}}/>
          <textarea
            placeholder="Message"
            className={cn(inputClasses, "h-[100%]")}
            onChange={(e) => setMessage(e.target.value)}
          />
          {sendError && <p className="text-red-500">{sendError}</p>}
          <Button
            className="bg-primary-300 text-white rounded-lg"
            onClick={() =>
              sendEmail()
            }
          >
            {isSending ? <Spinner />: "Send"}
          </Button>
          </>
          ) : (
            <p className="text-white">Email sent successfully, I&apos;ll be in touch shortly!</p>
          )
          }
        </div>
      </div>
    </div>
  );
}
