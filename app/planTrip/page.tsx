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
  
  export default function createPage() {
    return (
      <div>
        <main>
          <h1 className="text-4xl font-bold pb-8 pl-1">Plan Your Trip</h1>
          <div className="grid grid-cols-2 gap-4">
            <MapInteractive />
            <div className="col-start-2 flex-row justify-center">
              <Card className="py-4" style={{ width: "600px", height: "150px" }}>
            <CardBody className="flex flex-col justify-between overflow-visible py-2 h-full">
              <div className="flex flex-col justify-between h-full">
                <h4 className="font-bold text-lg">Opció 1</h4>
                <p className="text-sm font-bold overflow-hidden overflow-ellipsis">
                Guided tour through London&aph;s famous landmarks that appeared in the Harry Potter films.
                </p>
              </div>
            </CardBody>
          </Card>

          <Card className="py-4 mt-7" style={{ width: "600px", height: "150px" }}> 
            <CardBody className="flex flex-col justify-between overflow-visible py-2 h-full">
              <div className="flex flex-col justify-between h-full">
                <h4 className="font-bold text-lg">Opció 2</h4>
                <p className="text-sm font-bold overflow-hidden overflow-ellipsis">
                Explore the University of Oxford where several scenes were filmed, experiencing the aura and architecture that inspired the halls of Hogwarts.
                </p>
              </div>
            </CardBody>
          </Card>

          <Card className="py-4 mt-7" style={{ width: "600px", height: "150px" }}> 
            <CardBody className="flex flex-col justify-between overflow-visible py-2 h-full">
              <div className="flex flex-col justify-between h-full">
                <h4 className="font-bold text-lg">Opció 3</h4>
                <p className="text-sm font-bold overflow-hidden overflow-ellipsis">
                Visit to the actual filming locations outside of London to see where famous scenes from the movies were brought to life.
                </p>
              </div>
            </CardBody>
          </Card>

            <div className="w-full flex justify-center pt-10 align-bottom"> 
              <Link href="/finalTrip">
                <Button className="w-60">Next</Button>
              </Link>
            </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
  
  