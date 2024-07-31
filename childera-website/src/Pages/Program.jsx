import React from "react";
import Hero from "../Components/Program/Hero";
import Activities from "../Components/Program/Activities";
import { Individuals } from "../Components/Childera/Effective";
import { Number } from "../Components/Childera/Number";
import { Form } from "../Components/Childera/Form";

const Program = () => {
  return (
    <div className="overflow-x-hidden mt-10">
      <Hero />
      <Activities />

      <Individuals />

      <Number />

      <Form />
    </div>
  );
};

export default Program;
