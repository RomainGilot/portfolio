import { useEffect, useState } from "react";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import "./style.css";
import Modal from "../Modal/Modal";

function AProposdeMoi() {
  useEffect(() => {
    const particlesWrapper = document.createElement("div");
    particlesWrapper.classList.add("particles-wrapper", "overflow-hidden"); // Add overflow-hidden class

    const particlesContainer = document.createElement("div");
    particlesContainer.classList.add("particles-container");
    particlesContainer.style.zIndex = "-1"; // Set z-index to a lower value

    const colors = ["#BEE9E7", "#62B9CB", "#1B4B65", "#CAEBFF", "#5FACD3"];
    const numBalls = 20;

    for (let i = 0; i < numBalls; i++) {
      let ball = document.createElement("div");
      ball.classList.add("ball");
      ball.style.background = colors[Math.floor(Math.random() * colors.length)];
      ball.style.transform = `translate(${i * 20}px, 0)`;
      ball.style.width = `${Math.random()}em`;
      ball.style.height = ball.style.width;
      ball.style.borderRadius = "10px";

      particlesContainer.append(ball);
    }

    particlesWrapper.appendChild(particlesContainer);

    document.body.appendChild(particlesWrapper); // Append to body to ensure overflow is hidden

    particlesContainer.childNodes.forEach((el, i) => {
      let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 124,
      };
      let anim = el.animate(
        [
          { transform: "translate(0, 0)" },
          { transform: `translate(${to.x}rem, ${to.y}rem)` },
        ],
        {
          duration: (Math.random() + 1) * 10000,
          direction: "alternate",
          fill: "both",
          iterations: Infinity,
          easing: "ease-in-out",
        }
      );
    });
  }, []);

  return (
    <>
      <div className="mx-auto max-w-3xl py-20 sm:py-40 particles-line z-1">
        <div className="text-center">
          <h2 className="text-base font-semibold bg-[#EAF9FC] rounded p-1 text-[#5FACD3] inline-block">
            Bienvenue sur mon portofolio !
          </h2>
          <h1 className="text-5xl font-bold tracking-tight text-sky-950 sm:text-7xl">
            Étudiant Développeur Full-Stack en alternance
          </h1>
          <p className="mt-6 font-extralight text-3xl text-gray-400">
            Retrouvez toutes les informations qui me concerne sur ce site
            internet ! 😄
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Modal />
          </div>
        </div>
      </div>
    </>
  );
}
export default AProposdeMoi;
