import React from "react";
import styles from "../style"
import { clients } from "../constants";

//here we want to map over our clients to show them on the landing page
const Clients = () => (
   <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
          <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] cursor-pointer object-contain transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..."/>
        </div>
      ))}
    </div>
   </section>
);

export default Clients;
