import React from "react";
import Responsive from "react-responsive";


export const Mobile = props => <Responsive {...props} maxWidth={1279} />;
export const Default = props => <Responsive {...props} minWidth={1280} />;