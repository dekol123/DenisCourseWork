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
    <TextInput source="name" label="Search" alwaysOn />,
]

export const ShiftsList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (<List {...props} filters={brigadeMedicalPersonnelFilters}>
        {isSmall ? (
            <SimpleList
            primaryText={record => record.name}
        />) : (
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <ReferenceField source="staffId" reference="staff">
                <TextField source="nickName" />
            </ReferenceField>
            <TextField source="name" />
            <EditButton />
        </Datagrid>
        )}
    </List>
)};

export const ShiftsEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="staffId" reference="staff">
                <SelectInput optionText="nickName" />
            </ReferenceInput>
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
)

export const ShiftsCreate = props => {
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        redirect(`/shifts`);
        refresh();
    }

    return (<Create onSuccess={onSuccess} {...props}>
        <SimpleForm>             
            <ReferenceInput source="staffId" reference="staff">
                <SelectInput optionText="nickName" />
            </ReferenceInput>
            <TextInput source="name" />
        </SimpleForm>
    </Create>)
}