import React from "react";
import { FiMail, FiUser, FiCode } from "react-icons/fi";
import { GrProjects } from "react-icons/gr";

const Menu = () => {
  return (
    <div className="p-4 mt-8">
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <Card title="About Me" subtitle="Bio + Experience" href="#" Icon={FiUser}/>
        <Card title="Projects" subtitle="Stuff I Created!" href="#" Icon={GrProjects} />
        <Card title="Skills" subtitle="Frameworks / Libraries" href="#" Icon={FiCode} />
        <Card title="Contact Me" subtitle="Stop Stalking and Get Talking!" href="#" Icon={FiMail}/>
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded border-[1px] border-border relative overflow-hidden group bg-foreground"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary-light translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-foreforeground group-hover:text-primary-dark group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-primary-dark group-hover:text-primary-content transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-copy group-hover:text-primary-content relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-primary-content relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default Menu;