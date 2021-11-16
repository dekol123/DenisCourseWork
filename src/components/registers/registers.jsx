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
    DateField,
    Create,
    Edit,
    DateInput,
    ReferenceField,
    ReferenceInput,
    SelectInput,
    SimpleList,
    useRefresh,
    useRedirect,
} from 'react-admin';

const registerOfCardsFilters = [
    <TextInput source="name" label="Search by registration name" alwaysOn />,
    <ReferenceInput source="id" label="Filter by registration" reference="register" allowEmpty>
        <SelectInput optionText="registration" />
    </ReferenceInput>,
]

export const RegistersList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (<List filters={registerOfCardsFilters} {...props}>
        {isSmall ? (
            <SimpleList
                primaryText={record => record.name}
                secondaryText={record => `${record.startDate}`}
                tertiaryText={record => record.endDate}
            />
        ) : (
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="name" />
            <DateField source="startDate" />
            <DateField source="endDate" />
            <ReferenceField source="clientId" reference="clients">
                <TextField source="firstName" />
            </ReferenceField>
            <ReferenceField source="roomId" reference="rooms">
                <TextField source="roomNumber" />
            </ReferenceField>
            <EditButton />
        </Datagrid>
        )}
    </List>
    );
};

export const RegistersEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <DateInput source="startDate" />
            <DateInput source="endDate" />
            <ReferenceInput source="clientId" reference="clients">
                <SelectInput source="firstName" />
            </ReferenceInput>
            <ReferenceInput source="roomId" reference="rooms">
                <SelectInput source="roomNumber" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
)

export const RegistersCreate = props => {

    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        redirect(`/registers`);
        refresh();
    };
    return (<Create onSuccess={onSuccess} {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <DateInput source="startDate" />
            <DateInput source="endDate" />
            {/* <ReferenceInput source="clientId" reference="clients">
                <SelectInput source="firstName" />
            </ReferenceInput>
            <ReferenceInput source="roomId" reference="rooms">
                <SelectInput source="roomNumber" />
            </ReferenceInput> */}
        </SimpleForm>
    </Create>)
}