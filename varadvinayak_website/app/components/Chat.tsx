import React from "react";
import Link from "next/link";
import Image from "next/image";
import wp from "../../public/Chat/wp.png";

const Chat = () => {
  return (
    <div>
      <div className="relative">
        <Link href="https://wa.me/919370949496" target="_blank">
          <Image
            src={wp}
            alt="chat"
            width="50"
            height="50"
            className="fixed bottom-10 right-3"
          />
        </Link>
      </div>
    </div>
  );
};

export default Chat;
