import React from 'react';
import { Filter, AutorInput, MyFormControlLabel, CenterdCheckBoxesHolder, Typography } from './FilterComponentStyledComponents'
import { FilterSelect } from '../filterSelect'
import { Checkbox } from '@material-ui/core';

function FilterComponent() {
    return (
        <Filter>
            <MyFormControlLabel
                control={
                    <Checkbox
                        value="checkedB"
                        color="primary"
                    />
                }
                label="мои"
            />
            <AutorInput placeholder="Автор" />
            <Typography variant="caption" display="block" gutterBottom>
                Сортировать по:
            <FilterSelect /></Typography>
            <CenterdCheckBoxesHolder>
                <MyFormControlLabel
                    size={0.55}
                    control={
                        <Checkbox
                            value="checkedB"
                            color="primary"
                        />
                    }
                    label="я участник"
                />
                <MyFormControlLabel
                    size={0.55}
                    control={
                        <Checkbox
                            value="checkedB"
                            color="primary"
                        />
                    }
                    label="в заголовке"
                />
                <MyFormControlLabel
                    size={0.55}
                    control={
                        <Checkbox
                            value="checkedB"
                            color="primary"
                        />
                    }
                    label="строгий поиск"
                />
            </CenterdCheckBoxesHolder>
        </Filter>
    );
}

export default FilterComponent;