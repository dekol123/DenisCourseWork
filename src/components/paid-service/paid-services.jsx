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

const registerOfCardsFilters = [
    <TextInput source="name" label="Search by name" alwaysOn />,
]

export const PaidServicesList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (<List filters={registerOfCardsFilters} {...props}>
        {isSmall ? (
            <SimpleList
                primaryText={record => record.name}
                secondaryText={record => `${record.price}`}
            />
        ) : (
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="name" />
            <TextField source="price" />
            <EditButton />
        </Datagrid>
        )}
    </List>
    );
};

export const PaidServicesEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="price" />
        </SimpleForm>
    </Edit>
)

export const PaidServicesCreate = props => {
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        redirect(`/paid-services`);
        refresh();
    };

    return (<Create onSuccess={onSuccess} {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="price" />
        </SimpleForm>
    </Create>)
}