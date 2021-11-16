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
    DateField,
    ReferenceField,
    DateInput,
    useRefresh,
    useRedirect
} from 'react-admin';

const registerOfCardsFilters = [
    <TextInput source="date" label="Search by first name" alwaysOn />,
]

export const RegisterOfCardsList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (<List filters={registerOfCardsFilters} {...props}>
        {isSmall ? (
            <SimpleList
                primaryText={record => record.date}
            />
        ) : (
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <DateField source="date" />
            <ReferenceField source="paidServiceId" reference="paid-services">     
                <TextField source="name" />
            </ReferenceField>
            <EditButton />
        </Datagrid>
        )}
    </List>
    );
};

export const RegisterOfCardsEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <DateInput source="date" />
            <ReferenceInput source="paidServiceId" reference="paid-services">     
                <SelectInput source="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
)

export const RegisterOfCardsCreate = props => {
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        redirect(`/paid-services-logs`);
        refresh();
    };

    return (<Create onSuccess={onSuccess} {...props}>
        <SimpleForm>
            <DateInput source="date" />
            <ReferenceInput source="paidServiceId" reference="paid-services">     
                <SelectInput source="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>)
}