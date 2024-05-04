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
  import { useForm, SubmitHandler } from "react-hook-form";
  import React, { useState, useEffect } from 'react';
  
  export default function createPage() {
    return (
      <div>
        <main>
          <h1 className="text-5xl font-bold pb-8 pl-1">Plan Your Trip</h1>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-start-2 flex justify-end pt-52">
              <Button className="w-60">Next</Button>
            </div>
          </div>
        </main>
      </div>
    );
  }
  
  