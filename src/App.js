import * as React from "react";
import { Admin, Resource, ShowGuesser } from 'react-admin';
import crudProvider from 'ra-data-nestjsx-crud'
import { ClientsEdit, ClientsCreate, ClientsList } from "./components/clients";
import { MeidcalStaffEdit, MeidcalStaffList, MeidcalStaffCreate } from './components/staff-medical-personnel';
import { DoormanStaffList, DoormanStaffEdit, DoormanStaffCreate} from './components/staff-doorman-personnel';
import { ServiceStaffCreate, ServiceStaffList, ServiceStaffEdit } from './components/staff-service-personnel';
import { RegistersCreate, RegistersEdit, RegistersList } from "./components/registers";
import { RoomsList, RoomsEdit, RoomsCreate } from "./components/rooms";
import { StaffList, StaffEdit, StaffCreate } from "./components/staff";
import { ShiftsList, ShiftsEdit, ShiftsCreate } from "./components/shifts";
import { SchedulesCreate, SchedulesList, SchedulesEdit } from "./components/schedules";
import { ComplainsSuggestionsEdit, ComplainsSuggestionsList, ComplainsSuggestionsCreate } from "./components/complains-suggestions/complains-suggestions";
import { PaidServicesCreate, PaidServicesList, PaidServicesEdit } from "./components/paid-service";
import { RegisterOfCardsCreate, RegisterOfCardsEdit, RegisterOfCardsList } from './components/paid-service-logs';

const dataProvider = crudProvider('http://localhost:3000');
const App = () => (
    <Admin dataProvider={dataProvider}>
      <Resource name="clients" list={ClientsList} show={ShowGuesser} edit={ClientsEdit} create={ClientsCreate}/>
      <Resource name="staff-doorman-personnel" list={DoormanStaffList} show={ShowGuesser} edit={DoormanStaffEdit} create={DoormanStaffCreate}/>
      <Resource name="staff-medical-personnel" list={MeidcalStaffList} show={ShowGuesser} edit={MeidcalStaffEdit} create={MeidcalStaffCreate}/>
      <Resource name="staff-service-personnel" list={ServiceStaffList} show={ShowGuesser} edit={ServiceStaffEdit} create={ServiceStaffCreate}/>
      <Resource name="complains-suggestions" list={ComplainsSuggestionsList} show={ShowGuesser} edit={ComplainsSuggestionsEdit} create={ComplainsSuggestionsCreate}/>
      <Resource name="registers" list={RegistersList} show={ShowGuesser} create={RegistersCreate} edit={RegistersEdit} />
      <Resource name="staff" list={StaffList} show={ShowGuesser} edit={StaffEdit} create={StaffCreate}/>
      <Resource name="shifts" list={ShiftsList} show={ShowGuesser} edit={ShiftsEdit} create={ShiftsCreate} />
      <Resource name="rooms" list={RoomsList} show={ShowGuesser} edit={RoomsEdit} create={RoomsCreate}/>
      <Resource name="schedules" list={SchedulesList} show={ShowGuesser} edit={SchedulesEdit} create={SchedulesCreate} /> 
      <Resource name="paid-services" list={PaidServicesList} show={ShowGuesser} edit={PaidServicesEdit} create={PaidServicesCreate}/>
      <Resource name="paid-services-logs" list={RegisterOfCardsList} show={ShowGuesser} edit={RegisterOfCardsEdit} create={RegisterOfCardsCreate} />
    </Admin>
  );

export default App;
