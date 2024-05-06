"use client"
// pages/index.js
import {
  Card,
  CardBody,
  Input,
  Textarea,
  DateInput,
  Button
} from "@nextui-org/react";
import {Select, SelectItem} from "@nextui-org/react";
import { CalendarDate, parseDate } from "@internationalized/date";
import { useForm, SubmitHandler } from "react-hook-form";
import React, { useState, useEffect } from 'react';
import { Link } from "@nextui-org/link";
import { tags } from "@/public/scripts/data";
import { cardsData } from "@/public/scripts/data";
import { animals } from "@/public/scripts/data";

export default function CreatePage() {
  const [formData, setFormData] = useState({
    name: '',
    tags: '',
    description: '',
    departureDate: null,
    arrivalDate: null
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSave = () => {
    // Convert formData to JSON format
    console.log("aaaaaaaaaa");
    const jsonData = JSON.stringify(formData, null, 2);
    console.log(jsonData); // Just logging for demonstration
  };
  return (
    <div>
      <main>
        <h1 className="text-5xl font-bold pb-8 pl-1">Create Your Trip</h1>
        <div className="grid grid-cols-2 gap-4">
          <Input
            name="name"
            isRequired
            type="text"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            className=""
          />
          <Input
            name="tags"
            type="text"
            label="Tags"
            value={formData.tags}
            onChange={handleChange}
            className=""
          />
          <Textarea
            name="description"
            className="col-span-2"
            isRequired
            minRows={6} 
            label="Description"
            value={formData.description}
            onChange={handleChange}
          />
          <DateInput
            name="departureDate"
            label={"Departure Date"}
            isRequired
            value={formData.departureDate}
          />
          <DateInput
            name="arrivalDate"
            label={"Arrival Date (optional)"}
            value={formData.arrivalDate}
          />
          <Link className="col-start-2 flex justify-end pt-52" href="../planTrip">
          <Button className="w-60" href="./" onClick={handleSave}>Next</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}

