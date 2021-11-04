import React from "react";
import Responsive from "react-responsive";


export const Mobile = props => <Responsive {...props} maxWidth={1200} />;
export const Default = props => <Responsive {...props} minWidth={1201} />;