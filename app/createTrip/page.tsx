// pages/index.js
import {Card, CardBody, Input, Textarea, DateInput} from "@nextui-org/react";
import {CalendarDate, parseDate} from "@internationalized/date";


export default function createPage() {
  return (
    <div>
      <main>
        <h1 className="text-5xl font-bold pb-8 pl-1">Create Travel</h1>
        <Card>
          <CardBody>
            <div className="grid grid-cols-2 gap-4">
            <Input
              isRequired
              type="text"
              label="Name"
              defaultValue=""
              className=""
            />
            <Input
              type="text"
              label="Tags"
              className=""
            />
            <Textarea 
              className="col-span-2"
              isRequired
              minRows={6}
              label="Description"
            />
            <DateInput 
              label={"Departure Date"} 
              isRequired
            />
            <DateInput 
              label={"Arrival Date (optional)"} 
            />
            </div>
          </CardBody>
        </Card>
      </main>
    </div>
  );
}
