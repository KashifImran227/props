import React from "react";
import Header from "../Components/Header";
import IdCard from "../Components/IdCard"; // Ensure the correct path and name

const Page = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Team Members</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl ">
          <IdCard
            name="Asharib Ali"
            title="Teacher"
            image="https://via.placeholder.com/150"
            email="abc@gmail.com"
            phone="+1234567890"
          />
          <IdCard
            name="Amir"
            title="Student"
            image="https://via.placeholder.com/150"
          />
          <IdCard
            name="Naeem"
            title="Student"
            image="https://via.placeholder.com/150"
            email="Roll No:12345"
          />
          <IdCard
            name="Kashif"
            title="Student"
            image="https://via.placeholder.com/150"
            phone="Roll No:12345"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
