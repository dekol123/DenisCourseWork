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
    ReferenceInput,
    SelectInput,
    SimpleList,
    ReferenceField,
    DateInput,
    useRefresh,
    useRedirect,
} from 'react-admin';

const brigadeMedicalPersonnelFilters = [
    <TextInput source="firstName" label="Search" alwaysOn />,
]

export const SchedulesList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (<List {...props} filters={brigadeMedicalPersonnelFilters}>
        {isSmall ? (
            <SimpleList
            primaryText={record => record.firstName}
            secondaryText={record => `${record.lastName}`}
            tertiaryText={record => record.position}
        />) : (
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="name" />
            <ReferenceField source="shiftsId" reference="shifts">     
                <TextField source="name" />
            </ReferenceField>
            <TextField source="startDate" />
            <TextField source="endDate" />
            <EditButton />
        </Datagrid>
        )}
    </List>
)};

export const SchedulesEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <ReferenceInput source="shiftsId" reference="shifts">     
                <SelectInput optionText="name" />
            </ReferenceInput>
            <DateInput source="startDate" />
            <DateInput source="endDate" />
        </SimpleForm>
    </Edit>
)

export const SchedulesCreate = props => {
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        redirect(`/schedules`);
        refresh();
    };
    
    return (<Create onSuccess={onSuccess} {...props}>
        <SimpleForm>             
            <ReferenceInput source="shiftsId" reference="shifts">     
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="name" />
            <DateInput source="startDate" />
            <DateInput source="endDate" />
        </SimpleForm>
    </Create>)
}