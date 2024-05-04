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

export default function createPage() {
  return (
    <div>
      <main>
        <h1 className="text-5xl font-bold pb-8 pl-1">Create Your Trip</h1>
        <div className="grid grid-cols-2 gap-4">
          <Input
            isRequired
            type="text"
            label="Name"
            defaultValue=""
            className=""
          />
          <Select
            items={animals}
            label="Favorite Animal"
            placeholder="Select an animal"
            className="max-w-xs"
          >
          {/* Map over the items array and generate SelectItem components */}
            {animals.map(animal => (
          <SelectItem key={animal.value}>{animal.label}</SelectItem>
          ))}
          </Select>
          <Textarea
            className="col-span-2"
            isRequired
            minRows={6} 
            label="Description"
          />
          <DateInput label={"Departure Date"} isRequired />
          <DateInput label={"Arrival Date (optional)"} />
          <Link className="col-start-2 flex justify-end pt-52" href="../planTrip">
            <Button className="w-60" href="./">Next</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}

