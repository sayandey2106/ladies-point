import React, {Component} from "react/index.js";
import Grid from "@material-ui/core/Grid";
import CardHeader from "../cards/CardHeader.js";
import CardIcon from "../cards/CardIcon.js";
import Card from "../cards/Card.js";
import withStyles from "@material-ui/core/styles/withStyles";
import Snackbar from "../snackbar/snackbar";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {Avatar, MenuItem,} from "@material-ui/core";
import moment from "moment";
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
} from '@material-ui/pickers';
import Icon from "@material-ui/core/Icon";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import {styles} from "../../styles/style";
import LoaderCon from "../../containers/loader/loader_cont";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import DialogContentText from "@material-ui/core/DialogContentText";

const card = {
    borderRadius: "20px",
    backgroundColor: "#ffffff",
    marginTop: 50
};
const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

class JobcardComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delete: false,
            update: false,
            id: "",
            name: "",
            client_id: "",
            firm_id: "",
            majorhead_id: "",
            minorhead_id: ""
        }
    }

    componentDidMount() {
        this.props.get_all_jobcard(this.props.login.token, this.props.login.organization_id)
    }

    // ed = (s) => {
    //     this.setState({
    //         amenity_desc: s.amenity_desc,
    //         amenity_name: s.amenity_name,
    //         amenity_fullday_price: s.amenity_price_info.Hourly_price,
    //         guest_fullday_price: s.guest_price_info.Hourly_price,
    //         start_time: moment(s.available_timings[0], ["h:mm A"]).format("YYYY-MM-DD HH:mm:ss"),
    //         end_time: moment(s.available_timings[1], ["h:mm A"]).format("YYYY-MM-DD HH:mm:ss"),
    //         amenity_id: s._id,
    //         isfree: s.is_free,
    //         no_of_slots: s.no_of_slots,
    //         imgs: s.amenity_imgs
    //     })
    // }
    // del_single_row = (row) => {
    //     this.setState({
    //         confirm_delete: true,
    //         id: row._id,
    //     })
    // }
    handleClose = () => {
        this.setState({delete: false})
        this.setState({update: false})
    }

    render() {
        const {
            snackbar,
            close_snack_bar,
            jobcard,
            // delete_jobcard,
            update_jobcard,
            login,
            client,
            get_all_client,
            get_all_majorhead,
            get_all_minorhead,
            firm,
            majorhead,
            minorhead
        } = this.props;
        console.log(jobcard.all_jobcard)
        return (
            <Grid container justify="center">
                <Grid item xs={12}>
                    <Card style={card}>
                        <CardHeader color="warning" stats icon>
                            <CardIcon color="rose">
                                <h3>
                                    VIEW JOBCARD
                                </h3>
                            </CardIcon>
                        </CardHeader>
                        <CardContent>
                            <Grid item lg={12}>
                                <Link to="add_jobcard" style={{textDecoration: "none"}}>
                                    <IconButton>
                                        <Icon>add</Icon>
                                    </IconButton>
                                </Link>

                            </Grid>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell align="left">&nbsp;&nbsp;Name</TableCell>
                                        <TableCell align="left">Client ID</TableCell>
                                        <TableCell align="left">Majorhead ID</TableCell>
                                        <TableCell align="left">Minohead ID</TableCell>
                                        <TableCell align="right">Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {jobcard.all_jobcard.map(row =>
                                        <TableRow>
                                            <TableCell></TableCell>
                                            <TableCell align="left">&nbsp;&nbsp;{row.name}</TableCell>
                                            <TableCell align="left">{row.email}</TableCell>
                                            <TableCell align="left">{row.department}</TableCell>
                                            <TableCell align="left">{row.position}</TableCell>
                                            <TableCell align="left">{row.employee_id}</TableCell>
                                            <TableCell align={"right"}>
                                                <IconButton onClick={() => {
                                                    this.setState({
                                                        update: true,
                                                        id:row._id,
                                                        name: row.name,
                                                        email: row.email,
                                                        department: row.department,
                                                        position: row.position,
                                                        employee_id: row.employee_id
                                                    });
                                                    get_all_client(login.token, login.organization_id)
                                                }}>
                                                    <Icon>edit</Icon>
                                                </IconButton>
                                                {/*<IconButton onClick={() => {
                                                    this.setState({delete: true, id: row._id})
                                                }}>
                                                    <Icon>delete</Icon>
                                                </IconButton>*/}
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                                {/*<Dialog open={this.state.delete}
                                        onClose={this.handleClose}
                                        aria-labelledby="form-dialog-title">
                                    <DialogTitle id="form-dialog-title">Delete Jobcard</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            Are you sure?
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button
                                            onClick={() => {
                                                this.handleClose()
                                            }}
                                            color="primary"
                                        >
                                            No
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                this.handleClose();
                                                delete_jobcard(this.state.id, login.token, login.organization_id)
                                            }}
                                            color="primary"
                                        >
                                            Yes
                                        </Button>
                                    </DialogActions>
                                </Dialog>*/}
                                <Dialog open={this.state.update} onClose={() => {
                                    this.handleClose()
                                }} aria-labelledby="form-dialog-title">
                                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            Enter the required fields, those needs to be updated.
                                        </DialogContentText>

                                        <TextField
                                            // autoFocus
                                            margin="dense"
                                            // id="name"
                                            label="Name"
                                            type="text"
                                            fullWidth
                                            onChange={(event) => {
                                                this.setState({name: event.target.value})
                                            }}
                                            value={this.state.name}
                                        />
                                        <TextField
                                            // autoFocus
                                            margin="dense"
                                            // id="name"
                                            select
                                            label="Client ID"
                                            type="text"
                                            fullWidth
                                            onChange={(event) => {
                                                this.setState({client_id: event.target.value})
                                            }}
                                            value={this.state.client_id}
                                            InputLabelProps={{classes:{root:this.props.classes.textfieldLabel}}}
                                        >
                                            {client.all_client.map(row1=>(
                                                <MenuItem value={row1._id} key={row1.client_id}>
                                                    {row1.name}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                        {/*<TextField
                                            // autoFocus
                                            margin="dense"
                                            // id="name"
                                            select
                                            label="Firm ID"
                                            type="text"
                                            fullWidth
                                            onChange={(event) => {
                                                this.setState({firm_id: event.target.value})
                                            }}
                                            value={this.state.firm_id}
                                            InputLabelProps={{classes:{root:this.props.classes.textfieldLabel}}}
                                        >
                                            {firm.all_firm.map(row1=>(
                                                <MenuItem value={row1.firm_id} key={row1.firm_id}>
                                                    {row1.firm_name}
                                                </MenuItem>
                                            ))}
                                        </TextField>*/}
                                        <TextField
                                            // autoFocus
                                            margin="dense"
                                            // id="name"
                                            select
                                            label="Majorhead ID"
                                            type="text"
                                            fullWidth
                                            onChange={(event) => {
                                                this.setState({majorhead_id: event.target.value})
                                            }}
                                            value={this.state.majorhead_id}
                                            InputLabelProps={{classes:{root:this.props.classes.textfieldLabel}}}
                                        >
                                            {majorhead.all_majorhead.map(row1=>(
                                                <MenuItem value={row1._id} key={row1.majorhead_id}>
                                                    {row1.majorhead_name}
                                                </MenuItem>
                                            ))}
                                        </TextField>

                                        <TextField
                                            // autoFocus
                                            margin="dense"
                                            // id="name"
                                            select
                                            label="Minorhead ID"
                                            type="text"
                                            fullWidth
                                            onChange={(event) => {
                                                this.setState({minorhead_id: event.target.value})
                                            }}
                                            value={this.state.minorhead_id}
                                            InputLabelProps={{classes:{root:this.props.classes.textfieldLabel}}}
                                        >
                                            {minorhead.all_minorhead.map(row1=>(
                                                <MenuItem value={row1._id} key={row1.minorhead_id}>
                                                    {row1.minorhead_name}
                                                </MenuItem>
                                            ))}
                                        </TextField>

                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={() => this.handleClose()} color="primary">
                                            Cancel
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                this.handleClose();
                                                update_jobcard(this.state.id, this.state.client_id, this.state.firm_id, this.state.majorhead_id, this.state.minorhead_id, this.state.name, login.token, login.organization_id)
                                            }}
                                            color="primary"
                                        >
                                            Update
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </Table>
                        </CardContent>
                    </Card>
                    <LoaderCon/>
                    <Snackbar
                        open={snackbar.response_received}
                        close_snack_bar={close_snack_bar}
                        message={snackbar.message}
                    />
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(JobcardComponents);