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
    useRefresh,
    useRedirect,
} from 'react-admin';

const brigadeMedicalPersonnelFilters = [
    <TextInput source="position" label="Search" alwaysOn />,
    <ReferenceInput source="staffId" label="Staff medical personnel" reference="staff-medical-personnel" allowEmpty>
        <SelectInput optionText="position" />
    </ReferenceInput>,
]

export const MeidcalStaffList = props => {
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
            <ReferenceField source="staffId" reference="staff">
                <TextField source="nickName" />
            </ReferenceField>
            <TextField source="firstName" />
            <TextField source="surname" />
            <TextField source="lastName" />
            <TextField source="position" />
            <EditButton />
        </Datagrid>
        )}
    </List>
)};

export const MeidcalStaffEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="staffId" reference="staff">
                <SelectInput optionText="nickName" />
            </ReferenceInput>
            <TextInput source="firstName" />
            <TextInput source="surname" />
            <TextInput source="lastName" />
            <TextInput source="position" />
        </SimpleForm>
    </Edit>
)

export const MeidcalStaffCreate = props => {
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        redirect(`/staff-medical-personnel`);
        refresh();
    };

    return (<Create onSuccess={onSuccess} {...props}>
        <SimpleForm>             
            <TextInput source="firstName" />
            <TextInput source="surname" />
            <TextInput source="lastName" />
            <TextInput source="position" />
            <ReferenceInput source="staffId" reference="staff">
                <SelectInput optionText="nickName" />
            </ReferenceInput>   
        </SimpleForm>
    </Create>)
}