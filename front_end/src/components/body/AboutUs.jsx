/* eslint-disable no-unused-vars */
import React from "react";

const AboutUs = () => {
  return (
    <div className="md:flex md:mt-[7%] mt-[20%]">
      <img
        className="md:w-6/12 w-full px-2 "
        src="https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?w=826&t=st=1716857420~exp=1716858020~hmac=dfc9b6c0bbd05e05ff957c21a8d9dd0428d4f149a1467e967105042b7c16ee0f"
        alt="about_us"
      />
      <div className="px-4">
        <p className="text-5xl text-center font-serif font-bold">About Us</p>
        <p className="font-semibold font-mono mt-6 text-xl">
          Welcome to H & B – Your Go-To Food Delivery Service
        </p>
        <p>
          At H & B, we are passionate about bringing delicious, fresh, and
          diverse culinary delights straight to your doorstep. Our journey
          started with a simple mission: to make high-quality food easily
          accessible to everyone. Whether you are craving a hearty meal, a light
          snack, or something exotic, H & B is here to satisfy your taste buds.
        </p>
        <p className="font-semibold font-mono mt-2 text-xl">Our Story</p>
        <p>
          Founded by a group of food enthusiasts and tech experts, H & B was
          born from a shared love for great food and innovative technology. We
          saw an opportunity to bridge the gap between local restaurants and
          hungry customers through a seamless online platform. Using the
          powerful MERN stack (MongoDB, Express.js, React, Node.js), we have
          built a robust and user-friendly website that ensures a smooth and
          enjoyable experience from browsing to delivery.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
