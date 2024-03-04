import React from "react";
import "../../assets/CSS/card.component.css";
import { useRouter } from "next/navigation";

function Card(props: { logo: any; text: string; route: string }) {
  const router = useRouter();
  return (
    <div
      className="card"
      onClick={() => {
        router.push(props.route);
      }}
    >
      <div className="card-logo">{props.logo}</div>
      <div className="card-text">{props.text}</div>
    </div>
  );
}

export default Card;
