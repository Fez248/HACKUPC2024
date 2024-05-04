import {Divider, Image} from "@nextui-org/react";

import logo from "@/public/nobglogo.png";

export default function Footer() {
  return (
    <footer>
      <Divider className="w-full" />
      <div className="w-full flex justify-center items-center gap-1 border-none">
        <Image alt='logo' {...logo} className="flex justify-start w-20 border-r-0 rounded-none" />    
        <p className="flex justify-center">&copy; {new Date().getFullYear()}</p>  
      </div>
    </footer>
  );
}