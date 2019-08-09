import React from 'react';
import Responsive from 'react-responsive';

export const Mobile = props => <Responsive {...props} maxWidth={457} />;
export const Tablet = props => <Responsive {...props} minWidth={458} maxWidth={1024} />;
export const Desktop = props => <Responsive {...props} minWidth={1025} />;
export const Default = props => <Responsive {...props} minWidth={458} />;