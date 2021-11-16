import React, { useState, useEffect } from "react";
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
    ReferenceInput,
    SelectInput,
    SimpleList,
    useRefresh,
    useRedirect,
} from 'react-admin';

const patientsFilters = [
    <TextInput source="firstName" label="Search" alwaysOn />,
    <ReferenceInput source="id" label="Filter by address" reference="clients" allowEmpty>
        <SelectInput optionText="address" />
    </ReferenceInput>,
]

export const ClientsList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (<List filters={patientsFilters} {...props}>
        {isSmall ? (
            <SimpleList
                primaryText={record => record.firstName}
                secondaryText={record => `${record.lastName}`}
            />
        ) : (
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="firstName" />
            <TextField source="surname" />
            <TextField source="lastName" />
            <TextField source="contacts" />
            <EditButton />
        </Datagrid>
        )}
    </List>
    );
};

export const ClientsEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="firstName" />
            <TextInput source="surname" />
            <TextInput source="lastName" />
            <TextInput source="contacts" />
        </SimpleForm>
    </Edit>
)

export const ClientsCreate = props => {
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        redirect(`/clients`);
        refresh();
    };

    return (<Create onSuccess={onSuccess} {...props}>
        <SimpleForm>
            <TextInput source="firstName" />
            <TextInput source="surname" />
            <TextInput source="lastName" />
            <TextInput source="contacts" />
        </SimpleForm>
    </Create>
)}