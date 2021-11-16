import * as React from "react";
import { useMediaQuery } from '@material-ui/core';
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    EditButton,
    TextInput,
    SimpleForm,
    Create,
    Edit,
    SimpleList,
    useRefresh,
    useRedirect,
} from 'react-admin';

const brigadeMedicalPersonnelFilters = [
    <TextInput source="roomNumber" label="Search" alwaysOn />
]

export const RoomsList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (<List {...props} filters={brigadeMedicalPersonnelFilters}>
        {isSmall ? (
            <SimpleList
            primaryText={record => record.roomNumber}
        />) : (
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="roomNumber" />
            <EditButton />
        </Datagrid>
        )}
    </List>
)};

export const RoomsEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="roomNumber" />
        </SimpleForm>
    </Edit>
)

export const RoomsCreate = props => {
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        redirect(`/rooms`);
        refresh();
    };

    return (<Create onSuccess={onSuccess} {...props}>
        <SimpleForm>             
            <TextInput source="roomNumber" />   
        </SimpleForm>
    </Create>)
}