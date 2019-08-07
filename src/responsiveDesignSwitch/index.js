import React from 'react';
import Responsive from 'react-responsive';

export const Mobile = props => <Responsive {...props} maxWidth={414} />;
export const Default = props => <Responsive {...props} minWidth={415} />;