// pages/index.js
import {
    Card,
    CardBody,
    Input,
    Textarea,
    DateInput,
    Button,
  } from "@nextui-org/react";
  import { CalendarDate, parseDate } from "@internationalized/date";
  import React, { useState, useEffect } from 'react';
  import MapInteractive from "../../components/mapInteractiveClient";
  import { Link } from "@nextui-org/link";
  import { tags } from "@/public/scripts/data";
  
  export default function createPage() {
    return (
      <div>
        <main>
          <h1 className="text-4xl font-bold pb-8 pl-1">Plan Your Trip</h1>
          <div className="grid grid-cols-2 gap-4">
            <MapInteractive />
            <div className="col-start-2 flex justify-center">

            <Link href="../planTrip/succesfulTrip">
              <Button className="w-60" href="./">Next</Button>
            </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }
  
  