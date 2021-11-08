import React from "react";
import Responsive from "react-responsive";


export const Mobile = props => <Responsive {...props} maxWidth={1100} />;
export const Default = props => <Responsive {...props} minWidth={1201} />;