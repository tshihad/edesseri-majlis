import React,{useEffect} from 'react';
import {
    Paper,
    Grid,
    Typography,
    MenuItem,
    TextField,
    makeStyles,
    Button
} from '@material-ui/core';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import PhoneInput from 'material-ui-phone-number';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '4% 8% 2% 8%',
        backgroundColor: '#c5d2dd',
        padding: '.2%',
        borderRadius: '10px',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '95%',
    },
    root: {
        padding: theme.spacing(3, 2),
        width: '100%',
        marginTop: '.3%',
    },
    margin: {
        margin: theme.spacing(2.5),
    },
}));

const yesNoValues = [
    {
        value: 'yes',
        label: 'Yes',
    },
    {
        value: 'no',
        label: 'No',
    },
]

const bloodGroup = [
    {
        value: 'aplus',
        label: 'A+',
    },
    {
        value: 'bplus',
        label: 'B+',
    },
    {
        value: 'cplus',
        label: 'AB+',
    },
    {
        value: 'oplus',
        label: 'O+',
    },
    {
        value: 'aminus',
        label: 'A-',
    },
    {
        value: 'bminus',
        label: 'B-',
    },
    {
        value: 'cminus',
        label: 'AB-',
    },
    {
        value: 'bminus',
        label: 'B-',
    },
    {
        value: 'ominus',
        label: 'O-',
    },
];
const institution = [
    {
        value: 'govt',
        label: 'Govt',
    },
    {
        value: 'semi-govt',
        label: 'Semi-Govt',
    },
    {
        value: 'private',
        label: 'Private',
    },
    {
        value: 'self-owned',
        label: 'Self-Owned',
    },
];

const licenceValues = [
    {
        value: "light",
        label: 'Light'
    },
    {
        value: 'heavy',
        label: 'Heavy',
    },
    {
        value: 'motorCycle',
        label: 'Motor-Cycle',
    },
    {
        value: 'others',
        label: 'Others',
    },
]
export default function Form(props) {
    useEffect(() => {
        props.setUser("admin")
    })
    const [bgroup, setGroup] = React.useState('A+');
    const [country, setCountry] = React.useState('IN');
    const [insgroup, setInsGruop] = React.useState('Self-Owned')
    const [licence, setLicence] = React.useState('Other')
    const [yesno, setYesNo] = React.useState('No')
    function handleOnChange(value) {
        setCountry(value);
    };
    function handleInChange(value) {
        setInsGruop(value)
    }
    function handleLicenceChange(value) {
        setLicence(value)
    }
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    function handleYesNo(value) {
        setYesNo(value)
    }
    const handleChange = event => {
        setGroup(event.target.value);
    };
    const classes = useStyles()
    return (
        <form className={classes.container} noValidate autoComplete="off">
            <Paper className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography component="p">
                            Personal Details
                    </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            required
                            id="name"
                            className={classes.textField}
                            label="Name"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            required
                            id="house_name"
                            className={classes.textField}
                            label="House Name"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            required
                            id="father_name"
                            className={classes.textField}
                            label="Father's Name"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <PhoneInput
                            className={classes.textField} defaultCountry={'in'} onChange={handleOnChange}
                            variant="outlined"
                            id="ph_number_1"
                            margin="normal"
                            disableAreaCodes
                            label="Phone number 1"
                            required
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <PhoneInput
                            className={classes.textField} defaultCountry={'in'} onChange={handleOnChange}
                            variant="outlined"
                            id="ph_number_2"
                            margin="normal"
                            disableAreaCodes
                            label="Phone number 2"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <PhoneInput
                            className={classes.textField} defaultCountry={'ae'} onChange={handleOnChange}
                            variant="outlined"
                            id="office_ph_number"
                            margin="normal"
                            disableAreaCodes
                            label="Office Phone number"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <PhoneInput
                            className={classes.textField} defaultCountry={'ae'} onChange={handleOnChange}
                            variant="outlined"
                            id="uae_home_ph_number"
                            margin="normal"
                            disableAreaCodes
                            label="Home Phone number (UAE)"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="email"
                            className={classes.textField}
                            label="Email"
                            margin="normal"
                            variant="outlined"
                            type="email"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="blood_group"
                            select
                            label="Blood Group"
                            className={classes.textField}
                            value={bgroup}
                            onChange={handleChange}
                            SelectProps={{
                                MenuProps: {
                                    className: classes.menu,
                                },
                            }}
                            margin="normal"
                            variant="outlined"
                            style={{ width: '30%' }}
                        >
                            {bloodGroup.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography component="p">
                            Personal Identification
                    </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            required
                            id="passport_number"
                            className={classes.textField}
                            label="Passport Number"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                required
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="dob"
                                label="Date of birth"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>
                </Grid>
            </Paper>

            <Paper className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography component="p">
                            Company Information
                    </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            required
                            id="job"
                            className={classes.textField}
                            label="Job"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            required
                            id="comapny_name"
                            className={classes.textField}
                            label="Company Name"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="company_post_code"
                            className={classes.textField}
                            label="Post Code"
                            type="number"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="comapny_area"
                            className={classes.textField}
                            label="Area"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="comapny_emirates"
                            className={classes.textField}
                            label="Emirates"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            required
                            id="comapny_institution"
                            select
                            label="Institution"
                            className={classes.textField}
                            onChange={handleInChange}
                            SelectProps={{
                                MenuProps: {
                                    className: classes.menu,
                                },
                            }}
                            margin="normal"
                            variant="outlined"
                        >
                            {institution.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography component="p">
                            Educational Details
                    </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            required
                            id="qualification"
                            className={classes.textField}
                            label="Educational Qualification"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            required
                            id="job_qualification"
                            className={classes.textField}
                            label="Job/Tech Qualification"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            required
                            id="uae_licence_type"
                            select
                            label="Licence (UAE)"
                            className={classes.textField}
                            onChange={handleLicenceChange}
                            SelectProps={{
                                MenuProps: {
                                    className: classes.menu,
                                },
                            }}
                            margin="normal"
                            variant="outlined"
                        >
                            {licenceValues.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography component="p">
                            Resedential Details
                    </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            required
                            id="uae_residential"
                            className={classes.textField}
                            label="Residential (UAE)"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="uae_area"
                            className={classes.textField}
                            label="Area"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="uae_building"
                            className={classes.textField}
                            label="Building"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="uae_flatno"
                            className={classes.textField}
                            label="Fat/Room no"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="uae_emirate"
                            className={classes.textField}
                            label="Emirates"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            required
                            id="is_married"
                            select
                            label="Married"
                            className={classes.textField}
                            onChange={handleYesNo}
                            SelectProps={{
                                MenuProps: {
                                    className: classes.menu,
                                },
                            }}
                            margin="normal"
                            variant="outlined"
                        >
                            {yesNoValues.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            required
                            id="is_family_near"
                            select
                            label="Family living with you"
                            className={classes.textField}
                            onChange={handleYesNo}
                            SelectProps={{
                                MenuProps: {
                                    className: classes.menu,
                                },
                            }}
                            margin="normal"
                            variant="outlined"
                        >
                            {yesNoValues.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="no_boys_children"
                            className={classes.textField}
                            label="Number of children (boy)"
                            margin="normal"
                            variant="outlined"
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="no_girls_children"
                            className={classes.textField}
                            label="Number of children (girl)"
                            margin="normal"
                            variant="outlined"
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="uae_relative"
                            className={classes.textField}
                            label="Closest relative in UAE"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <PhoneInput
                            className={classes.textField} defaultCountry={'ae'} onChange={handleOnChange}
                            variant="outlined"
                            id="uae_relative_ph"
                            margin="normal"
                            disableAreaCodes
                            label="Relative's Phone (UAE)"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="uae_relationship"
                            className={classes.textField}
                            label="Relationship"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>

                </Grid>
            </Paper>

            <Paper className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography component="p">
                            Resedential Details (Home)
                    </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            required
                            id="home_addres"
                            className={classes.textField}
                            label="Address (Home)"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            required
                            id="home_place"
                            className={classes.textField}
                            label="Place"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            required
                            id="person_to_contact"
                            className={classes.textField}
                            label="Person to contact"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            required
                            id="person_to_contact_relationship"
                            className={classes.textField}
                            label="Relationship"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <PhoneInput
                            required
                            className={classes.textField} defaultCountry={'in'} onChange={handleOnChange}
                            variant="outlined"
                            id="home_number"
                            margin="normal"
                            disableAreaCodes
                            label="Phone Number (Home)"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            required
                            id="mahal_number"
                            className={classes.textField}
                            label="Mahal Number"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            required
                            id="mahal_number"
                            className={classes.textField}
                            label="Mahal Number"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={8}></Grid>
                    <Grid item xs={8}></Grid>
                    <Grid item xs={4}>
                        <Button
                            id="submit"
                            variant="contained"
                            size="medium"
                            color="primary"
                            className={classes.margin}
                        > Submit</Button>
                    </Grid>
                </Grid>
            </Paper>
        </form>
    );
}