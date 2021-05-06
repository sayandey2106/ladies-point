import React, { Component } from "react";
import { connect } from "react-redux";
import Dashboard from "../components/dashboard";
import {
    close_snack_bar
} from "../../actions/snackbar/snackbar_action";
import {
    get_all_request,
    delete_request,
    update_request,
    add_request,
} from "../../actions/request/requestActions";
import {
    get_dashboard_data
} from "../../actions/dashboardActions"
export class RequestCont extends Component {
    render() {
        return (
            <Dashboard {...this.props} />
        );
    }
}
export const mapStateToProps = store => {
    return {
        login: store.login,
        loader: store.loader,
        snackbar: store.snackbar,
    };
};
export const mapDispatchToProps = dispatch => {
    return {

        close_snack_bar: () => {
            dispatch(close_snack_bar());
        },
        get_all_request: () => {
            dispatch(get_all_request());
        },
        get_dashboard_data: () => {
            dispatch(get_dashboard_data());
        },
        delete_request: (id) => {
            dispatch(delete_request(id));
        },
        update_request: (id, name, quantity) => {
            dispatch(update_request(id, name, quantity));
        },
        add_request: (name, quantity) => {
            dispatch(add_request(name, quantity));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(RequestCont);
