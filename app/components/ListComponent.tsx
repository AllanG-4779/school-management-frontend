"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import TableComponent from "./TableComponent";
import { StudentData } from "../utils/types";
import Link from "next/link";

const ListComponent = () => {
  return (
    <div className="mt-5">
      <div className="p-3 flex bg-white rounded-md w-full justify-between">
        <div className=" flex gap-3 items-center border rounded px-2">
          <FaSearch className="text-purple-600" />
          <input
            type="text"
            className="outline-none p-2 text-slate-600"
            placeholder="Search Item"
          />
        </div>
        <div className="flex items-center gap-5">
          <div className="border p-2 rounded-md min-w-[6rem]">
            <select
              name="sort-order"
              id="sorter"
              className="text-slate-500 outline-none"
            >
              <option value="Newest">Newest</option>
              <option value="Oldest">Oldest</option>
              <option value="A-Z">A-Z</option>
            </select>
          </div>
          <div className="p-2 bg-purple-600 hover:bg-purple-700  cursor-pointer text-white rounded-md min-w-[6rem] ">
            <Link href={"./students/new"} className="flex items-center gap-2 ">
              <FaPlus className="text-white" />
              <p className="font-bold ">New Student</p>
            </Link>
          </div>
        </div>
      </div>
      <TableComponent<StudentData>
        titles={[
          "First Name",
          "Last Name",
          "Registration No",
          "Parent Name",
          "Parent Contact",
          "Previous Grade",
          "Class",
          "Year Admitted",
        ]}
        data={[
          {
            firstName: "Emmanuel",
            lastName: "Njoroge",
            admno: "123/14",
            parentContact: "0712341234",
            parentName: "Alice Wanjiru",
            prevGrade: "B+",
            stream: "4A",
            yearAdm: "2014",
          },
          {
            firstName: "Grace",
            lastName: "Mutiso",
            admno: "245/15",
            parentContact: "0712345678",
            parentName: "Samuel Mutiso",
            prevGrade: "A",
            stream: "4S",
            yearAdm: "2015",
          },
          {
            firstName: "Michael",
            lastName: "Onyango",
            admno: "367/16",
            parentContact: "0723456789",
            parentName: "Jane Onyango",
            prevGrade: "A-",
            stream: "4B",
            yearAdm: "2016",
          },
          {
            firstName: "Lucy",
            lastName: "Wambui",
            admno: "478/17",
            parentContact: "0734567890",
            parentName: "Peter Wambui",
            prevGrade: "B",
            stream: "4A",
            yearAdm: "2017",
          },
          {
            firstName: "Dennis",
            lastName: "Mwangi",
            admno: "589/18",
            parentContact: "0745678901",
            parentName: "George Mwangi",
            prevGrade: "C+",
            stream: "4C",
            yearAdm: "2018",
          },
          {
            firstName: "Mercy",
            lastName: "Kamau",
            admno: "612/19",
            parentContact: "0756789012",
            parentName: "Josephine Kamau",
            prevGrade: "A",
            stream: "4S",
            yearAdm: "2019",
          },
          {
            firstName: "Paul",
            lastName: "Odhiambo",
            admno: "734/20",
            parentContact: "0767890123",
            parentName: "Lucy Odhiambo",
            prevGrade: "B-",
            stream: "4D",
            yearAdm: "2020",
          },
          {
            firstName: "Esther",
            lastName: "Mutuku",
            admno: "856/21",
            parentContact: "0778901234",
            parentName: "David Mutuku",
            prevGrade: "A+",
            stream: "4A",
            yearAdm: "2021",
          },
          {
            firstName: "Brian",
            lastName: "Kariuki",
            admno: "978/22",
            parentContact: "0789012345",
            parentName: "Sarah Kariuki",
            prevGrade: "B+",
            stream: "4B",
            yearAdm: "2022",
          },
          {
            firstName: "Faith",
            lastName: "Karanja",
            admno: "109/23",
            parentContact: "0790123456",
            parentName: "Samuel Karanja",
            prevGrade: "A",
            stream: "4S",
            yearAdm: "2023",
          },
        ]}
      />
    </div>
  );
};

export default ListComponent;
