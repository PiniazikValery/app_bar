import React from 'react';
import Responsive from 'react-responsive';

export const Mobile = props => <Responsive {...props} maxWidth={506} />;
export const Tablet = props => <Responsive {...props} minWidth={507} maxWidth={1024} />;
export const Desktop = props => <Responsive {...props} minWidth={1025} />;
export const Default = props => <Responsive {...props} minWidth={507} />;